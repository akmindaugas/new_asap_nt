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
import { initReactI18next } from 'react-i18next';
// import { LocalStorageBackend } from 'i18next-localstorage-backend';
import enHome from './public/locales/en/home.json';
import enAbout from './public/locales/en/about.json';

import ltHome from './public/locales/lt/home.json';
import ltAbout from './public/locales/lt/about.json';

import ruHome from './public/locales/ru/home.json';
import ruAbout from './public/locales/ru/about.json';

const resources = {
  en: {
    home: enHome,
    about: enAbout,
  },
 
  lt: {
    home: ltHome,
    about: ltAbout,
  },

  ru: {
    home: ruHome,
    about: ruAbout,
  },
};


// const languages = ['en', 'lt', 'ru']; 
// console.log(i18n)
// i18n
//   .use(LocalStorageBackend) 
//   console.log(i18n)
//   .use(initReactI18next)
//   console.log(i18n)
//   .init({
//     fallbackLng: 'en',
//     lng: languages[0], 
//     resources: {}, 
//     interpolation: {
//       escapeValue: false, 
//     },
//   });

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en', 
    ns: ['home'], // Specify the namespaces
    defaultNS: 'home',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
