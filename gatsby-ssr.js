/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './src/styles/Theme';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={ Theme }>{element}</ThemeProvider>
);