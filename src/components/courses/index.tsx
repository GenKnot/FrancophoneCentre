"use client"

import React, { useState, useEffect } from 'react';
import BreadcrumbCourses from '@/common/breadcrumb/BreadcrumbCourses';
import MarqueeOne from '@/common/MarqueeOne';
import CoursesArea from './CoursesArea';
import HeaderMain from "@/layouts/headers/HeaderMain";
import FooterMain from "@/layouts/footers/FooterMain";
import { useLanguage } from '@/contexts/LanguageContext';

const Courses = () => {
  return (
		<>
			<HeaderMain />
			<BreadcrumbCourses />
			<CoursesArea />
			<MarqueeOne style_2={true} />
			<FooterMain />
		</>
	);
};

export default Courses;