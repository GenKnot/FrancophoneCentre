import React from "react";
import MarqueeOne from "@/common/MarqueeOne";
import BreacrumbEventDetails from "@/common/breadcrumb/BreacrumbEventDetails";
import EventDetailsArea from "./EventDetailsArea";
import HeaderMain from "@/layouts/headers/HeaderMain";
import FooterMain from "@/layouts/footers/FooterMain";

const EventDetails = () => {
    return (
        <>
            <HeaderMain/>
            <BreacrumbEventDetails/>
            <EventDetailsArea/>
            <MarqueeOne style_2={true}/>
            <FooterMain/>
        </>
    );
};

export default EventDetails;
