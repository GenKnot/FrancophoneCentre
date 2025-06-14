"use client";
import React from "react";
import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import AboutArea from "./AboutArea";
import FeatureArea from "./FeatureArea";
import AboutCounter from "./AboutCounter";
import FooterMain from "@/layouts/footers/FooterMain";
import FCTeamHome from "@/components/about/FCTeamHome";
import HeaderMain from "@/layouts/headers/HeaderMain";
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
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
            <HeaderMain />
            <BreadcrumbEvent 
                title={getTranslatedText('关于我们', 'About Us', 'À Propos', '關於我們')} 
                subtitle={getTranslatedText('关于我们', 'About Us', 'À Propos', '關於我們')}
            />
            <AboutArea/>
            <FeatureArea/>
            <FCTeamHome style_2={true}/>
            <AboutCounter/>
            <FooterMain />
        </>
    );
};

export default About;
