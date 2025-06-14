"use client";
import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import MarqueeOne from "@/common/MarqueeOne";
import React from "react";
import NewsArea from "./NewsArea";
import HeaderMain from "@/layouts/headers/HeaderMain";
import FooterMain from "@/layouts/footers/FooterMain";
import { useLanguage } from '@/contexts/LanguageContext';

const News = () => {
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
                title={getTranslatedText('最新资讯', 'Latest News', 'Dernières Nouvelles', '最新資訊')} 
                subtitle={getTranslatedText('资讯', 'News', 'Nouvelles', '資訊')}
            />
            <NewsArea/>
            <MarqueeOne style_2={true}/>
            <FooterMain/>
        </>
    );
};

export default News;
