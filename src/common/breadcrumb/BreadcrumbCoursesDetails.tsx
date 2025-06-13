import Link from 'next/link';
import React from 'react';

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

interface BreadcrumbCoursesDetailsProps {
    courseData: CourseDetailData;
}

const BreadcrumbCoursesDetails: React.FC<BreadcrumbCoursesDetailsProps> = ({ courseData }) => {
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
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/courses">Courses</Link></li>
                            <li className="style-2">Course Details</li>
                        </ul>
                        <div className="breadcrumb-content">
                            <h1>{courseData.name}</h1>
                            <div className="courses-breadcrumb-items">
                                <div className="client-image-items">
                                    <div className="client-content">
                                        <span>Instructors</span>
                                        <h5>{(courseData.teacher_data && courseData.teacher_data.length > 0) ? courseData.teacher_data.map(t => t.name).join(', ') : 'ABLE Examiner'}</h5>
                                    </div>
                                </div>
                                <div className="client-image-items">
                                    <div className="client-content">
                                        <span>Course Type</span>
                                        <h5>{courseData.course_type.replace('_', ' ').toUpperCase()}</h5>
                                    </div>
                                </div>
                                <div className="client-image-items">
                                    <div className="client-content">
                                        <span>Course Inquiry</span>
                                        <h5>Contact Us</h5>
                                    </div>
                                </div>
                                <div className="client-image-items">
                                    <div className="client-content">
                                        <span>Student Reviews</span>
                                        <div className="star">
                                            {[...Array(5)].map((_, i) => (
                                                <i key={i} className={`fas fa-star ${i < Math.floor(courseData.rating) ? '' : 'color-2'}`}></i>
                                            ))}
                                            <b>({courseData.rating}/5 {courseData.rating_count} reviews)</b>
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