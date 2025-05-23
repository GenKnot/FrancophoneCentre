import Wrapper from '@/layouts/Wrapper';
import React from 'react';

import { Metadata } from 'next';
import FCHome from "@/components/FCHome";

export const metadata: Metadata = {
    title: "Francophone Centre",
    description: "加拿大魁北克法语教育中心（Quebec Francophone Education Centre, 简称 QFEC）专业法语教学与培训机构",
    keywords: "法语, 法语教育, QFEC, 魁北克, 法语培训, TEF考试, 法语考试",
};


const index = () => {
  return (
    <Wrapper>
      <FCHome />
    </Wrapper>
  );
};

export default index;