"use client";
import MobileMenu from '@/layouts/headers/MobileMenu';
import Link from 'next/link';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const OffCanvas = ({setOpenCanvas, openCanvas} : any) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const getTranslatedText = (zhText: string, enText: string, frText: string = enText, zhHantText: string = zhText) => {
    const { currentLanguage } = useLanguage();
    switch (currentLanguage) {
      case 'zh-hans':
        return zhText;
      case 'zh-hant':
        return zhHantText;
      case 'fr':
        return frText;
      case 'en':
      default:
        return enText;
    }
  };

  return (
    <>
      <div className="fix-area">
            <div className={`offcanvas__info ${openCanvas ? "info-open" : ""}`}>
                <div className="offcanvas__wrapper">
                    <div className="offcanvas__content">
                        <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                            <div className="offcanvas__logo">
                                <Link href="/">
                                    <img src="/assets/img/logo/black-logo.svg" alt="logo-img" />
                                </Link>
                            </div>
                            <div className="offcanvas__close" onClick={() => setOpenCanvas(false)}>
                                <button>
                                <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <h3 className="offcanvas-title">{getTranslatedText('法语首选', 'French First Choice', 'Premier choix français', '法語首選')}</h3>
                        <p className='pb-3'>{getTranslatedText('加拿大魁北克法语教育中心', 'Quebec French Education Centre of Canada', 'Centre d\'Éducation Français du Québec', '加拿大魁北克法語教育中心')} <br /> Centre d'Éducation Français du Québec</p>

                        <div className="mobile-menu fix mb-3 mean-container">
                          <MobileMenu sidebar={sidebarOpen} setSidebar={setSidebarOpen} />
                        </div>
                        <div className="offcanvas__contact">
                            <h3>{getTranslatedText('联系信息', 'Contact Information', 'Informations de contact', '聯繫信息')}</h3>
                            <ul className="contact-list">
                                <li>
                                    <span>
                                        {getTranslatedText('Montreal Downtown 校区:', 'Montreal Downtown Campus:', 'Campus du centre-ville de Montréal:', 'Montreal Downtown 校區:')}
                                    </span>
                                    1440 Saint-Catherine St W Unit 501, 
                                    Montreal
                                </li>
                                <li>
                                    <span>
                                        {getTranslatedText('南岸校区:', 'South Shore Campus:', 'Campus de la Rive-Sud:', '南岸校區:')}
                                    </span>
                                    Room 201, 141 Bd Saint-Luc, 
                                    Saint-Jean-sur-Richelieu, QC J2W 2G7
                                </li>
                                <li>
                                    <span>
                                        {getTranslatedText('老港校区:', 'Old Port Campus:', 'Campus du Vieux-Port:', '老港校區:')}
                                    </span>
                                    266 Notre-Dame St W Level 5, 
                                    Montreal, Quebec H2Y 1T6
                                </li>
                                <li>
                                    <span>
                                        {getTranslatedText('报名邮箱:', 'Registration Email:', 'Email d\'inscription:', '報名郵箱:')}
                                    </span>
                                    <a href="mailto:apply@qfec.ca">apply@qfec.ca</a>
                                </li>
                                <li>
                                    <span>
                                        {getTranslatedText('咨询邮箱:', 'Inquiry Email:', 'Email de consultation:', '諮詢郵箱:')}
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