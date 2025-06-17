"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

const NavMenu = () => {
    const { t, isHydrated, currentLanguage } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Fixed translations for SSR
    const getFixedTranslation = (key: string, zhText: string, enText: string, frText: string = enText, zhHantText: string = zhText) => {
        if (!isMounted) {
            // During SSR, use current language from context
            switch (currentLanguage) {
                case 'zh-hans':
                    return zhText;
                case 'zh-hant':
                    return zhHantText;
                case 'fr':
                    return frText;
                default:
                    return enText;
            }
        }
        return t(key, enText);
    };

    // Generate menu items with proper translations
    const getMenuItems = () => [
        {
            id: 1,
            title: getFixedTranslation('navigation.home', '主页', 'Home', 'Accueil', '主頁'),
            link: "/",
            icon: "fas fa-home-lg",
        },
        {
            id: 2,
            title: getFixedTranslation('navigation.about', '关于我们', 'About', 'À propos', '關於我們'),
            link: "/about",
            icon: "fas fa-user",
        },
        {
            id: 3,
            title: getFixedTranslation('navigation.courses', '课程', 'Courses', 'Cours', '課程'),
            link: "/courses",
            icon: "fas fa-book",
        },
        {
            id: 5,
            title: getFixedTranslation('navigation.news', '新闻', 'News', 'Nouvelles', '新聞'),
            link: "/news",
            icon: "fas fa-newspaper",
        },
        {
            id: 6,
            title: getFixedTranslation('navigation.contact', '联系我们', 'Contact Us', 'Contact', '聯繫我們'),
            link: "/contact",
            icon: "fas fa-phone-rotary",
        },
    ];

    const menuItems = getMenuItems();

    // Prevent hydration mismatch by showing proper titles during SSR
    if (!isMounted) {
        return (
            <ul>
                {menuItems.map((item) => (
                    <li className="menu-thumb" key={item.id}>
                        <Link href={item.link}>
                            <span className="head-icon">
                                <i className={item.icon}></i>
                            </span>
                            <span suppressHydrationWarning={true}>{item.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <>
            <ul>
                {menuItems.map((item) => (
                    <li className="menu-thumb" key={item.id}>
                        <Link href={item.link}>
              <span className="head-icon">
                <i className={item.icon}></i>
              </span>
                            <span suppressHydrationWarning={true}>{item.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default NavMenu;