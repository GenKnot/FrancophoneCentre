import Link from 'next/link';
import React from 'react';

const FCCtaHome = () => {
    return (
        <>
            <section className="quality-coureses-section section-padding fix theme-red-bg">
                <div className="container-fluid">
                    <div className="row g-4">
                        <div className="col-xl-2 col-lg-6">
                            <div className="coureses-image float-bob-x">
                                <img src="FCImage/girl.png" alt="img" className="wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.2s" />
                                <div className="bg-shape">
                                    <img src="FCImage/bg-shape-1.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="quality-coureses-content text-center">
                                <div className="section-title">
                                    <h6 className="text-white wow fadeInUp">
                                        停止无效努力
                                    </h6>
                                    <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                        梦想与现实之间 <br />
                                        只差一个正确的选择
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".3s">不要再浪费时间在无效的学习方法上<br/>选择真正懂考试的人来教你</p>
                                <Link href="/courses-details" className="theme-btn wow fadeInUp" data-wow-delay=".3s">
                                    现在就开始改变命运
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6">
                            <div className="coureses-image style-2 float-bob-y">
                                <img src="FCImage/boy.png" alt="img" className="wow img-custom-anim-right" data-wow-duration="1.5s" data-wow-delay="0.4s" />
                                <div className="bg-shape">
                                    <img src="FCImage/bg-shape-2.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FCCtaHome;