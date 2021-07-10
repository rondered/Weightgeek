import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import './index.css';
import { CustomChakraProvider } from './providers';

ReactDOM.render(
  <React.StrictMode>
    <CustomChakraProvider>
    <App />
    </CustomChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
