import React from "react";
import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import AboutArea from "./AboutArea";
import FeatureArea from "./FeatureArea";
import AboutCounter from "./AboutCounter";
import FooterMain from "@/layouts/footers/FooterMain";
import FCTeamHome from "@/components/about/FCTeamHome";
import HeaderMain from "@/layouts/headers/HeaderMain";

const About = () => {
    return (
        <>
            <HeaderMain />
            <BreadcrumbEvent title="关于我们" subtitle="关于我们"/>
            <AboutArea/>
            <FeatureArea/>
            <FCTeamHome style_2={true}/>
            <AboutCounter/>
            <FooterMain />
        </>
    );
};

export default About;
