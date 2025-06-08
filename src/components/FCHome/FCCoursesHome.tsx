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
    const featuredCourses = courses.filter((course: any) => course.is_featured_homepage)
        .sort((a: any, b: any) => a.homepage_order - b.homepage_order);

    const renderCourseCard = (course: any, index: number) => (
        <div key={course.id} className="col-xl-4 col-lg-6 col-md-6">
            <div className="popular-courses-items" style={{backgroundColor: '#AD0119', color: 'white'}}>
                <div className="popular-thumb">
                    <div className="post-box">
                        <Link href="/courses-details" className="post-cat-white" style={{color: 'white'}}>
                            {course.course_type === 'basic' && t('courses.tabs.basic', 'Basic Courses')}
                            {course.course_type === 'exam_prep' && t('courses.tabs.exam_prep', 'Exam Preparation')}
                            {course.course_type === 'combo' && t('courses.tabs.combo', 'Combo Package')}
                            {course.course_type === 'vip' && 'VIP Course'}
                        </Link>
                    </div>
                    <div className="thumb">
<<<<<<< Updated upstream
                        <img src={course.image_homepage || `/FCImage/Course-${index + 1}.png`} alt="img"/>
=======
                        <img src={course.image_homepage || `FCImage/Course-${index + 1}.png`} alt="img"/>
>>>>>>> Stashed changes
                    </div>
                </div>
                <div className="content">
                    <h4>
                        <Link href="/courses-details" style={{color: 'white'}}>
                            {course.name}
                        </Link>
                    </h4>
                    <div className="course-details">
                        {course.short_description && <p>{course.short_description}</p>}
                        {course.hours && <p>{course.hours} {t('common.hours', 'hours')}</p>}
                        {course.level_required &&
                            <p>{t('common.level_required', 'Level required')}: {course.level_required}</p>}
                    </div>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span style={{color: 'white'}}>({course.rating}/5 Reviews)</span>
                    </div>
                    <Link href="/courses-details" className="link-btn link-btn-white" style={{color: 'white'}}>
                        {t('common.view_details', 'View Details')} <i className="far fa-chevron-double-right"
                                                                      style={{color: 'white'}}></i>
                    </Link>
                </div>
            </div>
        </div>
    );

    const renderTabContent = () => {
        return (
            <div className="row">
                {featuredCourses.length > 0 ? (
                    featuredCourses.slice(0, 3).map((course: any, index: number) => renderCourseCard(course, index))
                ) : (
                    <div className="col-12 text-center text-muted">
                        <p>{t('common.no_data', 'No featured courses available')}</p>
                    </div>
                )}
            </div>
        );
    };

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
                            {t('courses.section_title', 'Popular Courses')}
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            {t('courses.title', 'QFEC Course System')}
                        </h2>
                        <p className="courses-sub-text mt-3 wow fadeInUp" data-wow-delay=".5s">
                            {t('courses.subtitle', 'Current examiner direct teaching 98% pass rate help you quickly reach immigration requirements')}
                        </p>
                    </div>

                    <div className="tab-content">
<<<<<<< Updated upstream
                        {renderTabContent()}
=======
                        <div id="BasicCourses" className="tab-pane fade show active">
                            <div className="row">
                                {basicCourses.length > 0 ? (
                                    basicCourses.slice(0, 3).map((course: any, index: number) => renderCourseCard(course, index))
                                ) : (
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="popular-courses-items"
                                             style={{backgroundColor: '#AD0119', color: 'white'}}>
                                            <div className="popular-thumb">
                                                <div className="post-box">
                                                    <Link href="/courses-details" className="post-cat-white"
                                                          style={{color: 'white'}}>
                                                        {t('courses.tabs.basic', 'Basic Courses')}
                                                    </Link>
                                                </div>
                                                <div className="thumb">
                                                    <img src="FCImage/Course-1.png" alt="img"/>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <Link href="/courses-details" style={{color: 'white'}}>
                                                        Basic Course Pre-A1 <br/>
                                                        Basic Grammar and Speaking Introduction
                                                    </Link>
                                                </h4>
                                                <div className="course-details">
                                                    <p>Suitable for: After completing preparatory course</p>
                                                    <p>Duration: 40 hours</p>
                                                </div>
                                                <div className="star">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <span style={{color: 'white'}}>(4.9/5 Reviews)</span>
                                                </div>
                                                <Link href="/courses-details" className="link-btn link-btn-white"
                                                      style={{color: 'white'}}>
                                                    {t('common.view_details', 'View Details')} <i
                                                    className="far fa-chevron-double-right"
                                                    style={{color: 'white'}}></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div id="ExamPrep" className="tab-pane fade">
                            <div className="row">
                                {examPrepCourses.length > 0 ? (
                                    examPrepCourses.slice(0, 3).map((course: any, index: number) => renderCourseCard(course, index))
                                ) : (
                                    <div className="col-12 text-center text-muted">
                                        <p>{t('common.no_data', 'No data available')}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div id="ComboPackage" className="tab-pane fade">
                            <div className="row">
                                {comboCourses.length > 0 ? (
                                    comboCourses.slice(0, 2).map((course: any, index: number) => (
                                        <div key={course.id} className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="popular-courses-items"
                                                 style={{backgroundColor: '#AD0119', color: 'white'}}>
                                                <div className="popular-thumb">
                                                    <div className="post-box">
                                                        <Link href="/courses-details" className="post-cat-white"
                                                              style={{color: 'white'}}>
                                                            {t('courses.tabs.combo', 'Combo Package')}
                                                        </Link>
                                                    </div>
                                                    <div className="thumb">
                                                        <img src={course.image_homepage || `FCImage/Course-${index + 7}.png`}
                                                             alt="img"/>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h4>
                                                        <Link href="/courses-details" style={{color: 'white'}}>
                                                            {course.name}
                                                        </Link>
                                                    </h4>
                                                    <div className="course-details">
                                                        <p>{course.subtitle}</p>
                                                        <p>{course.hours} {t('common.hours', 'hours')}</p>
                                                        <p>${course.price}</p>
                                                    </div>
                                                    <div className="star">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <span style={{color: 'white'}}>(4.8/5 Reviews)</span>
                                                    </div>
                                                    <Link href="/courses-details" className="link-btn link-btn-white"
                                                          style={{color: 'white'}}>
                                                        {t('common.view_details', 'View Details')} <i
                                                        className="far fa-chevron-double-right"
                                                        style={{color: 'white'}}></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-12 text-center text-muted">
                                        <p>{t('common.no_data', 'No data available')}</p>
                                    </div>
                                )}
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 text-center">
                                    <p className="course-note">
                                        <strong>{t('common.note', 'Note')}:</strong> {t('courses.pricing_note', '1-on-1 and 2-3 person small class prices, please contact customer service for detailed quotes')}
                                    </p>
                                </div>
                            </div>
                        </div>
>>>>>>> Stashed changes
                    </div>
                </div>
            </section>
        </>
    );
};

export default FCCoursesHome;