import "virtual:windi.css";
import "./style.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {CustomQueryClientProvider} from "@/providers";
import { SignUpUserDto } from '@wg/types';

const lala : SignUpUserDto = {
  email: 'lala@lala.com'
}
console.log(lala);
ReactDOM.render(
  <React.StrictMode>
    <CustomQueryClientProvider>
      <App />
    </CustomQueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
