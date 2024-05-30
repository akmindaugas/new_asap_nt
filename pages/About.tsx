import React from 'react'
import PageTemplate from '../components/PageTemplate/PageTemplate'
import styles from "../pages/PagesStyleFiles/About.module.css"
import { useTranslation } from 'react-i18next';

const index = () => {
  return (


    <PageTemplate>

   <div className={styles.container}>AboutPage</div>

    </PageTemplate>
 
  )
}

export default index