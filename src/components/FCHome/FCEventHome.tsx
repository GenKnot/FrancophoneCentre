import Link from 'next/link';
import React from 'react';

const FCEventHome = () => {
    return (
        <>
            <section className="event-section pt-0 fix section-padding">
                <div className="container">
                    <div className="section-title color-red text-center">
                        <h6 className="wow fadeInUp">
                            近期活动
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            不容错过的各类活动
                        </h2>
                    </div>
                    <div className="event-wrapper mt-3 mt-md-0">
                        <div className="row g-0">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="event-card-items bg-cover" style={{background: `url(/FCImage/Even-1.png)`}}>
                                    <div className="post-cat">
                                        限时优惠
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <Link href="/event-details">
                                                基础班combo学员 <br />
                                                1对1课程88加币/课时
                                            </Link>
                                        </h4>
                                        <ul className="date-list">
                                            <li>
                                                <i className="far fa-tag"></i> 原价200
                                            </li>
                                            <li>
                                                <i className="far fa-percent"></i> 优惠56%
                                            </li>
                                        </ul>
                                        <Link href="/event-details" className="theme-btn red-btn">了解详情</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="event-card-items active bg-cover" style={{background: `url(/FCImage/Even-3.png)`}}>
                                    <div className="post-cat">
                                        团报优惠
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <Link href="/event-details">
                                                5人团购报名 <br />
                                                享受9.5折优惠
                                            </Link>
                                        </h4>
                                        <ul className="date-list">
                                            <li>
                                                <i className="far fa-users"></i> 人数5人+
                                            </li>
                                            <li>
                                                <i className="far fa-calendar"></i> 同一课程
                                            </li>
                                        </ul>
                                        <Link href="/event-details" className="theme-btn red-btn">组团报名</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                <div className="event-card-items bg-cover" style={{background: `url(/FCImage/Even-2.png)`}}>
                                    <div className="post-cat">
                                        早鸟价格
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <Link href="/event-details">
                                                锁定3月31日开课 <br />
                                                基础班早鸟价
                                            </Link>
                                        </h4>
                                        <ul className="date-list">
                                            <li>
                                                <i className="far fa-calendar-check"></i> 3月31日开课
                                            </li>
                                            <li>
                                                <i className="far fa-percent"></i> 9.5折优惠
                                            </li>
                                        </ul>
                                        <Link href="/event-details" className="theme-btn red-btn">立即锁定</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                <div className="event-card-items bg-cover" style={{background: `url(/FCImage/Even-4.png)`}}>
                                    <div className="post-cat">
                                        免费试听
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <Link href="/event-details">
                                                现在咨询即可 <br />
                                                免费试听考官直播课
                                            </Link>
                                        </h4>
                                        <ul className="date-list">
                                            <li>
                                                <i className="far fa-gift"></i> 直播试听
                                            </li>
                                            <li>
                                                <i className="far fa-clock"></i> 1节课免费
                                            </li>
                                        </ul>
                                        <Link href="/event-details" className="theme-btn red-btn">免费领取</Link>
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

export default FCEventHome;