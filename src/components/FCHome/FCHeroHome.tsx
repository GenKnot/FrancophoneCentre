"use client";
import Link from 'next/link';
import React from 'react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

 

const FCHeroHome = () => {
  return (
    <>
      <section className="hero-section-3 hero-3">
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
                    <SwiperSlide className="swiper-slide">
                        <div className="slider-bg bg-cover" style={{background: `url(/assets/img/FCHero/FCHero-1.jpg)`}}>
                            <div className="overlay-bg bg-cover" style={{background: `url(/assets/img/hero/ovelay-bg.png)`}}></div>
                        </div>
                        <div className="container">
                            <div className="row g-4 align-items-center justify-content-center">
                                <div className="col-lg-12">
                                    <div className="hero-content">
                                        <h6 data-animation="fadeInUp" data-delay="1.3s">快速移民首选</h6>
                                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                                            开启您的法语学习之旅
                                            法语移民的最佳选择
                                        </h1>
                                        <p data-animation="fadeInUp" data-delay="1.7s">
                                            加拿大魁北克法语教育中心，由现任TEF考官直授，6个月达到CLB7，4个月达到CLB5。
                                            98%通过率，远超行业平均水平。法语EE最低330分，助您轻松移民加拿大。
                                        </p>
                                        <div className="hero-button">
                                            <Link href="/courses-details" data-animation="fadeInUp" data-delay="1.9s" className="theme-btn red-btn">立即开始学习法语</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="slider-bg bg-cover" style={{background: `url(/assets/img/FCHero/FCHero-2.jpg)`}}>
                            <div className="overlay-bg bg-cover" style={{background: `url(/assets/img/hero/ovelay-bg.png)`}}></div>
                        </div>
                        <div className="container">
                            <div className="row g-4 align-items-center justify-content-center">
                                <div className="col-lg-12">
                                    <div className="hero-content">
                                        <h6 data-animation="fadeInUp" data-delay="1.3s">权威法语教育</h6>
                                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                                            现任TEF考官直授
                                            原题教学保证高分
                                        </h1>
                                        <p data-animation="fadeInUp" data-delay="1.7s">
                                            10位考官2000小时教研成果，100%考试原题训练。
                                            6位现任考官+4位前任考官联合授课，三个100%保证您的学习效果。
                                        </p>
                                        <div className="hero-button">
                                            <Link href="/courses-details" data-animation="fadeInUp" data-delay="1.9s" className="theme-btn red-btn">免费试听考官直播课</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="slider-bg bg-cover" style={{background: `url(/assets/img/FCHero/FCHero-3.jpg)`}}>
                            <div className="overlay-bg bg-cover" style={{background: `url(/assets/img/hero/ovelay-bg.png)`}}></div>
                        </div>
                        <div className="container">
                            <div className="row g-4 align-items-center justify-content-center">
                                <div className="col-lg-12">
                                    <div className="hero-content">
                                        <h6 data-animation="fadeInUp" data-delay="1.3s">快速移民加拿大</h6>
                                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                                            法语移民快速通道 <br/>
                                            EE仅需330分
                                        </h1>
                                        <p data-animation="fadeInUp" data-delay="1.7s">
                                            法语EE项目平均捞取分数415分，CLB7+一年工作经验即可达标。
                                            魁北克PEQ项目仅需14个月即可移民。现在学法语，就是最稳妥的选择。
                                        </p>
                                        <div className="hero-button">
                                            <Link href="/courses-details" data-animation="fadeInUp" data-delay="1.9s" className="theme-btn red-btn">了解移民项目详情</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>                 
                <div className="array-button">
                    <button className="array-prev"><i className="far fa-chevron-left"></i></button>
                    <button className="array-next"><i className="far fa-chevron-right"></i></button>
                </div>
            </Swiper>
            <div className="feature-section-3 style-margin-top section-padding pb-0">
                <div className="container">
                    <div className="feature-wrapper-3">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="feature-card-items">
                                    <div className="icon">
                                        <i className="flaticon-graduation"></i>
                                    </div>
                                    <div className="content">
                                        <h5>现任考官直授</h5>
                                        <p>
                                            6位现任TEF考官亲自授课
                                            100%还原真实考试环境
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="feature-card-items">
                                    <div className="icon">
                                        <i className="flaticon-instructor"></i>
                                    </div>
                                    <div className="content">
                                        <h5>98%超高通过率</h5>
                                        <p>
                                            远超过行业平均水平
                                            6个月CLB7保证出分
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                <div className="feature-card-items">
                                    <div className="icon">
                                        <i className="flaticon-certficate"></i>
                                    </div>
                                    <div className="content">
                                        <h5>法语移民快速通道</h5>
                                        <p>
                                            EE项目仅需330分
                                            魁省PEQ最快14个月移民
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                <div className="feature-card-items">
                                    <div className="icon">
                                        <i className="flaticon-school"></i>
                                    </div>
                                    <div className="content">
                                        <h5>个性化学习路径</h5>
                                        <p>
                                            量身定制课程学习计划
                                            课后作业精准提升
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default FCHeroHome;