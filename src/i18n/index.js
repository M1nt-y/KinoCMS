import { createI18n } from "vue-i18n";
import en from "./en.json";
import ua from "./ua.json";


const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('user-locale') || 'en',
    fallbackLocale: 'en',
    globalInjection: true,
    messages: {en, ua}
});

export default i18n;