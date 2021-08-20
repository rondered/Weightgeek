import React from "react";
import 'virtual:windi.css'
import ReactDOM from "react-dom";
import App from "./App";
import { CustomQueryClientProvider } from "./providers";

ReactDOM.render(
  <React.StrictMode>
    <CustomQueryClientProvider>
      <App />
    </CustomQueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
