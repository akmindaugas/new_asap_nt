import React from 'react'
import PageTemplate from '../components/PageTemplate/PageTemplate'
import styles from "../pages/PagesStyleFiles/About.module.css"
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const Index = () => {
  // const router = useRouter;
  const { t } = useTranslation('about'); // Specify the namespace
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <PageTemplate onLanguageChange={handleLanguageChange}>

        <div className={styles.container} >

about page

{t('Welcome')}
        {t('Home')}
        {t('About')}
        {t('Language')}
        </div>
    </PageTemplate>
  
  )
}

export default Index