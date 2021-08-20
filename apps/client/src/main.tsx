import React from "react";
import 'virtual:windi.css'
import ReactDOM from "react-dom";
import App from "./App";
import plugin from 'windicss/plugin'

plugin(({ addComponents }) => {
  addComponents({
    '.btn': {
      padding: '.5rem 1rem',
      borderRadius: '.25rem',
      fontWeight: '600',
    },
    '.btn-blue': {
      'backgroundColor': '#3490dc',
      'color': '#fff',
      '&:hover': {
        backgroundColor: '#2779bd',
      },
    },
  })
})

import { CustomQueryClientProvider } from "./providers";

ReactDOM.render(
  <React.StrictMode>
    <CustomQueryClientProvider>
      <App />
    </CustomQueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
