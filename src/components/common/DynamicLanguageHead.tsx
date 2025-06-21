"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { getPageMetadata } from '@/utils/utils';

const DynamicLanguageHead = () => {
    const { currentLanguage } = useLanguage();
    const pathname = usePathname();

    const getPageName = (path: string) => {
        if (path === '/') return 'home';
        if (path.startsWith('/about')) return 'about';
        if (path.startsWith('/courses')) return 'courses';
        if (path.startsWith('/contact')) return 'contact';
        if (path.startsWith('/event')) return 'event';
        if (path.startsWith('/faq')) return 'faq';
        if (path.startsWith('/gallery')) return 'gallery';
        if (path.startsWith('/news')) return 'news';
        if (path.startsWith('/register')) return 'register';
        if (path.startsWith('/sign-in')) return 'sign-in';
        return 'home';
    };

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.lang = currentLanguage;
            
            const pageName = getPageName(pathname);
            const pageMetadata = getPageMetadata(pageName, currentLanguage);
            
            document.title = pageMetadata.title;
            
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', pageMetadata.description);
            }
            
            const ogTitle = document.querySelector('meta[property="og:title"]');
            if (ogTitle) {
                ogTitle.setAttribute('content', pageMetadata.title);
            }
            
            const ogDescription = document.querySelector('meta[property="og:description"]');
            if (ogDescription) {
                ogDescription.setAttribute('content', pageMetadata.description);
            }
            
            const twitterTitle = document.querySelector('meta[name="twitter:title"]');
            if (twitterTitle) {
                twitterTitle.setAttribute('content', pageMetadata.title.split(' | ')[0]);
            }
            
            const twitterDescription = document.querySelector('meta[name="twitter:description"]');
            if (twitterDescription) {
                twitterDescription.setAttribute('content', pageMetadata.description.substring(0, 160));
            }
        }
    }, [currentLanguage, pathname]);

    return null;
};

export default DynamicLanguageHead; 