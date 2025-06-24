"use client"

import Link from 'next/link';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNewsArticle, useNews } from '@/hooks/useNews';
import { 
    getNewsTranslation, 
    formatNewsDate,
    getNewsViewCountDisplay,
    getCategoryDisplay,
    getRelativeTimeString
} from '@/utils/newsUtils';
import { MEDIA_BASE_URL } from '../../../constants/api';

interface NewsDetailsAreaProps {
    newsId: number | null;
}

const NewsDetailsArea = ({ newsId }: NewsDetailsAreaProps) => {
    const { currentLanguage } = useLanguage();
    const { newsArticle, loading, error } = useNewsArticle(newsId || 0);
    const { news } = useNews();

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

    if (loading) {
        return (
            <section className="blog-wrapper news-wrapper section-padding pt-0">
                <div className="container">
                    <div className="text-center py-5">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">{getTranslatedText('加载中...', 'Loading...', 'Chargement...', '載入中...')}</span>
                        </div>
                        <p className="mt-3">{getTranslatedText('正在加载新闻...', 'Loading news...', 'Chargement des nouvelles...', '正在載入新聞...')}</p>
                    </div>
                </div>
            </section>
        );
    }

    if (error || !newsArticle) {
        return (
            <section className="blog-wrapper news-wrapper section-padding pt-0">
                <div className="container">
                    <div className="alert alert-danger text-center">
                        {error || getTranslatedText('未找到新闻文章', 'News article not found', 'Article de nouvelles introuvable', '未找到新聞文章')}
                    </div>
                    <div className="text-center">
                        <Link href="/news" className="theme-btn">
                            {getTranslatedText('返回新闻列表', 'Back to News', 'Retour aux Nouvelles', '返回新聞列表')}
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    const otherNews = news.filter(article => article.id !== newsId).slice(0, 3);

    return (
        <>
            <section className="blog-wrapper news-wrapper section-padding pt-0">
                <div className="container">
                    <div className="news-area">
                        <div className="row">
                            <div className="col-12 col-lg-8">
                                <div className="blog-post-details border-wrap mt-0">
                                    <div className="single-blog-post post-details mt-0">
                                        {newsArticle.featured_image && (
                                            <div className="post-featured-thumb bg-cover mb-4">
                                                <img 
                                                    src={newsArticle.featured_image.startsWith('http') 
                                                        ? newsArticle.featured_image 
                                                        : `${MEDIA_BASE_URL}/media/${newsArticle.featured_image}`
                                                    } 
                                                    alt={getNewsTranslation(newsArticle, 'title', currentLanguage)}
                                                    className="img-fluid"
                                                />
                                            </div>
                                        )}
                                        <div className="post-content pt-0">
                                            <h2 className="mt-0">{getNewsTranslation(newsArticle, 'title', currentLanguage)}</h2>
                                            <div className="post-meta mt-3">
                                                <span>
                                                    <i className="fal fa-user"></i>
                                                    {getNewsTranslation(newsArticle, 'author', currentLanguage)}
                                                </span>
                                                <span>
                                                    <i className="fal fa-calendar-alt"></i>
                                                    {formatNewsDate(newsArticle.published_date, currentLanguage)}
                                                </span>
                                                <span>
                                                    <i className="fal fa-folder"></i>
                                                    {getCategoryDisplay(getNewsTranslation(newsArticle, 'category', currentLanguage), currentLanguage)}
                                                </span>
                                                {newsArticle.view_count && newsArticle.view_count > 0 && (
                                                    <span>
                                                        <i className="fal fa-eye"></i>
                                                        {getNewsViewCountDisplay(newsArticle.view_count, currentLanguage)}
                                                    </span>
                                                )}
                                            </div>
                                            
                                            <div 
                                                className="mt-4"
                                                dangerouslySetInnerHTML={{ 
                                                    __html: getNewsTranslation(newsArticle, 'content', currentLanguage) 
                                                }}
                                            />

                                            {newsArticle.tags && (
                                                <div className="tagcloud mt-4">
                                                    <h4 className="mb-3">{getTranslatedText('相关标签', 'Related Tags', 'Tags Associés', '相關標籤')}</h4>
                                                    {getNewsTranslation(newsArticle, 'tags', currentLanguage)
                                                        .split(',')
                                                        .map((tag, index) => (
                                                            <Link key={index} href="/news" className="tag-link me-2">
                                                                {tag.trim()}
                                                            </Link>
                                                        ))
                                                    }
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="main-sidebar sticky-style">
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>{getTranslatedText('相关新闻', 'Related News', 'Nouvelles associées', '相關新聞')}</h3>
                                        </div>
                                        <div className="popular-posts">
                                            {otherNews.length > 0 ? (
                                                otherNews.map((article) => (
                                                    <div key={article.id} className="single-post-item">
                                                        <div className="thumb bg-cover"
                                                             style={{
                                                                 background: article.featured_image 
                                                                     ? `url(${article.featured_image.startsWith('http') 
                                                                         ? article.featured_image 
                                                                         : `${MEDIA_BASE_URL}/media/${article.featured_image}`})` 
                                                                     : `url(/FCImage/News-2.png)`,
                                                                 backgroundSize: 'cover',
                                                                 backgroundPosition: 'center',
                                                                 width: '80px',
                                                                 height: '80px',
                                                                 borderRadius: '8px'
                                                             }}></div>
                                                        <div className="post-content">
                                                            <h5>
                                                                <Link href={`/news-details?id=${article.id}`}>
                                                                    {getNewsTranslation(article, 'title', currentLanguage).length > 40 
                                                                        ? getNewsTranslation(article, 'title', currentLanguage).substring(0, 40) + '...'
                                                                        : getNewsTranslation(article, 'title', currentLanguage)}
                                                                </Link>
                                                            </h5>
                                                            <div className="post-date">
                                                                <i className="far fa-calendar-alt"></i>
                                                                {formatNewsDate(article.published_date, currentLanguage)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="text-muted">{getTranslatedText('暂无相关新闻', 'No related news available', 'Aucune nouvelle associée disponible', '暫無相關新聞')}</p>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>{getTranslatedText('返回新闻', 'Back to News', 'Retour aux nouvelles', '返回新聞')}</h3>
                                        </div>
                                        <div className="text-center">
                                            <Link href="/news" className="theme-btn">
                                                {getTranslatedText('查看全部新闻', 'View All News', 'Voir toutes les nouvelles', '查看全部新聞')}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsDetailsArea;