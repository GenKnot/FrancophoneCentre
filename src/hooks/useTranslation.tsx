"use client";

import { useLanguage } from '@/contexts/LanguageContext';

const getClientLanguageForFallback = (): string => {
    if (typeof window === 'undefined') return 'en';
    
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    const validLanguages = ['en', 'fr', 'zh-hans', 'zh-hant'];
    if (langParam && validLanguages.includes(langParam)) {
        return langParam;
    }
    
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && validLanguages.includes(savedLang)) {
        return savedLang;
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

export const useTranslation = () => {
    const { currentLanguage, t: apiT, isHydrated } = useLanguage();

    const effectiveLanguage = isHydrated ? currentLanguage : getClientLanguageForFallback();

    const fallbackTranslations: { [key: string]: { [key: string]: string } } = {
        'zh-hans': {
            'nav.home': '主页',
            'nav.about': '关于我们',
            'nav.courses': '课程',
            'nav.events': '活动',
            'nav.news': '新闻',
            'nav.contact': '联系我们',
            'nav.register': '注册',
            'nav.signin': '登录',
            'nav.gallery': '画廊',
            'nav.faq': '常见问题',
            
            'common.loading': '加载中...',
            'common.learn_more': '了解更多',
            'common.view_details': '查看详情',
            'common.get_started': '开始',
            'common.read_more': '阅读更多',
            'common.contact_us': '联系我们',
            'common.subscribe': '订阅',
            'common.submit': '提交',
            'common.search': '搜索',
            'common.close': '关闭',
            'common.back': '返回',
            'common.next': '下一个',
            'common.previous': '上一个',
            
            'about.section_title': '关于QFEC',
            'about.title': '加拿大魁北克法语教育中心',
            'about.description': '魁北克法语教育中心（QFEC）成立于1991年，是加拿大政府指导下的专业法语教学机构。总部位于蒙特利尔，由现任TEF考官直接授课，致力于为学生提供最优质的法语教育，助力实现移民梦想。',
            'about.button_text': '了解更多详情',
            
            'courses.section_title': '热门课程',
            'courses.title': '选择适合您的法语课程',
            'courses.description': '我们提供多种类型的法语课程，满足不同学习需求',
            'courses.tabs.basic': '基础课程',
            'courses.tabs.exam_prep': '考试备考',
            'courses.tabs.combo': '组合套餐',
            'courses.tabs.vip': 'VIP课程',
            'courses.view_all': '查看所有课程',
            
            'news.section_title': '最新资讯',
            'news.title': '法语移民 · 生活指南 · 政策解读',
            'news.view_all': '查看所有新闻',
            
            'contact.title': '联系我们',
            'contact.description': '有任何问题请随时联系我们',
            'contact.address': '地址',
            'contact.phone': '电话',
            'contact.email': '邮箱',
            'contact.hours': '营业时间',
            
            'faq.title': '常见问题',
            'faq.subtitle': '解答疑虑，让学习安心',
            
            'gallery.title': '画廊',
            'gallery.subtitle': '探索我们的学习环境',
            
            'events.title': '活动',
            'events.subtitle': '参加我们的精彩活动',
            'events.view_all': '查看所有活动',
            
            'form.name': '姓名',
            'form.email': '邮箱',
            'form.phone': '电话',
            'form.message': '留言',
            'form.subject': '主题',
            'form.send': '发送',
            'form.required': '必填项',
            
            'status.success': '成功',
            'status.error': '错误',
            'status.warning': '警告',
            'status.info': '信息',
        },
        'zh-hant': {
            'nav.home': '主頁',
            'nav.about': '關於我們',
            'nav.courses': '課程',
            'nav.events': '活動',
            'nav.news': '新聞',
            'nav.contact': '聯繫我們',
            'nav.register': '註冊',
            'nav.signin': '登入',
            'nav.gallery': '畫廊',
            'nav.faq': '常見問題',
            
            'common.loading': '載入中...',
            'common.learn_more': '了解更多',
            'common.view_details': '查看詳情',
            'common.get_started': '開始',
            'common.read_more': '閱讀更多',
            'common.contact_us': '聯繫我們',
            'common.subscribe': '訂閱',
            'common.submit': '提交',
            'common.search': '搜尋',
            'common.close': '關閉',
            'common.back': '返回',
            'common.next': '下一個',
            'common.previous': '上一個',
            
            'about.section_title': '關於QFEC',
            'about.title': '加拿大魁北克法語教育中心',
            'about.description': '魁北克法語教育中心（QFEC）成立於1991年，是加拿大政府指導下的專業法語教學機構。總部位於蒙特利爾，由現任TEF考官直接授課，致力於為學生提供最優質的法語教育，助力實現移民夢想。',
            'about.button_text': '了解更多詳情',
            
            'courses.section_title': '熱門課程',
            'courses.title': '選擇適合您的法語課程',
            'courses.description': '我們提供多種類型的法語課程，滿足不同學習需求',
            'courses.tabs.basic': '基礎課程',
            'courses.tabs.exam_prep': '考試備考',
            'courses.tabs.combo': '組合套餐',
            'courses.tabs.vip': 'VIP課程',
            'courses.view_all': '查看所有課程',
            
            'news.section_title': '最新資訊',
            'news.title': '法語移民 · 生活指南 · 政策解讀',
            'news.view_all': '查看所有新聞',
            
            'contact.title': '聯繫我們',
            'contact.description': '有任何問題請隨時聯繫我們',
            'contact.address': '地址',
            'contact.phone': '電話',
            'contact.email': '郵箱',
            'contact.hours': '營業時間',
            
            'faq.title': '常見問題',
            'faq.subtitle': '解答疑慮，讓學習安心',
            
            'gallery.title': '畫廊',
            'gallery.subtitle': '探索我們的學習環境',
            
            'events.title': '活動',
            'events.subtitle': '參加我們的精彩活動',
            'events.view_all': '查看所有活動',
            
            'form.name': '姓名',
            'form.email': '郵箱',
            'form.phone': '電話',
            'form.message': '留言',
            'form.subject': '主題',
            'form.send': '發送',
            'form.required': '必填項',
            
            'status.success': '成功',
            'status.error': '錯誤',
            'status.warning': '警告',
            'status.info': '信息',
        },
        'fr': {
            'nav.home': 'Accueil',
            'nav.about': 'À propos',
            'nav.courses': 'Cours',
            'nav.events': 'Événements',
            'nav.news': 'Nouvelles',
            'nav.contact': 'Contact',
            'nav.register': 'S\'inscrire',
            'nav.signin': 'Se connecter',
            'nav.gallery': 'Galerie',
            'nav.faq': 'FAQ',
            
            'common.loading': 'Chargement...',
            'common.learn_more': 'En savoir plus',
            'common.view_details': 'Voir les détails',
            'common.get_started': 'Commencer',
            'common.read_more': 'Lire plus',
            'common.contact_us': 'Nous contacter',
            'common.subscribe': 'S\'abonner',
            'common.submit': 'Soumettre',
            'common.search': 'Rechercher',
            'common.close': 'Fermer',
            'common.back': 'Retour',
            'common.next': 'Suivant',
            'common.previous': 'Précédent',
            
            'about.section_title': 'À propos de QFEC',
            'about.title': 'Centre d\'Éducation Francophone du Québec Canada',
            'about.description': 'Le Centre d\'Éducation Francophone du Québec (QFEC) a été établi en 1991, c\'est une institution professionnelle d\'enseignement du français sous la direction du gouvernement canadien. Basé à Montréal, enseigné directement par les examinateurs TEF actuels, engagé à fournir aux étudiants l\'éducation française de la plus haute qualité pour aider à réaliser les rêves d\'immigration.',
            'about.button_text': 'En savoir plus',
            
            'courses.section_title': 'Cours populaires',
            'courses.title': 'Choisissez le cours de français qui vous convient',
            'courses.description': 'Nous offrons différents types de cours de français pour répondre à différents besoins d\'apprentissage',
            'courses.tabs.basic': 'Cours de base',
            'courses.tabs.exam_prep': 'Préparation aux examens',
            'courses.tabs.combo': 'Forfait combo',
            'courses.tabs.vip': 'Cours VIP',
            'courses.view_all': 'Voir tous les cours',
            
            'news.section_title': 'Dernières nouvelles',
            'news.title': 'Immigration française · Guide de vie · Analyse des politiques',
            'news.view_all': 'Voir toutes les nouvelles',
            
            'contact.title': 'Nous contacter',
            'contact.description': 'N\'hésitez pas à nous contacter pour toute question',
            'contact.address': 'Adresse',
            'contact.phone': 'Téléphone',
            'contact.email': 'Email',
            'contact.hours': 'Heures d\'ouverture',
            
            'faq.title': 'FAQ',
            'faq.subtitle': 'Clarifier les doutes, apprendre en toute confiance',
            
            'gallery.title': 'Galerie',
            'gallery.subtitle': 'Explorez notre environnement d\'apprentissage',
            
            'events.title': 'Événements',
            'events.subtitle': 'Rejoignez nos événements passionnants',
            'events.view_all': 'Voir tous les événements',
            
            'form.name': 'Nom',
            'form.email': 'Email',
            'form.phone': 'Téléphone',
            'form.message': 'Message',
            'form.subject': 'Sujet',
            'form.send': 'Envoyer',
            'form.required': 'Obligatoire',
            
            'status.success': 'Succès',
            'status.error': 'Erreur',
            'status.warning': 'Avertissement',
            'status.info': 'Information',
        },
        'en': {
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.courses': 'Courses',
            'nav.events': 'Events',
            'nav.news': 'News',
            'nav.contact': 'Contact',
            'nav.register': 'Register',
            'nav.signin': 'Sign In',
            'nav.gallery': 'Gallery',
            'nav.faq': 'FAQ',
            
            'common.loading': 'Loading...',
            'common.learn_more': 'Learn More',
            'common.view_details': 'View Details',
            'common.get_started': 'Get Started',
            'common.read_more': 'Read More',
            'common.contact_us': 'Contact Us',
            'common.subscribe': 'Subscribe',
            'common.submit': 'Submit',
            'common.search': 'Search',
            'common.close': 'Close',
            'common.back': 'Back',
            'common.next': 'Next',
            'common.previous': 'Previous',
            
            'about.section_title': 'About QFEC',
            'about.title': 'Quebec Francophone Education Centre Canada',
            'about.description': 'Quebec Francophone Education Centre (QFEC) was established in 1991, is a professional French teaching institution under the guidance of the Canadian government. Headquartered in Montreal, taught directly by current TEF examiners, committed to providing students with the highest quality French education to help realize immigration dreams.',
            'about.button_text': 'Learn More Details',
            
            'courses.section_title': 'Popular Courses',
            'courses.title': 'Choose the French Course That\'s Right for You',
            'courses.description': 'We offer various types of French courses to meet different learning needs',
            'courses.tabs.basic': 'Basic Courses',
            'courses.tabs.exam_prep': 'Exam Preparation',
            'courses.tabs.combo': 'Combo Package',
            'courses.tabs.vip': 'VIP Course',
            'courses.view_all': 'View All Courses',
            
            'news.section_title': 'Latest News',
            'news.title': 'French Immigration · Life Guide · Policy Analysis',
            'news.view_all': 'View All News',
            
            'contact.title': 'Contact Us',
            'contact.description': 'Feel free to contact us with any questions',
            'contact.address': 'Address',
            'contact.phone': 'Phone',
            'contact.email': 'Email',
            'contact.hours': 'Business Hours',
            
            'faq.title': 'FAQ',
            'faq.subtitle': 'Clear Doubts, Learn with Confidence',
            
            'gallery.title': 'Gallery',
            'gallery.subtitle': 'Explore Our Learning Environment',
            
            'events.title': 'Events',
            'events.subtitle': 'Join Our Exciting Events',
            'events.view_all': 'View All Events',
            
            'form.name': 'Name',
            'form.email': 'Email',
            'form.phone': 'Phone',
            'form.message': 'Message',
            'form.subject': 'Subject',
            'form.send': 'Send',
            'form.required': 'Required',
            
            'status.success': 'Success',
            'status.error': 'Error',
            'status.warning': 'Warning',
            'status.info': 'Information',
        }
    };

    const t = (key: string, defaultValue?: string): string => {
        if (typeof window === 'undefined') {
            const englishFallback = fallbackTranslations['en']?.[key];
            return englishFallback || defaultValue || key;
        }
        
        if (isHydrated) {
            const apiTranslation = apiT(key);
            if (apiTranslation && apiTranslation !== key) {
                return apiTranslation;
            }
        }
        
        const fallback = fallbackTranslations[effectiveLanguage]?.[key];
        if (fallback) {
            return fallback;
        }
        
        const englishFallback = fallbackTranslations['en']?.[key];
        if (englishFallback) {
            return englishFallback;
        }
        
        return defaultValue || key;
    };

    const getTranslatedText = (zhText: string, enText: string, frText: string = enText, zhHantText: string = zhText): string => {
        if (typeof window === 'undefined') {
            return enText;
        }
        
        switch (effectiveLanguage) {
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

    return {
        t,
        getTranslatedText,
        currentLanguage: effectiveLanguage,
        isHydrated
    };
}; 