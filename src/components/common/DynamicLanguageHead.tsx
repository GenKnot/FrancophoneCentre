"use client";

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const DynamicLanguageHead = () => {
    const { currentLanguage } = useLanguage();

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.lang = currentLanguage;
        }
    }, [currentLanguage]);

    return null;
};

export default DynamicLanguageHead; 