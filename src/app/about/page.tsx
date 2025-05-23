import React from 'react';
import About from '@/components/about';
import Wrapper from '@/layouts/Wrapper';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "关于我们 - Francophone Centre",
	description: "了解加拿大魁北克法语教育中心(QFEC)的历史、使命和核心优势",
	keywords: "QFEC, 法语教育中心, 魁北克, 法语培训, 关于我们, 法语学习",
};


const index = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  );
};

export default index;