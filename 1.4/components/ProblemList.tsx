
import React, { useRef, useEffect, useMemo, useState } from 'react';
import { Problem, ProblemCategory } from '../types';

interface ProblemListProps {
  problems: Problem[];
  selectedProblemId: number;
  onSelect: (problemId: number) => void;
  isCollapsed: boolean;
  onToggle: () => void;
  solvedProblemIds: Set<number>;
}

const DifficultyBadge: React.FC<{ difficulty: string }> = ({ difficulty }) => {
    const baseClasses = 'px-2 py-0.5 text-xs font-semibold rounded-full ';
    const colorClasses = {
      '简单': 'bg-green-200 text-green-800',
      '中等': 'bg-yellow-200 text-yellow-800',
      '困难': 'bg-red-200 text-red-800',
    };
  
    return (
      <span className={`${baseClasses} ${colorClasses[difficulty] || 'bg-gray-200 text-gray-800'}`}>
        {difficulty}
      </span>
    );
};

const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-0' : '-rotate-90'}`} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);


const ProblemList: React.FC<ProblemListProps> = ({ problems, selectedProblemId, onSelect, isCollapsed, onToggle, solvedProblemIds }) => {
  const itemRefs = useRef<Map<number, HTMLLIElement | null>>(new Map());
  const listContainerRef = useRef<HTMLDivElement>(null);
  
  const groupedProblems = useMemo(() => {
    const categoryOrder: ProblemCategory[] = ['Python 基础', '算法与数据结构', 'NumPy', 'Pandas'];
    const groups: Record<ProblemCategory, Problem[]> = {
      'Python 基础': [],
      '算法与数据结构': [],
      'NumPy': [],
      'Pandas': [],
    };

    for (const problem of problems) {
      if (groups[problem.category]) {
        groups[problem.category].push(problem);
      }
    }
    
    return categoryOrder.map(category => ({
      name: category,
      problems: groups[category],
    })).filter(group => group.problems.length > 0);
  }, [problems]);

  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(() => {
    const problem = problems.find(p => p.id === selectedProblemId);
    const initialCategory = problem ? problem.category : groupedProblems[0]?.name;
    return initialCategory ? { [initialCategory]: true } : {};
  });

  // Effect to automatically open the category of the selected problem.
  useEffect(() => {
    const problem = problems.find(p => p.id === selectedProblemId);
    if (problem) {
      setOpenCategories(prev => {
        if (prev[problem.category]) {
          return prev;
        }
        return { ...prev, [problem.category]: true };
      });
    }
  }, [selectedProblemId, problems]);
  
  // NOTE: Automatic scrolling logic removed to prevent jumpiness, as requested.

  const toggleCategory = (categoryName: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg h-full flex flex-col overflow-hidden">
      <div className="bg-gray-900 p-3 flex-shrink-0 flex items-center justify-between rounded-t-lg">
        {!isCollapsed && (
          <h3 className="text-lg font-bold text-white tracking-wider">题目列表</h3>
        )}
        <button
          onClick={onToggle}
          title={isCollapsed ? '展开题目列表' : '收起题目列表'}
          className={`text-gray-300 hover:text-white p-1 rounded-md transition-transform duration-300 ${isCollapsed ? 'mx-auto rotate-180' : ''}`}
        >
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
      </div>
      {!isCollapsed && (
        <div 
          ref={listContainerRef}
          className="overflow-y-auto flex-grow p-2 space-y-2 overscroll-y-contain custom-scrollbar"
        >
          {groupedProblems.map(({ name, problems: problemGroup }) => (
            <div key={name}>
              <button onClick={() => toggleCategory(name)} className="w-full flex justify-between items-center p-3 rounded-md bg-gray-700/50 hover:bg-gray-700 text-gray-200 font-bold transition-colors">
                <span>{name} ({problemGroup.length})</span>
                <ChevronIcon isOpen={!!openCategories[name]} />
              </button>
              {openCategories[name] && (
                <ul className="space-y-1 mt-1 pl-3 border-l-2 border-gray-600/70">
                  {problemGroup.map(problem => {
                    const isSelected = selectedProblemId === problem.id;
                    const isSolved = solvedProblemIds.has(problem.id);
                    return (
                      <li key={problem.id} ref={el => { itemRefs.current.set(problem.id, el); }}>
                        <button
                          onClick={() => onSelect(problem.id)}
                          className={`w-full text-left p-3 rounded-md transition-colors duration-200 flex justify-between items-center ${
                            isSelected
                              ? 'bg-teal-600 text-white shadow-md'
                              : 'hover:bg-gray-700/80 text-gray-300'
                          }`}
                          aria-current={isSelected ? 'page' : undefined}
                        >
                          <div className="flex items-center flex-grow pr-2 truncate">
                            <span className="font-medium mr-2">{problem.id}. {problem.title}</span>
                          </div>
                          <div className="flex items-center space-x-2 flex-shrink-0">
                             {isSolved && (
                                <span className="bg-green-900/60 text-green-400 text-[10px] font-bold px-1.5 py-0.5 rounded border border-green-700/50 tracking-wider">
                                  AC
                                </span>
                             )}
                            <DifficultyBadge difficulty={problem.difficulty} />
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProblemList;
