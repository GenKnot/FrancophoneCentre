"use client"
import Link from 'next/link';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const FCEventHome = () => {
    const { currentLanguage } = useLanguage();

    const getTranslatedText = (zhText: string, enText: string, frText: string = enText, zhHantText: string = zhText) => {
        switch (currentLanguage) {
            case 'zh-hans':
            case 'zh-CN':
            case 'zh-Hans':
                return zhText;
            case 'zh-hant':
            case 'zh-TW':
            case 'zh-Hant':
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
            <section className="event-section pt-0 fix section-padding">
                <div className="container">
                    <div className="section-title color-red text-center">
                        <h6 className="wow fadeInUp">
                            {getTranslatedText(
                                '近期活动',
                                'Recent Events',
                                'Événements récents',
                                '近期活動'
                            )}
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            {getTranslatedText(
                                '不容错过的各类活动',
                                'Don\'t Miss These Amazing Events',
                                'Ne manquez pas ces événements incroyables',
                                '不容錯過的各類活動'
                            )}
                        </h2>
                    </div>
                    <div className="event-wrapper mt-3 mt-md-0">
                        <div className="row g-0">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="event-card-items bg-cover" style={{background: `url(/FCImage/Even-1.png)`}}>
                                    <div className="post-cat">
                                        {getTranslatedText(
                                            '限时优惠',
                                            'Limited Time Offer',
                                            'Offre limitée',
                                            '限時優惠'
                                        )}
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <Link href="/contact">
                                                {getTranslatedText(
                                                    '基础班combo学员',
                                                    'Basic Combo Students',
                                                    'Étudiants Combo de base',
                                                    '基礎班combo學員'
                                                )} <br />
                                                {getTranslatedText(
                                                    '1对1课程88加币/课时',
                                                    '1-on-1 Classes $88 CAD/hour',
                                                    'Cours individuels 88$ CAD/heure',
                                                    '1對1課程88加幣/課時'
                                                )}
                                            </Link>
                                        </h4>
                                        <ul className="date-list">
                                            <li>
                                                <i className="far fa-tag"></i> {getTranslatedText(
                                                    '原价200',
                                                    'Regular $200',
                                                    'Prix normal 200$',
                                                    '原價200'
                                                )}
                                            </li>
                                            <li>
                                                <i className="far fa-percent"></i> {getTranslatedText(
                                                    '优惠56%',
                                                    '56% Off',
                                                    '56% de réduction',
                                                    '優惠56%'
                                                )}
                                            </li>
                                        </ul>
                                        <Link href="/contact" className="theme-btn red-btn">
                                            {getTranslatedText(
                                                '了解详情',
                                                'Learn More',
                                                'En savoir plus',
                                                '了解詳情'
                                            )}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="event-card-items active bg-cover" style={{background: `url(/FCImage/Even-3.png)`}}>
                                    <div className="post-cat">
                                        {getTranslatedText(
                                            '团报优惠',
                                            'Group Discount',
                                            'Réduction de groupe',
                                            '團報優惠'
                                        )}
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <Link href="/contact">
                                                {getTranslatedText(
                                                    '5人团购报名',
                                                    '5-Person Group Registration',
                                                    'Inscription de groupe de 5 personnes',
                                                    '5人團購報名'
                                                )} <br />
                                                {getTranslatedText(
                                                    '享受9.5折优惠',
                                                    'Enjoy 5% Off',
                                                    'Bénéficiez de 5% de réduction',
                                                    '享受9.5折優惠'
                                                )}
                                            </Link>
                                        </h4>
                                        <ul className="date-list">
                                            <li>
                                                <i className="far fa-users"></i> {getTranslatedText(
                                                    '人数5人+',
                                                    '5+ People',
                                                    '5+ personnes',
                                                    '人數5人+'
                                                )}
                                            </li>
                                            <li>
                                                <i className="far fa-calendar"></i> {getTranslatedText(
                                                    '同一课程',
                                                    'Same Course',
                                                    'Même cours',
                                                    '同一課程'
                                                )}
                                            </li>
                                        </ul>
                                        <Link href="/contact" className="theme-btn red-btn">
                                            {getTranslatedText(
                                                '组团报名',
                                                'Group Registration',
                                                'Inscription de groupe',
                                                '組團報名'
                                            )}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                <div className="event-card-items bg-cover" style={{background: `url(/FCImage/Even-2.png)`}}>
                                    <div className="post-cat">
                                        {getTranslatedText(
                                            '早鸟价格',
                                            'Early Bird Price',
                                            'Prix lève-tôt',
                                            '早鳥價格'
                                        )}
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <Link href="/contact">
                                                {getTranslatedText(
                                                    '锁定3月31日开课',
                                                    'Lock in March 31st Start Date',
                                                    'Réservez le début du 31 mars',
                                                    '鎖定3月31日開課'
                                                )} <br />
                                                {getTranslatedText(
                                                    '基础班早鸟价',
                                                    'Basic Class Early Bird Price',
                                                    'Prix lève-tôt pour cours de base',
                                                    '基礎班早鳥價'
                                                )}
                                            </Link>
                                        </h4>
                                        <ul className="date-list">
                                            <li>
                                                <i className="far fa-calendar-check"></i> {getTranslatedText(
                                                    '3月31日开课',
                                                    'Starts March 31st',
                                                    'Début le 31 mars',
                                                    '3月31日開課'
                                                )}
                                            </li>
                                            <li>
                                                <i className="far fa-percent"></i> {getTranslatedText(
                                                    '9.5折优惠',
                                                    '5% Off',
                                                    '5% de réduction',
                                                    '9.5折優惠'
                                                )}
                                            </li>
                                        </ul>
                                        <Link href="/contact" className="theme-btn red-btn">
                                            {getTranslatedText(
                                                '立即锁定',
                                                'Lock in Now',
                                                'Réserver maintenant',
                                                '立即鎖定'
                                            )}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                <div className="event-card-items bg-cover" style={{background: `url(/FCImage/Even-4.png)`}}>
                                    <div className="post-cat">
                                        {getTranslatedText(
                                            '免费试听',
                                            'Free Trial',
                                            'Essai gratuit',
                                            '免費試聽'
                                        )}
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <Link href="/contact">
                                                {getTranslatedText(
                                                    '现在咨询即可',
                                                    'Contact Us Now',
                                                    'Contactez-nous maintenant',
                                                    '現在諮詢即可'
                                                )} <br />
                                                {getTranslatedText(
                                                    '免费试听考官直播课',
                                                    'Free Trial Examiner Live Class',
                                                    'Cours en direct gratuit avec examinateur',
                                                    '免費試聽考官直播課'
                                                )}
                                            </Link>
                                        </h4>
                                        <ul className="date-list">
                                            <li>
                                                <i className="far fa-gift"></i> {getTranslatedText(
                                                    '直播试听',
                                                    'Live Trial',
                                                    'Essai en direct',
                                                    '直播試聽'
                                                )}
                                            </li>
                                            <li>
                                                <i className="far fa-clock"></i> {getTranslatedText(
                                                    '1节课免费',
                                                    '1 Free Class',
                                                    '1 cours gratuit',
                                                    '1節課免費'
                                                )}
                                            </li>
                                        </ul>
                                        <Link href="/contact" className="theme-btn red-btn">
                                            {getTranslatedText(
                                                '免费领取',
                                                'Get Free Trial',
                                                'Obtenir l\'essai gratuit',
                                                '免費領取'
                                            )}
                                        </Link>
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