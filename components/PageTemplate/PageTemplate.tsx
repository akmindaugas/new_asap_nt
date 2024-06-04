import React, { ReactNode } from "react";
import Header from "../Header/Header";
import styles from "./PageTemplate.module.css";
import { links } from "../constants/links";

type PageTemplateProps = {
  children: ReactNode;
  onLanguageChange: (language: string) => void;
};

const PageTemplate = ({ children, onLanguageChange  }: PageTemplateProps) => {
  return (
    <div className={styles.container}>
      <Header logo={"logo"} links={links} onLanguageChange={onLanguageChange}/>
      <div className={styles.content}>{children}</div>
    
    </div>
  );
};

export default PageTemplate;