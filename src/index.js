import React from 'react';
import ReactDOM from 'react-dom';
import Normalize from 'react-normalize';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);