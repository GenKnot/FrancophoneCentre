import { useState, useEffect } from 'react';
import { ENDPOINTS } from '../../constants/api';
import { useLanguage } from '@/contexts/LanguageContext';

interface NewsArticle {
    id: number;
    title: string;
    title_zh_Hans?: string;
    title_zh_hant?: string;
    title_fr?: string;
    subtitle?: string;
    subtitle_zh_Hans?: string;
    subtitle_zh_hant?: string;
    subtitle_fr?: string;
    content: string;
    content_zh_Hans?: string;
    content_zh_hant?: string;
    content_fr?: string;
    excerpt: string;
    excerpt_zh_Hans?: string;
    excerpt_zh_hant?: string;
    excerpt_fr?: string;
    author?: string;
    author_zh_Hans?: string;
    author_zh_hant?: string;
    author_fr?: string;
    category?: string;
    category_zh_Hans?: string;
    category_zh_hant?: string;
    category_fr?: string;
    tags?: string;
    tags_zh_Hans?: string;
    tags_zh_hant?: string;
    tags_fr?: string;
    published_date: string;
    is_published?: boolean;
    is_featured?: boolean;
    order?: number;
    view_count?: number;
    featured_image?: string;
    created_at?: string;
    updated_at?: string;
}

interface UseNewsReturn {
    news: NewsArticle[];
    loading: boolean;
    error: string | null;
    featuredNews: NewsArticle[];
}

interface UseNewsArticleReturn {
    newsArticle: NewsArticle | null;
    loading: boolean;
    error: string | null;
}

export const useNews = (): UseNewsReturn => {
    const [news, setNews] = useState<NewsArticle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { currentLanguage } = useLanguage();

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                const url = `${ENDPOINTS.NEWS.LIST}?lang=${currentLanguage}`;
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                
                // Handle both paginated and non-paginated responses
                const newsData = data.results || data;
                
                if (!Array.isArray(newsData)) {
                    throw new Error('Invalid data format received from API');
                }
                
                const processedNews = newsData.map((article: any) => ({
                    ...article,
                    is_published: article.is_published ?? true,
                    is_featured: article.is_featured ?? false,
                    author: article.author ?? 'QFEC Editorial',
                    category: article.category ?? '法语资讯',
                    view_count: article.view_count ?? 0,
                    order: article.order ?? 0,
                }));
                
                setNews(processedNews);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch news');
                setNews([]);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [currentLanguage]);

    const featuredNews = news.filter(article => article.is_featured && (article.is_published !== false));
    const publishedNews = news.filter(article => article.is_published !== false);

    return { news: publishedNews, loading, error, featuredNews };
};

export const useNewsArticle = (id: number): UseNewsArticleReturn => {
    const [newsArticle, setNewsArticle] = useState<NewsArticle | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { currentLanguage } = useLanguage();

    useEffect(() => {
        if (!id) {
            setLoading(false);
            return;
        }

        const fetchNewsArticle = async () => {
            try {
                setLoading(true);
                const url = `${ENDPOINTS.NEWS.DETAIL(id)}?lang=${currentLanguage}`;
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                
                const processedArticle = {
                    ...data,
                    is_published: data.is_published ?? true,
                    is_featured: data.is_featured ?? false,
                    author: data.author ?? 'QFEC Editorial',
                    category: data.category ?? '法语资讯',
                    view_count: data.view_count ?? 0,
                    order: data.order ?? 0,
                };
                
                setNewsArticle(processedArticle);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch news article');
                setNewsArticle(null);
            } finally {
                setLoading(false);
            }
        };

        fetchNewsArticle();
    }, [id, currentLanguage]);

    return { newsArticle, loading, error };
}; 