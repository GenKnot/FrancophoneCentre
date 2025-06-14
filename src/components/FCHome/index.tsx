import React from 'react';
import FCHeroHome from './FCHeroHome';
import FCAboutHome from './FCAboutHome';
import FCCoursesHome from './FCCoursesHome';
import FCChooseHome1 from './FCChooseHome1';
import FCEventHome from './FCEventHome';
import FCTestimonialHome from './FCTestimonialHome';
import FCBlogHome from './FCBlogHome';
import FCFaqHome from './FCFaqHome';
import FCInstagramHome from './FCInstagramHome';
import FCCtaHome from './FCCtaHome';
import HeaderMain from "@/layouts/headers/HeaderMain";
import FooterMain from "@/layouts/footers/FooterMain";
import FCMarquee from "@/common/FCMarquee";
import FCChooseHome2 from "@/components/FCHome/FCChooseHome2";

const FCHome = () => {
  return (
    <>
      <HeaderMain />
      <FCHeroHome />
      <FCAboutHome />
      <FCMarquee />
      <FCCoursesHome />
      <FCChooseHome1 />
      <FCEventHome />
      <FCTestimonialHome />
      <FCMarquee />
      <FCChooseHome2 />
      <FCBlogHome />
      <FCFaqHome />
      {/* <FCInstagramHome /> */}
      <FCCtaHome />
      <FCMarquee />
      <FooterMain />
    </>
  );
};

export default FCHome;