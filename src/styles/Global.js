import { createGlobalStyle } from 'styled-components'
import { reboot } from 'styled-reboot'
import Theme from './Theme'

const GlobalStyle = createGlobalStyle`

  ${reboot}

  html,
  body,
  #___gatsby {
    height: 100%;
    width: 100%;
    position: absolute;
    overflow: hidden;
  }

  [data-scrollbar] {
    height: 100%;
  }

  ::selection {
    background-color: #222;
    color: #fff;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeSpeed;
    overflow: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${Theme.fonts.headings};
  }

  /* type */
  h1, .h1 {
    font-size: ${Theme.fontSizes[6]}px;
    font-weight: 300;
  }

  h2, .h2 {
    font-size: ${Theme.fontSizes[5]}px;
    font-weight: 300;
  }

  h3, .h3 {
    font-size: ${Theme.fontSizes[4]}px;
    font-weight: 300;
  }

  h4, .h4 {
    font-size: ${Theme.fontSizes[3]}px;
    font-weight: 300;
  }

  h5, .h5 {
    font-size: ${Theme.fontSizes[2]}px;
    font-weight: 300;
  }

  h6, .h6 {
    font-size: ${Theme.fontSizes[1]}px;
    font-weight: 300;
  }

  p {
    font-size: ${Theme.fontSizes[0]}px;
    font-weight: 300;
    a {
      color: ${Theme.colors.black};
      text-decoration: underline;
    }
    @media (min-width: ${Theme.breakpoints[0]}) {
      & {
        font-size: ${Theme.fontSizes[1]}px; /* fallback for browsers that do not support calc */
        font-size: calc(.4vw + ${Theme.fontSizes[0]}px);
      }
    }
    @media (min-width: ${Theme.breakpoints[1]}) {
      & {
        font-size: ${Theme.fontSizes[1]}px; /* fallback for browsers that do not support calc */
        font-size: calc(.2vw + ${Theme.fontSizes[0]}px);
      }
    }

  }

  blockquote {
    p {
      font-size: ${Theme.fontSizes[4]}px;
    }
  }

  a {
    color: ${Theme.colors.gray};
    transition: all 0.2s;
    &:hover {
      color: ${Theme.colors.black};
    }
  }

`

export default GlobalStyle
