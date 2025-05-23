import React from 'react'; 
import Wrapper from '@/layouts/Wrapper';
import SignIn from '@/components/sign-in';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "登录 - Francophone Centre",
	description: "登录QFEC账号，继续您的法语学习",
	keywords: "QFEC账号登录, 法语课程登录, 法语学习平台, 法语中心登录",
};


const index = () => {
  return (
    <Wrapper>
      <SignIn />
    </Wrapper>
  );
};

export default index;