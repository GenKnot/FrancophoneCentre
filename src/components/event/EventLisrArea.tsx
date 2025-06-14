"use client"
import NiceSelect from '@/ui/NiceSelect';
import Link from 'next/link';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const EventLisrArea = () => {
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

    const selectHandler = (e: any) => {
    };

    return (
        <>
            <section className="event-list-section fix section-padding pt-0">
                <div className="container">
                    <div className="event-list-wrapper">
                        <div className="event-list-top-area">
                            <div className="search-widget">
                                <input type="text" placeholder={getTranslatedText('搜索活动', 'Search Events', 'Rechercher Événements', '搜索活動')}/>
                                <div className="sub-icon"><i className="fal fa-search"></i></div>
                            </div>
                            <div className="form-clt">
                                <NiceSelect
                                    className="category"
                                    options={[
                                        {value: "01", text: getTranslatedText("活动地点", "Event Location", "Lieu d'Événement", "活動地點")},
                                        {value: "02", text: getTranslatedText("蒙特利尔", "Montreal", "Montréal", "蒙特利爾")},
                                        {value: "03", text: getTranslatedText("圣让校区", "Saint-Jean Campus", "Campus Saint-Jean", "聖讓校區")},
                                        {value: "04", text: getTranslatedText("在线活动", "Online Event", "Événement en Ligne", "在線活動")},
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
                                        {value: "01", text: getTranslatedText("活动类型", "Event Type", "Type d'Événement", "活動類型")},
                                        {value: "02", text: getTranslatedText("限时优惠", "Limited Offer", "Offre Limitée", "限時優惠")},
                                        {value: "03", text: getTranslatedText("免费试听", "Free Trial", "Essai Gratuit", "免費試聽")},
                                        {value: "04", text: getTranslatedText("团报活动", "Group Registration", "Inscription de Groupe", "團報活動")},
                                    ]}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                    name=""
                                    placeholder=""/>
                            </div>
                            <div className="event-button-top">
                                <button type="submit" className="theme-btn">{getTranslatedText('查找活动', 'Find Events', 'Trouver Événements', '查找活動')}</button>
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
                                        <h4><Link href="/event-details">{getTranslatedText('早鸟优惠 - 3月31日开课基础班特惠', 'Early Bird Offer - Basic Class Special Starting March 31', 'Offre Lève-tôt - Spécial Classe de Base Début 31 Mars', '早鳥優惠 - 3月31日開課基礎班特惠')}</Link></h4>
                                        <ul className="post-time">
                                            <li><i className="far fa-user"></i>QFEC</li>
                                            <li><i className="far fa-map-marker-alt"></i> {getTranslatedText('蒙特利尔', 'Montreal', 'Montréal', '蒙特利爾')}</li>
                                            <li><i className="far fa-percent"></i> {getTranslatedText('9.5折优惠', '5% Off', '5% de Réduction', '9.5折優惠')}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="event-image">
                                <img src="FCImage/Even-5.png" alt="img" />
                            </div>
                            <div className="event-btn">
                                <Link href="/event-details" className="theme-btn">
                                    {getTranslatedText('立即报名', 'Register Now', 'S\'inscrire Maintenant', '立即報名')}
                                </Link>
                            </div>
                        </div>
                        <div className="event-list-items">
                            <div className="event-content">
                                <div className="content">
                                    <div className="date">
                                        <h2>{getTranslatedText('免费', 'Free', 'Gratuit', '免費')}</h2>
                                        <span>{getTranslatedText('试听课', 'Trial Class', 'Cours d\'Essai', '試聽課')}</span>
                                    </div>
                                    <div className="title-text">
                                        <h4><Link href="/event-details">{getTranslatedText('免费领取考官直播试听课', 'Free Examiner Live Trial Class', 'Cours d\'Essai en Direct Gratuit par Examinateur', '免費領取考官直播試聽課')}</Link></h4>
                                        <ul className="post-time">
                                            <li><i className="far fa-user"></i>{getTranslatedText('现任TEF考官', 'Current TEF Examiner', 'Examinateur TEF Actuel', '現任TEF考官')}</li>
                                            <li><i className="far fa-map-marker-alt"></i> {getTranslatedText('在线直播', 'Online Live', 'En Direct en Ligne', '在線直播')}</li>
                                            <li><i className="far fa-gift"></i> {getTranslatedText('完全免费', 'Completely Free', 'Complètement Gratuit', '完全免費')}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="event-image">
                                <img src="FCImage/Even-5.png" alt="img" />
                            </div>
                            <div className="event-btn">
                                <Link href="/event-details" className="theme-btn">
                                    {getTranslatedText('免费领取', 'Get Free', 'Obtenir Gratuitement', '免費領取')}
                                </Link>
                            </div>
                        </div>
                        <div className="event-button">
                            <Link href="/contact" className="theme-btn">{getTranslatedText('联系我们了解更多', 'Contact Us for More', 'Contactez-nous pour Plus', '聯繫我們了解更多')}</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventLisrArea;