import Count from '@/common/Count';
import React from 'react';

const AboutArea = () => {
    return (
        <>
            <section className="about-section fix">
                <div className="about-wrapper-5">
                    <div className="container">
                        <div className="row g-4 justify-content-between">
                            <div className="col-lg-6">
                                <div className="section-title mb-0">
                                    <h6 className="wow fadeInUp" style={{color: '#AD0119'}}>关于我们</h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        加拿大魁北克法语教育中心
                                        您的法语移民梦想起点
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content">
                                    <p className="wow fadeInUp" data-wow-delay=".3s">
                                        自1991年成立以来，QFEC始终肩负"架设加拿大国际教育合作桥梁"的战略使命，
                                        成为连接多元文化与魁北克本土语言教育的重要平台。
                                    </p>
                                    <div className="counter-box-items">
                                        <div className="counter-content wow fadeInUp" data-wow-delay=".3s">
                                            <h2 style={{color: '#AD0119'}}><span className="odometer" data-count="34">
                                          <Count number={34} text='+'/>
                                          </span></h2>
                                            <p>年专业法语教育经验</p>
                                        </div>
                                        <p className="text wow fadeInUp" data-wow-delay=".5s">
                                            由现任TEF考官直授，98%超高通过率，助您快速达到移民要求的法语水平。
                                            我们不仅教授法语，更为您打开通往加拿大新生活的大门。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default AboutArea;