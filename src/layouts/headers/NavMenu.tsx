"use client"
import Link from 'next/link';
import React from 'react';
import {useLanguage} from '@/contexts/LanguageContext';

const NavMenu = () => {
    const {t} = useLanguage();

    const menuItems = [
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
            id: 4,
            title: t('navigation.events', 'Events'),
            link: "/event",
            icon: "fas fa-gift",
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

    return (
        <>
            <ul>
                {menuItems.map((item) => (
                    <li className="menu-thumb" key={item.id}>
                        <Link href={item.link}>
              <span className="head-icon">
                <i className={item.icon}></i>
              </span>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default NavMenu;