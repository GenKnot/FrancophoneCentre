import Count from '@/common/Count';
import React from 'react';

const FCPartnarsHome = () => {
    return (
        <>
            <section className="choose-us-section-5 fix section-padding">
                <div className="container">
                    <div className="choose-us-wrapper-5">
                        <div className="row g-4">
                            <div className="col-xl-6 col-lg-6">
                                <div className="choose-content">
                                    <div className="section-title color-red">
                                        <h6 className="wow fadeInUp">
                                            QFEC独家优势
                                        </h6>
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                            不仅学法语 <br />
                                            还教你怎么拿高分
                                        </h2>
                                    </div>
                                    <div className="choose-items mt-4 mt-md-0 ">
                                        <div className="circle-text wow fadeInUp" data-wow-delay=".3s">
                                            <img src="assets/img/circle-5.png" alt="img" className="circle-animation"/>
                                            <div className="icon">
                                                <i className="far fa-arrow-right" style={{color: '#AD0119'}}></i>
                                            </div>
                                        </div>
                                        <div className="counter-box wow fadeInUp" data-wow-delay=".5s">
                                            <h2 className="title" style={{color: '#AD0119'}}><span className="odometer" data-count="2000"> <Count
                                                number={2000} text='+'/>  </span></h2>
                                            <p>小时考官教研成果</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="choose-us-items-5">
                                    <div className="row g-0">
                                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                            <div className="choose-box-3 border-left-none  border-top-none">
                                                <div className="icon">
                                                    <i className="fas fa-bullseye" style={{color: '#AD0119'}}></i>
                                                </div>
                                                <div className="content">
                                                    <h5>100%原题训练</h5>
                                                    <p>
                                                        下次考试遇到80%原题
                                                        不是运气，是实力
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                            <div
                                                className="choose-box-3 border-right-none border-left-none border-top-none">
                                                <div className="icon">
                                                    <i className="fas fa-sync-alt" style={{color: '#AD0119'}}></i>
                                                </div>
                                                <div className="content">
                                                    <h5>每月课程更新</h5>
                                                    <p>
                                                        考官每周组织教研反馈
                                                        我们永远学最新考点
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                            <div
                                                className="choose-box-3 border-left-none border-bottom-none border-top-none">
                                                <div className="icon">
                                                    <i className="fas fa-medal" style={{color: '#AD0119'}}></i>
                                                </div>
                                                <div className="content">
                                                    <h5>三个100%保证</h5>
                                                    <p>
                                                        评测系统 + 考试环境 + 核心词汇
                                                        全覆盖无死角
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                            <div
                                                className="choose-box-3 border-left-none border-bottom-none  border-top-none border-right-none">
                                                <div className="icon">
                                                    <i className="fas fa-dollar-sign" style={{color: '#AD0119'}}></i>
                                                </div>
                                                <div className="content">
                                                    <h5>超值优惠</h5>
                                                    <p>
                                                        考官1对1原价200加币
                                                        内部学员专享价
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
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

export default FCPartnarsHome;