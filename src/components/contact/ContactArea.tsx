"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactArea = () => {
    const { t } = useLanguage();
    
    return (
        <>
            <section className="contact-section section-padding pt-0 fix">
                <div className="container">
                    <div className="section-title text-center">
                        <h6 className="wow fadeInUp">{t('contact.section_title', '联系我们')}</h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            {t('contact.title', '需要更多信息？')}
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="contact-box-items">
                                <div className="icon">
                                    <i className="flaticon-map"></i>
                                </div>
                                <h5>
                                    {t('contact.locations.downtown', 'Montreal Downtown 校区')}
                                </h5>
                                <div className="image">
                                    <img src="assets/img/small-line.png" alt="img"/>
                                </div>
                                <h4>
                                    1440 Saint-Catherine St W Unit 501, Montreal
                                </h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="contact-box-items">
                                <div className="icon">
                                    <i className="flaticon-map"></i>
                                </div>
                                <h5>
                                    {t('contact.locations.south_shore', '南岸校区')}
                                </h5>
                                <div className="image">
                                    <img src="assets/img/small-line.png" alt="img"/>
                                </div>
                                <h4>
                                    Room 201, 141 Bd Saint-Luc, <br/>
                                    Saint-Jean-sur-Richelieu, QC J2W 2G7
                                </h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="contact-box-items">
                                <div className="icon">
                                    <i className="flaticon-map"></i>
                                </div>
                                <h5>
                                    {t('contact.locations.old_port', '老港校区')}
                                </h5>
                                <div className="image">
                                    <img src="assets/img/small-line.png" alt="img"/>
                                </div>
                                <h4>
                                    266 Notre-Dame St W Level 5, <br/>
                                    Montreal, Quebec H2Y 1T6
                                </h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="contact-box-items">
                                <div className="icon">
                                    <i className="flaticon-send-data"></i>
                                </div>
                                <h5>
                                    {t('contact.email_types.registration', '报名邮箱')}
                                </h5>
                                <div className="image">
                                    <img src="assets/img/small-line.png" alt="img"/>
                                </div>
                                <h4>
                                    <a href="mailto:apply@qfec.ca">apply@qfec.ca</a>
                                </h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="contact-box-items">
                                <div className="icon">
                                    <i className="flaticon-send-data"></i>
                                </div>
                                <h5>
                                    {t('contact.email_types.consultation', '咨询邮箱')}
                                </h5>
                                <div className="image">
                                    <img src="assets/img/small-line.png" alt="img"/>
                                </div>
                                <h4>
                                    <a href="mailto:info@qfec.ca">info@qfec.ca</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactArea;