import React, { createContext, useState, useEffect, useContext } from 'react';
import i18n from '../i18n';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'pt' ? 'en' : 'pt'));
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro do LanguageProvider');
  }
  return context;
}