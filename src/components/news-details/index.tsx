import React from "react";
import MarqueeOne from "@/common/MarqueeOne";
import NewsDetailsArea from "./NewsDetailsArea";
import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import HeaderMain from "@/layouts/headers/HeaderMain";
import FooterMain from "@/layouts/footers/FooterMain";

const NewsDetails = () => {
    return (
        <>
            <HeaderMain/>
            <BreadcrumbEvent title="实时资讯" subtitle="2025年法语EE"/>
            <NewsDetailsArea/>
            <MarqueeOne style_2={true}/>
            <FooterMain/>
        </>
    );
};

export default NewsDetails;
