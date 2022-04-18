import { createI18n } from "vue-i18n";

const messages = {
  en: {
    message: {
      hello: "{msg} world",
    },
  },
  in: {
    message: {
      hello: "{msg}  বিশ্ব",
    },
  },
};
const numberFormats = {
  en: {
    currency: {
      style: "currency",
      currency: "USD",
      notation: "standard",
    },
  },
  in: {
    currency: {
      style: "currency",
      currency: "INR",
      notation: "standard",
    },
  },
};

const i18n = createI18n({
  // something vue-i18n options here ...
  locale: "en",
  falbackLocale: "en",
  messages,
  numberFormats,
});

export default i18n;
