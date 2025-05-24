"use client"
import NiceSelect from '@/ui/NiceSelect';
import Link from 'next/link';
import React from 'react';

const CoursesArea = () => {
  const selectHandler = (e: any) => { };

  return (
    <>
       <section className="popular-courses-section fix section-padding">
            <div className="container">
                <div className="coureses-notices-wrapper">
                    <div className="courses-showing">
                        <h5>显示 <span>1-9</span> 共 <span>9</span> 门课程</h5>
                    </div>
                    <div className="form-clt">
                        <NiceSelect
                          className="category"
                          options={[
                              { value: "01", text: "排序方式：默认" },
                              { value: "02", text: "按课时排序" },
                              { value: "03", text: "按难度排序" },
                              { value: "04", text: "按价格排序" },
                          ]}
                          defaultCurrent={0}
                          onChange={selectHandler}
                          name=""
                          placeholder="" />
                     </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                    <img src="FCImage/Coures-10.png" alt="img" />
                                    <h3 className="courses-title">基础课</h3>
                                    <h4 className="topic-title">0-预科</h4>
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link href="/courses">基础课程</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/courses-details">
                                            基础课 0-预科
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <p>发音和基础词汇</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            10课时
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            适用于0基础
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">160加币</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                    <img src="FCImage/Coures-10.png" alt="img" />
                                    <h3 className="courses-title">基础课</h3>
                                    <h4 className="topic-title">预科-A1</h4>
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link href="/courses">基础课程</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/courses-details">
                                            基础课 预科-A1
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <p>基础语法及口语入门</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            40课时
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            适用于学完预科
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">680加币</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                    <img src="FCImage/Coures-10.png" alt="img" />
                                    <h3 className="courses-title">基础课</h3>
                                    <h4 className="topic-title">A1-A2</h4>
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link href="/courses">基础课程</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/courses-details">
                                            基础课 A1-A2
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <p>语法运用、口语进阶</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            70课时
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            适用于学完A1
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">1200加币</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                    <img src="FCImage/Coures-10.png" alt="img" />
                                    <h3 className="courses-title">基础课</h3>
                                    <h4 className="topic-title">A2-B1</h4>
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link href="/courses">基础课程</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/courses-details">
                                            基础课 A2-B1
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <p>写作技巧、语法进阶以及口语训练</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            160课时
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            适用于学完A2
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">2600加币</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                    <img src="FCImage/Coures-10.png" alt="img" />
                                    <h3 className="courses-title">基础课</h3>
                                    <h4 className="topic-title">B1-B2</h4>
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link href="/courses">基础课程</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/courses-details">
                                            基础课 B1-B2
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <p>高级写作技巧以及口语训练</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            200课时
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            适用于学完B1
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">3400加币</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                    <img src="FCImage/Coures-10.png" alt="img" />
                                    <h3 className="courses-title">刷题班</h3>
                                    <h4 className="topic-title">考试冲刺</h4>
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link href="/courses">考试课程</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/courses-details">
                                            刷题班
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <p>完全真题训练以及考官口语训练，包含100小时录播 + 32小时技巧</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            132小时
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            适用于B1-B2
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">4500加币</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                    <img src="FCImage/Coures-10.png" alt="img" />
                                    <h3 className="courses-title">刷题班</h3>
                                    <h4 className="topic-title">学校客户</h4>
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link href="/courses">考试课程</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/courses-details">
                                            刷题班（学校客户）
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <p>完全真题训练以及考官口语训练，包含100小时录播 + 32小时技巧</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            132小时
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            适用于B1-B2
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">3600加币</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                    <img src="FCImage/Coures-10.png" alt="img" />
                                    <h3 className="courses-title">COMBO套餐</h3>
                                    <h4 className="topic-title">0基础CLB5</h4>
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link href="/courses">套餐课程</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/courses-details">
                                            COMBO 0基础CLB5刷题套餐
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <p>包含0基础到A2的所有基础课以及刷题班</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            132课时
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            适用于0基础
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">5640加币</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                    <img src="FCImage/Coures-10.png" alt="img" />
                                    <h3 className="courses-title">COMBO套餐</h3>
                                    <h4 className="topic-title">0基础B2</h4>
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link href="/courses">套餐课程</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/courses-details">
                                            COMBO 0基础B2刷题套餐
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <p>包含0基础到B1的所有基础课以及刷题班</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            412课时
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            适用于0基础
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">8240加币</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                    <img src="FCImage/Coures-10.png" alt="img" />
                                    <h3 className="courses-title">COMBO套餐</h3>
                                    <h4 className="topic-title">0基础CLB7</h4>
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link href="/courses">套餐课程</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/courses-details">
                                            COMBO 0基础CLB7刷题套餐
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <p>包含0基础到B2的所有基础课以及刷题班</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            612课时
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            适用于0基础
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">11640加币</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                    <img src="FCImage/Coures-10.png" alt="img" />
                                    <h3 className="courses-title">VIP班</h3>
                                    <h4 className="topic-title">无限学习</h4>
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link href="/courses">VIP课程</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/courses-details">
                                            VIP班
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <p>所有课程无限次学习，额外赠送60节考官一对一课程</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            无限课时
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            适用于0基础
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">19999加币</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-nav-wrap pt-5 text-center">
                    <ul>
                        <li><a className="page-numbers" href="#">1</a></li>
                        <li><a className="page-numbers" href="#">2</a></li>
                        <li><a className="page-numbers" href="#">3</a></li>
                        <li><a className="page-numbers" href="#">4</a></li>
                        <li><a className="page-numbers" href="#"><i className="far fa-arrow-right"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  );
};

export default CoursesArea;