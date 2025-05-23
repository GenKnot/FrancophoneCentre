import React from 'react'; 
import News from '@/components/news';
import Wrapper from '@/layouts/Wrapper';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "新闻资讯 - Francophone Centre",
	description: "了解QFEC最新法语教育资讯、活动报道和行业动态",
	keywords: "法语新闻, 法语教育资讯, QFEC动态, 法语学习资讯",
};


const index = () => {
  return (
    <Wrapper>
      <News />
    </Wrapper>
  );
};

export default index;