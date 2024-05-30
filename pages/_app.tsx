import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from 'react';
import i18n from '../i18n'
import { useTranslation } from 'react-i18next';

import LanguageSelector from '../LanguageSelector.jsx'; 


// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

// =============================

function MyApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslation(); 

  const handleLanguageChange = (newLang: string) => {
    i18n.changeLanguage(newLang); 
  };

  return (
    <div>
      <LanguageSelector onLanguageChange={handleLanguageChange} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
