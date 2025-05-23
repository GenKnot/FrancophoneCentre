"use client";
import Count from '@/common/Count';
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const FCTestimonialHome = () => {
    return (
        <>
            <section className="testimonial-section-3 fix pt-0 section-padding bg-cover" style={{background: `url(/FCImage/testimonial-bg-1.png)`, backgroundAttachment: "fixed"}}>
                <div className="counter-section-2 section-padding pt-0">
                    <div className="container custom-container">
                        <div className="counter-wrapper-2 bg-cover" style={{background: `url(/assets/img/counter-bg.jpg)`}}>
                            <div className="counter-items wow fadeInUp" data-wow-delay=".2s">
                                <div className="icon">
                                    <i className="flaticon-success"></i>
                                </div>
                                <div className="content">
                                    <h2><span className="odometer" data-count="217"> <Count number={217} text=''  /> </span></h2>
                                    <p>在校学员</p>
                                </div>
                            </div>
                            <div className="counter-items wow fadeInUp" data-wow-delay=".4s">
                                <div className="icon">
                                    <i className="flaticon-medal"></i>
                                </div>
                                <div className="content">
                                    <h2><span className="odometer" data-count="98"> <Count number={98} text='%'  /> </span></h2>
                                    <p>TEF通过率</p>
                                </div>
                            </div>
                            <div className="counter-items wow fadeInUp" data-wow-delay=".6s">
                                <div className="icon">
                                    <i className="flaticon-satisfaction"></i>
                                </div>
                                <div className="content">
                                    <h2><span className="odometer" data-count="154"> <Count number={154} text=''  /> </span></h2>
                                    <p>成功拿到CLB5</p>
                                </div>
                            </div>
                            <div className="counter-items wow fadeInUp" data-wow-delay=".8s">
                                <div className="icon">
                                    <i className="flaticon-instructor"></i>
                                </div>
                                <div className="content">
                                    <h2><span className="odometer" data-count="10"> <Count number={10} text='位'  /> </span></h2>
                                    <p>现任+前任考官</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="section-title text-center">
                        <h6 className="text-white wow fadeInUp">
                            学员真实反馈
                        </h6>
                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                            听听他们的加拿大移民故事
                        </h2>
                    </div>
                    <Swiper
                        spaceBetween={30}
                        speed={2000}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el: ".dot",
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        breakpoints={{
                            1199: {
                                slidesPerView: 3,
                            },
                            991: {
                                slidesPerView: 2,
                            },
                            767: {
                                slidesPerView: 1,
                            },
                            575: {
                                slidesPerView: 1,
                            },
                            0: {
                                slidesPerView: 1,
                            },
                        }}
                        className="swiper testimonial-slider-3">

                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items">
                                <div className="client-info">
                                    <h3>张同学</h3>
                                    <span>软件工程师</span>
                                </div>
                                <div className="client-img bg-cover" style={{background: `url(/FCImage/Testimonial-1.png)`}}></div>
                                <p>
                                    "零基础到CLB7只用了6个月！考官直授真的太棒了，
                                    每道题都能遇到原题，现在已经成功登陆多伦多！"
                                </p>
                                <div className="icon">
                                    <i className="flaticon-double-quotes"></i>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items">
                                <div className="client-info">
                                    <h3>李女士</h3>
                                    <span>会计师</span>
                                </div>
                                <div className="client-img bg-cover" style={{background: `url(/FCImage/Testimonial-1.png)`}}></div>
                                <p>
                                    "法语EE只需要415分，比英语EE简单太多了！
                                    感谢QFEC让我4个月就拿到CLB5，顺利获得邀请。"
                                </p>
                                <div className="icon">
                                    <i className="flaticon-double-quotes"></i>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items">
                                <div className="client-info">
                                    <h3>王先生</h3>
                                    <span>市场专员</span>
                                </div>
                                <div className="client-img bg-cover" style={{background: `url(/FCImage/Testimonial-1.png)`}}></div>
                                <p>
                                    "COMBO套餐超值！从零基础一路学到刷题班，
                                    考官1对1指导让我口语从B1直接跳到B2水平。"
                                </p>
                                <div className="icon">
                                    <i className="flaticon-double-quotes"></i>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items">
                                <div className="client-info">
                                    <h3>陈小姐</h3>
                                    <span>护士</span>
                                </div>
                                <div className="client-img bg-cover" style={{background: `url(/FCImage/Testimonial-1.png)`}}></div>
                                <p>
                                    "PEQ项目真的是最快的移民方式！
                                    现在在魁北克读法语课程，明年就能申请移民了。"
                                </p>
                                <div className="icon">
                                    <i className="flaticon-double-quotes"></i>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items">
                                <div className="client-info">
                                    <h3>刘同学</h3>
                                    <span>金融分析师</span>
                                </div>
                                <div className="client-img bg-cover" style={{background: `url(/FCImage/Testimonial-1.png)`}}></div>
                                <p>
                                    "88加币的1对1课程太划算了！
                                    考官直接告诉我哪些是必考点，学习效率提升了10倍。"
                                </p>
                                <div className="icon">
                                    <i className="flaticon-double-quotes"></i>
                                </div>
                            </div>
                        </SwiperSlide>

                        <div className="swiper-dot white-color text-center mt-5">
                            <div className="dot"></div>
                        </div>
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default FCTestimonialHome;