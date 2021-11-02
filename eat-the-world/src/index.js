import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApiContextProvider } from 'contexts/ApiContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApiContextProvider>
        <App />
      </ApiContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
