"use client"
import Link from "next/link";
import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';

const MobileMenu = () => {
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

  const menuItems = [
    {
      id: 1,
      title: getTranslatedText('主页', 'Home', 'Accueil', '主頁'),
      link: "/",
      icon: "fas fa-home-lg",
    },
    {
      id: 2,
      title: getTranslatedText('关于', 'About', 'À propos', '關於'),
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
      title: getTranslatedText('联系我们', 'Contact Us', 'Contactez-nous', '聯繫我們'),
      link: "/contact",
      icon: "fas fa-phone-rotary",
    },
  ];

	return (
		<>
			<div className="mean-bar">
				<a href="#nav" className="meanmenu-reveal">
					<span>
						<span>
							<span></span>
						</span>
					</span>
				</a>
				<nav className="mean-nav">
					<ul>
            {menuItems.map((item, i) => (
              <li key={i}>								
							<Link href={item.link}>  
								{item.title} 
							</Link>
						</li>
            ))} 
					</ul>
				</nav>
			</div>
		</>
	);
};

export default MobileMenu;
