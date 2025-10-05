import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'ur' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (urdu: string, english: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ur');

  useEffect(() => {
    const html = document.documentElement;
    if (language === 'ur') {
      html.setAttribute('lang', 'ur');
      html.setAttribute('dir', 'rtl');
      html.classList.add('font-urdu');
    } else {
      html.setAttribute('lang', 'en');
      html.setAttribute('dir', 'ltr');
      html.classList.remove('font-urdu');
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ur' ? 'en' : 'ur');
  };

  const t = (urdu: string, english: string) => {
    return language === 'ur' ? urdu : english;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
