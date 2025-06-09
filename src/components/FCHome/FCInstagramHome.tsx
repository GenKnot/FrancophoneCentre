"use client";
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {useHomepageData} from '@/hooks/useApiData';

const FCInstagramHome = () => {
    const {data, loading} = useHomepageData();

    if (loading) {
        return (
            <div className="instagram-section fix">
                <div className="container">
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Get featured courses with proper images
    const featuredCourses = data?.courses?.filter((course: any) => 
        course.is_featured_homepage && course.image_instagram
    ) || [];

    // Fill remaining slots with default images if we don't have enough featured courses
    const displayItems = [];
    
    // Add featured courses first
    featuredCourses.forEach((course: any, index: number) => {
        displayItems.push({
            type: 'course',
            id: course.id,
            image: course.image_instagram,
            link: `/courses-details?id=${course.id}`,
            alt: course.name
        });
    });

    // Add default images to fill up to 10 items
    const defaultImages = [
        'FCImage/Instagram-1.png',
        'FCImage/Instagram-2.png', 
        'FCImage/Instagram-3.png',
        'FCImage/Instagram-4.png',
        'FCImage/Instagram-5.png'
    ];

    // Fill remaining slots with default images, cycling through them
    const totalSlots = 10;
    for (let i = displayItems.length; i < totalSlots; i++) {
        const defaultIndex = (i - featuredCourses.length) % defaultImages.length;
        displayItems.push({
            type: 'default',
            id: `default-${i}`,
            image: defaultImages[defaultIndex],
            link: '/courses-details',
            alt: 'Course image'
        });
    }

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
                    
                    {displayItems.map((item, index) => (
                        <SwiperSlide key={item.id} className="swiper-slide">
                            <div className="instagram-image">
                                <img src={item.image} alt={item.alt} />
                                <Link href={item.link} className="icon">
                                    <i className="far fa-arrow-right"></i>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default FCInstagramHome;