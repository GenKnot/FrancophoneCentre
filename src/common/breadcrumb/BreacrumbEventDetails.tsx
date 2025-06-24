"use client"
import Link from 'next/link';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEvent } from '@/hooks/useEvents';
import { getEventTranslation } from '@/utils/eventUtils';

interface BreadcrumbEventDetailsProps {
    eventId: number | null;
}

const BreacrumbEventDetails = ({ eventId }: BreadcrumbEventDetailsProps) => {
    const { currentLanguage } = useLanguage();
    const { event } = useEvent(eventId || 0);

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

    const getHomeText = () => {
        switch (currentLanguage) {
            case 'zh-hans':
                return '主页';
            case 'zh-hant':
                return '主頁';
            case 'fr':
                return 'Accueil';
            case 'en':
            default:
                return 'Home';
        }
    };

    const eventTitle = event ? getEventTranslation(event, 'title', currentLanguage) : '';

    return (
        <>
            <section className="breadcrumb-wrapper style-2 style-event pt-5">
                <div className="shape-1">
                    <img src="/assets/img/breadcrumb/shape-1.png" alt="img"/>
                </div>
                <div className="shape-2">
                    <img src="/assets/img/breadcrumb/shape-2.png" alt="img"/>
                </div>
                <div className="dot-shape">
                    <img src="/assets/img/breadcrumb/dot-shape.png" alt="img"/>
                </div>
                <div className="vector-shape">
                    <img src="/assets/img/breadcrumb/Vector.png" alt="img"/>
                </div>
                <div className="container">
                    <div className="page-heading">
                        <ul className="breadcrumb-items">
                            <li><Link href="/">{getHomeText()}</Link></li>
                            <li><Link href="/event">{getTranslatedText('活动', 'Events', 'Événements', '活動')}</Link></li>
                            <li className="style-2">{getTranslatedText('活动详情', 'Event Details', 'Détails de l\'Événement', '活動詳情')}</li>
                        </ul>
                        <div className="breadcrumb-content">
                            <h1>{eventTitle || getTranslatedText('活动详情', 'Event Details', 'Détails de l\'Événement', '活動詳情')}</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BreacrumbEventDetails;