import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      Welcome: 'Welcome',
    },
  },
  fr: {
    translation: {
      Welcome: 'Bienvenue',
    },
  },
  nl: {
    translation: {
      Welcome: 'Welcome',
    },
  },
  es: {
    translation: {
      Welcome: 'Welcome',
    },
  },
  de: {
    translation: {
      Welcome: 'Welcome',
    },
  },
};

const lang = localStorage.getItem('lang') || 'eng';

i18n.use(initReactI18next).init({
  resources,
  lng: lang,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
