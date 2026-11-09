"use client"
import Count from '@/common/Count';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutCounter = () => {
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
            <div className="counter-section-23 section-padding pt-0">
                <div className="container custom-container">
                    <div className="counter-wrapper-2 bg-cover"
                         style={{background: `url(/assets/img/counter-bg.jpg)`}}>
                        <div className="counter-items">
                            <div className="icon" style={{color: '#ffffff'}}>
                                <i className="flaticon-success"></i>
                            </div>
                            <div className="content">
                                <h2 style={{color: '#ffffff'}}><span className="odometer" data-count="740"> <Count
                                    number={740} text='+'/> </span></h2>
                                <p>{getTranslatedText('CLB5方向累计学员', 'Students Aiming for CLB 5', 'Élèves visant le NCLC 5', 'CLB5方向累計學員')}</p>
                            </div>
                        </div>
                        <div className="counter-items">
                            <div className="icon" style={{color: '#ffffff'}}>
                                <i className="flaticon-medal"></i>
                            </div>
                            <div className="content">
                                <h2 style={{color: '#ffffff'}}><span className="odometer" data-count="530"> <Count
                                    number={530} text='+'/> </span></h2>
                                <p>{getTranslatedText('CLB5达标学员', 'Reached CLB 5', 'Ont atteint le NCLC 5', 'CLB5達標學員')}</p>
                            </div>
                        </div>
                        <div className="counter-items">
                            <div className="icon" style={{color: '#ffffff'}}>
                                <i className="flaticon-satisfaction"></i>
                            </div>
                            <div className="content">
                                <h2 style={{color: '#ffffff'}}><span className="odometer" data-count="70"> <Count
                                    number={70} text='+'/> </span></h2>
                                <p>{getTranslatedText('CLB7达标学员', 'Reached CLB 7', 'Ont atteint le NCLC 7', 'CLB7達標學員')}</p>
                            </div>
                        </div>
                        <div className="counter-items">
                            <div className="icon" style={{color: '#ffffff'}}>
                                <i className="flaticon-instructor"></i>
                            </div>
                            <div className="content">
                                <h2 style={{color: '#ffffff'}}><span className="odometer" data-count="10"> <Count
                                    number={10} text={getTranslatedText('位', '', '', '位')}/> </span></h2>
                                <p>{getTranslatedText('现任+前任考官', 'Current + Former Examiners', 'Examinateurs Actuels + Anciens', '現任+前任考官')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AboutCounter;