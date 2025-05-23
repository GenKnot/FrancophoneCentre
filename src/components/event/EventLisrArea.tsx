"use client"
import NiceSelect from '@/ui/NiceSelect';
import Link from 'next/link';
import React from 'react';

const EventLisrArea = () => {
    const selectHandler = (e: any) => {
    };

    return (
        <>
            <section className="event-list-section fix section-padding pt-0">
                <div className="container">
                    <div className="event-list-wrapper">
                        <div className="event-list-top-area">
                            <div className="search-widget">
                                <input type="text" placeholder="搜索活动"/>
                                <div className="sub-icon"><i className="fal fa-search"></i></div>
                            </div>
                            <div className="form-clt">
                                <NiceSelect
                                    className="category"
                                    options={[
                                        {value: "01", text: "活动地点"},
                                        {value: "02", text: "蒙特利尔"},
                                        {value: "03", text: "圣让校区"},
                                        {value: "04", text: "在线活动"},
                                    ]}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                    name=""
                                    placeholder=""/>
                            </div>
                            <div className="form-clt">
                                <NiceSelect
                                    className="category"
                                    options={[
                                        {value: "01", text: "活动类型"},
                                        {value: "02", text: "限时优惠"},
                                        {value: "03", text: "免费试听"},
                                        {value: "04", text: "团报活动"},
                                    ]}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                    name=""
                                    placeholder=""/>
                            </div>
                            <div className="event-button-top">
                                <button type="submit" className="theme-btn">查找活动</button>
                            </div>
                        </div>
                        <div className="event-list-items">
                            <div className="event-content">
                                <div className="content">
                                    <div className="date">
                                        <h2>31</h2>
                                        <span>Mar 2025</span>
                                    </div>
                                    <div className="title-text">
                                        <h4><Link href="/event-details">早鸟优惠 - 3月31日开课基础班特惠</Link></h4>
                                        <ul className="post-time">
                                            <li><i className="far fa-user"></i>QFEC</li>
                                            <li><i className="far fa-map-marker-alt"></i> 蒙特利尔</li>
                                            <li><i className="far fa-percent"></i> 9.5折优惠</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="event-image">
                                <img src="FCImage/Even-5.png" alt="img" />
                            </div>
                            <div className="event-btn">
                                <Link href="/event-details" className="theme-btn">
                                    立即报名
                                </Link>
                            </div>
                        </div>
                        <div className="event-list-items">
                            <div className="event-content">
                                <div className="content">
                                    <div className="date">
                                        <h2>免费</h2>
                                        <span>试听课</span>
                                    </div>
                                    <div className="title-text">
                                        <h4><Link href="/event-details">免费领取考官直播试听课</Link></h4>
                                        <ul className="post-time">
                                            <li><i className="far fa-user"></i>现任TEF考官</li>
                                            <li><i className="far fa-map-marker-alt"></i> 在线直播</li>
                                            <li><i className="far fa-gift"></i> 完全免费</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="event-image">
                                <img src="FCImage/Even-5.png" alt="img" />
                            </div>
                            <div className="event-btn">
                                <Link href="/event-details" className="theme-btn">
                                    免费领取
                                </Link>
                            </div>
                        </div>
                        <div className="event-button">
                            <Link href="/contact" className="theme-btn">联系我们了解更多</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventLisrArea;