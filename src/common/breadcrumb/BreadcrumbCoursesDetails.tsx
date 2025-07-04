"use client";
import Link from 'next/link';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface CourseDetailData {
    id: number;
    name: string;
    name_zh_hans?: string;
    name_zh_hant?: string;
    name_fr?: string;
    course_type: string;
    subtitle: string;
    subtitle_zh_hans?: string;
    subtitle_zh_hant?: string;
    subtitle_fr?: string;
    description: string;
    short_description: string;
    slug: string;
    price: number | null;
    price_text: string;
    hours: number | null;
    duration_weeks: string;
    target_level: string;
    required_level: string;
    language_of_instruction: string;
    pass_rate: string;
    special_features: string;
    difficulty_level: number;
    consultation_text: string;
    button_contact_text: string;
    button_secondary_text: string;
    image_homepage: string;
    image_listing: string;
    image_detail_large: string;
    image_detail_small: string;
    image_instagram: string;
    rating: number;
    rating_count: number;
    video_url: string;
    course_introduction: string;
    course_benefits: string;
    course_advantages: string;
    teachers: any[];
    teacher_data: any[];
    sections: any[];
    featured_reviews: any[];
    related_courses: any[];
}

interface BreadcrumbCoursesDetailsProps {
    courseData: CourseDetailData;
}

const BreadcrumbCoursesDetails: React.FC<BreadcrumbCoursesDetailsProps> = ({ courseData }) => {
    const { currentLanguage, isHydrated } = useLanguage();

    const getTranslatedField = (fieldName: string, fallback: string = '') => {
        if (!courseData) return fallback;
        
        const baseField = (courseData as any)[fieldName];
        const langCode = currentLanguage.replace('-', '_');
        const translatedField = (courseData as any)[`${fieldName}_${langCode}`];
        
        return translatedField || baseField || fallback;
    };

    const getFixedText = (key: string, zhText: string, enText: string = zhText, frText: string = zhText, zhHantText: string = zhText) => {
        if (!isHydrated) {
            return enText;
        }
        
        switch (currentLanguage) {
            case 'zh-hans':
            case 'zh-CN':
            case 'zh-Hans':
                return zhText;
            case 'zh-hant':
            case 'zh-TW':
            case 'zh-Hant':
                return zhHantText;
            case 'fr':
                return frText;
            case 'en':
            default:
                return enText;
        }
    };

    if (!courseData) {
        return (
            <section className="breadcrumb-wrapper style-2">
                <div className="container">
                    <div className="page-heading">
                        <div className="breadcrumb-content">
                            <h1>Loading...</h1>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="breadcrumb-wrapper style-2">
                <div className="shape-1">
                    <img src="/assets/img/breadcrumb/shape-1.png" alt="img" />
                </div>
                <div className="shape-2">
                    <img src="/assets/img/breadcrumb/shape-2.png" alt="img" />
                </div>
                <div className="dot-shape">
                    <img src="/assets/img/breadcrumb/dot-shape.png" alt="img" />
                </div>
                <div className="vector-shape">
                    <img src="/assets/img/breadcrumb/Vector.png" alt="img" />
                </div>
                <div className="container">
                    <div className="page-heading">
                        <ul className="breadcrumb-items mt-5">
                            <li><Link href="/" suppressHydrationWarning>{getFixedText('home', '主页', 'Home', 'Accueil', '主頁')}</Link></li>
                            <li><Link href="/courses" suppressHydrationWarning>{getFixedText('courses', '课程', 'Courses', 'Cours', '課程')}</Link></li>
                            <li className="style-2" suppressHydrationWarning>{getFixedText('course_details', '课程详情', 'Course Details', 'Détails du cours', '課程詳情')}</li>
                        </ul>
                        <div className="breadcrumb-content">
                            <h1>{getTranslatedField('name', courseData.name)}</h1>
                            <div className="courses-breadcrumb-items">
                                <div className="client-image-items">
                                    <div className="client-content">
                                        <span suppressHydrationWarning>{getFixedText('instructors', '授课教师', 'Instructors', 'Instructeurs', '授課教師')}</span>
                                        <h5>{(courseData.teacher_data && courseData.teacher_data.length > 0) ? courseData.teacher_data.map(t => t.name).join(', ') : 'ABLE Examiner'}</h5>
                                    </div>
                                </div>
                                <div className="client-image-items">
                                    <div className="client-content">
                                        <span suppressHydrationWarning>{getFixedText('course_type', '课程类型', 'Course Type', 'Type de cours', '課程類型')}</span>
                                        <h5>{courseData.course_type.replace('_', ' ').toUpperCase()}</h5>
                                    </div>
                                </div>
                                <div className="client-image-items">
                                    <div className="client-content">
                                        <span suppressHydrationWarning>{getFixedText('course_inquiry', '课程咨询', 'Course Inquiry', 'Demande de cours', '課程諮詢')}</span>
                                        <h5 suppressHydrationWarning>{getFixedText('contact_us', '联系我们', 'Contact Us', 'Contactez-nous', '聯繫我們')}</h5>
                                    </div>
                                </div>
                                <div className="client-image-items">
                                    <div className="client-content">
                                        <span suppressHydrationWarning>{getFixedText('difficulty_level', '课程难度', 'Difficulty Level', 'Niveau de difficulté', '課程難度')}</span>
                                        <div className="star">
                                            {[...Array(courseData.difficulty_level || 1)].map((_, i) => (
                                                <i key={i} className="fas fa-star"></i>
                                            ))}
                                            <b suppressHydrationWarning>({courseData.difficulty_level || 1}/5 {getFixedText('difficulty', '难度', 'difficulty', 'difficulté', '難度')})</b>
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

export default BreadcrumbCoursesDetails;