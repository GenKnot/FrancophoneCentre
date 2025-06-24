import React from "react";
import MarqueeOne from "@/common/MarqueeOne";
import BreacrumbEventDetails from "@/common/breadcrumb/BreacrumbEventDetails";
import EventDetailsArea from "./EventDetailsArea";
import HeaderMain from "@/layouts/headers/HeaderMain";
import FooterMain from "@/layouts/footers/FooterMain";

interface EventDetailsProps {
    eventId: number | null;
}

const EventDetails = ({ eventId }: EventDetailsProps) => {
    return (
        <>
            <HeaderMain/>
            <BreacrumbEventDetails eventId={eventId} />
            <EventDetailsArea eventId={eventId} />
            <MarqueeOne style_2={true}/>
            <FooterMain/>
        </>
    );
};

export default EventDetails;
