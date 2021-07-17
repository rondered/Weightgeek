import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  CustomChakraProvider,
  CustomThemeProvider,
  CustomQueryClientProvider,
} from "./providers";

ReactDOM.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <CustomChakraProvider>
        <CustomQueryClientProvider>
          <App />
        </CustomQueryClientProvider>
      </CustomChakraProvider>
    </CustomThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
