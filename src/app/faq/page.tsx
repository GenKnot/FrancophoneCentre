import React from 'react'; 
import Faq from '@/components/faq';
import Wrapper from '@/layouts/Wrapper';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "常见问题 - Francophone Centre",
	description: "解答关于CFEC法语课程、TEF/TCF考试、法语学习方法等常见问题",
	keywords: "法语学习问题, TEF/TCF考试问题, 法语课程问题, CFEC常见问题",
};


const index = () => {
  return (
    <Wrapper>
      <Faq />
    </Wrapper>
  );
};

export default index;