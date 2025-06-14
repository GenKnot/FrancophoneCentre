"use client";
import BreadcrumbEvent from '@/common/breadcrumb/BreadcrumbEvent';
import MarqueeOne from '@/common/MarqueeOne';
import React from 'react';
import FaqArea from './FaqArea';
import HeaderMain from "@/layouts/headers/HeaderMain";
import FooterMain from "@/layouts/footers/FooterMain";
import { useLanguage } from '@/contexts/LanguageContext';

const Faq = () => {
    const { currentLanguage } = useLanguage();

    const getTranslatedText = (zhText: string, enText: string, frText: string = enText, zhHantText: string = zhText) => {
        switch (currentLanguage) {
            case 'zh-hans':
                return zhText;
            case 'zh-hant':
                return zhHantText;
            case 'fr':
                return frText;
            case 'en':
            default:
                return enText;
        }
    };

    return (
        <>
            <HeaderMain/>
            <BreadcrumbEvent 
                title={getTranslatedText('常见问题', 'FAQ', 'FAQ', '常見問題')} 
                subtitle={getTranslatedText('问题列表', 'Question List', 'Liste de Questions', '問題列表')}
            />
            <FaqArea/>
            <MarqueeOne style_2={true}/>
            <FooterMain/>
        </>
    );
};

export default Faq;