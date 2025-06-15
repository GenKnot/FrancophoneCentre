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
        name: '基础课 0-预科',
        course_type: 'basic',
        subtitle: '发音和基础词汇',
        short_description: '发音和基础词汇',
        price: 160.00,
        price_text: '160加币',
        hours: 10,
        level_required: '适用于0基础',
        rating: 4.9,
        rating_count: 156,
        image_listing: 'FCImage/Coures-10.png',
        is_active: true,
        order: 1,
    },
    {
        id: 2,
        name: '基础课 预科-A1',
        course_type: 'basic',
        subtitle: '基础语法及口语入门',
        short_description: '基础语法及口语入门',
        price: 680.00,
        price_text: '680加币',
        hours: 40,
        level_required: '适用于学完预科',
        rating: 4.9,
        rating_count: 203,
        image_listing: 'FCImage/Coures-10.png',
        is_active: true,
        order: 2,
    },
    {
        id: 3,
        name: '基础课 A1-A2',
        course_type: 'basic',
        subtitle: '语法运用、口语进阶',
        short_description: '语法运用、口语进阶',
        price: 1200.00,
        price_text: '1200加币',
        hours: 70,
        level_required: '适用于学完A1',
        rating: 4.9,
        rating_count: 178,
        image_listing: 'FCImage/Coures-10.png',
        is_active: true,
        order: 3,
    },
    {
        id: 4,
        name: '基础课 A2-B1',
        course_type: 'basic',
        subtitle: '写作技巧、语法进阶以及口语训练',
        short_description: '写作技巧、语法进阶以及口语训练',
        price: 2600.00,
        price_text: '2600加币',
        hours: 160,
        level_required: '适用于学完A2',
        rating: 4.9,
        rating_count: 142,
        image_listing: 'FCImage/Coures-10.png',
        is_active: true,
        order: 4,
    },
    {
        id: 5,
        name: '基础课 B1-B2',
        course_type: 'basic',
        subtitle: '高级写作技巧以及口语训练',
        short_description: '高级写作技巧以及口语训练',
        price: 3400.00,
        price_text: '3400加币',
        hours: 200,
        level_required: '适用于学完B1',
        rating: 4.9,
        rating_count: 98,
        image_listing: 'FCImage/Coures-10.png',
        is_active: true,
        order: 5,
    },
    {
        id: 6,
        name: '刷题班',
        course_type: 'exam_prep',
        subtitle: '考试冲刺',
        short_description: '完全真题训练以及考官口语训练，包含100小时录播 + 32小时技巧',
        price: 4500.00,
        price_text: '4500加币',
        hours: 132,
        level_required: '适用于B1-B2',
        rating: 4.9,
        rating_count: 289,
        image_listing: 'FCImage/Coures-10.png',
        is_active: true,
        order: 6,
    },
    {
        id: 7,
        name: '刷题班（学校客户）',
        course_type: 'exam_prep',
        subtitle: '学校客户',
        short_description: '完全真题训练以及考官口语训练，包含100小时录播 + 32小时技巧',
        price: 3600.00,
        price_text: '3600加币',
        hours: 132,
        level_required: '适用于B1-B2',
        rating: 4.8,
        rating_count: 156,
        image_listing: 'FCImage/Coures-10.png',
        is_active: true,
        order: 7,
    },
    {
        id: 8,
        name: 'COMBO 0基础CLB5刷题套餐',
        course_type: 'combo',
        subtitle: '0基础CLB5',
        short_description: '包含0基础到A2的所有基础课以及刷题班',
        price: 5640.00,
        price_text: '5640加币',
        hours: 132,
        level_required: '适用于0基础',
        rating: 4.9,
        rating_count: 234,
        image_listing: 'FCImage/Coures-10.png',
        is_active: true,
        order: 8,
    },
    {
        id: 9,
        name: 'COMBO 0基础B2刷题套餐',
        course_type: 'combo',
        subtitle: '0基础B2',
        short_description: '包含0基础到B1的所有基础课以及刷题班',
        price: 8240.00,
        price_text: '8240加币',
        hours: 412,
        level_required: '适用于0基础',
        rating: 4.9,
        rating_count: 189,
        image_listing: 'FCImage/Coures-10.png',
        is_active: true,
        order: 9,
    },
    {
        id: 10,
        name: 'COMBO 0基础CLB7刷题套餐',
        course_type: 'combo',
        subtitle: '0基础CLB7',
        short_description: '包含0基础到B2的所有基础课以及刷题班',
        price: 11640.00,
        price_text: '11640加币',
        hours: 612,
        level_required: '适用于0基础',
        rating: 4.9,
        rating_count: 167,
        image_listing: 'FCImage/Coures-10.png',
        is_active: true,
        order: 10,
    },
    {
        id: 11,
        name: 'VIP班',
        course_type: 'vip',
        subtitle: '无限学习',
        short_description: '所有课程无限次学习，额外赠送60节考官一对一课程',
        price: 19999.00,
        price_text: '19999加币',
        hours: null,
        level_required: '适用于0基础',
        rating: 4.9,
        rating_count: 89,
        image_listing: 'FCImage/Coures-10.png',
        is_active: true,
        order: 11,
    },
];

const courseTypeMap: { [key: string]: string } = {
    'basic': '基础课程',
    'exam_prep': '考试课程', 
    'combo': '套餐课程',
    'vip': 'VIP课程'
};

const CoursesArea = () => {
    const [sortOrder, setSortOrder] = useState<string>('01');
    const { data, loading, error } = useCoursesData();
    const { t } = useLanguage();

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
        
        return courseTypeMap[courseType] || courseType;
    };

    const renderCourseCard = (course: any) => (
        <div key={course.id} className="col-xl-4 col-lg-6 col-md-6">
            <div className="courses-card-main-items">
                <div className="courses-card-items style-2">
                    <div className="courses-image">
                        <img src={course.image_listing || 'FCImage/Coures-10.png'} alt="img" />
                        <h3 className="courses-title">{getCourseTypeLabel(course.course_type)}</h3>
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
                                <Link href="/courses">{getCourseTypeLabel(course.course_type)}</Link>
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
                                {course.hours ? `${course.hours}${data?.translations?.courses?.hours || '课时'}` : data?.translations?.courses?.unlimited_hours || '无限课时'}
                            </li>
                            <li>
                                <i className="far fa-user"></i>
                                {course.level_required}
                            </li>
                            <li>
                                <Link href={`/courses-details/${course.id}`} className="theme-btn">
                                    {course.price_text}
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
                                <span className="visually-hidden">加载中...</span>
                            </div>
                            <p className="mt-3">正在加载课程数据...</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        console.warn('API error:', error);
    }

    return (
        <>
            <section className="popular-courses-section fix section-padding">
                <div className="container">
                    <div className="coureses-notices-wrapper">
                        <div className="courses-showing">
                            <h5>
                                {data?.translations?.common?.showing || '显示'} 1-{totalCourses} {data?.translations?.common?.of || '共'} {totalCourses} {data?.translations?.courses?.courses_count || '门课程'}
                            </h5>
                        </div>
                        <div className="form-clt">
                            <NiceSelect
                                className="category"
                                options={[
                                    { value: "01", text: data?.translations?.courses?.sort?.default || "排序方式：默认" },
                                    { value: "02", text: data?.translations?.courses?.sort?.by_hours || "按课时排序" },
                                    { value: "03", text: data?.translations?.courses?.sort?.by_level || "按难度排序" },
                                    { value: "04", text: data?.translations?.courses?.sort?.by_price || "按价格排序" },
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
                            {data?.translations?.courses?.fallback_message || '正在显示备用数据。如需最新课程信息，请检查网络连接后刷新页面。'}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default CoursesArea;