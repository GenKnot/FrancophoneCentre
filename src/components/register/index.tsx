"use client";
import BreadcrumbCourses from "@/common/breadcrumb/BreadcrumbCourses";
import MarqueeOne from "@/common/MarqueeOne";
import React from "react";
import RegisterForm from "./RegisterForm";
import HeaderMain from "@/layouts/headers/HeaderMain";
import FooterMain from "@/layouts/footers/FooterMain";
import { useLanguage } from '@/contexts/LanguageContext';

const Register = () => {
    const { currentLanguage } = useLanguage();

    const getTranslatedText = (zhText: string, enText: string, frText: string = enText, zhHantText: string = zhText) => {
        switch (currentLanguage) {
            case 'zh-hans':
                return zhText;
            case 'zh-hant':
                return zhHantText;
            case 'fr':
                return frText;
            case 'en':
            default:
                return enText;
        }
    };

    return (
        <>
            <HeaderMain/>
            <BreadcrumbCourses 
                title={getTranslatedText('注册', 'Register', 'S\'inscrire', '註冊')} 
                subtitle={getTranslatedText('注册', 'Register', 'S\'inscrire', '註冊')}
            />
            <RegisterForm/>
            <MarqueeOne style_2={true}/>
            <FooterMain/>
        </>
    );
};

export default Register;
