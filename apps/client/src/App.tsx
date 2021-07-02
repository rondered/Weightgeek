import React from "react";
import "./App.css";
import { Login } from "./views";
import { AppContainer } from "./components/AppContainer";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
      <AppContainer>
        <Login />
      </AppContainer>
  );
}

export default App;
