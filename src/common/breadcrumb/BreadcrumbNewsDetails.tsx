"use client"
import Link from 'next/link';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNewsArticle } from '@/hooks/useNews';
import { getNewsTranslation } from '@/utils/newsUtils';

interface BreadcrumbNewsDetailsProps {
    newsId: number | null;
}

const BreadcrumbNewsDetails = ({ newsId }: BreadcrumbNewsDetailsProps) => {
    const { currentLanguage } = useLanguage();
    const { newsArticle } = useNewsArticle(newsId || 0);

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

    const newsTitle = newsArticle ? getNewsTranslation(newsArticle, 'title', currentLanguage) : '';
    const displayTitle = newsTitle || getTranslatedText('新闻详情', 'News Details', 'Détails des Nouvelles', '新聞詳情');

    return (
        <>
            <section className="breadcrumb-wrapper courses-page-banner">
                <div className="shape-1">
                    <img src="assets/img/breadcrumb/shape-1.png" alt="img" />
                </div>
                <div className="shape-2">
                    <img src="assets/img/breadcrumb/shape-2.png" alt="img" />
                </div>
                <div className="shape-3">
                    <img src="assets/img/breadcrumb/shape-3.png" alt="img" />
                </div>
                <div className="dot-shape">
                    <img src="assets/img/breadcrumb/dot-shape.png" alt="img" />
                </div>
                <div className="vector-shape">
                    <img src="assets/img/breadcrumb/Vector.png" alt="img" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="page-heading">
                            <h1>{displayTitle.length > 50 ? displayTitle.substring(0, 50) + '...' : displayTitle}</h1>
                            <ul className="breadcrumb-items">
                                <li>
                                    <Link href="/">
                                        <span>
                                            {getHomeText()}
                                        </span>
                                    </Link>
                                </li>
                                <li className="style-2">
                                    {getTranslatedText('新闻详情', 'News Details', 'Détails des Nouvelles', '新聞詳情')}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BreadcrumbNewsDetails; 