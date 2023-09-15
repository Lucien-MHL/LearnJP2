import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import zh_TW from './zh_TW.json'

const resources = {
  zh: {
    translation: zh_TW,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
})

export default i18n
