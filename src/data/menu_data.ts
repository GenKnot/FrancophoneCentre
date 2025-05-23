import { StaticImageData } from "next/image";

import demo_img_1 from "../../public/assets/img/header/home-1.jpg";

interface DataType {
	id: number;
	title?: string;
	link: string;
	icon: string;
	img_dropdown?: boolean;
	has_dropdown?: boolean;
	has_dropdown_inner?: boolean;
	sub_menus?: {
		link?: string;
		title?: string;
		title2?: string | any;
		btn_title?: string;
		one_page_link?: string | any;
		one_page_title?: string;
		demo_img?: StaticImageData | any;
    inner_menu?: boolean;   
    inner_menus?: {
       link?: string; title?: string 
    }[];
	}[];
}

// menu data
const menu_data:DataType[] = [
	{
		id: 1,
		title: "主页",
		link: "/",
    icon: "fas fa-home-lg",
		has_dropdown: false,
	},
	{
		id: 2,
		title: "关于",
		link: "/about",
    icon: "fas fa-user",
		has_dropdown: false,
	},
	{
		id: 3,
		title: "课程",
		link: "/courses",
    icon: "fas fa-book",
		has_dropdown: false,
	},
	{
		id: 4,
		title: "活动",
		link: "/event",
    icon: "fas fa-gift",
		has_dropdown: false,
	},
	{
		id: 5,
		title: "新闻",
		link: "/news",
    icon: "fas fa-newspaper",
		has_dropdown: false,
	},
	{
		id: 6,
		title: "联系我们",
		link: "/contact",
    icon: "fas fa-phone-rotary",
		has_dropdown: false,
	},
];
export default menu_data;
