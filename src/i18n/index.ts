import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en.json';
import frTranslation from './fr.json';
import nlTranslation from './nl.json';
import esTranslation from './es.json';
import deTranslation from './de.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  fr: {
    translation: frTranslation,
  },
  nl: {
    translation: nlTranslation,
  },
  es: {
    translation: esTranslation,
  },
  de: {
    translation: deTranslation,
  },
};

const lang = localStorage.getItem('lang') || 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: lang,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
