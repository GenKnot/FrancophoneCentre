import Count from '@/common/Count';
import React from 'react';
import { useAboutData } from '@/hooks/useApiData';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutArea = () => {
    const { data, loading } = useAboutData();
    const { t } = useLanguage();

    if (loading) {
        return (
            <section className="about-section fix">
                <div className="about-wrapper-5">
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
            </section>
        );
    }

    const aboutContent = data?.about_content;
    const siteConfig = data?.site_config;

    const sectionTitle = aboutContent?.section_title || t('about.section_title', '关于我们');
    const mainTitle = aboutContent?.main_title || siteConfig?.site_name || t('about.title', '加拿大魁北克法语教育中心');
    const description = aboutContent?.description || t('about.description', '自1991年成立以来，QFEC始终肩负"架设加拿大国际教育合作桥梁"的战略使命，成为连接多元文化与魁北克本土语言教育的重要平台。');
    
    const counter1Number = aboutContent?.counter1_number || 34;
    const counter1Text = aboutContent?.counter1_text || t('about.counter1_text', '年专业法语教育经验');

    return (
        <>
            <section className="about-section fix">
                <div className="about-wrapper-5">
                    <div className="container">
                        <div className="row g-4 justify-content-between">
                            <div className="col-lg-6">
                                <div className="section-title mb-0">
                                    <h6 className="wow fadeInUp" style={{color: '#AD0119'}}>{sectionTitle}</h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        {mainTitle}
                                        <br/>
                                        您的法语移民梦想起点
                                    </h2>
                                </div>
                            </div>
                            
                            <div className="about-content">
                                <p className="wow fadeInUp" data-wow-delay=".3s">
                                    {description}
                                </p>
                                <div className="counter-box-items">
                                    <div className="counter-content wow fadeInUp" data-wow-delay=".3s">
                                        <h2 style={{color: '#AD0119'}}><span className="odometer" data-count={counter1Number}>
                                      <Count number={counter1Number} text='+'/>
                                      </span></h2>
                                        <p>{counter1Text}</p>
                                    </div>
                                    <p className="text wow fadeInUp" data-wow-delay=".5s">
                                        由现任TEF考官直授，98%超高通过率，助您快速达到移民要求的法语水平。
                                        我们不仅教授法语，更为您打开通往加拿大新生活的大门。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default AboutArea;