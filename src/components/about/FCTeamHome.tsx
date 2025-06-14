"use client";
import Link from 'next/link';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const FCTeamHome = ({style_2} : any) => {
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
            <section className={`team-section-5 fix section-padding ${style_2 ? "section-bg" : ""}`}>
                <div className="container">
                    <div className="section-title text-center">
                        <h6 className="wow fadeInUp" style={{color: '#AD0119'}}>
                            {getTranslatedText('我们的老师', 'Our Teachers', 'Nos Professeurs', '我們的老師')}
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            {getTranslatedText('现任考官 + 前任考官联合授课', 'Current + Former Examiners Joint Teaching', 'Enseignement Conjoint Examinateurs Actuels + Anciens', '現任考官 + 前任考官聯合授課')}
                        </h2>
                        <p className="wow fadeInUp" data-wow-delay=".5s">
                            {getTranslatedText(
                                '6位现任TEF考官 + 4位前任考官，2000小时教研成果精华',
                                '6 current TEF examiners + 4 former examiners, 2000 hours of research excellence',
                                '6 examinateurs TEF actuels + 4 anciens examinateurs, 2000 heures d\'excellence de recherche',
                                '6位現任TEF考官 + 4位前任考官，2000小時教研成果精華'
                            )}
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items">
                                <div className="thumb">
                                    <img src="FCImage/teacher-1.png" alt="img" />
                                </div>
                                <div className="content">
                                    <h4>{getTranslatedText('考官 AYMÉRIC', 'Examiner AYMÉRIC', 'Examinateur AYMÉRIC', '考官 AYMÉRIC')}</h4>
                                    <p>{getTranslatedText('现任TEF考官 - 法国', 'Current TEF Examiner - France', 'Examinateur TEF Actuel - France', '現任TEF考官 - 法國')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="team-card-items">
                                <div className="thumb">
                                    <img src="FCImage/teacher-1.png" alt="img" />
                                </div>
                                <div className="content">
                                    <h4>{getTranslatedText('考官 ÉLOANNE', 'Examiner ÉLOANNE', 'Examinateur ÉLOANNE', '考官 ÉLOANNE')}</h4>
                                    <p>{getTranslatedText('现任TEF/TCF考官 - 加拿大', 'Current TEF/TCF Examiner - Canada', 'Examinateur TEF/TCF Actuel - Canada', '現任TEF/TCF考官 - 加拿大')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="team-card-items">
                                <div className="thumb">
                                    <img src="FCImage/teacher-1.png" alt="img" />
                                </div>
                                <div className="content">
                                    <h4>{getTranslatedText('考官 JORICK', 'Examiner JORICK', 'Examinateur JORICK', '考官 JORICK')}</h4>
                                    <p>{getTranslatedText('现任TEF/TCF考官 - 加拿大', 'Current TEF/TCF Examiner - Canada', 'Examinateur TEF/TCF Actuel - Canada', '現任TEF/TCF考官 - 加拿大')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                            <div className="team-card-items">
                                <div className="thumb">
                                    <img src="FCImage/teacher-1.png" alt="img" />
                                </div>
                                <div className="content">
                                    <h4>{getTranslatedText('前任考官 Selene LI', 'Former Examiner Selene LI', 'Ancien Examinateur Selene LI', '前任考官 Selene LI')}</h4>
                                    <p>{getTranslatedText('DALF C2持有者 - 中国', 'DALF C2 Holder - China', 'Détenteur DALF C2 - Chine', 'DALF C2持有者 - 中國')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FCTeamHome;