// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import { FSBackend } from 'i18next-fs-backend';

// // Replace with your languages and translations (initially empty)
// const resources = {};

// i18n
//   .use(FSBackend) // Load translations from the file system
//   .use(initReactI18next)
//   .init({
//     resources,
//     lng: 'en', // Default language
//     interpolation: {
//       escapeValue: false, // React already handles XSS
//     },
//   });

// export default i18n;
// ===================================
import i18n from 'i18next';
import { LocalStorageBackend } from 'i18next-localstorage-backend';
import { initReactI18next } from 'react-i18next';

const languages = ['en', 'lt', 'ru']; 

i18n
  .use(LocalStorageBackend) 
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: languages[0], 
    resources: {}, 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
