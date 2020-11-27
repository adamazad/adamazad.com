import { ThemeProvider } from 'styled-components'
import Scrollbar from 'react-smooth-scrollbar'
import React from 'react'

import GlobalStyle from './src/styles/Global'
import Theme from './src/styles/Theme'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Scrollbar alwaysShowTracks>{element}</Scrollbar>
  </ThemeProvider>
)
