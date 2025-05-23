import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import MarqueeOne from "@/common/MarqueeOne";
import React from "react";
import NewsArea from "./NewsArea";
import HeaderMain from "@/layouts/headers/HeaderMain";
import FooterMain from "@/layouts/footers/FooterMain";

const News = () => {
    return (
        <>
            <HeaderMain/>
            <BreadcrumbEvent title="最新资讯" subtitle="资讯"/>
            <NewsArea/>
            <MarqueeOne style_2={true}/>
            <FooterMain/>
        </>
    );
};

export default News;
