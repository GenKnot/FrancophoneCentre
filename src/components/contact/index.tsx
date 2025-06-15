"use client"

import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import MarqueeOne from "@/common/MarqueeOne";
import React from "react";
import ContactArea from "./ContactArea";
import MapArea from "./MapArea";
import ContactForm from "./ContactForm";
import HeaderMain from "@/layouts/headers/HeaderMain";
import FooterMain from "@/layouts/footers/FooterMain";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
    const { t } = useLanguage();
    
    return (
        <>
            <HeaderMain/>
            <BreadcrumbEvent 
                title={t('contact.section_title', '联系我们')} 
                subtitle={t('navigation.contact', '联系')}
            />
            <ContactArea/>
            <MapArea/>
            <ContactForm/>
            <MarqueeOne style_2={true}/>
            <FooterMain/>
        </>
    );
};

export default Contact;
