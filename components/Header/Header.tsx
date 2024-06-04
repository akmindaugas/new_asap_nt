import React, {useState} from 'react'
import styles from "./Header.module.css"
import LanguageSelector from '../../LanguageSelector';
import Link from "next/link"
import { useRouter } from 'next/router';
import i18n from 'i18next';


type LinkType = {
  id: number;
  title: string;
  href: string;
};
type HeaderProps = {
  logo: string;
  links: LinkType[];
  onLanguageChange: (language: string) => void;
};

const Header = ({ logo, links, onLanguageChange  }: HeaderProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    router.push(router.pathname, router.asPath, { locale: language });
    onLanguageChange(language); // Ensure the prop is used here
  };


  return (
    <div className={styles.container}>
<Link className={styles.link} href="/">
<img src={logo} alt="Logo" />
</Link>
       
      <nav>
        <ul className={styles.links}>
          
          {links.map((link) => {
            return (
              <Link key={link.id} href={link.href}>
              {link.title}
            </Link>
              
            );
          })}
        </ul>
      </nav>
      <LanguageSelector onLanguageChange={handleLanguageChange} />
    </div>
  )
}

export default Header