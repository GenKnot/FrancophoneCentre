import BreadcrumbCourses from "@/common/breadcrumb/BreadcrumbCourses";
import MarqueeOne from "@/common/MarqueeOne";
import React from "react";
import SignInForm from "./SignInForm";
import HeaderMain from "@/layouts/headers/HeaderMain";
import FooterMain from "@/layouts/footers/FooterMain";

const SignIn = () => {
    return (
        <>
            <HeaderMain/>
            <BreadcrumbCourses title="Sign In" subtitle="Sign In"/>
            <SignInForm/>
            <MarqueeOne style_2={true}/>
            <FooterMain/>
        </>
    );
};

export default SignIn;
