"use client";

import Link from 'next/link';
import React from 'react';

const FCCoursesHome = () => {
    return (
        <>
            <style jsx>{`
                .link-btn-white {
                    color: white !important;
                    position: relative;
                }
                .link-btn-white:before {
                    content: "";
                    position: absolute;
                    top: -15px;
                    left: 0;
                    width: 50px;
                    height: 2px;
                    background-color: white !important;
                }
                .link-btn-white:hover {
                    color: #f0f0f0 !important;
                }
                .link-btn-white i {
                    color: white !important;
                }
                .link-btn-white:hover i {
                    color: #f0f0f0 !important;
                }
                .post-cat-white {
                    color: white !important;
                }
            `}</style>
            <section className="popular-courses-section-33 fix section-padding">
                <div className="container">
                    <div className="section-title color-red text-center">
                        <h6 className="wow fadeInUp">
                            热门课程
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            QFEC课程体系
                        </h2>
                        <p className="courses-sub-text mt-3 wow fadeInUp" data-wow-delay=".5s">
                            现任考官直授 <b>98%通过率</b> 助您快速达到 <b>移民要求</b>
                        </p>
                    </div>
                    <ul className="nav mt-3 mt-md-0">

                        <li className="nav-item wow fadeInUp" data-wow-delay=".2s">
                            <a href="#BasicCourses" data-bs-toggle="tab" className="nav-link active">
                                基础课程
                            </a>
                        </li>
                        <li className="nav-item wow fadeInUp" data-wow-delay=".4s">
                            <a href="#ExamPrep" data-bs-toggle="tab" className="nav-link">
                                刷题班
                            </a>
                        </li>
                        <li className="nav-item wow fadeInUp" data-wow-delay=".6s">
                            <a href="#ComboPackage" data-bs-toggle="tab" className="nav-link">
                                COMBO套餐
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="BasicCourses" className="tab-pane fade show active">
                            <div className="row">
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="popular-courses-items" style={{backgroundColor: '#AD0119', color: 'white'}}>
                                        <div className="popular-thumb">
                                            <div className="post-box">
                                                <Link href="/courses-details" className="post-cat-white" style={{color: 'white'}}>
                                                    零基础入门
                                                </Link>
                                            </div>
                                            <div className="thumb">
                                                <img src="FCImage/Course-1.png" alt="img"/>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/courses-details" style={{color: 'white'}}>
                                                    0-A1基础课程
                                                    零基础快速入门
                                                </Link>
                                            </h4>
                                            <div className="course-details">
                                                <p>适用于：0基础学员</p>
                                                <p>课时：80课时</p>
                                            </div>
                                            <div className="star">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <span style={{color: 'white'}}>(4.9/5 Reviews)</span>
                                            </div>
                                            <Link href="/courses-details" className="link-btn link-btn-white" style={{color: 'white'}}>了解详情 <i
                                                className="far fa-chevron-double-right" style={{color: 'white'}}></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="popular-courses-items bg-2" style={{backgroundColor: '#AD0119', color: 'white'}}>
                                        <div className="popular-thumb">
                                            <div className="post-box">
                                                <Link href="/courses-details" className="post-cat-white" style={{color: 'white'}}>
                                                    进阶课程
                                                </Link>
                                            </div>
                                            <div className="thumb">
                                                <img src="FCImage/Course-2.png" alt="img"/>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/courses-details" style={{color: 'white'}}>
                                                    A2-B1进阶课程
                                                    稳步提升法语水平
                                                </Link>
                                            </h4>
                                            <div className="course-details">
                                                <p>适用于：A1-A2基础学员</p>
                                                <p>课时：160课时</p>
                                            </div>
                                            <div className="star">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <span style={{color: 'white'}}>(4.8/5 Reviews)</span>
                                            </div>
                                            <Link href="/courses-details" className="link-btn link-btn-white" style={{color: 'white'}}>了解详情 <i
                                                className="far fa-chevron-double-right" style={{color: 'white'}}></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="popular-courses-items bg-3" style={{backgroundColor: '#AD0119', color: 'white'}}>
                                        <div className="popular-thumb">
                                            <div className="post-box">
                                                <Link href="/courses-details" className="post-cat-white" style={{color: 'white'}}>
                                                    全程系统
                                                </Link>
                                            </div>
                                            <div className="thumb">
                                                <img src="FCImage/Course-3.png" alt="img"/>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/courses-details" style={{color: 'white'}}>
                                                    0-B2全程系统课程
                                                    零基础到B2水平
                                                </Link>
                                            </h4>
                                            <div className="course-details">
                                                <p>适用于：0基础学员</p>
                                                <p>课时：480课时（含四个级别）</p>
                                            </div>
                                            <div className="star">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <span style={{color: 'white'}}>(5.0/5 Reviews)</span>
                                            </div>
                                            <Link href="/courses-details" className="link-btn link-btn-white" style={{color: 'white'}}>了解详情 <i
                                                className="far fa-chevron-double-right" style={{color: 'white'}}></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="ExamPrep" className="tab-pane fade">
                            <div className="row">
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="popular-courses-items" style={{backgroundColor: '#AD0119', color: 'white'}}>
                                        <div className="popular-thumb">
                                            <div className="post-box">
                                                <Link href="/courses-details" className="post-cat-white" style={{color: 'white'}}>
                                                    B2刷题班
                                                </Link>
                                            </div>
                                            <div className="thumb">
                                                <img src="FCImage/Course-4.png" alt="img"/>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/courses-details" style={{color: 'white'}}>
                                                    B2刷题班
                                                    考试技巧专项训练
                                                </Link>
                                            </h4>
                                            <div className="course-details">
                                                <p>适用于：B1-B2水平学员</p>
                                                <p>课时：120课时（含24节小班考试技巧）</p>
                                            </div>
                                            <div className="star">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <span style={{color: 'white'}}>(4.8/5 Reviews)</span>
                                            </div>
                                            <Link href="/courses-details" className="link-btn link-btn-white" style={{color: 'white'}}>了解详情 <i
                                                className="far fa-chevron-double-right" style={{color: 'white'}}></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="popular-courses-items bg-2" style={{backgroundColor: '#AD0119', color: 'white'}}>
                                        <div className="popular-thumb">
                                            <div className="post-box">
                                                <Link href="/courses-details" className="post-cat-white" style={{color: 'white'}}>
                                                    CLB7冲刺
                                                </Link>
                                            </div>
                                            <div className="thumb">
                                                <img src="FCImage/Course-5.png" alt="img"/>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/courses-details" style={{color: 'white'}}>
                                                    CLB7刷题班
                                                    高分冲刺保障
                                                </Link>
                                            </h4>
                                            <div className="course-details">
                                                <p>适用于：B2水平学员</p>
                                                <p>课时：120课时（含24节小班考试技巧）</p>
                                            </div>
                                            <div className="star">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <span style={{color: 'white'}}>(4.9/5 Reviews)</span>
                                            </div>
                                            <Link href="/courses-details" className="link-btn link-btn-white" style={{color: 'white'}}>了解详情 <i
                                                className="far fa-chevron-double-right" style={{color: 'white'}}></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="popular-courses-items bg-3" style={{backgroundColor: '#AD0119', color: 'white'}}>
                                        <div className="popular-thumb">
                                            <div className="post-box">
                                                <Link href="/courses-details" className="post-cat-white" style={{color: 'white'}}>
                                                    内部优惠
                                                </Link>
                                            </div>
                                            <div className="thumb">
                                                <img src="FCImage/Course-6.png" alt="img"/>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/courses-details" style={{color: 'white'}}>
                                                    学校客户
                                                    专享优惠价格
                                                </Link>
                                            </h4>
                                            <div className="course-details">
                                                <p>适用于：基础班毕业学员</p>
                                                <p>课时：120课时优惠价</p>
                                            </div>
                                            <div className="star">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <span style={{color: 'white'}}>(4.9/5 Reviews)</span>
                                            </div>
                                            <Link href="/courses-details" className="link-btn link-btn-white" style={{color: 'white'}}>了解详情 <i
                                                className="far fa-chevron-double-right" style={{color: 'white'}}></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="ComboPackage" className="tab-pane fade">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="popular-courses-items" style={{backgroundColor: '#AD0119', color: 'white'}}>
                                        <div className="popular-thumb">
                                            <div className="post-box">
                                                <Link href="/courses-details" className="post-cat-white" style={{color: 'white'}}>
                                                    COMBO套餐
                                                </Link>
                                            </div>
                                            <div className="thumb">
                                                <img src="FCImage/Course-7.png" alt="img"/>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/courses-details" style={{color: 'white'}}>
                                                    0基础B2刷题套餐
                                                    基础+刷题一步到位
                                                </Link>
                                            </h4>
                                            <div className="course-details">
                                                <p>适用于：0基础学员</p>
                                                <p>课时：440课时（含0-B1基础课+B2刷题班）</p>
                                                <p>优势：系统学习+考试冲刺</p>
                                            </div>
                                            <div className="star">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <span style={{color: 'white'}}>(4.8/5 Reviews)</span>
                                            </div>
                                            <Link href="/courses-details" className="link-btn link-btn-white" style={{color: 'white'}}>了解详情 <i
                                                className="far fa-chevron-double-right" style={{color: 'white'}}></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="popular-courses-items bg-2" style={{backgroundColor: '#AD0119', color: 'white'}}>
                                        <div className="popular-thumb">
                                            <div className="post-box">
                                                <Link href="/courses-details" className="post-cat-white" style={{color: 'white'}}>
                                                    终极套餐
                                                </Link>
                                            </div>
                                            <div className="thumb">
                                                <img src="FCImage/Course-8.png" alt="img"/>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/courses-details" style={{color: 'white'}}>
                                                    0基础CLB7刷题套餐
                                                    零基础直达高分
                                                </Link>
                                            </h4>
                                            <div className="course-details">
                                                <p>适用于：0基础学员</p>
                                                <p>课时：600课时（含0-B2基础课+CLB7刷题班）</p>
                                                <p>目标：直达CLB7高分</p>
                                            </div>
                                            <div className="star">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <span style={{color: 'white'}}>(4.9/5 Reviews)</span>
                                            </div>
                                            <Link href="/courses-details" className="link-btn link-btn-white" style={{color: 'white'}}>了解详情 <i
                                                className="far fa-chevron-double-right" style={{color: 'white'}}></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 text-center">
                                    <p className="course-note">
                                        <strong>备注：</strong>1对1及2-3人小班课价格请咨询客服获取详细报价
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FCCoursesHome;