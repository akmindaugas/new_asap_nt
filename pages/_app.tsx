// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import React from 'react';
// import i18n from '../i18n'
// import { useTranslation } from 'react-i18next';

// import LanguageSelector from '../LanguageSelector.jsx'; 


// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

// =============================

// function MyApp({ Component, pageProps }: AppProps) {
//   const { t } = useTranslation(); 

//   const handleLanguageChange = (newLang: string) => {
//     console.log(i18n)
//     i18n.changeLanguage(newLang); 
//   };

//   return (
//     <div>
//       <LanguageSelector onLanguageChange={handleLanguageChange} />
//       <Component {...pageProps} />
//     </div>
//   );
// }

// export default MyApp;
// =====================
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useState, useEffect } from 'react';
import i18n from '../i18n'; // Assuming i18n.js is in the parent directory
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector.jsx';

function MyApp({ Component, pageProps }: AppProps) {
  const [isReady, setIsReady] = useState(false); // Flag to indicate i18n initialization
  const { t } = useTranslation();

  const handleLanguageChange = (newLang: string) => {
    console.log(i18n); // Optional: Log i18n object for debugging
    i18n.changeLanguage(newLang);
  };

  // Asynchronous i18n initialization using useEffect
  useEffect(() => {
    const initializeI18n = async () => {
      // Fetch translations or perform other initialization steps here (if needed)
      await i18n.init({
        fallbackLng: 'en', // Set default language
        resources: { /* ... your translation resources here ... */ },
      });
      setIsReady(true); // Set flag when i18n is ready
    };

    initializeI18n();
  }, []); // Empty dependency array: Run only on initial render

  // Render content only after i18n is initialized
  if (!isReady) {
    return <div>Loading translations...</div>; // Display loading indicator
  }

  return (
    <div>
      <LanguageSelector onLanguageChange={handleLanguageChange} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
