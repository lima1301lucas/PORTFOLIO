import {ThemeProvider} from './context/ThemeContext';
import {LanguageProvider} from './context/LanguageContext';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

import "./styles/global.scss"
import './i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);