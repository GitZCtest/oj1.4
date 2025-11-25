
import React, { useState } from 'react';
import { Problem } from '../types';

interface ProblemDisplayProps {
  problem: Problem;
}

const DifficultyBadge: React.FC<{ difficulty: string }> = ({ difficulty }) => {
  const colorClasses = {
    '简单': 'bg-green-500 text-green-100',
    '中等': 'bg-yellow-500 text-yellow-100',
    '困难': 'bg-red-500 text-red-100',
  };
  return (
    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${colorClasses[difficulty] || 'bg-gray-500 text-gray-100'}`}>
      {difficulty}
    </span>
  );
};

// Component for Copyable Code Block
const CopyablePre: React.FC<{ content: string }> = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative group mt-2">
      <button 
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1.5 rounded-md bg-gray-700 text-gray-400 hover:text-white hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-200"
        title="复制"
      >
        {copied ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </button>
      <pre className="bg-gray-900 rounded-md p-4 whitespace-pre-wrap font-mono custom-scrollbar overflow-x-auto text-gray-300">
        {content}
      </pre>
    </div>
  );
};

const ProblemDisplay: React.FC<ProblemDisplayProps> = ({ problem }) => {
  const timeLimit = problem.timeLimit || '1000ms';
  const memoryLimit = problem.memoryLimit || '256MB';

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-full overflow-y-auto overscroll-y-contain custom-scrollbar">
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-3xl font-bold text-teal-300">{problem.title}</h2>
        <DifficultyBadge difficulty={problem.difficulty} />
      </div>
      
      {/* Meta Info: Time/Memory Limits & Tags */}
      <div className="flex flex-col space-y-3 mb-6">
         <div className="flex items-center space-x-6 text-sm text-gray-400 font-mono bg-gray-900/50 p-2 rounded border border-gray-700/50 w-fit">
            <div className="flex items-center" title="时间限制">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{timeLimit}</span>
            </div>
            <div className="w-px h-3 bg-gray-700"></div>
            <div className="flex items-center" title="内存限制">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              <span>{memoryLimit}</span>
            </div>
         </div>

        {problem.tags && problem.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {problem.tags.map((tag, index) => (
                <span key={index} className="bg-gray-700 text-teal-200 text-xs font-medium px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
        )}
      </div>

      <div className="prose prose-invert prose-sm md:prose-base max-w-none text-gray-300">
        <p className="mb-6">{problem.description}</p>
        
        <h3 className="font-semibold text-teal-400">输入格式</h3>
        <p>{problem.inputFormat}</p>
        
        <h3 className="font-semibold text-teal-400">输出格式</h3>
        <p>{problem.outputFormat}</p>
        
        {problem.examples.map((example, index) => (
          <div key={index} className="mt-4">
            <h4 className="font-semibold text-gray-200">示例 {index + 1}</h4>
            <div className="bg-gray-900/50 rounded-md p-4 mt-2 border border-gray-700/50">
              <div className="font-monospace">
                <strong className="text-gray-400 select-none">输入:</strong>
                <CopyablePre content={example.input} />
              </div>
              <div className="font-monospace mt-4">
                <strong className="text-gray-400 select-none">输出:</strong>
                <CopyablePre content={example.output} />
              </div>
              {example.explanation && (
                <p className="mt-3 text-sm text-gray-400 italic border-l-2 border-gray-600 pl-3">
                  {example.explanation}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemDisplay;
