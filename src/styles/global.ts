import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, 
  *::after, 
  *::before  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --bg-body: #f8f8f8;
    --bg-modal: #f8f8f8;
    --bg-input: #ffffff;
    
    --txt-primary: #29292e;
    --txt-details: #737380;
    --txt-input: #835afd;

    --black: #29292e;
    --shadow: rgb(0 0 0 / 0.2);

    --purple-white: #e3d8ff;
    --purple-light: #835AFD;
    --purple-dark: #835a99;

    --google: #EA4335;
    --danger: #E73F5D;

    --gray-dark: #737380;
    --gray-medium: #A8A8B3;
    --gray-light: #DBDCDD;

    --white-medium: #F8F8F8;
    --white-light: #FEFEFE;

    --pink-medium: #E559F9;
    --pink-light: #D67EE2;
  }

  .dark-mode {
    --bg-body: #0d0131;
    --bg-modal: #29292E;
    --bg-input: #2d2d2d;
    
    --txt-primary: #FEFEFE;
    --txt-details: #F8F8F8;
    --txt-input: #FEFEFE;

    --black: #29292E;
    --shadow: rgba(255,255,255,0.1);

    --purple-white: #e3d8ff;
    --purple-light: #835AFD;
    --purple-dark: #e3d8ff;

    --google: #EA4335;
    --danger: #E73F5D;

    --gray-dark: #737380;
    --gray-medium: #A8A8B3;
    --gray-light: #DBDCDD;

    --white-medium: #F8F8F8;
    --white-light: #FEFEFE;

    --pink-medium: #E559F9;
    --pink-light: #D67EE2;
  }

  html{
    scroll-behavior: smooth;
  }

  body { 
    transition: all 0.25s linear;
    background: var(---bg-body);
  }

  body,
  input,
  button,
  textarea {
    font: 400 16px "Roboto", sans-serif;
  }

  /* button:hover {
    box-shadow: 0 12px 16px 0 var(--shadow), 0 17px 50px 0 var(--shadow);
  }  */
`;
