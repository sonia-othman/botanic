import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json'
import ku from './locales/ku/translation.json'


i18n.use(initReactI18next).init({
    resources: {
        en: {translation: en},
        ku: {translation: ku},
    },
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
})
export default i18n;