"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

const FCEventHome = () => {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            <section className="news-section-3 fc-news-area section-padding">
                <div className="container">
                    <div className="section-title text-center">
                        <h6 className="wow fadeInUp" style={{color: '#AD0119'}} suppressHydrationWarning={true}>
                            {isMounted ? t('events.title', 'Latest Events') : '\u00A0'}
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s" suppressHydrationWarning={true}>
                            {isMounted ? t('events.subtitle', 'Key Milestones on Your Immigration Journey') : '\u00A0'}
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="news-card-items">
                                <div className="news-image">
                                    <img src="/FCImage/Activity-1.png" alt="img" />
                                    <div className="post-date">
                                        <span suppressHydrationWarning={true}>
                                            {isMounted ? t('events.coming_soon', 'Coming Soon') : '\u00A0'}
                                        </span>
                                    </div>
                                </div>
                                <div className="news-content">
                                    <ul className="post-date">
                                        <li>
                                            <i className="fa-regular fa-calendar-days"></i>
                                            <span suppressHydrationWarning={true}>
                                                {isMounted ? t('events.date_january', 'January 2024') : '\u00A0'}
                                            </span>
                                        </li>
                                        <li>
                                            <i className="fa-regular fa-eye"></i>
                                            <span suppressHydrationWarning={true}>
                                                {isMounted ? t('events.free_event', 'Free Event') : '\u00A0'}
                                            </span>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/event-details">
                                            <span suppressHydrationWarning={true}>
                                                {isMounted ? t('events.ee_seminar_title', 'French EE Immigration Policy Seminar') : '\u00A0'}
                                            </span>
                                        </Link>
                                    </h3>
                                    <p suppressHydrationWarning={true}>
                                        {isMounted ? t('events.ee_seminar_desc', 'In-depth analysis of the latest French EE immigration policy changes, sharing success stories to guide your immigration journey. Live Q&A with professional immigration consultants.') : '\u00A0'}
                                    </p>
                                    <Link href="/event-details" className="theme-btn-2 mt-3">
                                        <span suppressHydrationWarning={true}>
                                            {isMounted ? t('events.register_now', 'Register Now') : '\u00A0'}
                                        </span> <i className="fa-solid fa-arrow-right-long"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="news-card-items">
                                <div className="news-image">
                                    <img src="/FCImage/Activity-2.png" alt="img" />
                                    <div className="post-date">
                                        <span suppressHydrationWarning={true}>
                                            {isMounted ? t('events.now_enrolling', 'Now Enrolling') : '\u00A0'}
                                        </span>
                                    </div>
                                </div>
                                <div className="news-content">
                                    <ul className="post-date">
                                        <li>
                                            <i className="fa-regular fa-calendar-days"></i>
                                            <span suppressHydrationWarning={true}>
                                                {isMounted ? t('events.every_saturday', 'Every Saturday') : '\u00A0'}
                                            </span>
                                        </li>
                                        <li>
                                            <i className="fa-regular fa-eye"></i>
                                            <span suppressHydrationWarning={true}>
                                                {isMounted ? t('events.free_trial', 'Free Trial') : '\u00A0'}
                                            </span>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/event-details">
                                            <span suppressHydrationWarning={true}>
                                                {isMounted ? t('events.live_class_title', 'Live Class with Current Examiners') : '\u00A0'}
                                            </span>
                                        </Link>
                                    </h3>
                                    <p suppressHydrationWarning={true}>
                                        {isMounted ? t('events.live_class_desc', 'Every Saturday at 8 PM, current TEF examiners teach personally, sharing latest exam trends and scoring techniques. Limited time free trial, first come first served!') : '\u00A0'}
                                    </p>
                                    <Link href="/event-details" className="theme-btn-2 mt-3">
                                        <span suppressHydrationWarning={true}>
                                            {isMounted ? t('events.book_trial', 'Book Trial') : '\u00A0'}
                                        </span> <i className="fa-solid fa-arrow-right-long"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FCEventHome;