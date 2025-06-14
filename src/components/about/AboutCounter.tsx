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
                                <h2 style={{color: '#ffffff'}}><span className="odometer" data-count="217"> <Count
                                    number={217} text=''/> </span></h2>
                                <p>{getTranslatedText('在校学员', 'Current Students', 'Étudiants Actuels', '在校學員')}</p>
                            </div>
                        </div>
                        <div className="counter-items">
                            <div className="icon" style={{color: '#ffffff'}}>
                                <i className="flaticon-medal"></i>
                            </div>
                            <div className="content">
                                <h2 style={{color: '#ffffff'}}><span className="odometer" data-count="98"> <Count
                                    number={98} text='%'/> </span></h2>
                                <p>{getTranslatedText('TEF通过率', 'TEF Pass Rate', 'Taux de Réussite TEF', 'TEF通過率')}</p>
                            </div>
                        </div>
                        <div className="counter-items">
                            <div className="icon" style={{color: '#ffffff'}}>
                                <i className="flaticon-satisfaction"></i>
                            </div>
                            <div className="content">
                                <h2 style={{color: '#ffffff'}}><span className="odometer" data-count="154"> <Count
                                    number={154} text=''/> </span></h2>
                                <p>{getTranslatedText('成功拿到CLB5', 'Achieved CLB5', 'Obtenu CLB5', '成功拿到CLB5')}</p>
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