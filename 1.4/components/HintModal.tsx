
import React from 'react';

interface HintModalProps {
  isOpen: boolean;
  onClose: () => void;
  hintCode: string;
}

const HintModal: React.FC<HintModalProps> = ({ isOpen, onClose, hintCode }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl m-4 border border-gray-700 transform transition-all"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h3 className="text-xl font-bold text-teal-300">代码提示</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white" aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4 max-h-[60vh] overflow-y-auto">
          <pre className="bg-gray-900 text-gray-200 p-4 rounded-md text-sm whitespace-pre-wrap font-mono">
            <code>{hintCode}</code>
          </pre>
        </div>
        <div className="p-4 border-t border-gray-700 text-right">
          <button 
            onClick={onClose}
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  );
};

export default HintModal;
