import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --background: #f8f8f8;
    --box-background: #f4f0ff;

    --gray-dark: #737380;
    --gray-medium: #a8a8b3;
    --gray-light: #cecece;

    --pink-dark: #e559f9;
    --pink-medium: #ff59f8;
    --pink-light: #d67ee2;

    --black: #29292e;
    --white: #fefefe;
    --purple: #6f4bd8;
    --red: #d73754;
    --blue: #485bff;
  }

  .dark-mode:root {
    --background: #121212;
    --box-background: #1a1330;

    --purple: #482b9e;  
    --white: #191B1C;
    --red: #ac273f;

    --gray-dark: #2C2C2C;
    --gray-medium: #323232;
    --gray-light: #373737;
  }

  body {
    background: var(---background);
    color: var(--black);
    
    transition: all 0.25s linear;
  }

  body,
  input,
  button,
  textarea {
    font: 400 16px "Roboto", sans-serif;
  }

  button:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
