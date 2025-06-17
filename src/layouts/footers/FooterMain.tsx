"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { ENDPOINTS } from '../../../constants/api';

const FooterMain = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [isSubscribing, setIsSubscribing] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email.trim()) {
            setMessage('Please enter your email address');
            setMessageType('error');
            return;
        }

        setIsSubscribing(true);
        setMessage('');
        setMessageType('');

        try {
            const response = await fetch(ENDPOINTS.NEWSLETTER.SUBSCRIBE, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email.trim() }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Successfully subscribed! Thank you for subscribing.');
                setMessageType('success');
                setEmail('');
            } else {
                setMessage(data.error || 'Subscription failed, please try again later.');
                setMessageType('error');
            }
        } catch (error) {
            setMessage('Network error, please try again later.');
            setMessageType('error');
        } finally {
            setIsSubscribing(false);
            // Clear message after 5 seconds
            setTimeout(() => {
                setMessage('');
                setMessageType('');
            }, 5000);
        }
    };

    return (
        <>
            <footer className="footer-section-3 fix">
                <div className="circle-shape">
                    <img src="/assets/img/footer/circle.png" alt="img"/>
                </div>
                <div className="vector-shape">
                    <img src="/assets/img/footer/Vector.png" alt="img"/>
                </div>
                <div className="container">
                    <div className="footer-widget-wrapper style-2">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <Link href="/">
                                            <img src="/assets/img/logo/black-logo-3.svg" alt="img"/>
                                        </Link>
                                    </div>
                                    <div className="footer-content">
                                        <p suppressHydrationWarning={true}>
                                            {isMounted ? t('footer.description', 'Quebec Francophone Education Centre is committed to providing students with quality French education services to help students master French skills.') : '\u00A0'}
                                        </p>
                                        <div className="footer-content pt-2">
                                            <ul className="contact-info">
                                                <li>
                                                    Montreal Downtown Campus:<br/>
                                                    1440 Saint-Catherine St W Unit 501, Montreal
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3 suppressHydrationWarning={true}>
                                            {isMounted ? t('footer.quick_links', 'Quick Links') : '\u00A0'}
                                        </h3>
                                    </div>
                                    <ul className="list-area">
                                        <li>
                                            <Link href="/" suppressHydrationWarning={true}>
                                                {isMounted ? t('navigation.home', 'Home') : '\u00A0'}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about" suppressHydrationWarning={true}>
                                                {isMounted ? t('navigation.about', 'About Us') : '\u00A0'}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/courses" suppressHydrationWarning={true}>
                                                {isMounted ? t('navigation.courses', 'Courses') : '\u00A0'}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/event" suppressHydrationWarning={true}>
                                                {isMounted ? t('navigation.events', 'Events') : '\u00A0'}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/news" suppressHydrationWarning={true}>
                                                {isMounted ? t('navigation.news', 'News') : '\u00A0'}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                <div className="single-footer-widget style-left">
                                    <div className="widget-head">
                                        <h3 suppressHydrationWarning={true}>
                                            {isMounted ? t('footer.contact_us', 'Contact Us') : '\u00A0'}
                                        </h3>
                                    </div>
                                    <div className="footer-content">
                                        <ul className="contact-info">
                                            <li>
                                                Registration Email: <a href="mailto:apply@qfec.ca"
                                                                       className="link">apply@qfec.ca</a>
                                            </li>
                                            <li>
                                                Inquiry Email: <a href="mailto:info@qfec.ca"
                                                                  className="link">info@qfec.ca</a>
                                            </li>
                                            <li>
                                                South Shore Campus:<br/>
                                                Room 201, 141 Bd Saint-Luc,
                                                Saint-Jean-sur-Richelieu, QC J2W 2G7
                                            </li>
                                            <li>
                                                Old Port Campus:<br/>
                                                266 Notre-Dame St W Level 5,
                                                Montreal, Quebec H2Y 1T6
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".8s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3 suppressHydrationWarning={true}>
                                            {isMounted ? t('footer.newsletter', 'Newsletter Subscription') : '\u00A0'}
                                        </h3>
                                    </div>
                                    <div className="footer-content">
                                        <p suppressHydrationWarning={true}>
                                            {isMounted ? t('footer.newsletter_text', 'Subscribe to our newsletter for the latest course and event information') : '\u00A0'}
                                        </p>
                                        <form onSubmit={handleNewsletterSubmit}>
                                            <div className="footer-input">
                                                <div className="icon">
                                                    <i className="far fa-envelope"></i>
                                                </div>
                                                <input 
                                                    type="email" 
                                                    id="email2"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder={isMounted ? t('footer.email_placeholder', 'Email Address') : 'Email Address'}
                                                    disabled={isSubscribing}
                                                />
                                                <button 
                                                    className="newsletter-btn" 
                                                    type="submit"
                                                    disabled={isSubscribing}
                                                    suppressHydrationWarning={true}
                                                >
                                                    {isSubscribing ? 'Subscribing...' : (isMounted ? t('footer.newsletter_button', 'Subscribe') : 'Subscribe')}
                                                </button>
                                            </div>
                                        </form>
                                        {message && (
                                            <div className={`newsletter-message ${messageType}`} style={{
                                                marginTop: '10px',
                                                padding: '8px 12px',
                                                borderRadius: '4px',
                                                fontSize: '14px',
                                                backgroundColor: messageType === 'success' ? '#d4edda' : '#f8d7da',
                                                color: messageType === 'success' ? '#155724' : '#721c24',
                                                border: `1px solid ${messageType === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                                            }}>
                                                {message}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom style-3">
                    <div className="container">
                        <div className="footer-bottom-wrapper">
                            <p suppressHydrationWarning={true}>
                                {isMounted ? 
                                    `${t('footer.copyright', 'Copyright ©')}, ${t('footer.rights_reserved', 'All rights reserved')}.` : 
                                    'Copyright ©, All rights reserved.'
                                }
                            </p>
                            <ul className="footer-menu wow fadeInUp" data-wow-delay=".5s">
                                <li>
                                    <Link href="/about" suppressHydrationWarning={true}>
                                        {isMounted ? t('navigation.about', 'About Us') : '\u00A0'}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq" suppressHydrationWarning={true}>
                                        {isMounted ? t('navigation.faq', 'FAQ') : '\u00A0'}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" suppressHydrationWarning={true}>
                                        {isMounted ? t('navigation.contact', 'Contact Us') : '\u00A0'}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/event" suppressHydrationWarning={true}>
                                        {isMounted ? t('navigation.events', 'Events') : '\u00A0'}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterMain;