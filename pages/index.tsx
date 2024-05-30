import React from 'react'
import PageTemplate from '../components/PageTemplate/PageTemplate'
import styles from "../styles/Home.module.css"
import {useRouter} from "next/router"
import { useTranslation } from 'react-i18next';


const Index = () => {
  const router = useRouter;

  return (
    <PageTemplate>

        <div className={styles.container} >

Home/index
        </div>
    </PageTemplate>
  
  )
}

export default Index