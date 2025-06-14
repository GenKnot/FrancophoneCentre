"use client";
import Count from '@/common/Count';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutArea = () => {
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
            <section className="about-section fix">
                <div className="about-wrapper-5">
                    <div className="container">
                        <div className="row g-4 justify-content-between">
                            <div className="col-lg-6">
                                <div className="section-title mb-0">
                                    <h6 className="wow fadeInUp" style={{color: '#AD0119'}}>
                                        {getTranslatedText('关于我们', 'About Us', 'À Propos', '關於我們')}
                                    </h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        {getTranslatedText('加拿大魁北克法语教育中心', 'Quebec French Education Center Canada', 'Centre d\'Éducation Française du Québec', '加拿大魁北克法語教育中心')} <br />
                                        {getTranslatedText('您的法语移民梦想起点', 'Your French Immigration Dream Starts Here', 'Votre Rêve d\'Immigration Française Commence Ici', '您的法語移民夢想起點')}
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content">
                                    <p className="wow fadeInUp" data-wow-delay=".3s">
                                        {getTranslatedText(
                                            '自1991年成立以来，QFEC始终肩负"架设加拿大国际教育合作桥梁"的战略使命，成为连接多元文化与魁北克本土语言教育的重要平台。',
                                            'Since 1991, QFEC has been committed to "building bridges for Canada\'s international education cooperation", becoming an important platform connecting multicultural and Quebec local language education.',
                                            'Depuis 1991, QFEC s\'engage à "construire des ponts pour la coopération éducative internationale du Canada", devenant une plateforme importante reliant l\'éducation multiculturelle et linguistique locale du Québec.',
                                            '自1991年成立以來，QFEC始終肩負"架設加拿大國際教育合作橋樑"的戰略使命，成為連接多元文化與魁北克本土語言教育的重要平台。'
                                        )}
                                    </p>
                                    <div className="counter-box-items">
                                        <div className="counter-content wow fadeInUp" data-wow-delay=".3s">
                                            <h2 style={{color: '#AD0119'}}><span className="odometer" data-count="34">
                                          <Count number={34} text='+'/>
                                          </span></h2>
                                            <p>{getTranslatedText('年专业法语教育经验', 'Years of Professional French Education', 'Années d\'Éducation Française Professionnelle', '年專業法語教育經驗')}</p>
                                        </div>
                                        <p className="text wow fadeInUp" data-wow-delay=".5s">
                                            {getTranslatedText(
                                                '由现任TEF考官直授，98%超高通过率，助您快速达到移民要求的法语水平。我们不仅教授法语，更为您打开通往加拿大新生活的大门。',
                                                'Taught directly by current TEF examiners with 98% pass rate, helping you quickly reach French proficiency for immigration. We don\'t just teach French, we open doors to your new life in Canada.',
                                                'Enseigné directement par les examinateurs TEF actuels avec un taux de réussite de 98%, vous aidant à atteindre rapidement la maîtrise du français pour l\'immigration. Nous n\'enseignons pas seulement le français, nous ouvrons les portes de votre nouvelle vie au Canada.',
                                                '由現任TEF考官直授，98%超高通過率，助您快速達到移民要求的法語水平。我們不僅教授法語，更為您打開通往加拿大新生活的大門。'
                                            )}
                                        </p>
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

export default AboutArea;