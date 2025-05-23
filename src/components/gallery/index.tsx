import React from "react";
import GalleryArea from "./GalleryArea";
import MarqueeOne from "@/common/MarqueeOne";
import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import HeaderMain from "@/layouts/headers/HeaderMain";
import FooterMain from "@/layouts/footers/FooterMain";

const Gallery = () => {
    return (
        <>
            <HeaderMain/>
            <BreadcrumbEvent title="Gallery" subtitle="Gallery"/>
            <GalleryArea/>
            <MarqueeOne style_2={true}/>
            <FooterMain/>
        </>
    );
};

export default Gallery;
