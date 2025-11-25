
import React, { useState, useCallback, useEffect } from 'react';
import { Problem, JudgeResult, JudgeStatus, Submission } from './types';
import { PROBLEMS } from './constants';
import ProblemList from './components/ProblemList';
import ProblemDisplay from './components/ProblemDisplay';
import CodeEditor from './components/CodeEditor';
import ResultPanel from './components/ResultPanel';
import HintModal from './components/HintModal';
import { judgeCode, initializePyodide } from './services/pyodideService';

const App: React.FC = () => {
  const [selectedProblem, setSelectedProblem] = useState<Problem>(PROBLEMS[0]);
  const [isHintModalOpen, setIsHintModalOpen] = useState(false);
  const [userCode, setUserCode] = useState<string>('');
  const [judgeStatus, setJudgeStatus] = useState<JudgeStatus>('idle');
  const [judgeResult, setJudgeResult] = useState<JudgeResult | null>(null);
  const [isProblemListCollapsed, setIsProblemListCollapsed] = useState(false);
  
  // 提交历史记录 State: Map<ProblemID, Submission[]>
  const [submissionHistory, setSubmissionHistory] = useState<Record<number, Submission[]>>({});
  const [solvedProblemIds, setSolvedProblemIds] = useState<Set<number>>(new Set());
  
  // Python 引擎初始化状态
  const [isEngineReady, setIsEngineReady] = useState(false);
  const [engineLoadingText, setEngineLoadingText] = useState('正在下载 Python 引擎 (Pyodide)...');

  // 初始化 Pyodide
  useEffect(() => {
    const init = async () => {
      try {
        setEngineLoadingText('正在启动 Python 虚拟机...');
        await initializePyodide();
        setEngineLoadingText('Python 环境准备就绪！');
        // 短暂延迟后移除遮罩
        setTimeout(() => setIsEngineReady(true), 500);
      } catch (error) {
        setEngineLoadingText('Python 引擎加载失败，请刷新页面重试。');
        console.error("Pyodide init failed", error);
      }
    };
    init();
  }, []);

  // 加载已解决的题目记录
  useEffect(() => {
    try {
      const savedSolved = localStorage.getItem('oj_solved_problems');
      if (savedSolved) {
        const ids = JSON.parse(savedSolved);
        if (Array.isArray(ids)) {
          setSolvedProblemIds(new Set(ids));
        }
      }
    } catch (e) {
      console.error('Failed to load solved problems', e);
    }
  }, []);

  const handleProblemChange = useCallback((problemId: number) => {
    const newProblem = PROBLEMS.find(p => p.id === problemId);
    if (newProblem) {
      setSelectedProblem(newProblem);
      setUserCode(''); // Always start with a blank editor for a new problem
      setJudgeResult(null);
      setJudgeStatus('idle');
    }
  }, []);

  const toggleProblemList = useCallback(() => {
    setIsProblemListCollapsed(prev => !prev);
  }, []);

  const handleShowHints = () => setIsHintModalOpen(true);
  const handleCloseHints = () => setIsHintModalOpen(false);

  const handleSubmit = async () => {
    if (!userCode.trim()) {
      alert('代码不能为空！');
      return;
    }
    if (!isEngineReady) {
      alert('Python 引擎尚未加载完成，请稍候...');
      return;
    }

    setJudgeStatus('judging');
    setJudgeResult(null);
    
    try {
      // 使用本地 Pyodide 服务进行评测
      const result = await judgeCode(selectedProblem, userCode);
      
      setJudgeResult(result);
      setJudgeStatus('finished');
      
      // 创建新的提交记录
      const newSubmission: Submission = {
        id: Date.now().toString(),
        code: userCode,
        result: result,
        timestamp: new Date(),
      };

      // 更新历史记录，每个题目只保留最近 10 条
      setSubmissionHistory(prev => {
        const currentHistory = prev[selectedProblem.id] || [];
        const newHistory = [newSubmission, ...currentHistory].slice(0, 10);
        return {
          ...prev,
          [selectedProblem.id]: newHistory
        };
      });

      // 如果通过，更新已解决列表
      if (result.status === 'Accepted') {
        setSolvedProblemIds(prev => {
          const newSet = new Set(prev);
          newSet.add(selectedProblem.id);
          localStorage.setItem('oj_solved_problems', JSON.stringify(Array.from(newSet)));
          return newSet;
        });
      }

    } catch (error) {
      console.error('Judging error:', error);
      const errorMessage = error instanceof Error ? error.message : '发生未知错误';
      
      const errorResult: JudgeResult = {
        status: 'Runtime Error',
        explanation: `系统错误: ${errorMessage}`,
        output: ''
      };
      
      setJudgeResult(errorResult);
      setJudgeStatus('error');
    }
  };

  // 全屏加载遮罩
  if (!isEngineReady) {
    return (
      <div className="h-screen w-screen bg-gray-900 flex flex-col items-center justify-center text-white z-50">
        <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <h1 className="text-2xl font-bold text-teal-400 mb-2">OJ 初始化中</h1>
        <p className="text-gray-400">{engineLoadingText}</p>
        <p className="text-xs text-gray-600 mt-4">初次加载可能需要下载约 10MB 数据</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans overflow-hidden">
      <header className="bg-gray-800/70 backdrop-blur-sm shadow-md flex-none sticky top-0 z-20">
        <nav className="container mx-auto px-6 py-3 flex justify-center items-center">
          <h1 className="text-2xl font-bold text-teal-400">
            OJ <span className="text-xs text-gray-500 ml-2 font-normal border border-gray-600 rounded px-1">Local Mode</span>
          </h1>
        </nav>
      </header>

      <main className="flex-grow container mx-auto p-4 lg:p-6 overflow-hidden flex flex-col h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
          {/* Problem List Column */}
          <div className={`h-full min-h-0 transition-all duration-500 ease-in-out flex flex-col ${isProblemListCollapsed ? 'lg:col-span-1' : 'lg:col-span-3'}`}>
            <ProblemList
              problems={PROBLEMS}
              selectedProblemId={selectedProblem.id}
              onSelect={handleProblemChange}
              isCollapsed={isProblemListCollapsed}
              onToggle={toggleProblemList}
              solvedProblemIds={solvedProblemIds}
            />
          </div>

          {/* Problem Display Column */}
          <div className={`h-full min-h-0 transition-all duration-500 ease-in-out overflow-hidden ${isProblemListCollapsed ? 'lg:col-span-5' : 'lg:col-span-4'}`}>
            <ProblemDisplay problem={selectedProblem} />
          </div>

          {/* Right Column: Editor, Button, Result */}
          <div className={`flex flex-col h-full min-h-0 transition-all duration-500 ease-in-out ${isProblemListCollapsed ? 'lg:col-span-6' : 'lg:col-span-5'}`}>
            <div className="flex-grow min-h-0 flex flex-col">
              <CodeEditor 
                value={userCode} 
                onChange={setUserCode} 
                onShowHints={handleShowHints}
              />
            </div>
            <div className="flex-shrink-0 py-2">
              <button
                onClick={handleSubmit}
                disabled={judgeStatus === 'judging'}
                className="w-full bg-teal-500 hover:bg-teal-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 shadow-lg text-sm"
              >
                {judgeStatus === 'judging' ? '本地执行中...' : '运行并提交'}
              </button>
            </div>
            <div className="flex-grow min-h-0 relative">
               <ResultPanel 
                 status={judgeStatus} 
                 result={judgeResult}
                 history={submissionHistory[selectedProblem.id] || []}
               />
            </div>
          </div>
        </div>
      </main>
      <HintModal 
        isOpen={isHintModalOpen}
        onClose={handleCloseHints}
        hintCode={selectedProblem.starterCode}
      />
    </div>
  );
};

export default App;
