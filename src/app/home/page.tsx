import Wrapper from '@/layouts/Wrapper';
import React from 'react';

import { Metadata } from 'next';
import FCHome from "@/components/FCHome";

export const metadata: Metadata = {
    title: "Francophone Centre",
    description: "加拿大法语教育中心（Canadian Francophone Education Centre, 简称 CFEC）专业法语教学与培训机构",
    keywords: "法语, 法语教育, CFEC, 魁北克, 法语培训, TEF/TCF考试, 法语考试",
};


const index = () => {
  return (
    <Wrapper>
      <FCHome />
    </Wrapper>
  );
};

export default index;