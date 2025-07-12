import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  id: {
    translation: {
      "welcome": "Selamat Datang",
      "contact": "Kontak Kami",
      "about": "Tentang Kami",
      "services": "Layanan",
      "home": "Beranda"
    }
  },
  en: {
    translation: {
      "welcome": "Welcome",
      "contact": "Contact Us",
      "about": "About Us",
      "services": "Services",
      "home": "Home"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'id',
    fallbackLng: 'id',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 