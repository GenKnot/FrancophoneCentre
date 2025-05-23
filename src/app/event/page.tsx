import React from 'react';
import Event from '@/components/event';
import Wrapper from '@/layouts/Wrapper'; 


import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "活动 - Francophone Centre",
	description: "探索QFEC组织的法语文化活动、研讨会、法语交流会等",
	keywords: "法语活动, 文化交流, 法语研讨会, QFEC活动, 法语交流会",
};


const index = () => {
  return (
    <Wrapper>
      <Event />      
    </Wrapper>
  );
};

export default index;