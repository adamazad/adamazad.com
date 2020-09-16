/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import Scrollbar from 'react-smooth-scrollbar';
import { ThemeProvider } from 'styled-components';

import Theme from './src/styles/Theme';
import GlobalStyle from './src/styles/Global';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={ Theme }>
    <GlobalStyle />
    <Scrollbar>
      { element }
    </Scrollbar>
  </ThemeProvider>
)