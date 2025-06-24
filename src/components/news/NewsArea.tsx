"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNews } from '@/hooks/useNews';
import { 
    getNewsTranslation, 
    formatNewsDate,
    getNewsViewCountDisplay,
    getCategoryDisplay,
    isNewsRecent
} from '@/utils/newsUtils';
import { MEDIA_BASE_URL } from '../../../constants/api';

const NewsArea = () => {
    const { currentLanguage } = useLanguage();
    const { news, loading, error, featuredNews } = useNews();
    const [selectedCategory, setSelectedCategory] = useState('');

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

    const filteredNews = news.filter(article => {
        const categoryMatch = !selectedCategory || 
            getNewsTranslation(article, 'category', currentLanguage).includes(selectedCategory);
        
        return categoryMatch;
    });

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

    if (error) {
        return (
            <section className="blog-wrapper news-wrapper section-padding pt-0">
                <div className="container">
                    <div className="alert alert-danger text-center">
                        {getTranslatedText('加载新闻时出错', 'Error loading news', 'Erreur lors du chargement des nouvelles', '載入新聞時出錯')}: {error}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="blog-wrapper news-wrapper section-padding pt-0">
                <div className="container">
                    <div className="news-area">
                        <div className="row">
                            <div className="col-12 col-lg-8">
                                <div className="blog-posts">
                                    {filteredNews.length === 0 ? (
                                        <div className="text-center py-5">
                                            <h4>{getTranslatedText('暂无新闻', 'No News Found', 'Aucune Nouvelle Trouvée', '暫無新聞')}</h4>
                                            <p>{getTranslatedText('请稍后再试', 'Please check back later', 'Veuillez revenir plus tard', '請稍後再試')}</p>
                                        </div>
                                    ) : (
                                        filteredNews.map((article, index) => (
                                            <div key={article.id} className="single-blog-post">
                                                <div className="post-featured-thumb bg-cover"
                                                     style={{
                                                         background: article.featured_image 
                                                             ? `url(${article.featured_image.startsWith('http') 
                                                                 ? article.featured_image 
                                                                 : `${MEDIA_BASE_URL}/media/${article.featured_image}`})` 
                                                             : `url(/FCImage/News-${(index % 3) + 1}.png)`,
                                                         backgroundSize: 'cover',
                                                         backgroundPosition: 'center',
                                                         height: '300px'
                                                     }}>
                                                    {article.is_featured && (
                                                        <div className="post-badge" style={{
                                                            position: 'absolute',
                                                            top: '20px',
                                                            left: '20px',
                                                            background: '#ff6b35',
                                                            color: 'white',
                                                            padding: '5px 15px',
                                                            borderRadius: '20px',
                                                            fontSize: '12px',
                                                            fontWeight: 'bold'
                                                        }}>
                                                            <span>{getTranslatedText('精选', 'Featured', 'À la Une', '精選')}</span>
                                                        </div>
                                                    )}
                                                    {isNewsRecent(article) && (
                                                        <div className="post-badge" style={{
                                                            position: 'absolute',
                                                            top: '20px',
                                                            right: '20px',
                                                            background: '#28a745',
                                                            color: 'white',
                                                            padding: '5px 15px',
                                                            borderRadius: '20px',
                                                            fontSize: '12px',
                                                            fontWeight: 'bold'
                                                        }}>
                                                            <span>{getTranslatedText('最新', 'New', 'Nouveau', '最新')}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="post-content">
                                                    <div className="post-meta">
                                                        <span>
                                                            <i className="fal fa-user"></i>
                                                            {getNewsTranslation(article, 'author', currentLanguage)}
                                                        </span>
                                                        <span>
                                                            <i className="fal fa-calendar-alt"></i>
                                                            {formatNewsDate(article.published_date, currentLanguage)}
                                                        </span>
                                                        <span>
                                                            <i className="fal fa-folder"></i>
                                                            {getCategoryDisplay(getNewsTranslation(article, 'category', currentLanguage), currentLanguage)}
                                                        </span>
                                                        {article.view_count && article.view_count > 0 && (
                                                            <span>
                                                                <i className="fal fa-eye"></i>
                                                                {getNewsViewCountDisplay(article.view_count, currentLanguage)}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <h2 className="title-anim">
                                                        <Link href={`/news-details?id=${article.id}`}>
                                                            {getNewsTranslation(article, 'title', currentLanguage)}
                                                        </Link>
                                                    </h2>
                                                    <p>
                                                        {getNewsTranslation(article, 'excerpt', currentLanguage) || 
                                                         getNewsTranslation(article, 'content', currentLanguage).replace(/<[^>]*>/g, '').substring(0, 200) + '...'}
                                                    </p>
                                                    <Link href={`/news-details?id=${article.id}`} className="theme-btn mt-4 line-height">
                                                        {getTranslatedText('阅读更多', 'Read More', 'Lire plus', '閱讀更多')}
                                                    </Link>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                                {filteredNews.length > 6 && (
                                    <div className="page-nav-wrap pt-5">
                                        <ul>
                                            <li><a className="page-numbers active" href="#">1</a></li>
                                            <li><a className="page-numbers" href="#">2</a></li>
                                            <li><a className="page-numbers" href="#">3</a></li>
                                            <li><a className="page-numbers" href="#"><i className="far fa-arrow-right"></i></a></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="main-sidebar sticky-style">
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>{getTranslatedText('最新资讯', 'Latest News', 'Dernières Nouvelles', '最新資訊')}</h3>
                                        </div>
                                        <div className="popular-posts">
                                            {news.slice(0, 3).map((article) => (
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
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>{getTranslatedText('新闻分类', 'News Categories', 'Catégories de Nouvelles', '新聞分類')}</h3>
                                        </div>
                                        <div className="widget_categories">
                                            <ul>
                                                <li>
                                                    <Link 
                                                        href="#" 
                                                        onClick={(e) => { e.preventDefault(); setSelectedCategory(''); }}
                                                        className={!selectedCategory ? 'active' : ''}
                                                    >
                                                        {getTranslatedText('全部分类', 'All Categories', 'Toutes les Catégories', '全部分類')} 
                                                        <span>{news.length}</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link 
                                                        href="#" 
                                                        onClick={(e) => { e.preventDefault(); setSelectedCategory('移民政策'); }}
                                                        className={selectedCategory === '移民政策' ? 'active' : ''}
                                                    >
                                                        {getTranslatedText('移民政策', 'Immigration Policy', 'Politique d\'immigration', '移民政策')} 
                                                        <span>{news.filter(n => getNewsTranslation(n, 'category', currentLanguage).includes('移民政策')).length}</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link 
                                                        href="#" 
                                                        onClick={(e) => { e.preventDefault(); setSelectedCategory('法语学习'); }}
                                                        className={selectedCategory === '法语学习' ? 'active' : ''}
                                                    >
                                                        {getTranslatedText('法语学习', 'French Learning', 'Apprentissage français', '法語學習')} 
                                                        <span>{news.filter(n => getNewsTranslation(n, 'category', currentLanguage).includes('法语学习')).length}</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link 
                                                        href="#" 
                                                        onClick={(e) => { e.preventDefault(); setSelectedCategory('成功案例'); }}
                                                        className={selectedCategory === '成功案例' ? 'active' : ''}
                                                    >
                                                        {getTranslatedText('成功案例', 'Success Stories', 'Histoires de succès', '成功案例')} 
                                                        <span>{news.filter(n => getNewsTranslation(n, 'category', currentLanguage).includes('成功案例')).length}</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    {featuredNews.length > 0 && (
                                        <div className="single-sidebar-widget">
                                            <div className="wid-title">
                                                <h3>{getTranslatedText('精选文章', 'Featured Articles', 'Articles en Vedette', '精選文章')}</h3>
                                            </div>
                                            <div className="tagcloud">
                                                {featuredNews.slice(0, 5).map((article) => (
                                                    <Link key={article.id} href={`/news-details?id=${article.id}`}>
                                                        {getNewsTranslation(article, 'title', currentLanguage).length > 25 
                                                            ? getNewsTranslation(article, 'title', currentLanguage).substring(0, 25) + '...'
                                                            : getNewsTranslation(article, 'title', currentLanguage)}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsArea;