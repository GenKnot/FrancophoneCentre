"use client"

import Link from 'next/link';
import React from 'react';

const NewsDetailsArea = () => {
    return (
        <>
            <section className="blog-wrapper news-wrapper section-padding pt-0">
                <div className="container">
                    <div className="news-area">
                        <div className="row">
                            <div className="col-12 col-lg-8">
                                <div className="blog-post-details border-wrap mt-0">
                                    <div className="single-blog-post post-details mt-0">
                                        <div className="post-content pt-0">
                                            <h2 className="mt-0">2025年法语EE最新捞取分数415分！快速移民加拿大的黄金机会</h2>
                                            <div className="post-meta mt-3">
                                                <span><i className="fal fa-user"></i>QFEC移民顾问</span>
                                                <span><i className="fal fa-calendar-alt"></i>2025年5月15日</span>
                                            </div>
                                            <p>
                                                随着加拿大政府对法语移民政策的大力推进，2025年法语移民目标提升至8.5%，为广大法语学习者带来了前所未有的移民机会。
                                                最新数据显示，法语Express Entry项目平均捞取分数仅为415分，相比英语EE项目的520+分，优势明显。
                                            </p>
                                            <p>
                                                对于有移民加拿大计划的朋友来说，现在开始学习法语绝对是最明智的选择。只要达到CLB7法语水平，
                                                再加上一年工作经验，基本就能满足法语EE的申请要求。这比英语EE项目要求的雅思8777分数加上名校硕博学历要简单得多。
                                            </p>
                                            <img src="FCImage/newsdetail-1.png" alt="blog__img"
                                                 className="single-post-image"/>
                                            <h2>QFEC助您快速达到移民要求</h2>
                                            <p>
                                                加拿大魁北克法语教育中心（QFEC）拥有现任TEF考官直接授课的独特优势。我们的教学团队包括6位现任考官和4位前任考官，
                                                累计2000小时教研成果，确保学员能够接受最权威、最专业的法语培训。
                                            </p>
                                            <blockquote>
                                                不走弯路，不浪费时间。跟着真正的TEF考官学最有用的内容，
                                                用最短的时间拿到最高的分数，开启你的加拿大新生活
                                            </blockquote>
                                            <p>
                                                我们的课程采用100%原题训练模式，学员在考试中能遇到80%以上的原题。这不是运气，而是我们考官团队深厚教研功底的体现。
                                                98%的超高通过率远超行业平均水平，充分证明了我们教学方法的有效性。
                                            </p>
                                            <ul className="checked-list mb-4">
                                                <li>现任考官直接授课，100%还原考试环境</li>
                                                <li>98%超高通过率，远超行业平均水平</li>
                                                <li>6个月达到CLB7，4个月达到CLB5</li>
                                                <li>2000小时考官教研成果，每月更新课程内容</li>
                                            </ul>
                                            <h4>把握法语移民黄金机会</h4>
                                            <p>
                                                在当前全球移民政策日趋紧缩的大环境下，加拿大的法语移民通道无疑是最快速且安全的选择。
                                                无论是联邦EE项目、魁北克各类移民项目，还是其他省份推出的法语移民通道，都对掌握法语的申请人大开绿灯。
                                            </p>
                                            <img className="alignleft" src="FCImage/newsdetail-2.png"
                                                 alt="blog__img"/>
                                            <p>
                                                QFEC的学员张同学就是成功案例之一。他从零基础开始学习，仅用67天就通过了CLB5考试，
                                                成功获得法语EE邀请，现已在加拿大开始新生活。"考官直授真的太棒了，每道题都能遇到原题，
                                                现在已经成功登陆多伦多！"张同学的话代表了众多QFEC学员的心声。
                                            </p>
                                            <p>
                                                如果你也有移民加拿大的计划，不要再犹豫了。选择QFEC，选择专业的法语教育，
                                                让我们助您早日实现加拿大移民梦想。现在咨询还可免费领取考官直播试听课1节！
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row tag-share-wrap">
                                        <div className="col-lg-8 col-12">
                                            <h4>相关标签</h4>
                                            <div className="tagcloud">
                                                <Link href="/news-details">法语移民</Link>
                                                <Link href="/news-details">EE项目</Link>
                                                <Link href="/news-details">CLB7</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="main-sidebar sticky-style">
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>最新资讯</h3>
                                        </div>
                                        <div className="popular-posts">
                                            <div className="single-post-item">
                                                <div className="thumb bg-cover"
                                                     style={{background: `url(FCImage/newsdetail-1.png)`}}></div>
                                                <div className="post-content">
                                                    <h5><Link href="/news-details">
                                                        法语EE最新捞取分数创历史新低</Link></h5>
                                                    <div className="post-date">
                                                        <i className="far fa-calendar-alt"></i>2025年5月15日
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-post-item">
                                                <div className="thumb bg-cover"
                                                     style={{background: `url(FCImage/newsdetail-2.png)`}}></div>
                                                <div className="post-content">
                                                    <h5><Link href="/news-details">QFEC学员67天通过CLB5成功案例</Link>
                                                    </h5>
                                                    <div className="post-date">
                                                        <i className="far fa-calendar-alt"></i>2025年5月10日
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-post-item">
                                                <div className="thumb bg-cover"
                                                     style={{background: `url(FCImage/newsdetail-2.png)`}}></div>
                                                <div className="post-content">
                                                    <h5><Link href="/news-details">魁北克10项政府补助详解</Link></h5>
                                                    <div className="post-date">
                                                        <i className="far fa-calendar-alt"></i>2025年5月5日
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>热门分类</h3>
                                        </div>
                                        <div className="widget_categories">
                                            <ul>
                                                <li><Link href="/news">移民政策 <span>23</span></Link></li>
                                                <li><Link href="/news">法语学习 <span>18</span></Link></li>
                                                <li><Link href="/news">成功案例 <span>15</span></Link></li>
                                                <li><Link href="/news">生活指南 <span>12</span></Link></li>
                                                <li><Link href="/news">考试资讯 <span>9</span></Link></li>
                                                <li><Link href="/news">教学动态 <span>6</span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>热门标签</h3>
                                        </div>
                                        <div className="tagcloud">
                                            <Link href="/news">法语移民</Link>
                                            <Link href="/news-details">TEF考试</Link>
                                            <Link href="/news-details">CLB7</Link>
                                            <Link href="/news-details">魁北克</Link>
                                            <Link href="/news-details">考官直授</Link>
                                            <Link href="/news-details">98%通过率</Link>
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

export default NewsDetailsArea;