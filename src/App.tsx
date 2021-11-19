import { Toaster } from "react-hot-toast";
import { ToggleButton } from "./components/ToggleButton";

import { Routes } from './routes';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
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

      <ToggleButton />
    </>
  );
}

export default App;
