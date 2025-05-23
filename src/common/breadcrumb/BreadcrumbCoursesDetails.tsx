import Link from 'next/link';
import React from 'react';

const BreadcrumbCoursesDetails = () => {
    return (
        <>
            <section className="breadcrumb-wrapper style-2">
                <div className="shape-1">
                    <img src="assets/img/breadcrumb/shape-1.png" alt="img" />
                </div>
                <div className="shape-2">
                    <img src="assets/img/breadcrumb/shape-2.png" alt="img" />
                </div>
                <div className="dot-shape">
                    <img src="assets/img/breadcrumb/dot-shape.png" alt="img" />
                </div>
                <div className="vector-shape">
                    <img src="assets/img/breadcrumb/Vector.png" alt="img" />
                </div>
                <div className="container">
                    <div className="page-heading">
                        <ul className="breadcrumb-items mt-5">
                            <li><Link href="/">主页</Link></li>
                            <li><Link href="/courses">课程</Link></li>
                            <li className="style-2">课程详情</li>
                        </ul>
                        <div className="breadcrumb-content">
                            <h1>CLB7刷题冲刺班</h1>
                            <div className="courses-breadcrumb-items">
                                <div className="client-image-items">
                                    <div className="client-content">
                                        <span>授课教师</span>
                                        <h5>考官 ABLE</h5>
                                    </div>
                                </div>
                                <div className="client-image-items">
                                    <div className="client-content">
                                        <span>课程类型</span>
                                        <h5>TEF考试冲刺</h5>
                                    </div>
                                </div>
                                <div className="client-image-items">
                                    <div className="client-content">
                                        <span>课程咨询</span>
                                        <h5>联系客服</h5>
                                    </div>
                                </div>
                                <div className="client-image-items">
                                    <div className="client-content">
                                        <span>学员评价</span>
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <b>(4.9/5分 143条评价)</b>
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

export default BreadcrumbCoursesDetails;