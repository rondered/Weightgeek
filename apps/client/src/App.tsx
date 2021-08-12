import React from "react";
import "./App.css";
import { Login } from "./views";
import { AppRouter } from "./Router";

import tw, { GlobalStyles } from "twin.macro";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppRouter />
    </>
  );
}

export default App;
