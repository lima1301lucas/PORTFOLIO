import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from './context/ThemeContext';
import App from './App.jsx'

import "./styles/global.scss"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);