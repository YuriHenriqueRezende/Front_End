import { createI18n } from 'vue-i18n';
import PtBrtranslation from './pt_br.json';
import Entranslation from './en.json';

export type AvaiableLanguages = 
    'en' | 'br';

export const i18nApplication = createI18n({
    legacy: false,
    locale: 'en',
    messages: {
        en: Entranslation,
        br: PtBrtranslation
    }
})

export const changesLanguage = (locale: AvaiableLanguages)=>{
    i18nApplication.global.locale.value = locale;
}