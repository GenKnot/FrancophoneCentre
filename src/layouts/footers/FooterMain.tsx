import Link from 'next/link';
import React from 'react';

const FooterMain = () => {
  return (
    <>
       <footer className="footer-section-3 fix">
            <div className="circle-shape">
                <img src="assets/img/footer/circle.png" alt="img" />
            </div>
            <div className="vector-shape">
                <img src="assets/img/footer/Vector.png" alt="img" />
            </div>
            <div className="container">
                <div className="footer-widget-wrapper style-2">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link href="/">
                                        <img src="assets/img/logo/black-logo-3.svg" alt="img" />
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        魁北克法语教育中心致力于为学生提供优质的法语教育服务，帮助学生掌握法语技能。
                                    </p>
                                    <div className="social-icon">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="#"><i className="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>快速链接</h3>
                                </div>
                                <ul className="list-area">
                                    <li><Link href="/">主页</Link></li>
                                    <li><Link href="/about">关于我们</Link></li>
                                    <li><Link href="/courses">课程</Link></li>
                                    <li><Link href="/event">活动</Link></li>
                                    <li><Link href="/news">新闻</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget style-left">
                                <div className="widget-head">
                                   <h3>联系我们</h3>
                                </div>
                                <div className="footer-content">
                                    <ul className="contact-info">
                                        <li>
                                            蒙特利尔办公室：<br/>
                                            1440 Saint-Catherine St W Unit 500, 
                                            Montreal, Quebec H3G 1R3
                                        </li>
                                        <li>
                                            圣让校区：<br/>
                                            141 Bd Saint-Luc, 
                                            Saint-Jean-sur-Richelieu, QC J2W 2G7
                                        </li>
                                        <li>
                                            <a href="mailto:info@gfec.ca" className="link">info@gfec.ca</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>通讯订阅</h3>
                                </div>
                                <div className="footer-content">
                                    <p>订阅我们的通讯，获取最新课程和活动信息</p>
                                    <div className="footer-input">
                                        <div className="icon">
                                            <i className="far fa-envelope"></i>
                                        </div>
                                        <input type="email" id="email2" placeholder="邮箱地址" />
                                        <button className="newsletter-btn" type="submit">
                                            订阅
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom style-3">
                <div className="container">
                    <div className="footer-bottom-wrapper">
                        <p>版权所有 © <Link href="/">魁北克法语教育中心</Link>，保留所有权利。</p>
                        <ul className="footer-menu wow fadeInUp" data-wow-delay=".5s">
                            <li>
                                <Link href="/about">
                                    关于我们
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq">
                                    常见问题
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    联系我们
                                </Link>
                            </li>
                            <li>
                                <Link href="/event">
                                    活动
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
};

export default FooterMain;