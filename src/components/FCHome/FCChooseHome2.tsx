"use client";
import Count from '@/common/Count';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const FCPartnarsHome = () => {
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

    return (
        <>
            <section className="choose-us-section-5 fix section-padding">
                <div className="container">
                    <div className="choose-us-wrapper-5">
                        <div className="row g-4">
                            <div className="col-xl-6 col-lg-6">
                                <div className="choose-content">
                                    <div className="section-title color-red">
                                        <h6 className="wow fadeInUp">
                                            {getTranslatedText('QFEC独家优势', 'QFEC Exclusive Advantages', 'Avantages Exclusifs QFEC', 'QFEC獨家優勢')}
                                        </h6>
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                            {getTranslatedText(
                                                '不仅学法语',
                                                'Not Just Learning French',
                                                'Pas Seulement Apprendre le Français',
                                                '不僅學法語'
                                            )} <br />
                                            {getTranslatedText(
                                                '还教你怎么拿高分',
                                                'But Also How to Get High Scores',
                                                'Mais Aussi Comment Obtenir de Hauts Scores',
                                                '還教你怎麼拿高分'
                                            )}
                                        </h2>
                                    </div>
                                    <div className="choose-items mt-4 mt-md-0 ">
                                        <div className="circle-text wow fadeInUp" data-wow-delay=".3s">
                                            <img src="assets/img/circle-5.png" alt="img" className="circle-animation"/>
                                            <div className="icon">
                                                <i className="far fa-arrow-right" style={{color: '#AD0119'}}></i>
                                            </div>
                                        </div>
                                        <div className="counter-box wow fadeInUp" data-wow-delay=".5s">
                                            <h2 className="title" style={{color: '#AD0119'}}><span className="odometer" data-count="2000"> <Count
                                                number={2000} text='+'/>  </span></h2>
                                            <p>{getTranslatedText('小时考官教研成果', 'Hours of Examiner Research Results', 'Heures de Résultats de Recherche d\'Examinateurs', '小時考官教研成果')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="choose-us-items-5">
                                    <div className="row g-0">
                                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                            <div className="choose-box-3 border-left-none  border-top-none">
                                                <div className="icon">
                                                    <i className="fas fa-bullseye" style={{color: '#AD0119'}}></i>
                                                </div>
                                                <div className="content">
                                                    <h5>{getTranslatedText('100%原题训练', '100% Original Question Training', '100% Entraînement Questions Originales', '100%原題訓練')}</h5>
                                                    <p>
                                                        {getTranslatedText(
                                                            '下次考试遇到80%原题不是运气，是实力',
                                                            'Encountering 80% original questions in the next exam is not luck, it\'s strength',
                                                            'Rencontrer 80% de questions originales au prochain examen n\'est pas de la chance, c\'est de la force',
                                                            '下次考試遇到80%原題不是運氣，是實力'
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                            <div
                                                className="choose-box-3 border-right-none border-left-none border-top-none">
                                                <div className="icon">
                                                    <i className="fas fa-sync-alt" style={{color: '#AD0119'}}></i>
                                                </div>
                                                <div className="content">
                                                    <h5>{getTranslatedText('每月课程更新', 'Monthly Course Updates', 'Mises à Jour Mensuelles des Cours', '每月課程更新')}</h5>
                                                    <p>
                                                        {getTranslatedText(
                                                            '考官每周组织教研反馈我们永远学最新考点',
                                                            'Examiners organize weekly teaching research feedback, we always learn the latest exam points',
                                                            'Les examinateurs organisent des commentaires de recherche pédagogique hebdomadaires, nous apprenons toujours les derniers points d\'examen',
                                                            '考官每週組織教研反饋我們永遠學最新考點'
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                            <div
                                                className="choose-box-3 border-left-none border-bottom-none border-top-none">
                                                <div className="icon">
                                                    <i className="fas fa-medal" style={{color: '#AD0119'}}></i>
                                                </div>
                                                <div className="content">
                                                    <h5>{getTranslatedText('三个100%保证', 'Three 100% Guarantees', 'Trois Garanties 100%', '三個100%保證')}</h5>
                                                    <p>
                                                        {getTranslatedText(
                                                            '评测系统 + 考试环境 + 核心词汇全覆盖无死角',
                                                            'Assessment System + Exam Environment + Core Vocabulary - Complete Coverage with No Blind Spots',
                                                            'Système d\'Évaluation + Environnement d\'Examen + Vocabulaire de Base - Couverture Complète sans Angles Morts',
                                                            '評測系統 + 考試環境 + 核心詞彙全覆蓋無死角'
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                            <div
                                                className="choose-box-3 border-left-none border-bottom-none  border-top-none border-right-none">
                                                <div className="icon">
                                                    <i className="fas fa-dollar-sign" style={{color: '#AD0119'}}></i>
                                                </div>
                                                <div className="content">
                                                    <h5>{getTranslatedText('超值优惠', 'Great Value Offer', 'Offre de Grande Valeur', '超值優惠')}</h5>
                                                    <p>
                                                        {getTranslatedText(
                                                            '考官1对1原价200加币内部学员专享价',
                                                            'Examiner 1-on-1 original price $200 CAD - Exclusive price for internal students',
                                                            'Prix original 1-à-1 avec examinateur 200 $ CAD - Prix exclusif pour les étudiants internes',
                                                            '考官1對1原價200加幣內部學員專享價'
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
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

export default FCPartnarsHome;