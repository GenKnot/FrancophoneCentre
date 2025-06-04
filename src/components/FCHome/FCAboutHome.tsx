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
                                            {t('about.section_title', 'About QFEC')}
                                        </h6>
                                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                            {t('about.title', 'Quebec Francophone Education Centre Canada')}
                                        </h2>
                                    </div>
                                    <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                        {siteConfig?.site_description || t('about.description', 'Quebec Francophone Education Centre (QFEC) was established in 1991, is a professional French teaching institution under the guidance of the Canadian government. Headquartered in Montreal, taught directly by current TEF examiners, committed to providing students with the highest quality French education to help realize immigration dreams.')}
                                    </p>
                                    <Link href="/about" className="theme-btn red-btn wow fadeInUp" data-wow-delay=".3s">
                                        {t('about.button_text', 'Learn More Details')}
                                    </Link>
                                    <div className="about-counter-items">
                                        <div className="counter-content wow fadeInUp" data-wow-delay=".3s">
                                            <h3><span className="odometer" data-count="13">
                        <Count number={13} text='+'/>
                        </span></h3>
                                            <p>{t('about.counter1_text', 'Years of Teaching Experience')}</p>
                                        </div>
                                        <div className="counter-content wow fadeInUp" data-wow-delay=".5s">
                                            <h3><span className="odometer" data-count="99">
                        <Count number={99} text='%'/>
                        </span></h3>
                                            <p>{t('about.counter2_text', 'TEF Exam Pass Rate')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <div className="about-image">
                                    <img src="assets/img/FCAbout/FCAbout-2.png" alt="img"
                                         className="wow img-custom-anim-left"/>
                                    <div className="bg-shape">
                                        <img src="assets/img/FCAbout/bg-shape.png" alt="img"/>
                                    </div>
                                    <div className="counter-box">
                                        <h2>
                                            <span className="odometer" data-count="2800">
                                                 <Count number={2000} text='+'/>
                                            </span>
                                        </h2>
                                        <p>{t('about.counter3_text', 'Hours of Examiner Research Results')}</p>
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