import BreadcrumbCoursesDetails from '@/common/breadcrumb/BreadcrumbCoursesDetails';
import MarqueeOne from '@/common/MarqueeOne';
import React from 'react';
import CoursesDetailsArea from './CoursesDetailsArea';
import RelatedCourses from './RelatedCourses';
import HeaderMain from "@/layouts/headers/HeaderMain";
import FooterMain from "@/layouts/footers/FooterMain";

const CoursesDetails = () => {
  return (
    <>
    <HeaderMain />
    <BreadcrumbCoursesDetails />
    <CoursesDetailsArea />
    <RelatedCourses />
    <MarqueeOne style_2={true} />
    <FooterMain />
    </>
  );
};

export default CoursesDetails;