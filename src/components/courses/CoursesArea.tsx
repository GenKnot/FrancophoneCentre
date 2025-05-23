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
                                    <h3 className="courses-title">零基础入门</h3>
                                    <h4 className="topic-title">0-A1基础课程</h4>
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
                                            零基础快速入门法语
                                            打好语言基础
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/FCImage/teachericon25.png`}}></div>
                                        <p>考官 AYMÉRIC</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            80课时
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            适合0基础
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">立即报名</Link>
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
                                    <h3 className="courses-title">初级进阶</h3>
                                    <h4 className="topic-title">A1-A2基础课程</h4>
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
                                            初级法语能力提升
                                            强化日常交流能力
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/FCImage/teachericon25.png`}}></div>
                                        <p>考官 ÉLOANNE</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            80课时
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            适合A1基础
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">立即报名</Link>
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
                                    <h3 className="courses-title">中级提升</h3>
                                    <h4 className="topic-title">A2-B1基础课程</h4>
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
                                            中级法语能力拓展
                                            提升综合应用能力
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/FCImage/teachericon25.png`}}></div>
                                        <p>考官 JORICK</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            160课时
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            适合A2基础
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">立即报名</Link>
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
                                    <h3 className="courses-title">高级强化</h3>
                                    <h4 className="topic-title">B1-B2基础课程</h4>
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
                                            高级法语能力培养
                                            掌握学术与专业场景
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/FCImage/teachericon25.png`}}></div>
                                        <p>考官 ABLE</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            160课时
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            适合B1基础
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">立即报名</Link>
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
                                    <h3 className="courses-title">TEF考试冲刺</h3>
                                    <h4 className="topic-title">刷题冲刺班</h4>
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
                                            TEF/TCF考试备考专项
                                            高分冲刺精准辅导
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/FCImage/teachericon25.png`}}></div>
                                        <p>考官 THAV</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            120课时
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            适合各级学员
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">立即报名</Link>
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
                                    <h3 className="courses-title">进阶强化</h3>
                                    <h4 className="topic-title">考官1对1精准陪练</h4>
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
                                            <Link href="/courses">高阶课程</Link>
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
                                            考官1对1精准指导
                                            针对性解决学习难点
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/FCImage/teachericon25.png`}}></div>
                                        <p>考官 AYMÉRIC</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            灵活定制
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            适合B级学员
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">立即报名</Link>
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