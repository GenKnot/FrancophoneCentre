import React from 'react';
import Wrapper from '@/layouts/Wrapper'; 
import CoursesDetails from '@/components/courses-details';


import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "课程详情 - Francophone Centre",
	description: "详细了解QFEC提供的法语课程内容、教学特点、师资力量和学习成果",
	keywords: "法语课程详情, TEF备考, 法语培训课程, QFEC教学方法, 法语学习计划",
};


const index = () => {
  return (
    <Wrapper>
      <CoursesDetails />      
    </Wrapper>
  );
};

export default index;