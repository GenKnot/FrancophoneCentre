"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export const useTranslation = () => {
    const { currentLanguage, t, isHydrated } = useLanguage();

    const getTranslatedText = (zhText: string, enText: string, frText: string = enText, zhHantText: string = zhText): string => {
        if (!isHydrated) {
            switch (currentLanguage) {
                case 'zh-hans':
                    return zhText;
                case 'zh-hant':
                    return zhHantText;
                case 'fr':
                    return frText;
                default:
                    return enText;
            }
        }

        switch (currentLanguage) {
            case 'zh-hans':
                return zhText;
            case 'zh-hant':
                return zhHantText;
            case 'fr':
                return frText;
            default:
                return enText;
        }
    };

    return {
        t,
        getTranslatedText,
        currentLanguage,
        isHydrated
    };
}; 