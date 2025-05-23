import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import Register from '@/components/register';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "注册 - Francophone Centre",
	description: "注册QFEC账号，开始您的法语学习之旅",
	keywords: "QFEC账号注册, 法语课程注册, 法语学习账号, 法语中心注册",
};


const index = () => {
  return (
    <Wrapper>
      <Register />
    </Wrapper>
  );
};

export default index;