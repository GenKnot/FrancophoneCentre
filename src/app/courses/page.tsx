import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import Courses from '@/components/courses';


import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "课程 - Francophone Centre",
	description: "探索QFEC提供的专业法语课程，包括TEF/TCF考试备考，学术法语，职业法语等",
	keywords: "法语课程, TEF考试, TCF考试, 法语培训, 法语学习, QFEC课程",
};


const index = () => {
  return (
    <Wrapper>
      <Courses />      
    </Wrapper>
  );
};

export default index;