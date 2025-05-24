import MobileMenu from '@/layouts/headers/MobileMenu';
import Link from 'next/link';
import React from 'react';

const OffCanvas = ({setOpenCanvas, openCanvas} : any) => {
  return (
    <>
      <div className="fix-area">
            <div className={`offcanvas__info ${openCanvas ? "info-open" : ""}`}>
                <div className="offcanvas__wrapper">
                    <div className="offcanvas__content">
                        <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                            <div className="offcanvas__logo">
                                <Link href="/">
                                    <img src="assets/img/logo/black-logo.svg" alt="logo-img" />
                                </Link>
                            </div>
                            <div className="offcanvas__close" onClick={() => setOpenCanvas(false)}>
                                <button>
                                <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <h3 className="offcanvas-title">法语首选</h3>
                        <p className='pb-3'>加拿大魁北克法语教育中心 <br /> Centre d'Éducation Français du Québec</p>

                        <div className="mobile-menu fix mb-3 mean-container">
                          <MobileMenu />
                        </div>
                        <div className="offcanvas__contact">
                            <h3>联系信息</h3>
                            <ul className="contact-list">
                                <li>
                                    <span>
                                        Montreal Downtown 校区:
                                    </span>
                                    1440 Saint-Catherine St W Unit 501, 
                                    Montreal
                                </li>
                                <li>
                                    <span>
                                        南岸校区:
                                    </span>
                                    Room 201, 141 Bd Saint-Luc, 
                                    Saint-Jean-sur-Richelieu, QC J2W 2G7
                                </li>
                                <li>
                                    <span>
                                        老港校区:
                                    </span>
                                    266 Notre-Dame St W Level 5, 
                                    Montreal, Quebec H2Y 1T6
                                </li>
                                <li>
                                    <span>
                                        报名邮箱:
                                    </span>
                                    <a href="mailto:apply@qfec.ca">apply@qfec.ca</a>
                                </li>
                                <li>
                                    <span>
                                        咨询邮箱:
                                    </span>
                                    <a href="mailto:info@qfec.ca">info@qfec.ca</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`offcanvas__overlay ${openCanvas? "overlay-open" : ""}`} onClick={() => setOpenCanvas(false)}></div>
    </>
  );
};

export default OffCanvas;