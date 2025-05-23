import BreadcrumbEvent from '@/common/breadcrumb/BreadcrumbEvent';
import MarqueeOne from '@/common/MarqueeOne';
import Link from 'next/link';
import React from 'react';
import HeaderMain from "@/layouts/headers/HeaderMain";
import FooterMain from "@/layouts/footers/FooterMain";

const Error = () => {
  return (
    <>
      <HeaderMain />
      <BreadcrumbEvent title="Error 404" subtitle="Error 404" />

      <div className="error-section fix section-padding pt-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="error-items text-center">
                            <div className="error-image wow fadeInUp" data-wow-delay=".3s">
                                <img src="FCImage/404.png" alt="img" />
                            </div>
                            <Link href="/" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
                                回到主页
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <MarqueeOne style_2={true} />
        <FooterMain />
    </>
  );
};

export default Error;