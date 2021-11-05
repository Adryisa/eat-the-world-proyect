import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApiContextProvider } from 'contexts/ApiContext';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

ReactDOM.render(
  /*  <React.StrictMode> */
  <Router>
    <Auth0Provider
      domain="dev-h4a2vu3r.us.auth0.com"
      clientId="tjghdmpd1RWDfx8EOTJfKbBWN3AbPzmu"
      redirectUri={window.location.origin}
    >
      <ApiContextProvider>
        <App />
      </ApiContextProvider>
    </Auth0Provider>
  </Router>,
  /* </React.StrictMode>, */
  document.getElementById('root')
);
