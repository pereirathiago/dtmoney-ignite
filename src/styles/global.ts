import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #E52E40;
    --blue: #5429CC;
    
    --blue-light: #6933ff;
    
    --text-title: #363f5f;
    --text-body: #969CB3;
    
    --background: #f8f2f5;
    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }

  // font-size: 16px (Desktop)
  html {
    @media(max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media(max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  // REM = 1rem = font-size

  body {
    background: var()(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`