"use client"

import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import CoursesDetails from '@/components/courses-details';
import { ENDPOINTS } from '../../../../constants/api';
import { useLanguage } from '@/contexts/LanguageContext';

interface CourseDetailData {
    id: number;
    name: string;    name_zh_hans?: string;
    name_zh_hant?: string;
    name_fr?: string;
    course_type: string;
    subtitle: string;
    subtitle_zh_hans?: string;
    subtitle_zh_hant?: string;
    subtitle_fr?: string;
    description: string;
    description_zh_hans?: string;
    description_zh_hant?: string;
    description_fr?: string;
    short_description: string;
    short_description_zh_hans?: string;
    short_description_zh_hant?: string;
    short_description_fr?: string;
    slug: string;
    price: number | null;
    price_text: string;
    price_text_zh_hans?: string;
    price_text_zh_hant?: string;
    price_text_fr?: string;
    hours: number | null;
    duration_weeks: string;
    duration_weeks_zh_hans?: string;
    duration_weeks_zh_hant?: string;
    duration_weeks_fr?: string;
    target_level: string;
    target_level_zh_hans?: string;
    target_level_zh_hant?: string;
    target_level_fr?: string;
    required_level: string;
    required_level_zh_hans?: string;
    required_level_zh_hant?: string;
    required_level_fr?: string;
    language_of_instruction: string;
    language_of_instruction_zh_hans?: string;
    language_of_instruction_zh_hant?: string;
    language_of_instruction_fr?: string;
    pass_rate: string;
    special_features: string;
    special_features_zh_hans?: string;
    special_features_zh_hant?: string;
    special_features_fr?: string;
    difficulty_level: number;
    consultation_text: string;
    consultation_text_zh_hans?: string;
    consultation_text_zh_hant?: string;
    consultation_text_fr?: string;
    button_contact_text: string;
    button_contact_text_zh_hans?: string;
    button_contact_text_zh_hant?: string;
    button_contact_text_fr?: string;
    button_secondary_text: string;
    button_secondary_text_zh_hans?: string;
    button_secondary_text_zh_hant?: string;
    button_secondary_text_fr?: string;
    image_homepage: string;
    image_listing: string;
    image_detail_large: string;
    image_detail_small: string;
    image_instagram: string;
    rating: number;
    rating_count: number;
    video_url: string;
    course_introduction: string;
    course_introduction_zh_hans?: string;
    course_introduction_zh_hant?: string;
    course_introduction_fr?: string;
    course_benefits: string;
    course_benefits_zh_hans?: string;
    course_benefits_zh_hant?: string;
    course_benefits_fr?: string;
    course_advantages: string;
    course_advantages_zh_hans?: string;
    course_advantages_zh_hant?: string;
    course_advantages_fr?: string;
    teachers: any[];
    teacher_data: any[];
    sections: any[];
    featured_reviews: any[];
    related_courses: any[];
}

const CourseDetailsPage = () => {
    const params = useParams();
    const searchParams = useSearchParams();
    const { currentLanguage, isHydrated } = useLanguage();
    const [courseData, setCourseData] = useState<CourseDetailData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const courseId = params.id as string;
                
                // Get language from URL params or current language
                const urlLang = searchParams.get('lang');
                const language = urlLang || currentLanguage || 'en';
                
                // Convert language for backend
                const backendLanguage = language === 'zh-hans' ? 'zh-Hans' : language;
                
                const url = `${ENDPOINTS.COURSES.COURSE_DETAIL(courseId)}?lang=${backendLanguage}`;
                console.log('Fetching course data from:', url);
                
                const response = await fetch(url);
                
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error('Course not found');
                    }
                    throw new Error(`Failed to load course (${response.status})`);
                }
                
                const data = await response.json();
                console.log('Course data received:', data);
                
                if (data.course) {
                    setCourseData(data.course);
                } else {
                    throw new Error('Course data not found in response');
                }
            } catch (err) {
                console.error('Error fetching course data:', err);
                setError(err instanceof Error ? err.message : 'Failed to load course');
            } finally {
                setLoading(false);
            }
        };

        if (params.id && isHydrated) {
            fetchCourseData();
        }
    }, [params.id, currentLanguage, searchParams, isHydrated]);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container text-center py-5">
                <h2>Course Not Found</h2>
                <p>{error}</p>
                <a href="/courses" className="btn btn-primary">Back to Courses</a>
            </div>
        );
    }

    if (!courseData) {
        return null;
    }

    return <CoursesDetails courseData={courseData} />;
};

export default CourseDetailsPage; 