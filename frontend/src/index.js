import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css'; // Optional, you may add this for global styles
// import reportWebVitals from './reportWebVitals';  // Remove or comment out this line if not needed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you don't want web vitals, remove this block
// reportWebVitals();
