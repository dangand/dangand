import enTranslation from "@/locales/en.json";
import idTranslation from "@/locales/id.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Konfigurasi i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    id: {
      translation: idTranslation,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
