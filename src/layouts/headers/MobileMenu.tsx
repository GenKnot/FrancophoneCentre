"use client"
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from '@/hooks/useTranslation';

interface IMobileMenuProps {
	sidebar: boolean;
	setSidebar: (open: boolean) => void;
}

const MobileMenu: React.FC<IMobileMenuProps> = ({ sidebar, setSidebar }) => {
	const { t } = useTranslation();
	const [navTitle, setNavTitle] = useState("");

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
			<div className="fix">
				<div className={sidebar ? "side-info info-open" : "side-info"}>
					<button className="side-info-close" onClick={() => setSidebar(false)}>
						<i className="fal fa-times"></i>
					</button>
					<div className="side-info-content">
						<div className="mobile-menu">
							<nav id="mobile-menu">
								{menuItems.map((item) => (
									<Link href={item.link} key={item.id} onClick={() => setSidebar(false)}>
										<span suppressHydrationWarning>{item.title}</span>
									</Link>
								))}
							</nav>
						</div>
					</div>
				</div>
			</div>
			<div className={sidebar ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"}
				 onClick={() => setSidebar(false)}></div>
		</>
	);
};

export default MobileMenu;
