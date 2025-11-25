
import React, { useState, useEffect } from 'react';
import { JudgeResult, JudgeStatus, JudgeVerdict, Submission } from '../types';

interface ResultPanelProps {
  status: JudgeStatus;
  result: JudgeResult | null;
  history: Submission[];
}

const EvaluationProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('准备 Python 环境...');

  useEffect(() => {
    // 本地评测通常较快，我们稍微缩短时间线，但保留一些视觉延迟让用户感觉到"正在工作"
    const timeline = [
      { time: 50, p: 10, t: '加载代码...' },
      { time: 200, p: 30, t: '解析 Python 语法...' },
      { time: 400, p: 60, t: '执行测试用例...' },
      { time: 600, p: 80, t: '比对标准输出...' },
      { time: 800, p: 90, t: '生成报告...' },
    ];

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    timeline.forEach(({ time, p, t }) => {
      const timeout = setTimeout(() => {
        setProgress(p);
        setStatusText(t);
      }, time);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="w-full max-w-md mx-auto p-6 flex flex-col items-center justify-center space-y-4">
      <div className="w-full flex justify-between text-xs text-teal-300 font-mono mb-1">
        <span>LOCAL_JUDGE_STATUS</span>
        <span>{progress}%</span>
      </div>
      
      {/* 进度条轨道 */}
      <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden shadow-inner border border-gray-600">
        {/* 进度条本身 */}
        <div 
          className="h-full bg-gradient-to-r from-teal-600 to-teal-400 rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(45,212,191,0.5)]"
          style={{ width: `${progress}%` }}
        >
          <div className="w-full h-full bg-white opacity-20 animate-pulse"></div>
        </div>
      </div>

      {/* 状态文字 */}
      <div className="h-6 flex items-center">
         <span className="text-gray-300 text-sm font-medium animate-pulse transition-all duration-300">
           {statusText}
         </span>
      </div>
    </div>
  );
};

const ResultDisplay: React.FC<{ result: JudgeResult }> = ({ result }) => {
  const verdictConfig: Record<JudgeVerdict, { color: string; text: string }> = {
    'Accepted': { color: 'text-green-400', text: '通过 (Accepted)' },
    'Wrong Answer': { color: 'text-red-400', text: '答案错误 (Wrong Answer)' },
    'Runtime Error': { color: 'text-yellow-400', text: '运行错误 (Runtime Error)' },
    'Time Limit Exceeded': { color: 'text-purple-400', text: '超时 (Time Limit Exceeded)' },
    'Presentation Error': { color: 'text-orange-400', text: '格式错误 (Presentation Error)' },
    'Compile Error': { color: 'text-blue-400', text: '编译错误 (Compile Error)' },
    'Memory Limit Exceeded': { color: 'text-purple-500', text: '内存超限 (MLE)' }
  };

  const config = verdictConfig[result.status] || { color: 'text-gray-400', text: result.status };

  return (
    <div className="animate-fade-in-up w-full">
      <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">评测结果</h3>
      <div className="space-y-4">
        <div className="flex items-center">
          <span className="font-semibold text-gray-400 w-16">状态: </span>
          <span className={`font-bold text-lg ${config.color} drop-shadow-sm`}>{config.text}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-400 block mb-1">信息: </span>
          <div className="bg-gray-700/50 p-3 rounded-lg border-l-4 border-gray-600">
             <p className="text-gray-200 whitespace-pre-wrap leading-relaxed">{result.explanation}</p>
          </div>
        </div>
        {result.output && (
          <div>
            <span className="font-semibold text-gray-400 block mb-1">实际输出 / 错误信息: </span>
            <pre className="bg-gray-900 text-gray-300 p-4 rounded-md text-sm whitespace-pre-wrap font-mono border border-gray-700 shadow-inner max-h-60 overflow-y-auto custom-scrollbar">
              {result.output || '(无输出)'}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

const ResultPanel: React.FC<ResultPanelProps> = ({ status, result, history }) => {
  const [selectedSubmissionId, setSelectedSubmissionId] = useState<string>('latest');
  const [viewedResult, setViewedResult] = useState<JudgeResult | null>(null);
  const [showPanel, setShowPanel] = useState(false);

  // 当新的评测结果出来或状态变为 idle 时，重置显示为最新
  useEffect(() => {
    if (status === 'judging' || status === 'idle') {
      setSelectedSubmissionId('latest');
      setViewedResult(null);
    } else if (result) {
      setSelectedSubmissionId('latest');
      setViewedResult(result);
    }
  }, [status, result]);

  const handleHistoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setSelectedSubmissionId(id);
    if (id === 'latest') {
      setViewedResult(result);
    } else {
      const historicSubmission = history.find(sub => sub.id === id);
      if (historicSubmission) {
        setViewedResult(historicSubmission.result);
      }
    }
  };

  useEffect(() => {
      setShowPanel(false);
      const timer = setTimeout(() => setShowPanel(true), 50);
      return () => clearTimeout(timer);
  }, [status, viewedResult]);

  const renderContent = () => {
    if (status === 'idle') {
      return (
        <div className="text-center text-gray-500">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
           </svg>
           <p>提交代码后，本地 Python 引擎将即时评测。</p>
        </div>
      );
    }
    
    if (status === 'judging') {
      return <EvaluationProgress />;
    }

    if (viewedResult) {
      return (
        <div className="w-full">
          {history.length > 0 && (
            <div className="mb-6 flex items-center justify-end">
              <label htmlFor="history-select" className="text-sm font-medium text-gray-400 mr-2">
                历史提交:
              </label>
              <div className="relative">
                <select
                  id="history-select"
                  value={selectedSubmissionId}
                  onChange={handleHistoryChange}
                  className="appearance-none bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2 pr-8 cursor-pointer"
                >
                  <option value="latest">最新评测 ({result?.status})</option>
                  {history.map(submission => (
                    <option key={submission.id} value={submission.id}>
                      {new Date(submission.timestamp).toLocaleTimeString()} - {submission.result.status}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
          )}
          <ResultDisplay result={viewedResult} />
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 h-full overflow-y-auto custom-scrollbar overscroll-y-contain transition-opacity duration-300 ease-in-out ${showPanel ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center justify-center min-h-[50%]">
          {renderContent()}
        </div>
    </div>
  );
};

export default ResultPanel;
