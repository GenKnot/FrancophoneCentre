"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const BreadcrumbCourses = ({title, subtitle} : any) => {
  const { currentLanguage, isHydrated, t } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Fixed translations for SSR
  const getFixedTranslation = (key: string, zhText: string, enText: string, frText: string = enText, zhHantText: string = zhText) => {
    if (!isMounted) {
      // During SSR, use current language from context
      switch (currentLanguage) {
        case 'zh-hans':
          return zhText;
        case 'zh-hant':
          return zhHantText;
        case 'fr':
          return frText;
        default:
          return enText;
      }
    }
    return t(key, enText);
  };

  const displayTitle = title || getFixedTranslation('courses.title', '所有课程', 'All Courses', 'Tous les Cours', '所有課程');
  const displaySubtitle = subtitle || getFixedTranslation('navigation.courses', '课程', 'Courses', 'Cours', '課程');

  const getTranslatedText = (zhText: string, enText: string, frText: string = enText, zhHantText: string = zhText) => {
    if (!isMounted) {
      return '\u00A0'; 
    }
    
    if (!isHydrated) {
      // Use current language even during SSR instead of defaulting to English
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
    }
    
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
        <section className="breadcrumb-wrapper courses-page-banner">
            <div className="shape-1">
                <img src="assets/img/breadcrumb/shape-1.png" alt="img" />
            </div>
            <div className="shape-2">
                <img src="assets/img/breadcrumb/shape-2.png" alt="img" />
            </div>
            <div className="shape-3">
                <img src="assets/img/breadcrumb/shape-3.png" alt="img" />
            </div>
            <div className="dot-shape">
                <img src="assets/img/breadcrumb/dot-shape.png" alt="img" />
            </div>
            <div className="vector-shape">
                <img src="assets/img/breadcrumb/Vector.png" alt="img" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="page-heading">
                        <h1 suppressHydrationWarning={true}>{displayTitle}</h1>
                        <ul className="breadcrumb-items">
                            <li>
                                <Link href="/" suppressHydrationWarning>
                                    <span suppressHydrationWarning>
                                        {getTranslatedText('主页', 'Home', 'Accueil', '主頁')}
                                    </span>
                                </Link>
                            </li>
                            <li className="style-2" suppressHydrationWarning>
                                {displaySubtitle}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default BreadcrumbCourses;