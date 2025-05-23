
import Count from '@/common/Count';
import Link from 'next/link';
import React from 'react';

const FCAboutHome = () => {
  return (
    <>
      <div className="about-section-3 section-padding">
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row g-4 justify-content-between">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <h6 className="text-white wow fadeInUp">
                                        关于QFEC
                                    </h6>
                                    <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                        加拿大魁北克 <br />
                                        法语教育中心
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                    加拿大魁北克法语教育中心（QFEC）成立于1991年，是加拿大政府指导下的专业法语教学机构。
                                    总部位于蒙特利尔，由现任TEF考官直授，致力于为学员提供最高质量的法语教育，助力实现移民梦想。
                                </p>
                                <Link href="/about" className="theme-btn red-btn wow fadeInUp" data-wow-delay=".3s">
                                    了解更多详情
                                </Link>
                                <div className="about-counter-items">
                                    <div className="counter-content wow fadeInUp" data-wow-delay=".3s">
                                        <h3><span className="odometer" data-count="13">
                                          <Count number={13} text='+'/>
                                          </span></h3>
                                        <p>年教学经验</p>
                                    </div>
                                    <div className="counter-content wow fadeInUp" data-wow-delay=".5s">
                                        <h3><span className="odometer" data-count="99">
                                          <Count number={99} text='%' />
                                          </span></h3>
                                        <p>TEF考试通过率</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="about-image">
                                <img src="assets/img/FCAbout/FCAbout-2.png" alt="img" className="wow img-custom-anim-left" />
                                <div className="bg-shape">
                                    <img src="assets/img/FCAbout/bg-shape.png" alt="img" />
                                </div>
                                <div className="counter-box">
                                    {/*<p>More then</p>*/}
                                    <h2><span className="odometer" data-count="2800">
                                      <Count number={2000} text='+' />
                                      </span></h2>
                                    <p>小时考官教研成果</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default FCAboutHome;