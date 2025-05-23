import Timer from '@/common/Timer';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';

const MyTimer = dynamic(() => import("../../common/Timer"), {ssr: false});

const EventDetailsArea = () => {
    return (
        <>
            <section className="event-details-section section-padding pt-0">
                <div className="container">
                    <div className="event-details-wrapper">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="event-details-items">
                                    <div className="details-image">
                                        <img src="FCImage/EvenDetail.png" alt="img"/>
                                    </div>
                                    <div className="event-details-content">
                                        <h3>活动详情</h3>
                                        <p className="mb-4">
                                            为庆祝法语EE邀请分数再创新低，QFEC特别推出3月份限时优惠活动！现在报名3月31日开课的零基础班，
                                            即可享受9.5折早鸟优惠价格。这是学习法语、实现加拿大移民梦想的最佳时机！
                                        </p>
                                        <p className="mb-5">
                                            法语EE项目2025年平均捞取分数仅需415分，相比英语EE的520+分有巨大优势。
                                            只要达到CLB7法语水平加上一年工作经验，基本都能满足移民要求。我们的课程由现任TEF考官直授，
                                            98%通过率远超行业平均水平。
                                        </p>
                                        <h3>
                                            活动亮点
                                        </h3>
                                        <p>
                                            本次活动不仅提供优惠价格，更重要的是帮助学员抓住法语移民的黄金机会，
                                            通过系统的法语学习快速达到移民要求。6位现任考官+4位前任考官，合计2000小时教研成果。
                                        </p>
                                        <ul className="details-list">
                                            <li><i className="fas fa-check-circle"></i>现任TEF考官直接授课，教学质量有保障
                                            </li>
                                            <li><i className="fas fa-check-circle"></i>98%超高通过率，远超行业平均水平
                                            </li>
                                            <li><i className="fas fa-check-circle"></i>100%考试原题训练，确保高分通过
                                            </li>
                                            <li><i className="fas fa-check-circle"></i>个性化学习路径，量身定制课程计划
                                            </li>
                                            <li><i className="fas fa-check-circle"></i>6个月CLB7，4个月CLB5，快速出分保障
                                            </li>
                                        </ul>
                                        <h3>
                                            超值礼品
                                        </h3>
                                        <p>
                                            现在报名3月31日开课班级，除了享受9.5折优惠外，还将获得价值999加币的大礼包：
                                            价值300加币的法语TEF高频词汇合辑（由10位考官共同整理）+ 价值699加币的1次考官1对1口语课程。
                                        </p>
                                        <div className="map-area">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.946864447267!2d-73.57194852346478!3d45.49932787107799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a449792a4f1%3A0x30e7e0cc6b6e0e3b!2s1440%20Rue%20Sainte-Catherine%20O%2C%20Montr%C3%A9al%2C%20QC%20H3G%201R8%2C%20Canada!5e0!3m2!1sen!2sca!4v1679234567890!5m2!1sen!2sca"
                                                style={{border: "0px"}} allowFullScreen={true} loading="lazy"></iframe>
                                        </div>
                                        <h3>
                                            授课教师
                                        </h3>
                                        <p>
                                            我们的教学团队由经验丰富的现任和前任TEF考官组成，他们不仅具备深厚的法语教学功底，
                                            更重要的是掌握第一手的考试信息和评分标准，能够为学员提供最精准的考试指导。
                                        </p>
                                        {/*<div className="row g-0">*/}
                                        {/*    <div className="col-md-4">*/}
                                        {/*        <div className="event-image-items border-right-none">*/}
                                        {/*            <div className="event-image">*/}
                                        {/*                <img src="FCImage/teachericon25.png" alt="img"/>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="event-content">*/}
                                        {/*                <h4>*/}
                                        {/*                    <Link href="/instructor-details">考官 AYMÉRIC</Link>*/}
                                        {/*                </h4>*/}
                                        {/*                <span>现任TEF考官</span>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-md-4">*/}
                                        {/*        <div className="event-image-items border-right-none">*/}
                                        {/*            <div className="event-image">*/}
                                        {/*                <img src="FCImage/teachericon25.png" alt="img"/>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="event-content">*/}
                                        {/*                <h4>*/}
                                        {/*                    <Link href="/instructor-details">考官 ABLE</Link>*/}
                                        {/*                </h4>*/}
                                        {/*                <span>现任TEF/TCF/DELF考官</span>*/}
                                        {/*                <div className="social-icon">*/}
                                        {/*                    <a href="#"><i className="fab fa-facebook-f"></i></a>*/}
                                        {/*                    <a href="#"><i className="fab fa-instagram"></i></a>*/}
                                        {/*                    <a href="#"><i className="fab fa-dribbble"></i></a>*/}
                                        {/*                    <a href="#"><i className="fab fa-behance"></i></a>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-md-4">*/}
                                        {/*        <div className="event-image-items">*/}
                                        {/*            <div className="event-image">*/}
                                        {/*                <img src="FCImage/teachericon25.png" alt="img"/>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="event-content">*/}
                                        {/*                <h4>*/}
                                        {/*                    <Link href="/instructor-details">Selene LI</Link>*/}
                                        {/*                </h4>*/}
                                        {/*                <span>前任TCF考官</span>*/}
                                        {/*                <div className="social-icon">*/}
                                        {/*                    <a href="#"><i className="fab fa-facebook-f"></i></a>*/}
                                        {/*                    <a href="#"><i className="fab fa-instagram"></i></a>*/}
                                        {/*                    <a href="#"><i className="fab fa-dribbble"></i></a>*/}
                                        {/*                    <a href="#"><i className="fab fa-behance"></i></a>*/}
                                        {/*                </div>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="event-details-information sticky-style">
                                    <h4>活动信息</h4>
                                    <ul className="information-list">
                                        <li>
                                        <span>
                                            <i className="fas fa-calendar-alt"></i>
                                            开课日期
                                        </span>
                                            <span className="text">2025年3月31日</span>
                                        </li>
                                        <li>
                                        <span>
                                            <i className="fas fa-calendar-alt"></i>
                                            优惠截止
                                        </span>
                                            <span className="text">2025年3月30日</span>
                                        </li>
                                        <li>
                                        <span>
                                            <i className="far fa-clock"></i>
                                            上课时间
                                        </span>
                                            <span className="text">周一至周五 19:00-21:00</span>
                                        </li>
                                        <li>
                                        <span>
                                            <i className="far fa-clock"></i>
                                            周末时间
                                        </span>
                                            <span className="text">周六 14:00-17:00</span>
                                        </li>
                                        <li>
                                        <span>
                                            <i className="far fa-map-marker-alt"></i>
                                            上课地点
                                        </span>
                                            <span className="text">在线授课 + 蒙特利尔校区</span>
                                        </li>
                                        <li>
                                        <span>
                                            <i className="far fa-percent"></i>
                                            优惠力度
                                        </span>
                                            <span className="text color-2">9.5折早鸟价</span>
                                        </li>
                                        <li>
                                        <span>
                                            <i className="far fa-users"></i>
                                            招生人数
                                        </span>
                                            <span className="text color-3">限额30人</span>
                                        </li>
                                    </ul>
                                    <Link href="/contact" className="theme-btn">立即报名咨询</Link>
                                    {/*<MyTimer/>*/}
                                    {/*<Link href="/contact" className="share-btn"><i className="fas fa-share"></i> 分享此活动</Link>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventDetailsArea;