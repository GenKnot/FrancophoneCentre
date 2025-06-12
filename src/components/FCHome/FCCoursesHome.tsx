"use client";

import Link from 'next/link';
import React from 'react';
import {useHomepageData} from '@/hooks/useApiData';
import {useLanguage} from '@/contexts/LanguageContext';

const FCCoursesHome = () => {
    const {data, loading} = useHomepageData();
    const {t} = useLanguage();

    if (loading) {
        return (
            <section className="popular-courses-section-33 fix section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">{t('common.loading', 'Loading...')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    const courses = data?.courses || [];
    const courseContent = data?.course_content;
    const courseTypes = data?.course_types || [];
    
    // Group courses by type
    const coursesByType = courseTypes.reduce((acc: any, type: any) => {
        acc[type.key] = courses.filter((course: any) => course.course_type === type.key);
        return acc;
    }, {});

    // Get fallback translations for course types
    const getTypeDisplayName = (typeKey: string) => {
        const type = courseTypes.find((t: any) => t.key === typeKey);
        if (type) return type.name;
        
        // Fallback translations
        switch(typeKey) {
            case 'basic': return t('courses.tabs.basic', 'Basic Courses');
            case 'exam_prep': return t('courses.tabs.exam_prep', 'Exam Preparation');
            case 'combo': return t('courses.tabs.combo', 'Combo Package');
            case 'vip': return t('courses.tabs.vip', 'VIP Course');
            default: return typeKey;
        }
    };

    const renderCourseCard = (course: any, index: number) => (
        <div key={course.id} className="col-xl-4 col-lg-6 col-md-6">
            <div className="popular-courses-items" style={{backgroundColor: '#AD0119', color: 'white'}}>
                <div className="popular-thumb">
                    <div className="post-box">
                        <Link href={`/courses-details/${course.id}`} className="post-cat-white" style={{color: 'white'}}>
                            {getTypeDisplayName(course.course_type)}
                        </Link>
                    </div>
                    <div className="thumb">
                        <img src={course.image_homepage || `FCImage/Course-${index + 1}.png`} alt="img"/>
                    </div>
                </div>
                <div className="content">
                    <h4>
                        <Link href={`/courses-details/${course.id}`} style={{color: 'white'}}>
                            {course.name}
                        </Link>
                    </h4>
                    <div className="course-details">
                        {course.subtitle && <p>{course.subtitle}</p>}
                        {course.hours && <p>{course.hours} {t('common.hours', 'hours')}</p>}
                        {course.level_required && <p>{t('common.level_required', 'Level required')}: {course.level_required}</p>}
                    </div>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span style={{color: 'white'}}>({course.rating}/5 Reviews)</span>
                    </div>
                    <Link href={`/courses-details/${course.id}`} className="link-btn link-btn-white" style={{color: 'white'}}>
                        {t('common.view_details', 'View Details')} <i className="far fa-chevron-double-right"
                                                                      style={{color: 'white'}}></i>
                    </Link>
                </div>
            </div>
        </div>
    );

    // Use course content from API if available, otherwise fallback to translations
    const sectionTitle = courseContent?.section_title || t('courses.section_title', 'Popular Courses');
    const mainTitle = courseContent?.main_title || t('courses.title', 'QFEC Course System');
    const subtitle = courseContent?.subtitle || t('courses.subtitle', 'Current examiner direct teaching 98% pass rate help you quickly reach immigration requirements');

    return (
        <>
            <style jsx>{`
                .link-btn-white {
                    color: white !important;
                    position: relative;
                }

                .link-btn-white:before {
                    content: "";
                    position: absolute;
                    top: -15px;
                    left: 0;
                    width: 50px;
                    height: 2px;
                    background-color: white !important;
                }

                .link-btn-white:hover {
                    color: #f0f0f0 !important;
                }

                .link-btn-white i {
                    color: white !important;
                }

                .link-btn-white:hover i {
                    color: #f0f0f0 !important;
                }

                .post-cat-white {
                    color: white !important;
                }
            `}</style>
            <section className="popular-courses-section-33 fix section-padding">
                <div className="container">
                    <div className="section-title color-red text-center">
                        <h6 className="wow fadeInUp">
                            {sectionTitle}
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            {mainTitle}
                        </h2>
                        <p className="courses-sub-text mt-3 wow fadeInUp" data-wow-delay=".5s">
                            {subtitle}
                        </p>
                    </div>
                    <ul className="nav mt-3 mt-md-0">
                        {courseTypes.map((type: any, index: number) => (
                            <li key={type.key} className="nav-item wow fadeInUp" data-wow-delay={`.${2 + index * 2}s`}>
                                <a href={`#${type.key}Courses`} data-bs-toggle="tab" 
                                   className={`nav-link ${index === 0 ? 'active' : ''}`}>
                                    {type.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="tab-content">
                        {courseTypes.map((type: any, typeIndex: number) => (
                            <div key={type.key} id={`${type.key}Courses`} 
                                 className={`tab-pane fade ${typeIndex === 0 ? 'show active' : ''}`}>
                                <div className="row">
                                    {coursesByType[type.key]?.length > 0 ? (
                                        coursesByType[type.key].slice(0, type.key === 'combo' ? 2 : 3).map((course: any, index: number) => (
                                            type.key === 'combo' ? (
                                                <div key={course.id} className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="popular-courses-items"
                                                         style={{backgroundColor: '#AD0119', color: 'white'}}>
                                                        <div className="popular-thumb">
                                                            <div className="post-box">
                                                                <Link href={`/courses-details/${course.id}`} className="post-cat-white"
                                                                      style={{color: 'white'}}>
                                                                    {type.name}
                                                                </Link>
                                                            </div>
                                                            <div className="thumb">
                                                                <img src={course.image_homepage || `FCImage/Course-${index + 7}.png`}
                                                                     alt="img"/>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4>
                                                                <Link href={`/courses-details/${course.id}`} style={{color: 'white'}}>
                                                                    {course.name}
                                                                </Link>
                                                            </h4>
                                                            <div className="course-details">
                                                                {course.subtitle && <p>{course.subtitle}</p>}
                                                                {course.hours && <p>{course.hours} {t('common.hours', 'hours')}</p>}
                                                                {course.price && <p>${course.price}</p>}
                                                                {course.price_text && !course.price && <p>{course.price_text}</p>}
                                                            </div>
                                                            <div className="star">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <span style={{color: 'white'}}>({course.rating}/5 Reviews)</span>
                                                            </div>
                                                            <Link href={`/courses-details/${course.id}`} className="link-btn link-btn-white"
                                                                  style={{color: 'white'}}>
                                                                {t('common.view_details', 'View Details')} <i
                                                                className="far fa-chevron-double-right"
                                                                style={{color: 'white'}}></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : renderCourseCard(course, index)
                                        ))
                                    ) : (
                                        <div className="col-12 text-center text-muted">
                                            <p>{t('common.no_data', 'No data available')}</p>
                                        </div>
                                    )}
                                </div>
                                {type.key === 'combo' && (
                                    <div className="row mt-4">
                                        <div className="col-12 text-center">
                                            <p className="course-note">
                                                <strong>{t('common.note', 'Note')}:</strong> {t('courses.pricing_note', '1-on-1 and 2-3 person small class prices, please contact customer service for detailed quotes')}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FCCoursesHome;