"use client";
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

 

const FCInstagramHome = () => {
  return (
    <>
      <div className="instagram-section fix">
            <Swiper
             spaceBetween={0}
             speed={1500}
             loop={true}
             breakpoints={{
              1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                }               
             }}
             className="swiper instagram-slider">
                 
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image">
                            <img src="FCImage/Instagram-1.png" alt="img" />
                            <Link href="/courses-details" className="icon"><i className="far fa-arrow-right"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image">
                            <img src="FCImage/Instagram-2.png" alt="img" />
                            <Link href="/courses-details" className="icon"><i className="far fa-arrow-right"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image">
                            <img src="FCImage/Instagram-3.png" alt="img" />
                            <Link href="/courses-details" className="icon"><i className="far fa-arrow-right"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image">
                            <img src="FCImage/Instagram-4.png" alt="img" />
                            <Link href="/courses-details" className="icon"><i className="far fa-arrow-right"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image">
                            <img src="FCImage/Instagram-5.png" alt="img" />
                            <Link href="/courses-details" className="icon"><i className="far fa-arrow-right"></i></Link>
                        </div>
                    </SwiperSlide>
                 
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image">
                            <img src="FCImage/Instagram-1.png" alt="img" />
                            <Link href="/courses-details" className="icon"><i className="far fa-arrow-right"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image">
                            <img src="assets/img/instagram/02.jpg" alt="img" />
                            <Link href="/courses-details" className="icon"><i className="far fa-arrow-right"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image">
                            <img src="assets/img/instagram/03.jpg" alt="img" />
                            <Link href="/courses-details" className="icon"><i className="far fa-arrow-right"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image">
                            <img src="assets/img/instagram/04.jpg" alt="img" />
                            <Link href="/courses-details" className="icon"><i className="far fa-arrow-right"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image">
                            <img src="assets/img/instagram/05.jpg" alt="img" />
                            <Link href="/courses-details" className="icon"><i className="far fa-arrow-right"></i></Link>
                        </div>
                    </SwiperSlide>
            
            </Swiper>
        </div>
    </>
  );
};

export default FCInstagramHome;