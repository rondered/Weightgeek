import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CustomChakraProvider, CustomThemeProvider } from "./providers";

ReactDOM.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <CustomChakraProvider>
        <App />
      </CustomChakraProvider>
    </CustomThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
