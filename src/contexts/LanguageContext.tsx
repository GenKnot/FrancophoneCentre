"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
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

const getClientLanguage = (): string => {
    if (typeof window === 'undefined') {
        return 'en';
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    
    if (langParam) {
        if (langParam === 'zh-Hans' || langParam === 'zh-hans' || langParam === 'zh-CN') {
            return 'zh-hans';
        }
        if (langParam === 'zh-Hant' || langParam === 'zh-hant' || langParam === 'zh-TW') {
            return 'zh-hant';
        }
        if (langParam === 'fr') {
            return 'fr';
        }
        if (langParam === 'en') {
            return 'en';
        }
    }
    
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang) {
        if (savedLang === 'zh-Hans' || savedLang === 'zh-hans' || savedLang === 'zh-CN') {
            return 'zh-hans';
        }
        if (savedLang === 'zh-Hant' || savedLang === 'zh-hant' || savedLang === 'zh-TW') {
            return 'zh-hant';
        }
        if (savedLang === 'fr') {
            return 'fr';
        }
        if (savedLang === 'en') {
            return 'en';
        }
    }
    
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

const getDefaultTranslations = (language: string): Translation => {
    const defaultTranslations: { [key: string]: Translation } = {
        'zh-hans': {
            navigation: {
                home: '主页',
                about: '关于我们',
                courses: '课程',
                events: '活动',
                news: '新闻',
                contact: '联系我们',
                gallery: '画廊',
                faq: '常见问题'
            },
            courses: {
                title: '所有课程',
                types: {
                    basic: '基础课程',
                    exam_prep: '考试准备',
                    combo: '套餐课程',
                    vip: 'VIP课程'
                }
            },
            common: {
                loading: '加载中...',
                learn_more: '了解更多',
                view_details: '查看详情',
                get_started: '开始',
                showing: '显示',
                of: '共',
                courses_count: '门课程',
                no_data: '暂无数据',
                error: '出现错误'
            }
        },
        'zh-hant': {
            navigation: {
                home: '主頁',
                about: '關於我們',
                courses: '課程',
                events: '活動',
                news: '新聞',
                contact: '聯繫我們',
                gallery: '畫廊',
                faq: '常見問題'
            },
            courses: {
                title: '所有課程',
                types: {
                    basic: '基礎課程',
                    exam_prep: '考試準備',
                    combo: '套餐課程',
                    vip: 'VIP課程'
                }
            },
            common: {
                loading: '載入中...',
                learn_more: '了解更多',
                view_details: '查看詳情',
                get_started: '開始',
                showing: '顯示',
                of: '共',
                courses_count: '門課程',
                no_data: '暫無數據',
                error: '出現錯誤'
            }
        },
        'fr': {
            navigation: {
                home: 'Accueil',
                about: 'À propos',
                courses: 'Cours',
                events: 'Événements',
                news: 'Nouvelles',
                contact: 'Contact',
                gallery: 'Galerie',
                faq: 'FAQ'
            },
            courses: {
                title: 'Tous les Cours',
                types: {
                    basic: 'Cours de Base',
                    exam_prep: 'Préparation aux Examens',
                    combo: 'Forfait Combo',
                    vip: 'Cours VIP'
                }
            },
            common: {
                loading: 'Chargement...',
                learn_more: 'En savoir plus',
                view_details: 'Voir les détails',
                get_started: 'Commencer',
                showing: 'Affichage',
                of: 'de',
                courses_count: 'cours',
                no_data: 'Aucune donnée',
                error: 'Une erreur est survenue'
            }
        },
        'en': {
            navigation: {
                home: 'Home',
                about: 'About',
                courses: 'Courses',
                events: 'Events',
                news: 'News',
                contact: 'Contact',
                gallery: 'Gallery',
                faq: 'FAQ'
            },
            courses: {
                title: 'All Courses',
                types: {
                    basic: 'Basic Courses',
                    exam_prep: 'Exam Preparation',
                    combo: 'Combo Package',
                    vip: 'VIP Course'
                }
            },
            common: {
                loading: 'Loading...',
                learn_more: 'Learn More',
                view_details: 'View Details',
                get_started: 'Get Started',
                showing: 'Showing',
                of: 'of',
                courses_count: 'courses',
                no_data: 'No data available',
                error: 'An error occurred'
            }
        }
    };

    return defaultTranslations[language] || defaultTranslations['en'];
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({children}) => {
    const [currentLanguage, setCurrentLanguage] = useState<string>('en');
    const [translations, setTranslations] = useState<Translation>(getDefaultTranslations('en'));
    
    const [availableLanguages, setAvailableLanguages] = useState<Language[]>([
        {code: 'en', name: 'English'},
        {code: 'zh-hans', name: '简体中文'},
        {code: 'zh-hant', name: '繁體中文'},
        {code: 'fr', name: 'Français'}
    ]);
    const [loading, setLoading] = useState<boolean>(false);
    const [isHydrated, setIsHydrated] = useState<boolean>(false);
    
    const fetchTranslations = async (language: string) => {
        try {
            setLoading(true);
            const backendLanguage = language === 'zh-hans' ? 'zh-Hans' : language;
            const url = `${API_BASE_URL}/api/homepage/?lang=${backendLanguage}`;
            
            const response = await fetch(url);
            
            if (response.ok) {
                const data = await response.json();
                
                if (data.translations) {
                    const defaultTrans = getDefaultTranslations(language);
                    const mergedTranslations = {
                        ...defaultTrans,
                        ...data.translations,
                        navigation: {
                            ...defaultTrans.navigation,
                            ...(data.translations.navigation || {})
                        },
                        courses: {
                            ...defaultTrans.courses,
                            ...(data.translations.courses || {}),
                            // Map page_title from API to title for consistency
                            title: data.translations.courses?.page_title || defaultTrans.courses?.title,
                            types: {
                                ...defaultTrans.courses?.types,
                                ...(data.translations.courses?.types || {})
                            }
                        },
                        common: {
                            ...defaultTrans.common,
                            ...(data.translations.common || {})
                        }
                    };
                    setTranslations(mergedTranslations);
                } else {
                    setTranslations(getDefaultTranslations(language));
                }
            } else {
                setTranslations(getDefaultTranslations(language));
            }
        } catch (error) {
            setTranslations(getDefaultTranslations(language));
        } finally {
            setLoading(false);
        }
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
        if (!isHydrated) {
            const currentTranslations = getDefaultTranslations(currentLanguage);
            const keys = key.split('.');
            let result: any = currentTranslations;
            
            for (const k of keys) {
                if (result && typeof result === 'object' && k in result) {
                    result = result[k];
                } else {
                    return defaultValue || key;
                }
            }
            
            return typeof result === 'string' ? result : defaultValue || key;
        }
        
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
        if (typeof window !== 'undefined' && !isHydrated) {
            setIsHydrated(true);
            
            const detectedLang = getClientLanguage();
            
            setCurrentLanguage(detectedLang);
            fetchTranslations(detectedLang);
        }
    }, [isHydrated]);
    
    useEffect(() => {
        if (typeof window !== 'undefined' && isHydrated) {
            const handleUrlChange = () => {
                const detectedLang = getClientLanguage();
                if (detectedLang !== currentLanguage) {
                    setCurrentLanguage(detectedLang);
                    fetchTranslations(detectedLang);
                }
            };
            
            window.addEventListener('popstate', handleUrlChange);
            
            return () => {
                window.removeEventListener('popstate', handleUrlChange);
            };
        }
    }, [isHydrated, currentLanguage]);

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