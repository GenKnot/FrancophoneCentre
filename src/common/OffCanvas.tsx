"use client";
import MobileMenu from '@/layouts/headers/MobileMenu';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const OffCanvas = ({setOpenCanvas, openCanvas} : any) => {
  const { isHydrated, currentLanguage } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getDisplayText = (en: string, zhHans: string, zhHant: string, fr: string): string => {
    if (!isMounted) return '\u00A0';
    
    if (!isHydrated) {
      // Use current language even during SSR instead of defaulting to English
      switch (currentLanguage) {
        case 'zh-hans':
          return zhHans;
        case 'zh-hant':
          return zhHant;
        case 'fr':
          return fr;
        default:
          return en;
      }
    }
    
    switch (currentLanguage) {
      case 'zh-hans':
        return zhHans;
      case 'zh-hant':
        return zhHant;
      case 'fr':
        return fr;
      default:
        return en;
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
                        <h3 className="offcanvas-title" suppressHydrationWarning={true}>
                          {getDisplayText('French First Choice', '法语首选', '法語首選', 'Premier choix français')}
                        </h3>
                        <p className='pb-3' suppressHydrationWarning={true}>
                          {getDisplayText(
                            'Quebec French Education Centre of Canada', 
                            '加拿大魁北克法语教育中心', 
                            '加拿大魁北克法語教育中心', 
                            'Centre d\'Éducation Français du Québec'
                          )}
                          <br /> 
                          Centre d'Éducation Français du Québec
                        </p>

                        <div className="mobile-menu fix mb-3 mean-container">
                          <MobileMenu />
                        </div>
                        <div className="offcanvas__contact">
                            <h3 suppressHydrationWarning={true}>
                              {getDisplayText('Contact Information', '联系信息', '聯繫信息', 'Informations de contact')}
                            </h3>
                            <ul className="contact-list">
                                <li>
                                    <span suppressHydrationWarning={true}>
                                        {getDisplayText(
                                          'Montreal Downtown Campus:',
                                          'Montreal Downtown 校区:',
                                          'Montreal Downtown 校區:',
                                          'Campus du centre-ville de Montréal:'
                                        )}
                                    </span>
                                    1440 Saint-Catherine St W Unit 501, 
                                    Montreal
                                </li>
                                <li>
                                    <span suppressHydrationWarning={true}>
                                        {getDisplayText(
                                          'South Shore Campus:',
                                          '南岸校区:',
                                          '南岸校區:',
                                          'Campus de la Rive-Sud:'
                                        )}
                                    </span>
                                    Room 201, 141 Bd Saint-Luc, 
                                    Saint-Jean-sur-Richelieu, QC J2W 2G7
                                </li>
                                <li>
                                    <span suppressHydrationWarning={true}>
                                        {getDisplayText(
                                          'Old Port Campus:',
                                          '老港校区:',
                                          '老港校區:',
                                          'Campus du Vieux-Port:'
                                        )}
                                    </span>
                                    266 Notre-Dame St W Level 5, 
                                    Montreal, Quebec H2Y 1T6
                                </li>
                                <li>
                                    <span suppressHydrationWarning={true}>
                                        {getDisplayText(
                                          'Registration Email:',
                                          '报名邮箱:',
                                          '報名郵箱:',
                                          'Email d\'inscription:'
                                        )}
                                    </span>
                                    <a href="mailto:apply@qfec.ca">apply@qfec.ca</a>
                                </li>
                                <li>
                                    <span suppressHydrationWarning={true}>
                                        {getDisplayText(
                                          'Inquiry Email:',
                                          '咨询邮箱:',
                                          '諮詢郵箱:',
                                          'Email de consultation:'
                                        )}
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