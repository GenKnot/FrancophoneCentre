import React from 'react'; 
import Wrapper from '@/layouts/Wrapper';
import Contact from '@/components/contact';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "联系我们 - Francophone Centre",
  description: "联系加拿大魁北克法语教育中心(QFEC)，了解更多关于法语课程的信息",
  keywords: "联系QFEC, 法语中心联系方式, 法语课程咨询, 法语教育咨询",
};

const index = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default index;