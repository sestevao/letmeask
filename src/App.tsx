import { Toaster } from "react-hot-toast";
// import { ThemeProvider } from 'styled-components';

import { Routes } from './routes';

import { GlobalStyle } from './styles/global';
// import { lightTheme } from "./styles/theme";

function App() {
  return (
    <>
      {/* <ThemeProvider theme={lightTheme}> */}
      <Routes />

      <GlobalStyle />

      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              border: "1px solid #68D391",
              color: "#68D391"
            }
          },
          error: {
            style: {
              border: "1px solid #F56565",
              color: "#F56565"
            }
          },
          style: {
            margin: "0",
            border: "1px solid#835afd",
            color: "#835afd"
          },
        }}
      />
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
