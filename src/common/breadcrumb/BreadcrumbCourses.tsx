"use client";
import Link from 'next/link';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const BreadcrumbCourses = ({title, subtitle} : any) => {
  const { currentLanguage } = useLanguage();

  const getTranslatedText = (zhText: string, enText: string, frText: string = enText, zhHantText: string = zhText) => {
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

  const displayTitle = title || getTranslatedText('所有课程', 'All Courses', 'Tous les Cours', '所有課程');
  const displaySubtitle = subtitle || getTranslatedText('课程', 'Courses', 'Cours', '課程');
  
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
                        <h1>{displayTitle}</h1>
                        <ul className="breadcrumb-items">
                            <li>
                                <Link href="/">
                                    <span>
                                        {getTranslatedText('主页', 'Home', 'Accueil', '主頁')}
                                    </span>
                                </Link>
                            </li>
                            <li className="style-2">
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