"use client"
import Link from 'next/link';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const NavMenu = () => {
    const { currentLanguage } = useLanguage();

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

    // Generate menu items with hardcoded translations
    const menuItems = [
        {
            id: 1,
            title: getTranslatedText('主页', 'Home', 'Accueil', '主頁'),
            link: "/",
            icon: "fas fa-home-lg",
        },
        {
            id: 2,
            title: getTranslatedText('关于我们', 'About', 'À propos', '關於我們'),
            link: "/about",
            icon: "fas fa-user",
        },
        {
            id: 3,
            title: getTranslatedText('课程', 'Courses', 'Cours', '課程'),
            link: "/courses",
            icon: "fas fa-book",
        },
        {
            id: 5,
            title: getTranslatedText('新闻', 'News', 'Nouvelles', '新聞'),
            link: "/news",
            icon: "fas fa-newspaper",
        },
        {
            id: 6,
            title: getTranslatedText('联系我们', 'Contact Us', 'Contact', '聯繫我們'),
            link: "/contact",
            icon: "fas fa-phone-rotary",
        },
    ];

    return (
        <ul>
            {menuItems.map((item) => (
                <li className="menu-thumb" key={item.id}>
                    <Link href={item.link}>
                        <span className="head-icon">
                            <i className={item.icon}></i>
                        </span>
                        <span>{item.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavMenu;