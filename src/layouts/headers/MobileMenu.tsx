"use client"
import Link from "next/link";
import React from "react";
import { useTranslation } from '@/hooks/useTranslation';

const MobileMenu = () => {
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
			title: t('nav.contact', 'Contact'),
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
						{menuItems.map((item) => (
							<li key={item.id}>								
								<Link href={item.link}>  
									<span suppressHydrationWarning>{item.title}</span>
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
