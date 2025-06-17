"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useTranslation } from '@/hooks/useTranslation';

const MobileMenu = () => {
	const { t, isHydrated } = useTranslation();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

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
			id: 5,
			title: t('navigation.news', 'News'),
			link: "/news",
			icon: "fas fa-newspaper",
		},
		{
			id: 6,
			title: t('navigation.contact', 'Contact'),
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
									<span suppressHydrationWarning={true}>
										{isMounted ? item.title : '\u00A0'}
									</span>
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
