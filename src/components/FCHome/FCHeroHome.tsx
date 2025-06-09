"use client";
import Link from 'next/link';
import React from 'react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useHomepageData } from '@/hooks/useApiData';
import { useLanguage } from '@/contexts/LanguageContext';

const FCHeroHome = () => {
    const { data, loading } = useHomepageData();
    const { t } = useLanguage();

    if (loading) {
        return (
            <section className="hero-section-3 hero-3">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center py-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">{t('common.loading', 'Loading...')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    const heroSlides = data?.hero_slides || [];
    const features = data?.features || [];

    const defaultSlides = [
        {
            id: 1,
            title: '开启您的法语学习之旅',
            subtitle: '快速移民首选',
            description: '加拿大魁北克法语教育中心，由现任TEF考官直授，6个月达到CLB7，4个月达到CLB5。98%通过率，远超行业平均水平。法语EE最低330分，助您轻松移民加拿大。',
            button_text: '立即开始学习法语',
            button_link: '/courses-details',
            background_image: '/assets/img/FCHero/FCHero-1.jpg',
            is_active: true,
            order: 1
        },
        {
            id: 2,
            title: '现任TEF考官直授',
            subtitle: '权威法语教育',
            description: '10位考官2000小时教研成果，100%考试原题训练。6位现任考官+4位前任考官联合授课，三个100%保证您的学习效果。',
            button_text: '免费试听考官直播课',
            button_link: '/courses-details',
            background_image: '/assets/img/FCHero/FCHero-2.jpg',
            is_active: true,
            order: 2
        },
        {
            id: 3,
            title: '法语移民快速通道',
            subtitle: '快速移民加拿大',
            description: '法语EE项目平均捞取分数415分，CLB7+一年工作经验即可达标。魁北克PEQ项目仅需14个月即可移民。现在学法语，就是最稳妥的选择。',
            button_text: '了解移民项目详情',
            button_link: '/courses-details',
            background_image: '/assets/img/FCHero/FCHero-3.jpg',
            is_active: true,
            order: 3
        }
    ];

    const slidesToShow = heroSlides.length > 0 ? heroSlides.filter((slide: any) => slide.is_active) : defaultSlides;

    const defaultFeatures = [
        {
            id: 1,
            title: '现任考官直授',
            description: '6位现任TEF考官亲自授课\n100%还原真实考试环境',
            icon_class: 'flaticon-graduation',
            is_active: true,
            order: 1
        },
        {
            id: 2,
            title: '98%超高通过率',
            description: '远超过行业平均水平\n6个月CLB7保证出分',
            icon_class: 'flaticon-instructor',
            is_active: true,
            order: 2
        },
        {
            id: 3,
            title: '法语移民快速通道',
            description: 'EE项目仅需330分\n魁省PEQ最快14个月移民',
            icon_class: 'flaticon-certficate',
            is_active: true,
            order: 3
        },
        {
            id: 4,
            title: '个性化学习路径',
            description: '量身定制课程学习计划\n课后作业精准提升',
            icon_class: 'flaticon-school',
            is_active: true,
            order: 4
        }
    ];

    // Use API data if available, otherwise use default
    const featuresToShow = features.length > 0 ? features.filter((feature: any) => feature.is_active) : defaultFeatures;

    return (
        <>
            <section className="hero-section-3 hero-3">
                <Swiper 
                    loop={slidesToShow.length > 1}
                    slidesPerView={1}
                    effect="fade"
                    speed={3000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: ".array-prev",
                        prevEl: ".array-next",
                    }}
                    pagination={{
                        el: ".dot",
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation, EffectFade, Autoplay]}
                    className="swiper hero-slider"
                > 
                    {slidesToShow.map((slide: any, index: number) => (
                        <SwiperSlide key={slide.id || index} className="swiper-slide">
                            <div 
                                className="slider-bg bg-cover" 
                                style={{
                                    background: `url(${slide.background_image || '/assets/img/FCHero/FCHero-1.jpg'})`
                                }}
                            >
                                <div className="overlay-bg bg-cover" style={{background: `url(/assets/img/hero/ovelay-bg.png)`}}></div>
                            </div>
                            <div className="container">
                                <div className="row g-4 align-items-center justify-content-center">
                                    <div className="col-lg-12">
                                        <div className="hero-content">
                                            <h6 data-animation="fadeInUp" data-delay="1.3s">
                                                {slide.subtitle}
                                            </h6>
                                            <h1 data-animation="fadeInUp" data-delay="1.5s">
                                                {slide.title}
                                            </h1>
                                            <p data-animation="fadeInUp" data-delay="1.7s">
                                                {slide.description}
                                            </p>
                                            <div className="hero-button">
                                                <Link 
                                                    href={slide.button_link || '/courses-details'} 
                                                    data-animation="fadeInUp" 
                                                    data-delay="1.9s" 
                                                    className="theme-btn red-btn"
                                                >
                                                    {slide.button_text}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    
                    {slidesToShow.length > 1 && (
                        <div className="array-button">
                            <button className="array-prev"><i className="far fa-chevron-left"></i></button>
                            <button className="array-next"><i className="far fa-chevron-right"></i></button>
                        </div>
                    )}
                </Swiper>
                
                <div className="feature-section-3 style-margin-top section-padding pb-0">
                    <div className="container">
                        <div className="feature-wrapper-3">
                            <div className="row">
                                {featuresToShow.slice(0, 4).map((feature: any, index: number) => (
                                    <div 
                                        key={feature.id || index} 
                                        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" 
                                        data-wow-delay={`.${(index + 1) * 2}s`}
                                    >
                                        <div className="feature-card-items">
                                            <div className="icon">
                                                <i className={feature.icon_class || 'flaticon-graduation'}></i>
                                            </div>
                                            <div className="content">
                                                <h5>{feature.title}</h5>
                                                <p style={{ whiteSpace: 'pre-line' }}>
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FCHeroHome;