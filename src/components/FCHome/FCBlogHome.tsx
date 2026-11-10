"use client";
import Link from 'next/link';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNews } from '@/hooks/useNews';
import { getNewsTranslation, formatNewsDate } from '@/utils/newsUtils';
import { MEDIA_BASE_URL } from '../../../constants/api';

const FALLBACK_IMAGES = ['/FCImage/Blog-1.png', '/FCImage/Blog-2.png', '/FCImage/Blog-3.png', '/FCImage/Blog-4.png'];

const imageUrl = (src: string | undefined, index: number) => {
    if (!src) return FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
    return src.startsWith('http') ? src : `${MEDIA_BASE_URL}/media/${src}`;
};

const FCBlogHome = () => {
    const { currentLanguage, isHydrated } = useLanguage();
    const { news, loading } = useNews();

    const getTranslatedText = (zhText: string, enText: string, frText: string = enText, zhHantText: string = zhText) => {
        if (!isHydrated) {
            return enText;
        }

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

    // Newest first; the most recent article gets the large card.
    const articles = [...news]
        .sort((a, b) => new Date(b.published_date).getTime() - new Date(a.published_date).getTime())
        .slice(0, 4);

    if (!loading && articles.length === 0) {
        return null;
    }

    const tr = (article: (typeof articles)[number], field: 'title' | 'excerpt' | 'author' | 'category') =>
        getNewsTranslation(article, field, currentLanguage);
    const href = (id: number) => `/news-details?id=${id}`;
    const readMore = getTranslatedText('阅读全文', 'Read More', 'Lire la suite', '閱讀全文');
    const [lead, ...rest] = articles;

    return (
        <>
            <section className="news-section fix section-padding pt-0">
                <div className="container">
                    <div className="section-title color-red text-center">
                        <h6 className="wow fadeInUp">
                            {getTranslatedText('最新资讯', 'Latest News', 'Dernières Nouvelles', '最新資訊')}
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            {getTranslatedText('法语移民 · 生活指南 · 政策解读', 'French Immigration · Life Guide · Policy Analysis', 'Immigration Française · Guide de Vie · Analyse des Politiques', '法語移民 · 生活指南 · 政策解讀')}
                        </h2>
                    </div>
                    {lead && (
                        <div className="row">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="news-left-items">
                                    <div className="news-thumb">
                                        <img src={imageUrl(lead.featured_image, 0)} alt={tr(lead, 'title')}/>
                                        <Link href={href(lead.id)} className="post-box">
                                            {tr(lead, 'category')}
                                        </Link>
                                    </div>
                                    <div className="news-content">
                                        <ul className="post-cat">
                                            <li>
                                                <i className="fal fa-user"></i>
                                                {tr(lead, 'author')}
                                            </li>
                                            <li>
                                                <i className="fal fa-calendar-alt"></i>
                                                {formatNewsDate(lead.published_date, currentLanguage)}
                                            </li>
                                        </ul>
                                        <h3>
                                            <Link href={href(lead.id)}>{tr(lead, 'title')}</Link>
                                        </h3>
                                        <p>{tr(lead, 'excerpt')}</p>
                                        <Link href={href(lead.id)} className="link-btn">{readMore} <i
                                            className="far fa-chevron-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="news-right-items">
                                    {rest.map((article, i) => (
                                        <div key={article.id} className="news-right-box wow fadeInUp" data-wow-delay={`.${3 + i * 2}s`}>
                                            <div className="thumb">
                                                <img src={imageUrl(article.featured_image, i + 1)} alt={tr(article, 'title')}/>
                                                <Link href={href(article.id)} className="post-box">
                                                    {tr(article, 'category')}
                                                </Link>
                                            </div>
                                            <div className="content">
                                                <ul className="post-cat">
                                                    <li>
                                                        <i className="fal fa-user"></i>
                                                        {tr(article, 'author')}
                                                    </li>
                                                    <li>
                                                        <i className="fal fa-calendar-alt"></i>
                                                        {formatNewsDate(article.published_date, currentLanguage)}
                                                    </li>
                                                </ul>
                                                <h5>
                                                    <Link href={href(article.id)}>{tr(article, 'title')}</Link>
                                                </h5>
                                                <p>{tr(article, 'excerpt')}</p>
                                                <Link href={href(article.id)} className="link-btn">{readMore} <i
                                                    className="far fa-chevron-double-right"></i></Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default FCBlogHome;
