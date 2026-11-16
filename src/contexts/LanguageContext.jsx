import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('workshop_lang') || 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('workshop_lang', lang);
    } catch {}
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'bn' : 'en'));
  };

  const t = (en, bn) => (lang === 'bn' ? (bn || en) : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return { lang: 'en', setLang: () => {}, toggleLang: () => {}, t: (en) => en };
  }
  return context;
}
