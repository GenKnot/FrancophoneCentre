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

type NewsTranslatableField = 'title' | 'subtitle' | 'content' | 'excerpt' | 'author' | 'category' | 'tags';

export const getNewsTranslation = (
    newsArticle: NewsArticle, 
    field: NewsTranslatableField, 
    language: string
): string => {
    if (!newsArticle) return '';
    
    switch (language) {
        case 'zh-hans':
            const zhHansField = `${field}_zh_Hans` as keyof NewsArticle;
            return (newsArticle[zhHansField] as string) || (newsArticle[field] as string) || '';
        case 'zh-hant':
            const zhHantField = `${field}_zh_hant` as keyof NewsArticle;
            return (newsArticle[zhHantField] as string) || (newsArticle[field] as string) || '';
        case 'fr':
            const frField = `${field}_fr` as keyof NewsArticle;
            return (newsArticle[frField] as string) || (newsArticle[field] as string) || '';
        case 'en':
        default:
            return (newsArticle[field] as string) || '';
    }
};

export const formatNewsDate = (dateString: string, language: string): string => {
    const date = new Date(dateString);
    
    switch (language) {
        case 'zh-hans':
            return date.toLocaleDateString('zh-CN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        case 'zh-hant':
            return date.toLocaleDateString('zh-TW', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        case 'fr':
            return date.toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        case 'en':
        default:
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
    }
};

export const formatNewsDateShort = (dateString: string, language: string): string => {
    if (!dateString) return '';
    
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        
        switch (language) {
            case 'zh-hans':
                return date.toLocaleDateString('zh-CN', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });
            case 'zh-hant':
                return date.toLocaleDateString('zh-TW', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });
            case 'fr':
                return date.toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });
            case 'en':
            default:
                return date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });
        }
    } catch (error) {
        console.error('Error formatting date:', error);
        return dateString;
    }
};

export const getNewsViewCountDisplay = (count: number, language: string): string => {
    switch (language) {
        case 'zh-hans':
            return `${count}次阅读`;
        case 'zh-hant':
            return `${count}次閱讀`;
        case 'fr':
            return `${count} vues`;
        case 'en':
        default:
            return `${count} views`;
    }
};

export const getCategoryDisplay = (category: string, language: string): string => {
    if (!category) return '';
    
    // Category translations
    const categoryTranslations: Record<string, Record<string, string>> = {
        'Immigration': {
            'zh-hans': '移民政策',
            'zh-hant': '移民政策',
            'fr': 'Immigration',
            'en': 'Immigration'
        },
        'Education': {
            'zh-hans': '法语学习',
            'zh-hant': '法語學習',
            'fr': 'Éducation',
            'en': 'Education'
        },
        'Success': {
            'zh-hans': '成功案例',
            'zh-hant': '成功案例',
            'fr': 'Succès',
            'en': 'Success Stories'
        }
    };

    // Try to find a translation
    for (const [key, translations] of Object.entries(categoryTranslations)) {
        if (category.includes(key) || Object.values(translations).some(t => category.includes(t))) {
            return translations[language] || translations['en'] || category;
        }
    }
    
    return category;
};

export const isNewsRecent = (newsArticle: NewsArticle, daysThreshold: number = 7): boolean => {
    const publishedDate = new Date(newsArticle.published_date);
    const currentDate = new Date();
    const daysDifference = Math.floor((currentDate.getTime() - publishedDate.getTime()) / (1000 * 60 * 60 * 24));
    
    return daysDifference <= daysThreshold;
};

export const getRelativeTimeString = (dateString: string, language: string): string => {
    if (!dateString) return '';
    
    try {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = now.getTime() - date.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
        const diffMinutes = Math.floor(diffTime / (1000 * 60));
        
        if (diffDays > 30) {
            return formatNewsDateShort(dateString, language);
        } else if (diffDays > 0) {
            switch (language) {
                case 'zh-hans':
                    return `${diffDays}天前`;
                case 'zh-hant':
                    return `${diffDays}天前`;
                case 'fr':
                    return `il y a ${diffDays} jour${diffDays > 1 ? 's' : ''}`;
                case 'en':
                default:
                    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
            }
        } else if (diffHours > 0) {
            switch (language) {
                case 'zh-hans':
                    return `${diffHours}小时前`;
                case 'zh-hant':
                    return `${diffHours}小時前`;
                case 'fr':
                    return `il y a ${diffHours} heure${diffHours > 1 ? 's' : ''}`;
                case 'en':
                default:
                    return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
            }
        } else if (diffMinutes > 0) {
            switch (language) {
                case 'zh-hans':
                    return `${diffMinutes}分钟前`;
                case 'zh-hant':
                    return `${diffMinutes}分鐘前`;
                case 'fr':
                    return `il y a ${diffMinutes} minute${diffMinutes > 1 ? 's' : ''}`;
                case 'en':
                default:
                    return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
            }
        } else {
            switch (language) {
                case 'zh-hans':
                    return '刚刚';
                case 'zh-hant':
                    return '剛剛';
                case 'fr':
                    return 'À l\'instant';
                case 'en':
                default:
                    return 'Just now';
            }
        }
    } catch (error) {
        console.error('Error getting relative time:', error);
        return formatNewsDateShort(dateString, language);
    }
}; 