import React from 'react';
import i18n from 'i18next';
import Select from 'react-select';
import styles from "./pages/PagesStyleFiles/LanguageSelector.module.css"


const languages = [
  { value: 'en', label: 'En' },
  { value: 'lt', label: 'Lt' },
  { value: 'ru', label: 'Ru' },
];


const customStyles = {
  control: (provided) => ({
    ...provided,
    padding: '0px' ,
    borderRadius: '5px',
    border: '2px solid #000000',
    opacity: 0.2,
    color: 'rgb(238, 235, 235)',
    
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#rgb(238, 235, 235)' : '#000000',
    color: 'rgb(238, 235, 235)',
    borderRadius: '5px',
  }),
};

const LanguageSelector = ({ onLanguageChange }) => {
  const handleChange = (selectedOption) => {
    onLanguageChange(selectedOption.value);
  };

  return (
    <Select
      defaultValue={languages.find(lang => lang.value === 'en')}
      options={languages}
      onChange={handleChange}
      styles={customStyles}
    />
  );
};

export default LanguageSelector;
