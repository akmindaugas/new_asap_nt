import React from 'react'
import PageTemplate from '../components/PageTemplate/PageTemplate'
import styles from "../styles/Home.module.css"
// import {useRouter} from "next/router"
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';


const Index = () => {
  // const router = useRouter;
  const { t } = useTranslation('home'); // Specify the namespace
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <PageTemplate onLanguageChange={handleLanguageChange}>

        <div className={styles.container} >

Home/index

{t('Welcome')}
        {t('Home')}
        {t('About')}
        {t('Language')}
        </div>
    </PageTemplate>
  
  )
}

export default Index