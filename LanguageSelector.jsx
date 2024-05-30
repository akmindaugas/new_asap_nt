import React from 'react';
import { FormattedMessage } from 'react-intl';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'lt', name: 'Lietuviu' },
  { code: 'ru', name: 'Russkij' },
];

const LanguageSelector = ({ onLanguageChange }) => {
  return (
    <select value={languages.find((lang) => lang.code === i18n.language).code} onChange={(e) => onLanguageChange(e.target.value)}>
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          <FormattedMessage id={`language.${lang.code}`} />
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
