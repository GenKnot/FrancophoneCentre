"use client";
import React from 'react';
import MarqueeOne from '@/common/MarqueeOne';
import BreadcrumbEvent from '@/common/breadcrumb/BreadcrumbEvent';
import EventLisrArea from './EventLisrArea';
import HeaderMain from "@/layouts/headers/HeaderMain";
import FooterMain from "@/layouts/footers/FooterMain";
import { useLanguage } from '@/contexts/LanguageContext';

const Event = () => {
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
                title={getTranslatedText('近期活动', 'Recent Events', 'Événements Récents', '近期活動')} 
                subtitle={getTranslatedText('活动列表', 'Event List', 'Liste d\'Événements', '活動列表')}
            />
            <EventLisrArea/>
            <MarqueeOne style_2={true}/>
            <FooterMain/>
        </>
    );
};

export default Event;