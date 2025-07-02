import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptTranslations from "../locales/pt.json";
import enTranslations from "../locales/en.json";
import esTranslations from "../locales/es.json";

i18n.use(initReactI18next).init({ 
  resources: {
    en: {
      ...enTranslations
    },
    pt: {
      ...ptTranslations
    },
    es:{
      ...esTranslations
    }
  },
  lng: 'pt', 
})