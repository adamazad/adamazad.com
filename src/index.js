import React from 'react';
import ReactDOM from 'react-dom';
import Scrollbar from 'react-smooth-scrollbar';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './app/App';
import GlobalStyle from './app/styles/Global';
import Theme from './app/styles/Theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Scrollbar>
        <Router>
          <App />
        </Router>
      </Scrollbar>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);