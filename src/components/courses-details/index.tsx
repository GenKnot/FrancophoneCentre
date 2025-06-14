import BreadcrumbCoursesDetails from '@/common/breadcrumb/BreadcrumbCoursesDetails';
import MarqueeOne from '@/common/MarqueeOne';
import React from 'react';
import CoursesDetailsArea from './CoursesDetailsArea';

import HeaderMain from "@/layouts/headers/HeaderMain";
import FooterMain from "@/layouts/footers/FooterMain";

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

interface CoursesDetailsProps {
    courseData: CourseDetailData;
}

const CoursesDetails: React.FC<CoursesDetailsProps> = ({ courseData }) => {
  return (
    <>
    <HeaderMain />
    <BreadcrumbCoursesDetails courseData={courseData} />
    <CoursesDetailsArea courseData={courseData} />
    <MarqueeOne style_2={true} />
    <FooterMain />
    </>
  );
};

export default CoursesDetails;