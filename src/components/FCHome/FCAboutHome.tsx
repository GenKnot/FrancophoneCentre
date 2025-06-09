"use client";

import Count from '@/common/Count';
import Link from 'next/link';
import React from 'react';
import {useHomepageData} from '@/hooks/useApiData';
import {useLanguage} from '@/contexts/LanguageContext';

const FCAboutHome = () => {
    const {data, loading} = useHomepageData();
    const {t} = useLanguage();

    if (loading) {
        return (
            <div className="about-section-3 section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">{t('common.loading', 'Loading...')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const siteConfig = data?.site_config;
    const aboutContent = data?.about_content;

    // Use about content data if available, otherwise fallback to translations
    const sectionTitle = aboutContent?.section_title || t('about.section_title', 'About QFEC');
    const mainTitle = aboutContent?.main_title || t('about.title', 'Quebec Francophone Education Centre Canada');
    const description = aboutContent?.description || siteConfig?.site_description || t('about.description', 'Quebec Francophone Education Centre (QFEC) was established in 1991, is a professional French teaching institution under the guidance of the Canadian government. Headquartered in Montreal, taught directly by current TEF examiners, committed to providing students with the highest quality French education to help realize immigration dreams.');
    const buttonText = aboutContent?.button_text || t('about.button_text', 'Learn More Details');
    
    // Counter data from about content or fallback to defaults
    const counter1Number = aboutContent?.counter1_number || 13;
    const counter1Text = aboutContent?.counter1_text || t('about.counter1_text', 'Years of Teaching Experience');
    const counter2Number = aboutContent?.counter2_number || 99;
    const counter2Text = aboutContent?.counter2_text || t('about.counter2_text', 'TEF Exam Pass Rate');
    const counter3Number = aboutContent?.counter3_number || 2000;
    const counter3Text = aboutContent?.counter3_text || t('about.counter3_text', 'Hours of Examiner Research Results');

    return (
        <>
            <div className="about-section-3 section-padding">
                <div className="container">
                    <div className="about-wrapper-2">
                        <div className="row g-4 justify-content-between">
                            <div className="col-xl-6 col-lg-6">
                                <div className="about-content">
                                    <div className="section-title">
                                        <h6 className="text-white wow fadeInUp">
                                            {sectionTitle}
                                        </h6>
                                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                            {mainTitle}
                                        </h2>
                                    </div>
                                    <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                        {description}
                                    </p>
                                    <Link href="/about" className="theme-btn red-btn wow fadeInUp" data-wow-delay=".3s">
                                        {buttonText}
                                    </Link>
                                    <div className="about-counter-items">
                                        <div className="counter-content wow fadeInUp" data-wow-delay=".3s">
                                            <h3><span className="odometer" data-count={counter1Number}>
                                                <Count number={counter1Number} text='+'/>
                                            </span></h3>
                                            <p>{counter1Text}</p>
                                        </div>
                                        <div className="counter-content wow fadeInUp" data-wow-delay=".5s">
                                            <h3><span className="odometer" data-count={counter2Number}>
                                                <Count number={counter2Number} text='%'/>
                                            </span></h3>
                                            <p>{counter2Text}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <div className="about-image">
                                    {aboutContent?.main_image_url ? (
                                        <img src={aboutContent.main_image_url} alt="img"
                                             className="wow img-custom-anim-left"/>
                                    ) : (
                                        <img src="assets/img/FCAbout/FCAbout-2.png" alt="img"
                                             className="wow img-custom-anim-left"/>
                                    )}
                                    <div className="bg-shape">
                                        {aboutContent?.background_image_url ? (
                                            <img src={aboutContent.background_image_url} alt="img"/>
                                        ) : (
                                            <img src="assets/img/FCAbout/bg-shape.png" alt="img"/>
                                        )}
                                    </div>
                                    <div className="counter-box">
                                        <h2>
                                            <span className="odometer" data-count={counter3Number}>
                                                 <Count number={counter3Number} text='+'/>
                                            </span>
                                        </h2>
                                        <p>{counter3Text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FCAboutHome;