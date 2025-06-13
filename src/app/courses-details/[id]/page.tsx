"use client"

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import CoursesDetails from '@/components/courses-details';

interface CourseDetailData {
    id: number;
    name: string;
    course_type: string;
    subtitle: string;
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

const CourseDetailsPage = () => {
    const params = useParams();
    const [courseData, setCourseData] = useState<CourseDetailData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                const courseId = params.id as string;
                const response = await fetch(`http://127.0.0.1:8000/api/course/${courseId}/`);
                
                if (!response.ok) {
                    throw new Error('Course not found');
                }
                
                const data = await response.json();
                setCourseData(data.course);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load course');
            } finally {
                setLoading(false);
            }
        };

        if (params.id) {
            fetchCourseData();
        }
    }, [params.id]);

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