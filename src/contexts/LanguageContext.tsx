import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'ur' | 'en' | 'pa' | 'sd' | 'ps' | 'bal' | 'shina';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (translations: { ur: string; en: string; pa: string; sd: string; ps: string; bal: string; shina: string }) => string;
  getLanguageName: (lang: Language) => string;
}

const languageConfig = {
  ur: { name: 'اردو', dir: 'rtl', font: 'font-urdu' },
  en: { name: 'English', dir: 'ltr', font: '' },
  pa: { name: 'پنجابی', dir: 'rtl', font: 'font-punjabi' },
  sd: { name: 'سنڌي', dir: 'rtl', font: 'font-sindhi' },
  ps: { name: 'پښتو', dir: 'rtl', font: 'font-pashto' },
  bal: { name: 'بلوچی', dir: 'rtl', font: 'font-balochi' },
  shina: { name: 'شینا', dir: 'rtl', font: 'font-shina' },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ur');

  useEffect(() => {
    const html = document.documentElement;
    const config = languageConfig[language];
    
    html.setAttribute('lang', language);
    html.setAttribute('dir', config.dir);
    
    // Remove all language font classes
    Object.values(languageConfig).forEach(({ font }) => {
      if (font) html.classList.remove(font);
    });
    
    // Add current language font class
    if (config.font) html.classList.add(config.font);
  }, [language]);

  const t = (translations: { ur: string; en: string; pa: string; sd: string; ps: string; bal: string; shina: string }) => {
    return translations[language];
  };

  const getLanguageName = (lang: Language) => {
    return languageConfig[lang].name;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getLanguageName }}>
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
