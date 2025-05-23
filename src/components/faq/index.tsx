import BreadcrumbEvent from '@/common/breadcrumb/BreadcrumbEvent';
import MarqueeOne from '@/common/MarqueeOne';
import React from 'react';
import FaqArea from './FaqArea';
import HeaderMain from "@/layouts/headers/HeaderMain";
import FooterMain from "@/layouts/footers/FooterMain";

const Faq = () => {
    return (
        <>
            <HeaderMain/>
            <BreadcrumbEvent title="常见问题" subtitle="问题列表"/>
            <FaqArea/>
            <MarqueeOne style_2={true}/>
            <FooterMain/>
        </>
    );
};

export default Faq;