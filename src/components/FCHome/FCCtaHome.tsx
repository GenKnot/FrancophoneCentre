"use client";
import Link from 'next/link';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const FCCtaHome = () => {
    const { currentLanguage, isHydrated } = useLanguage();

    const getTranslatedText = (zhText: string, enText: string, frText: string = enText, zhHantText: string = zhText) => {
        if (!isHydrated) {
            return enText;
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
            <section className="quality-coureses-section section-padding fix theme-red-bg">
                <div className="container-fluid">
                    <div className="row g-4">
                        <div className="col-xl-2 col-lg-6">
                            <div className="coureses-image float-bob-x">
                                <img src="FCImage/girl.png" alt="img" className="wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.2s" />
                                <div className="bg-shape">
                                    <img src="FCImage/bg-shape-1.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="quality-coureses-content text-center">
                                <div className="section-title">
                                    <h6 className="text-white wow fadeInUp">
                                        {getTranslatedText('停止无效努力', 'Stop Wasting Effort', 'Arrêtez les Efforts Inutiles', '停止無效努力')}
                                    </h6>
                                    <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                        {getTranslatedText('梦想与现实之间', 'Between Dreams and Reality', 'Entre Rêves et Réalité', '夢想與現實之間')} <br />
                                        {getTranslatedText('只差一个正确的选择', 'Just One Right Choice Away', 'Il Ne Manque Qu\'un Bon Choix', '只差一個正確的選擇')}
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".3s">
                                    {getTranslatedText(
                                        '不要再浪费时间在无效的学习方法上',
                                        'Stop wasting time on ineffective methods',
                                        'Arrêtez de perdre du temps avec des méthodes inefficaces',
                                        '不要再浪費時間在無效的學習方法上'
                                    )}<br/>
                                    {getTranslatedText(
                                        '选择真正懂考试的人来教你',
                                        'Choose those who truly understand exams to teach you',
                                        'Choisissez ceux qui comprennent vraiment les examens',
                                        '選擇真正懂考試的人來教你'
                                    )}
                                </p>
                                <Link href="/courses-details" className="theme-btn wow fadeInUp" data-wow-delay=".3s">
                                    {getTranslatedText('现在就开始改变命运', 'Start Changing Your Destiny Now', 'Commencez à Changer Votre Destin', '現在就開始改變命運')}
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6">
                            <div className="coureses-image style-2 float-bob-y">
                                <img src="FCImage/boy.png" alt="img" className="wow img-custom-anim-right" data-wow-duration="1.5s" data-wow-delay="0.4s" />
                                <div className="bg-shape">
                                    <img src="FCImage/bg-shape-2.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FCCtaHome;