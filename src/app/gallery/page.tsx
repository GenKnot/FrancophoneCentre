import React from 'react'; 
import Wrapper from '@/layouts/Wrapper';
import Gallery from '@/components/gallery';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "画廊 - Francophone Centre",
	description: "浏览QFEC法语教学活动、文化交流和学员成果的精彩瞬间",
	keywords: "QFEC照片, 法语中心画廊, 法语活动照片, 法语教学瞬间",
};


const index = () => {
  return (
    <Wrapper>
      <Gallery />
    </Wrapper>
  );
};

export default index;