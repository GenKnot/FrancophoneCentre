import React from 'react';
import Wrapper from '@/layouts/Wrapper'; 
import EventDetails from '@/components/event-details';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: "活动详情 - Francophone Centre",
	description: "了解QFEC举办的法语文化活动详情、时间、地点和参与方式",
	keywords: "法语活动详情, 文化交流活动, QFEC活动安排, 法语文化活动",
};

interface PageProps {
    searchParams: { id?: string }
}

const EventDetailsPage = ({ searchParams }: PageProps) => {
    const eventId = searchParams.id ? parseInt(searchParams.id) : null;

    return (
        <Wrapper>
            <EventDetails eventId={eventId} />      
        </Wrapper>
    );
};

export default EventDetailsPage;