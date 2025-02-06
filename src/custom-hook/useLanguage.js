import React, { createContext, useContext, useState } from "react";
import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

// Import translations from JSON files
import en from "../locales/en.json";
import hi from "../locales/hi.json";
import bn from "../locales/bn.json";
import ta from "../locales/ta.json";

// Map translations
const translations = { en, hi, bn, ta };

// Initialize i18n
const i18n = new I18n(translations);
i18n.enableFallback = true;

// Create a language context
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const deviceLocale = getLocales()[0].languageCode;
  const [locale, setLocale] = useState(
    deviceLocale in translations ? deviceLocale : "en"
  );

  i18n.locale = locale;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, i18n }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => useContext(LanguageContext);
