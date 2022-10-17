import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
        outline: 0;
    }

  body {
    background: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-200']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
  }

  @media screen and (max-width: 768px) {
    html {
      font-size: 0.875rem;
    }
  }

  @media screen and (max-width: 425px) {
    html {
      font-size: 0.75rem;
    }
  }
`
