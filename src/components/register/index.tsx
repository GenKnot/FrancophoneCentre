import BreadcrumbCourses from "@/common/breadcrumb/BreadcrumbCourses";
import MarqueeOne from "@/common/MarqueeOne";
import React from "react";
import RegisterForm from "./RegisterForm";
import HeaderMain from "@/layouts/headers/HeaderMain";
import FooterMain from "@/layouts/footers/FooterMain";

const Register = () => {
    return (
        <>
            <HeaderMain/>
            <BreadcrumbCourses title="Register" subtitle="Register"/>
            <RegisterForm/>
            <MarqueeOne style_2={true}/>
            <FooterMain/>
        </>
    );
};

export default Register;
