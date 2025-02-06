// import React, { createContext, useContext, useState } from "react";
// import { getLocales } from "expo-localization";
// import { I18n } from "i18n-js";

// // Define translations for 5 Indian languages
// const translation = {
//   en: {
//     welcome: "Hello, welcome!",
//     login: "Login",
//     enter_details: "Enter your details",
//   },
//   hi: {
//     welcome: "नमस्ते, स्वागत है!",
//     login: "लॉगिन",
//     enter_details: "अपना विवरण दर्ज करें",
//   },
//   bn: {
//     welcome: "হ্যালো, স্বাগতম!",
//     login: "লগইন",
//     enter_details: "আপনার বিবরণ লিখুন",
//   },
//   ta: {
//     welcome: "வணக்கம், வரவேற்கிறேன்!",
//     login: "உள்நுழைய",
//     enter_details: "உங்கள் விவரங்களை உள்ளிடவும்",
//   },
//   te: {
//     welcome: "హలో, స్వాగతం!",
//     login: "లాగిన్",
//     enter_details: "మీ వివరాలను నమోదు చేయండి",
//   },
// };

// // Initialize i18n
// const i18n = new I18n(translation);
// i18n.enableFallback = true;

// // Create a context for language management
// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const deviceLocale = getLocales()[0].languageCode;
//   const [locale, setLocale] = useState(deviceLocale);

//   i18n.locale = locale;

//   return (
//     <LanguageContext.Provider value={{ locale, setLocale, i18n }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// // Custom hook to use language context in components
// export const useLanguage = () => useContext(LanguageContext);
