"use client"
import NiceSelect from '@/ui/NiceSelect';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useCoursesData } from '@/hooks/useApiData';
import { useLanguage } from '@/contexts/LanguageContext';

// 备用中文课程数据
const fallbackCoursesData = [
    {
        id: 1,
        name: 'Basic Course 0-Preparatory',
        course_type: 'basic',
        subtitle: 'Pronunciation and Basic Vocabulary',
        short_description: 'Pronunciation and Basic Vocabulary',
        price: 160.00,
        price_text: '160 CAD',
        hours: 10,
        level_required: 'Suitable for beginners',
        rating: 4.9,
        rating_count: 156,
        image_listing: 'FCImage/Coures-10.png',
        is_active: true,
        order: 1,
    },
    {
        id: 2,
        name: 'Basic Course Preparatory-A1',
        course_type: 'basic',
        subtitle: 'Basic Grammar and Speaking Introduction',
        short_description: 'Basic grammar and speaking introduction',
        price: 680.00,
        price_text: '680 CAD',
        hours: 40,
        level_required: 'Suitable for post-preparatory level',
        rating: 4.9,
        rating_count: 203,
        image_listing: 'FCImage/Coures-10.png',
        is_active: true,
        order: 2,
    },
    {
        id: 3,
        name: 'Basic Course A1-A2',
        course_type: 'basic',
        subtitle: 'Grammar Application & Advanced Speaking',
        short_description: 'Grammar application and advanced speaking',
        price: 1200.00,
        price_text: '1200 CAD',
        hours: 70,
        level_required: 'Suitable for post-A1 level',
        rating: 4.9,
        rating_count: 178,
        image_listing: 'FCImage/Coures-10.png',
        is_active: true,
        order: 3,
    },
    {
        id: 4,
        name: 'Basic Course A2-B1',
        course_type: 'basic',
        subtitle: 'Writing Skills & Advanced Grammar',
        short_description: 'Writing skills, advanced grammar and speaking training',
        price: 2600.00,
        price_text: '2600 CAD',
        hours: 160,
        level_required: 'Suitable for post-A2 level',
        rating: 4.9,
        rating_count: 142,
        image_listing: 'FCImage/Coures-10.png',
        is_active: true,
        order: 4,
    },
    {
        id: 5,
        name: 'Basic Course B1-B2',
        course_type: 'basic',
        subtitle: 'Advanced Writing & Speaking Training',
        short_description: 'Advanced writing skills and speaking training',
        price: 3400.00,
        price_text: '3400 CAD',
        hours: 200,
        level_required: 'Suitable for post-B1 level',
        rating: 4.9,
        rating_count: 98,
        image_listing: 'FCImage/Coures-10.png',
        is_active: true,
        order: 5,
    },
    {
        id: 6,
        name: 'Exam Prep Class',
        course_type: 'exam_prep',
        subtitle: 'Exam Sprint',
        short_description: 'Complete practice test training and examiner speaking training, including 100 hours recorded + 32 hours techniques',
        price: 4500.00,
        price_text: '4500 CAD',
        hours: 132,
        level_required: 'Suitable for B1-B2 level',
        rating: 4.9,
        rating_count: 289,
        image_listing: 'FCImage/Coures-10.png',
        is_active: true,
        order: 6,
    },
    {
        id: 7,
        name: 'Exam Prep Class (School Customer)',
        course_type: 'exam_prep',
        subtitle: 'School Customer',
        short_description: 'Complete practice test training and examiner speaking training, including 100 hours recorded + 32 hours techniques',
        price: 3600.00,
        price_text: '3600 CAD',
        hours: 132,
        level_required: 'Suitable for B1-B2 level',
        rating: 4.8,
        rating_count: 156,
        image_listing: 'FCImage/Coures-10.png',
        is_active: true,
        order: 7,
    },
    {
        id: 8,
        name: 'COMBO Beginner to CLB5 Package',
        course_type: 'combo',
        subtitle: 'Beginner to CLB5',
        short_description: 'Includes all basic courses from beginner to A2 and exam prep class',
        price: 5640.00,
        price_text: '5640 CAD',
        hours: 132,
        level_required: 'Suitable for beginners',
        rating: 4.9,
        rating_count: 234,
        image_listing: 'FCImage/Coures-10.png',
        is_active: true,
        order: 8,
    },
    {
        id: 9,
        name: 'COMBO Beginner to B2 Package',
        course_type: 'combo',
        subtitle: 'Beginner to B2',
        short_description: 'Includes all basic courses from beginner to B1 and exam prep class',
        price: 8240.00,
        price_text: '8240 CAD',
        hours: 412,
        level_required: 'Suitable for beginners',
        rating: 4.9,
        rating_count: 189,
        image_listing: 'FCImage/Coures-10.png',
        is_active: true,
        order: 9,
    },
    {
        id: 10,
        name: 'COMBO Beginner to CLB7 Package',
        course_type: 'combo',
        subtitle: 'Beginner to CLB7',
        short_description: 'Includes all basic courses from beginner to B2 and exam prep class',
        price: 11640.00,
        price_text: '11640 CAD',
        hours: 612,
        level_required: 'Suitable for beginners',
        rating: 4.9,
        rating_count: 167,
        image_listing: 'FCImage/Coures-10.png',
        is_active: true,
        order: 10,
    },
    {
        id: 11,
        name: 'VIP Class',
        course_type: 'vip',
        subtitle: 'Unlimited Learning',
        short_description: 'Unlimited access to all courses, plus 60 one-on-one examiner sessions',
        price: 19999.00,
        price_text: '19999 CAD',
        hours: null,
        level_required: 'Suitable for beginners',
        rating: 4.9,
        rating_count: 89,
        image_listing: 'FCImage/Coures-10.png',
        is_active: true,
        order: 11,
    },
];

const CoursesArea = () => {
    const [sortOrder, setSortOrder] = useState<string>('01');
    const { data, loading, error } = useCoursesData();
    const { currentLanguage } = useLanguage();

    const getTranslatedText = (zhText: string, enText: string, frText: string = enText, zhHantText: string = zhText) => {
        switch (currentLanguage) {
            case 'zh-hans':
                return zhText;
            case 'zh-hant':
                return zhHantText;
            case 'fr':
                return frText;
            case 'en':
            default:
                return enText;
        }
    };

    const selectHandler = (e: any) => {
        setSortOrder(e.value);
    };

    const allCourses = data?.courses || fallbackCoursesData;
    
    const sortedCourses = [...allCourses].sort((a, b) => {
        switch(sortOrder) {
            case '02': 
                return (b.hours || 0) - (a.hours || 0);
            case '03': 
                return a.order - b.order;
            case '04': 
                return (b.price || 0) - (a.price || 0);
            default: 
                return a.order - b.order;
        }
    });

    const totalCourses = sortedCourses.length;
    const displayCourses = sortedCourses.slice(0, 30);

    const getCourseTypeLabel = (courseType: string) => {
        const courseTypeFromApi = data?.course_types?.find((type: any) => type.key === courseType);
        if (courseTypeFromApi) {
            return courseTypeFromApi.name;
        }
        
        // Use hardcoded translation
        switch(courseType) {
            case 'basic':
                return getTranslatedText('基础课程', 'Basic Courses', 'Cours de Base', '基礎課程');
            case 'exam_prep':
                return getTranslatedText('考试准备', 'Exam Preparation', 'Préparation aux Examens', '考試準備');
            case 'combo':
                return getTranslatedText('套餐课程', 'Combo Package', 'Forfait Combo', '套餐課程');
            case 'vip':
                return getTranslatedText('VIP课程', 'VIP Course', 'Cours VIP', 'VIP課程');
            default:
                return courseType;
        }
    };

    const renderCourseCard = (course: any) => (
        <div key={course.id} className="col-xl-4 col-lg-6 col-md-6">
            <div className="courses-card-main-items">
                <div className="courses-card-items style-2">
                    <div className="courses-image">
                        <img src={course.image_listing || 'FCImage/Coures-10.png'} alt="img" />
                        <h3 className="courses-title">
                            {getCourseTypeLabel(course.course_type)}
                        </h3>
                        <h4 className="topic-title">{course.subtitle}</h4>
                        <div className="arrow-items">
                            <div className="GlidingArrow">
                                <img src="/assets/img/courses/a1.png" alt="img" />
                            </div>
                            <div className="GlidingArrow delay1">
                                <img src="/assets/img/courses/a2.png" alt="img" />
                            </div>
                            <div className="GlidingArrow delay2">
                                <img src="/assets/img/courses/a3.png" alt="img" />
                            </div>
                            <div className="GlidingArrow delay3">
                                <img src="/assets/img/courses/a4.png" alt="img" />
                            </div>
                            <div className="GlidingArrow delay4">
                                <img src="/assets/img/courses/a5.png" alt="img" />
                            </div>
                            <div className="GlidingArrow delay5">
                                <img src="/assets/img/courses/a6.png" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="courses-content">
                        <ul className="post-cat">
                            <li>
                                <Link href="/courses">
                                    {getCourseTypeLabel(course.course_type)}
                                </Link>
                            </li>
                            <li>
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className="fas fa-star"></i>
                                ))}
                            </li>
                        </ul>
                        <h3>
                            <Link href={`/courses-details/${course.id}`}>
                                {course.name}
                            </Link>
                        </h3>
                        <div className="client-items">
                            <p>{course.short_description}</p>
                        </div>
                        <ul className="post-class">
                            <li>
                                <i className="far fa-books"></i>
                                {course.hours ? `${course.hours}${data?.translations?.courses?.hours || getTranslatedText(' 小时', ' hours', ' heures', ' 小時')}` : data?.translations?.courses?.unlimited_hours || getTranslatedText('无限课时', 'Unlimited hours', 'Heures illimitées', '無限課時')}
                            </li>
                            <li>
                                <i className="far fa-user"></i>
                                {course.level_required}
                            </li>
                            <li>
                                <Link href={`/courses-details/${course.id}`} className="theme-btn">
                                    {course.price_text || (course.price ? `$${course.price}` : 'Contact for Price')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

    // 加载状态
    if (loading) {
        return (
            <section className="popular-courses-section fix section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">{getTranslatedText('加载中...', 'Loading...', 'Chargement...', '載入中...')}</span>
                            </div>
                            <p className="mt-3">{getTranslatedText('加载课程数据中...', 'Loading course data...', 'Chargement des données de cours...', '載入課程資料中...')}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        // API error occurred, but we'll continue with fallback data
    }

    return (
        <>
            <section className="popular-courses-section fix section-padding">
                <div className="container">
                    <div className="coureses-notices-wrapper">
                        <div className="courses-showing">
                            <h5>
                                {data?.translations?.common?.showing || getTranslatedText('显示', 'Showing', 'Affichage', '顯示')} 1-{totalCourses} {data?.translations?.common?.of || getTranslatedText('共', 'of', 'de', '共')} {totalCourses} {data?.translations?.courses?.courses_count || getTranslatedText('门课程', 'courses', 'cours', '門課程')}
                            </h5>
                        </div>
                        <div className="form-clt">
                            <NiceSelect
                                className="category"
                                options={[
                                    { value: "01", text: data?.translations?.courses?.sort?.default || getTranslatedText('排序方式：默认', 'Sort by: Default', 'Trier par : Défaut', '排序方式：默認') },
                                    { value: "02", text: data?.translations?.courses?.sort?.by_hours || getTranslatedText('按课时排序', 'Sort by Hours', 'Trier par heures', '按課時排序') },
                                    { value: "03", text: data?.translations?.courses?.sort?.by_level || getTranslatedText('按难度排序', 'Sort by Level', 'Trier par niveau', '按難度排序') },
                                    { value: "04", text: data?.translations?.courses?.sort?.by_price || getTranslatedText('按价格排序', 'Sort by Price', 'Trier par prix', '按價格排序') },
                                ]}
                                defaultCurrent={0}
                                onChange={selectHandler}
                                name=""
                                placeholder="" />
                        </div>
                    </div>
                    <div className="row">
                        {displayCourses.map(renderCourseCard)}
                    </div>
                    
                    {error && (
                        <div className="alert alert-warning mt-3" role="alert">
                            <i className="fas fa-exclamation-triangle me-2"></i>
                            {data?.translations?.courses?.fallback_message || getTranslatedText('显示后备数据。请检查网络连接并刷新页面以获取最新课程信息。', 'Displaying fallback data. Please check your network connection and refresh the page for the latest course information.', 'Affichage des données de secours. Veuillez vérifier votre connexion réseau et actualiser la page pour les dernières informations sur les cours.', '顯示後備資料。請檢查網路連線並重新整理頁面以取得最新課程資訊。')}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default CoursesArea;