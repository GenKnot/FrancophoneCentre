"use client"
import Link from 'next/link';
import React from 'react';

const NewsArea = () => {
    return (
        <>
            <section className="blog-wrapper news-wrapper section-padding pt-0">
                <div className="container">
                    <div className="news-area">
                        <div className="row">
                            <div className="col-12 col-lg-8">
                                <div className="blog-posts">
                                    <div className="single-blog-post">
                                        <div className="post-featured-thumb bg-cover"
                                             style={{background: `url(/FCImage/News-1.png)`}}>

                                        </div>
                                        <div className="post-content">
                                            <div className="post-meta">
                                                <span><i className="fal fa-comments"></i>10 评论</span>
                                                <span><i className="fal fa-calendar-alt"></i>2025年5月15日</span>
                                            </div>
                                            <h2 className="title-anim">
                                                <Link href="/news-details">
                                                    2025年法语EE最新捞取分数415分！比英语EE低100多分的移民机会
                                                </Link>
                                            </h2>
                                            <p>
                                                加拿大政府大力推进法语移民，2025年法语移民目标提升至8.5%，法语Express
                                                Entry平均捞取分数仅415分，
                                                远低于英语EE的520+分。只要CLB7法语+一年工作经验就基本达标，比英语EE的雅思8777+名校硕博要求简单得多。
                                                QFEC现任TEF考官直授，98%通过率助您快速移民加拿大。
                                            </p>
                                            <Link href="/news-details" className="theme-btn mt-4 line-height">
                                                了解详情
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="single-blog-post">
                                        <div className="post-featured-thumb bg-cover"
                                             style={{background: `url(/FCImage/News-2.png)`}}>

                                        </div>
                                        <div className="post-content">
                                            <div className="post-meta">
                                                <span><i className="fal fa-comments"></i>10 评论</span>
                                                <span><i className="fal fa-calendar-alt"></i>2025年5月10日</span>
                                            </div>
                                            <h2 className="title-anim">
                                                <Link href="/news-details">
                                                    从零基础到成功移民：67天通过CLB5的学员奇迹分享
                                                </Link>
                                            </h2>
                                            <p>
                                                QFEC学员张同学仅用67天从零基础达到CLB5水平，成功通过法语EE获得移民邀请，现已登陆多伦多开始新生活。
                                                "考官直授真的太棒了，每道题都能遇到原题，不是运气，是实力！"现任考官+100%原题训练，
                                                让您的法语学习之路事半功倍。
                                            </p>
                                            <Link href="/news-details" className="theme-btn mt-4 line-height">
                                                阅读全文
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="single-blog-post quote-post format-quote">
                                        <div className="post-content text-white bg-cover">
                                            <div className="quote-content">
                                                <div className="icon">
                                                    <i className="fas fa-quote-left"></i>
                                                </div>
                                                <div className="quote-text">
                                                    <h2 className="title-anim">梦想与现实之间，只差一个正确的选择</h2>
                                                    <div className="post-meta">
                                                        <span><i className="fal fa-calendar-alt"></i>2025年5月8日</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="page-nav-wrap pt-5">
                                    <ul>
                                        <li><a className="page-numbers" href="#">1</a></li>
                                        <li><a className="page-numbers" href="#">2</a></li>
                                        <li><a className="page-numbers" href="#">3</a></li>
                                        <li><a className="page-numbers" href="#">4</a></li>
                                        <li><a className="page-numbers" href="#"><i className="far fa-arrow-right"></i></a>
                                        </li>
                                    </ul>
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
                                                     style={{background: `url(/FCImage/News-2.png)`}}></div>
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
                                                     style={{background: `url(/FCImage/News-2.png)`}}></div>
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
                                                     style={{background: `url(/FCImage/News-2.png)`}}></div>
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
                                            <h3>关注我们</h3>
                                        </div>
                                        <div className="social-link">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="#"><i className="fab fa-youtube"></i></a>
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

export default NewsArea;