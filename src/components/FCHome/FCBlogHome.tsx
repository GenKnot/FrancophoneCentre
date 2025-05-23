import Link from 'next/link';
import React from 'react';

const FCBlogHome = () => {
    return (
        <>
            <section className="news-section fix section-padding pt-0">
                <div className="container">
                    <div className="section-title color-red text-center">
                        <h6 className="wow fadeInUp">
                            最新资讯
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            法语移民 · 生活指南 · 政策解读
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="news-left-items">
                                <div className="news-thumb">
                                    <img src="FCImage/Blog-1.png" alt="img"/>
                                    <Link href="/news-details" className="post-box">
                                        移民政策
                                    </Link>
                                </div>
                                <div className="news-content">
                                    <ul className="post-cat">
                                        <li>
                                            <i className="fal fa-user"></i>
                                            QFEC移民顾问
                                        </li>
                                        <li>
                                            <i className="fal fa-calendar-alt"></i>
                                            2025年5月
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/news-details">
                                            2025年法语EE最新捞取分数415分！
                                            比英语EE低100多分的移民机会
                                        </Link>
                                    </h3>
                                    <p>
                                        加拿大政府大力推进法语移民，2025年法语移民目标提升至8.5%，
                                        法语Express Entry平均捞取分数仅415分，远低于英语EE的520+分...
                                    </p>
                                    <Link href="/news-details" className="link-btn">阅读全文 <i
                                        className="far fa-chevron-double-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="news-right-items">
                                <div className="news-right-box wow fadeInUp" data-wow-delay=".3s">
                                    <div className="thumb">
                                        <img src="FCImage/Blog-2.png" alt="img"/>
                                        <Link href="/news-details" className="post-box">
                                            生活补助
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <ul className="post-cat">
                                            <li>
                                                <i className="fal fa-user"></i>
                                                生活顾问
                                            </li>
                                            <li>
                                                <i className="fal fa-calendar-alt"></i>
                                                2025年1月
                                            </li>
                                        </ul>
                                        <h5>
                                            <Link href="/news-details">
                                                魁省10项政府补助详解
                                                最高每月可领$770
                                            </Link>
                                        </h5>
                                        <p>
                                            2025年魁北克政府提供多项财政补助，包括儿童津贴、住房补助、
                                            社会援助金等，单身人士最高可获得$770/月...
                                        </p>
                                        <Link href="/news-details" className="link-btn">了解详情 <i
                                            className="far fa-chevron-double-right"></i></Link>
                                    </div>
                                </div>
                                <div className="news-right-box wow fadeInUp" data-wow-delay=".5s">
                                    <div className="thumb">
                                        <img src="FCImage/Blog-3.png" alt="img"/>
                                        <Link href="/news-details" className="post-box">
                                            移民指南
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <ul className="post-cat">
                                            <li>
                                                <i className="fal fa-user"></i>
                                                移民专家
                                            </li>
                                            <li>
                                                <i className="fal fa-calendar-alt"></i>
                                                2025年3月
                                            </li>
                                        </ul>
                                        <h5>
                                            <Link href="/news-details">
                                                新推出！法语社区移民试点项目
                                                魁省外也能法语移民
                                            </Link>
                                        </h5>
                                        <p>
                                            IRCC推出法语社区移民试点项目(FCIP)，魁省以外的法语社区
                                            也可以通过法语能力快速移民，中级法语水平即可申请...
                                        </p>
                                        <Link href="/news-details" className="link-btn">查看详情 <i
                                            className="far fa-chevron-double-right"></i></Link>
                                    </div>
                                </div>
                                <div className="news-right-box wow fadeInUp" data-wow-delay=".9s">
                                    <div className="thumb">
                                        <img src="FCImage/Blog-4.png" alt="img"/>
                                        <Link href="/news-details" className="post-box">
                                            成功案例
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <ul className="post-cat">
                                            <li>
                                                <i className="fal fa-user"></i>
                                                学员分享
                                            </li>
                                            <li>
                                                <i className="fal fa-calendar-alt"></i>
                                                2025年4月
                                            </li>
                                        </ul>
                                        <h5>
                                            <Link href="/news-details">
                                                从零基础到成功移民
                                                67天通过CLB5的奇迹
                                            </Link>
                                        </h5>
                                        <p>
                                            QFEC学员张同学仅用67天从零基础达到CLB5水平，
                                            成功通过法语EE获得移民邀请，现已登陆多伦多开始新生活...
                                        </p>
                                        <Link href="/news-details" className="link-btn">学习经验 <i
                                            className="far fa-chevron-double-right"></i></Link>
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

export default FCBlogHome;