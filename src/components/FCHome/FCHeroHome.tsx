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
                        <div className="col-12 text-center">
                            <div className="spinner-border text-light" role="status">
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

    return (
        <>
            <section className="hero-section-3 hero-3" style={{ minHeight: 'auto' }}>
                <Swiper 
                    loop={true}
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
                    className="swiper hero-slider">
                    
                    {heroSlides.length > 0 ? (
                        heroSlides.map((slide: any, index: number) => (
                            <SwiperSlide key={slide.id || index} className="swiper-slide">
                                <div className="slider-bg bg-cover" style={{
                                    background: `url(${slide.background_image || `/assets/img/FCHero/FCHero-${index + 1}.jpg`})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    minHeight: '600px'
                                }}>
                                    <div className="overlay-bg bg-cover" style={{background: `url(/assets/img/hero/ovelay-bg.png)`}}></div>
                                </div>
                                <div className="container">
                                    <div className="row g-4 align-items-center justify-content-center" style={{ minHeight: '600px' }}>
                                        <div className="col-lg-12">
                                            <div className="hero-content">
                                                <h6 data-animation="fadeInUp" data-delay="1.3s">
                                                    {slide.subtitle || t(`hero.slide${index + 1}.subtitle`, '快速移民首选')}
                                                </h6>
                                                <h1 data-animation="fadeInUp" data-delay="1.5s" style={{ lineHeight: '1.2' }}>
                                                    {slide.title || t(`hero.slide${index + 1}.title`, '开启您的法语学习之旅')}
                                                </h1>
                                                <p data-animation="fadeInUp" data-delay="1.7s" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                                    {slide.description || t(`hero.slide${index + 1}.description`, 'Professional French education')}
                                                </p>
                                                <div className="hero-button">
                                                    <Link 
                                                        href={slide.button_link || "/courses"} 
                                                        data-animation="fadeInUp" 
                                                        data-delay="1.9s" 
                                                        className="theme-btn red-btn"
                                                    >
                                                        {slide.button_text || t(`hero.slide${index + 1}.button_text`, '立即开始学习法语')}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    ) : (
                        // Fallback slides if no data from API
                        [1, 2, 3].map((index) => (
                            <SwiperSlide key={index} className="swiper-slide">
                                <div className="slider-bg bg-cover" style={{
                                    background: `url(/assets/img/FCHero/FCHero-${index}.jpg)`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    minHeight: '600px'
                                }}>
                                    <div className="overlay-bg bg-cover" style={{background: `url(/assets/img/hero/ovelay-bg.png)`}}></div>
                                </div>
                                <div className="container">
                                    <div className="row g-4 align-items-center justify-content-center" style={{ minHeight: '600px' }}>
                                        <div className="col-lg-12">
                                            <div className="hero-content">
                                                <h6 data-animation="fadeInUp" data-delay="1.3s">
                                                    {t(`hero.slide${index}.subtitle`, '快速移民首选')}
                                                </h6>
                                                <h1 data-animation="fadeInUp" data-delay="1.5s" style={{ lineHeight: '1.2' }}>
                                                    {t(`hero.slide${index}.title`, '开启您的法语学习之旅')}
                                                </h1>
                                                <p data-animation="fadeInUp" data-delay="1.7s" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                                    {t(`hero.slide${index}.description`, 'Professional French education')}
                                                </p>
                                                <div className="hero-button">
                                                    <Link href="/courses" data-animation="fadeInUp" data-delay="1.9s" className="theme-btn red-btn">
                                                        {t(`hero.slide${index}.button_text`, '立即开始学习法语')}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    )}
                                 
                    <div className="array-button">
                        <button className="array-prev"><i className="far fa-chevron-left"></i></button>
                        <button className="array-next"><i className="far fa-chevron-right"></i></button>
                    </div>
                </Swiper>
                
                <div className="feature-section-3 style-margin-top section-padding pb-0">
                    <div className="container">
                        <div className="feature-wrapper-3">
                            <div className="row">
                                {features.length > 0 ? (
                                    features.map((feature: any, index: number) => (
                                        <div key={feature.id || index} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`.${(index + 1) * 2}s`}>
                                            <div className="feature-card-items">
                                                <div className="icon">
                                                    <i className={feature.icon_class || 'flaticon-graduation'}></i>
                                                </div>
                                                <div className="content">
                                                    <h5>{feature.title || t(`features.feature${index + 1}.title`, '专业特色')}</h5>
                                                    <p>{feature.description || t(`features.feature${index + 1}.description`, '专业服务')}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    // Fallback features if no data from API
                                    [1, 2, 3, 4].map((index) => (
                                        <div key={index} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`.${index * 2}s`}>
                                            <div className="feature-card-items">
                                                <div className="icon">
                                                    <i className={index === 1 ? 'flaticon-graduation' : 
                                                                  index === 2 ? 'flaticon-instructor' : 
                                                                  index === 3 ? 'flaticon-certficate' : 
                                                                  'flaticon-school'}></i>
                                                </div>
                                                <div className="content">
                                                    <h5>{t(`features.feature${index}.title`, '专业特色')}</h5>
                                                    <p>{t(`features.feature${index}.description`, '专业服务')}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FCHeroHome;