import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './translations.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translations.en
      },
      es: {
        translation: translations.es
      }
    },
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
