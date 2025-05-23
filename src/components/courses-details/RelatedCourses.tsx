"use client"
import React from 'react';
import Link from 'next/link';
import {Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

const RelatedCourses = () => {
    return (
        <>
            <section className="popular-courses-section fix section-padding pt-0">
                <div className="container">
                    <div className="section-title text-center">
                        <h2 className="wow fadeInUp">相关推荐课程</h2>
                        <p className="wow fadeInUp" data-wow-delay=".3s">
                            现任考官直授 <b>98%通过率</b> 助您快速达到 <b>移民要求</b>
                        </p>
                    </div>
                    <Swiper
                        spaceBetween={30}
                        speed={1500}
                        loop={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false
                        }}
                        pagination={{
                            el: ".dot",
                            clickable: true
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            1199: {
                                slidesPerView: 3,
                            },
                            991: {
                                slidesPerView: 2,
                            },
                            767: {
                                slidesPerView: 2,
                            },
                            575: {
                                slidesPerView: 1,
                            },
                            0: {
                                slidesPerView: 1,
                            },
                        }}
                        className="swiper courses-slider">

                        <SwiperSlide className="swiper-slide">
                            <div className="courses-card-main-items">
                                <div className="courses-card-items style-2">
                                    <div className="courses-image">
                                        <img src="FCImage/Coures-10.png" alt="img"/>
                                        <h3 className="courses-title">零基础入门</h3>
                                        <h4 className="topic-title">0-A1基础课程</h4>
                                        <div className="arrow-items">
                                            <div className="GlidingArrow">
                                                <img src="assets/img/courses/a1.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay1">
                                                <img src="assets/img/courses/a2.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay2">
                                                <img src="assets/img/courses/a3.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay3">
                                                <img src="assets/img/courses/a4.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay4">
                                                <img src="assets/img/courses/a5.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay5">
                                                <img src="assets/img/courses/a6.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="courses-content">
                                        <ul className="post-cat">
                                            <li>
                                                <Link href="/courses">基础课程</Link>
                                            </li>
                                            <li>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </li>
                                        </ul>
                                        <h3>
                                            <Link href="/courses-details">
                                                零基础快速入门法语
                                            </Link>
                                        </h3>
                                        <div className="client-items">
                                            <div className="client-img bg-cover"
                                                 style={{background: `url(/FCImage/teachericon25.png)`}}></div>
                                            <p>考官 AYMÉRIC</p>
                                        </div>
                                        <ul className="post-class">
                                            <li>
                                                <i className="far fa-books"></i>
                                                80课时
                                            </li>
                                            <li>
                                                <i className="far fa-user"></i>
                                                0基础学员
                                            </li>
                                            <li>
                                                <Link href="/courses-details" className="theme-btn">立即报名</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="courses-card-main-items">
                                <div className="courses-card-items style-2">
                                    <div className="courses-image">
                                        <img src="FCImage/Coures-10.png" alt="img"/>
                                        <h3 className="courses-title">COMBO套餐</h3>
                                        <h4 className="topic-title">0基础B2刷题套餐</h4>
                                        <div className="arrow-items">
                                            <div className="GlidingArrow">
                                                <img src="assets/img/courses/a1.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay1">
                                                <img src="assets/img/courses/a2.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay2">
                                                <img src="assets/img/courses/a3.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay3">
                                                <img src="assets/img/courses/a4.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay4">
                                                <img src="assets/img/courses/a5.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay5">
                                                <img src="assets/img/courses/a6.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="courses-content">
                                        <ul className="post-cat">
                                            <li>
                                                <Link href="/courses">套餐课程</Link>
                                            </li>
                                            <li>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </li>
                                        </ul>
                                        <h3>
                                            <Link href="/courses-details">
                                                零基础直达B2水平
                                            </Link>
                                        </h3>
                                        <div className="client-items">
                                            <div className="client-img bg-cover"
                                                 style={{background: `url(/FCImage/teachericon25.png)`}}></div>
                                            <p>考官 ÉLOANNE</p>
                                        </div>
                                        <ul className="post-class">
                                            <li>
                                                <i className="far fa-books"></i>
                                                440课时
                                            </li>
                                            <li>
                                                <i className="far fa-user"></i>
                                                0基础学员
                                            </li>
                                            <li>
                                                <Link href="/courses-details" className="theme-btn">立即报名</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="courses-card-main-items">
                                <div className="courses-card-items style-2">
                                    <div className="courses-image">
                                        <img src="FCImage/Coures-10.png" alt="img"/>
                                        <h3 className="courses-title">1对1精品</h3>
                                        <h4 className="topic-title">考官1对1精准陪练</h4>
                                        <div className="arrow-items">
                                            <div className="GlidingArrow">
                                                <img src="assets/img/courses/a1.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay1">
                                                <img src="assets/img/courses/a2.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay2">
                                                <img src="assets/img/courses/a3.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay3">
                                                <img src="assets/img/courses/a4.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay4">
                                                <img src="assets/img/courses/a5.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay5">
                                                <img src="assets/img/courses/a6.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="courses-content">
                                        <ul className="post-cat">
                                            <li>
                                                <Link href="/courses">高端定制</Link>
                                            </li>
                                            <li>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </li>
                                        </ul>
                                        <h3>
                                            <Link href="/courses-details">
                                                考官1对1专项指导
                                            </Link>
                                        </h3>
                                        <div className="client-items">
                                            <div className="client-img bg-cover"
                                                 style={{background: `url(/FCImage/teachericon25.png)`}}></div>
                                            <p>考官 ABLE</p>
                                        </div>
                                        <ul className="post-class">
                                            <li>
                                                <i className="far fa-books"></i>
                                                灵活定制
                                            </li>
                                            <li>
                                                <i className="far fa-user"></i>
                                                B级基础
                                            </li>
                                            <li>
                                                <Link href="/courses-details" className="theme-btn">立即报名</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="courses-card-main-items">
                                <div className="courses-card-items style-2">
                                    <div className="courses-image">
                                        <img src="FCImage/Coures-10.png" alt="img"/>
                                        <h3 className="courses-title">终极套餐</h3>
                                        <h4 className="topic-title">0基础CLB7刷题套餐</h4>
                                        <div className="arrow-items">
                                            <div className="GlidingArrow">
                                                <img src="assets/img/courses/a1.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay1">
                                                <img src="assets/img/courses/a2.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay2">
                                                <img src="assets/img/courses/a3.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay3">
                                                <img src="assets/img/courses/a4.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay4">
                                                <img src="assets/img/courses/a5.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay5">
                                                <img src="assets/img/courses/a6.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="courses-content">
                                        <ul className="post-cat">
                                            <li>
                                                <Link href="/courses">终极套餐</Link>
                                            </li>
                                            <li>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </li>
                                        </ul>
                                        <h3>
                                            <Link href="/courses-details">
                                                零基础直达CLB7高分
                                            </Link>
                                        </h3>
                                        <div className="client-items">
                                            <div className="client-img bg-cover"
                                                 style={{background: `url(/FCImage/teachericon25.png)`}}></div>
                                            <p>考官 JORICK</p>
                                        </div>
                                        <ul className="post-class">
                                            <li>
                                                <i className="far fa-books"></i>
                                                600课时
                                            </li>
                                            <li>
                                                <i className="far fa-user"></i>
                                                0基础学员
                                            </li>
                                            <li>
                                                <Link href="/courses-details" className="theme-btn">立即报名</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="courses-card-main-items">
                                <div className="courses-card-items style-2">
                                    <div className="courses-image">
                                        <img src="FCImage/Coures-10.png" alt="img"/>
                                        <h3 className="courses-title">中级提升</h3>
                                        <h4 className="topic-title">A2-B1基础课程</h4>
                                        <div className="arrow-items">
                                            <div className="GlidingArrow">
                                                <img src="assets/img/courses/a1.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay1">
                                                <img src="assets/img/courses/a2.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay2">
                                                <img src="assets/img/courses/a3.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay3">
                                                <img src="assets/img/courses/a4.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay4">
                                                <img src="assets/img/courses/a5.png" alt="img"/>
                                            </div>
                                            <div className="GlidingArrow delay5">
                                                <img src="assets/img/courses/a6.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="courses-content">
                                        <ul className="post-cat">
                                            <li>
                                                <Link href="/courses">基础课程</Link>
                                            </li>
                                            <li>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </li>
                                        </ul>
                                        <h3>
                                            <Link href="/courses-details">
                                                中级法语能力拓展
                                            </Link>
                                        </h3>
                                        <div className="client-items">
                                            <div className="client-img bg-cover"
                                                 style={{background: `url(/FCImage/teachericon25.png)`}}></div>
                                            <p>考官 THAV</p>
                                        </div>
                                        <ul className="post-class">
                                            <li>
                                                <i className="far fa-books"></i>
                                                160课时
                                            </li>
                                            <li>
                                                <i className="far fa-user"></i>
                                                A2基础
                                            </li>
                                            <li>
                                                <Link href="/courses-details" className="theme-btn">立即报名</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default RelatedCourses;