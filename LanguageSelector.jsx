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
        color:  'rgb(238, 235, 235)',
        backgroundColor: '#000000',
        padding: '0px',
        borderRadius: '6px',
        border: '2px solid #494949',
        boxShadow: 'none',
        '&:hover': {
          transition: '0.6s',
          border: '2px solid #F5F5F5',
          borderRadius: '12px',
          color: 'white',
          backgroundColor: '#000000',
        },
      }),
      option: (provided, state) => ({
        ...provided,
        padding: '2px',
        margin: 'auto',
        border: '2px solid #494949',
        borderRadius: '6px',
        backgroundColor: state.isSelected ? '#000000' : 'rgb(238, 235, 235)',
        color: state.isSelected ? '#fff' : '#333',
        '&:hover': {
          backgroundColor: '#f0f0f0',
          border: '2px solid #F5F5F5',
          borderRadius: '12px',
        },
      }),
      menu: (provided) => ({
        ...provided,
        borderRadius: '6px',
        marginTop: '0px',
        '&:hover': {
          borderRadius: '12px',
          color: 'white',
        },
      }),
      // faceview properties
      singleValue: (provided) => ({
        ...provided,
        color: '#EEEBEB',
      }),
      // arrow element
      placeholder: (provided) => ({
        ...provided,
        color: 'rgb(238, 235, 235)',
        '&:hover': {
                    color: 'white',
        },
      }),
      valueContainer: (provided) => ({
        ...provided,
        padding: '0px 2px',
        
      }),
      multiValue: (provided) => ({
        ...provided,
        backgroundColor: 'red',
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
