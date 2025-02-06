import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "react-native-localize";

import en from "../locales/en.json";
import hi from "../locales/hi.json";
import bn from "../locales/bn.json";
import ta from "../locales/ta.json";

const resources = { en, hi, bn, ta };

const languageDetector = {
  type: "languageDetector",
  async: true,
  detect: (callback) => {
    const locales = Localization.getLocales();
    callback(locales[0].languageCode);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    compatibilityJSON: "v3",
    interpolation: { escapeValue: false },
  });

export default i18n;
