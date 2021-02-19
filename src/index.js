import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './navigation';
import App from './app';
import ErrorBoundary from './ErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
    <App>
      <ErrorBoundary>
        <Navigation />
      </ErrorBoundary>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);