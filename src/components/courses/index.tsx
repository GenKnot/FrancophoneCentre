"use client"

import React from 'react';
import BreadcrumbCourses from '@/common/breadcrumb/BreadcrumbCourses';
import MarqueeOne from '@/common/MarqueeOne';
import CoursesArea from './CoursesArea';
import HeaderMain from "@/layouts/headers/HeaderMain";
import FooterMain from "@/layouts/footers/FooterMain";
import { useLanguage } from '@/contexts/LanguageContext';

const Courses = () => {
  const { t } = useLanguage();
  
  return (
		<>
			<HeaderMain />
			<BreadcrumbCourses 
				title="所有课程" 
				subtitle="课程" 
			/>
			<CoursesArea />
			<MarqueeOne style_2={true} />
			<FooterMain />
		</>
	);
};

export default Courses;