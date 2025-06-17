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

    // Generate menu items with proper translations
    const getMenuItems = () => [
        {
            id: 1,
            title: t('navigation.home', 'Home'),
            link: "/",
            icon: "fas fa-home-lg",
        },
        {
            id: 2,
            title: t('navigation.about', 'About'),
            link: "/about",
            icon: "fas fa-user",
        },
        {
            id: 3,
            title: t('navigation.courses', 'Courses'),
            link: "/courses",
            icon: "fas fa-book",
        },
        {
            id: 5,
            title: t('navigation.news', 'News'),
            link: "/news",
            icon: "fas fa-newspaper",
        },
        {
            id: 6,
            title: t('navigation.contact', 'Contact Us'),
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