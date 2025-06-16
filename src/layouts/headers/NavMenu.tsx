"use client"
import Link from 'next/link';
import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

const NavMenu = () => {
    const { t } = useTranslation();

    const menuItems = [
        {
            id: 1,
            title: t('nav.home', 'Home'),
            link: "/",
            icon: "fas fa-home-lg",
        },
        {
            id: 2,
            title: t('nav.about', 'About'),
            link: "/about",
            icon: "fas fa-user",
        },
        {
            id: 3,
            title: t('nav.courses', 'Courses'),
            link: "/courses",
            icon: "fas fa-book",
        },

        {
            id: 5,
            title: t('nav.news', 'News'),
            link: "/news",
            icon: "fas fa-newspaper",
        },
        {
            id: 6,
            title: t('nav.contact', 'Contact Us'),
            link: "/contact",
            icon: "fas fa-phone-rotary",
        },
    ];

    return (
        <>
            <ul>
                {menuItems.map((item) => (
                    <li className="menu-thumb" key={item.id}>
                        <Link href={item.link}>
              <span className="head-icon">
                <i className={item.icon}></i>
              </span>
                            <span suppressHydrationWarning>{item.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default NavMenu;