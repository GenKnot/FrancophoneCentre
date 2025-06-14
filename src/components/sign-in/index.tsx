"use client";
import BreadcrumbCourses from "@/common/breadcrumb/BreadcrumbCourses";
import MarqueeOne from "@/common/MarqueeOne";
import React from "react";
import SignInForm from "./SignInForm";
import HeaderMain from "@/layouts/headers/HeaderMain";
import FooterMain from "@/layouts/footers/FooterMain";
import { useLanguage } from '@/contexts/LanguageContext';

const SignIn = () => {
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
                title={getTranslatedText('登录', 'Sign In', 'Connexion', '登錄')} 
                subtitle={getTranslatedText('登录', 'Sign In', 'Connexion', '登錄')}
            />
            <SignInForm/>
            <MarqueeOne style_2={true}/>
            <FooterMain/>
        </>
    );
};

export default SignIn;
