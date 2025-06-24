import React from "react";
import MarqueeOne from "@/common/MarqueeOne";
import NewsDetailsArea from "./NewsDetailsArea";
import BreadcrumbNewsDetails from "@/common/breadcrumb/BreadcrumbNewsDetails";
import HeaderMain from "@/layouts/headers/HeaderMain";
import FooterMain from "@/layouts/footers/FooterMain";

interface NewsDetailsProps {
    newsId: number | null;
}

const NewsDetails = ({ newsId }: NewsDetailsProps) => {
    return (
        <>
            <HeaderMain/>
            <BreadcrumbNewsDetails newsId={newsId} />
            <NewsDetailsArea newsId={newsId} />
            <MarqueeOne style_2={true}/>
            <FooterMain/>
        </>
    );
};

export default NewsDetails;
