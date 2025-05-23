import React from 'react';
import MarqueeOne from '@/common/MarqueeOne';
import BreadcrumbEvent from '@/common/breadcrumb/BreadcrumbEvent';
import EventLisrArea from './EventLisrArea';
import HeaderMain from "@/layouts/headers/HeaderMain";
import FooterMain from "@/layouts/footers/FooterMain";

const Event = () => {
    return (
        <>
            <HeaderMain/>
            <BreadcrumbEvent title="近期活动" subtitle="活动列表"/>
            <EventLisrArea/>
            <MarqueeOne style_2={true}/>
            <FooterMain/>
        </>
    );
};

export default Event;