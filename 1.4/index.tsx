import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Ignore ResizeObserver loop errors
// These are often benign and caused by the interaction between Monaco Editor's 
// automatic layout and CSS transitions.
window.addEventListener('error', (e) => {
  // Catch "ResizeObserver loop completed with undelivered notifications" 
  // and "ResizeObserver loop limit exceeded"
  if (typeof e.message === 'string' && 
     (e.message.includes('ResizeObserver loop') || e.message.includes('undelivered notifications'))) {
    e.stopImmediatePropagation();
    // Use e.preventDefault() to stop it from being reported to the console in some browsers
    e.preventDefault(); 
  }
});

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);