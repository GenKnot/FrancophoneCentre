"use client";

import React, {createContext, useContext, useState, useEffect, ReactNode} from 'react';
import { API_BASE_URL } from '../../constants/api';

interface Translation {
    [key: string]: any;
}

interface Language {
    code: string;
    name: string;
}

interface LanguageContextType {
    currentLanguage: string;
    translations: Translation;
    availableLanguages: Language[];
    changeLanguage: (language: string) => void;
    t: (key: string, defaultValue?: string) => string;
    loading: boolean;
    isHydrated: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

const getBrowserLanguage = (): string => {
    if (typeof window === 'undefined') return 'en';
    
    const browserLang = navigator.language || navigator.languages?.[0] || 'en';
    const langCode = browserLang.toLowerCase();
    
    if (langCode.startsWith('zh-hans') || langCode === 'zh-cn' || langCode === 'zh') {
        return 'zh-hans';
    }
    if (langCode.startsWith('zh-hant') || langCode === 'zh-tw' || langCode === 'zh-hk') {
        return 'zh-hant';
    }
    if (langCode.startsWith('fr')) {
        return 'fr';
    }
    return 'en';
};

const getLanguageFromURL = (): string | null => {
    if (typeof window === 'undefined') return null;
    
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    
    const validLanguages = ['en', 'fr', 'zh-hans', 'zh-hant'];
    if (langParam && validLanguages.includes(langParam)) {
        return langParam;
    }
    return null;
};

const getClientLanguage = (): string => {
    if (typeof window === 'undefined') return 'en';
    
    const urlLang = getLanguageFromURL();
    if (urlLang) return urlLang;
    
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang) return savedLang;
    
    return getBrowserLanguage();
};

const getInitialLanguage = (): string => {
    if (typeof window === 'undefined') {
        return 'en';
    }
    
    return getClientLanguage();
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({children}) => {
    const [currentLanguage, setCurrentLanguage] = useState<string>(getInitialLanguage);
    const [translations, setTranslations] = useState<Translation>({});
    const [availableLanguages, setAvailableLanguages] = useState<Language[]>([
        {code: 'zh-hans', name: '简体中文'},
        {code: 'zh-hant', name: '繁體中文'},
        {code: 'en', name: 'English'},
        {code: 'fr', name: 'Français'}
    ]);
    const [loading, setLoading] = useState<boolean>(false);
    const [isHydrated, setIsHydrated] = useState<boolean>(false);

    const fetchTranslations = async (language: string) => {
        try {
            setLoading(true);
            const response = await fetch(`${API_BASE_URL}/api/translations/?lang=${language}`);
            if (response.ok) {
                const data = await response.json();
                setTranslations(data.translations || {});
            }
        } catch (error) {
            console.error('Failed to fetch translations:', error);
            setTranslations(getDefaultTranslations(language));
        } finally {
            setLoading(false);
        }
    };

    const getDefaultTranslations = (language: string): Translation => {
        const defaultTranslations: { [key: string]: Translation } = {
            'zh-hans': {
                navigation: {
                    home: '主页',
                    about: '关于我们',
                    courses: '课程',
                    events: '活动',
                    news: '新闻',
                    contact: '联系我们'
                },
                common: {
                    loading: '加载中...',
                    learn_more: '了解更多',
                    view_details: '查看详情',
                    get_started: '开始'
                },
                hero: {
                    slide1: {
                        subtitle: '快速移民首选',
                        title: '开启您的法语学习之旅',
                        button_text: '立即开始学习法语'
                    }
                }
            },
            'en': {
                navigation: {
                    home: 'Home',
                    about: 'About',
                    courses: 'Courses',
                    events: 'Events',
                    news: 'News',
                    contact: 'Contact'
                },
                common: {
                    loading: 'Loading...',
                    learn_more: 'Learn More',
                    view_details: 'View Details',
                    get_started: 'Get Started'
                },
                hero: {
                    slide1: {
                        subtitle: 'Fast Immigration Choice',
                        title: 'Start Your French Learning Journey',
                        button_text: 'Start Learning French Now'
                    }
                }
            }
        };

        return defaultTranslations[language] || defaultTranslations['en'];
    };

    const changeLanguage = (language: string) => {
        setCurrentLanguage(language);
        if (typeof window !== 'undefined') {
            localStorage.setItem('preferred-language', language);
            
            const url = new URL(window.location.href);
            url.searchParams.set('lang', language);
            window.history.replaceState({}, '', url.toString());
        }
        fetchTranslations(language);
    };

    const t = (key: string, defaultValue?: string): string => {
        const keys = key.split('.');
        let result: any = translations;

        for (const k of keys) {
            if (result && typeof result === 'object' && k in result) {
                result = result[k];
            } else {
                return defaultValue || key;
            }
        }

        return typeof result === 'string' ? result : defaultValue || key;
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const detectedLang = getClientLanguage();
            if (detectedLang !== currentLanguage) {
                setCurrentLanguage(detectedLang);
            }
            
            fetchTranslations(detectedLang);
            setIsHydrated(true);
        }
    }, []);

    useEffect(() => {
        if (!isHydrated) return;

        const handleUrlChange = () => {
            const urlLang = getLanguageFromURL();
            if (urlLang && urlLang !== currentLanguage) {
                setCurrentLanguage(urlLang);
                localStorage.setItem('preferred-language', urlLang);
                fetchTranslations(urlLang);
            }
        };

        window.addEventListener('popstate', handleUrlChange);
        
        return () => {
            window.removeEventListener('popstate', handleUrlChange);
        };
    }, [currentLanguage, isHydrated]);

    const value: LanguageContextType = {
        currentLanguage,
        translations,
        availableLanguages,
        changeLanguage,
        t,
        loading,
        isHydrated,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};