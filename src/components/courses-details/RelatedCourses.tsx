"use client"
import React from 'react';
import Link from 'next/link';
import {Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

interface RelatedCourse {
    id: number;
    name: string;
    slug: string;
    short_description: string;
    image_listing: string;
    price: number | null;
    price_text: string;
    rating: number;
    rating_count: number;
    hours: number | null;
}

interface RelatedCoursesProps {
    relatedCourses: RelatedCourse[];
}

const RelatedCourses: React.FC<RelatedCoursesProps> = ({ relatedCourses }) => {
    if (!relatedCourses || relatedCourses.length === 0) {
        return null;
    }

    return (
        <section className="courses-section section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Related Courses
                    </h2>
                </div>
                <div className="row">
                    {relatedCourses.map((course) => (
                        <div key={course.id} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="courses-items">
                                <div className="courses-image">
                                    <img src={course.image_listing} alt={course.name} />
                                    <div className="courses-icon">
                                        <Link href={`/courses-details/${course.slug}`}>
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <div className="courses-author">
                                        <div className="author-name">
                                            <div className="star">
                                                {[...Array(5)].map((_, i) => (
                                                    <i key={i} className={`fas fa-star ${i < Math.floor(course.rating) ? '' : 'color-2'}`}></i>
                                                ))}
                                            </div>
                                            <span>({course.rating_count} Reviews)</span>
                                        </div>
                                        <div className="author-text">
                                            <h3>
                                                <Link href={`/courses-details/${course.slug}`}>
                                                    {course.name}
                                                </Link>
                                            </h3>
                                            <p>{course.short_description}</p>
                                        </div>
                                    </div>
                                    <div className="courses-footer">
                                        <div className="courses-price">
                                            {course.price ? (
                                                <h5>${course.price}</h5>
                                            ) : (
                                                <h5>{course.price_text}</h5>
                                            )}
                                        </div>
                                        <div className="courses-ratting">
                                            <div className="courses-ratting-star">
                                                <div className="star">
                                                    {[...Array(5)].map((_, i) => (
                                                        <i key={i} className={`fas fa-star ${i < Math.floor(course.rating) ? '' : 'color-2'}`}></i>
                                                    ))}
                                                </div>
                                                <span>({course.rating})</span>
                                            </div>
                                            <div className="ratting-price">
                                                <span>{course.hours ? `${course.hours}h` : '120h'}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedCourses;