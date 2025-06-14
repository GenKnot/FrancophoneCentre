"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeatureArea = () => {
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
            <div className="feature-section-3 section-padding">
                <div className="container">
                    <div className="feature-wrapper-3 style-2">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="feature-card-items">
                                    <div className="icon" style={{color: '#AD0119'}}>
                                        <i className="flaticon-graduation"></i>
                                    </div>
                                    <div className="content">
                                        <h5>{getTranslatedText('现任考官直授', 'Current Examiner Teaching', 'Enseignement par Examinateurs Actuels', '現任考官直授')}</h5>
                                        <p>
                                            {getTranslatedText(
                                                '6位现任TEF考官亲自授课100%还原真实考试环境',
                                                '6 current TEF examiners teach personally, 100% authentic exam environment',
                                                '6 examinateurs TEF actuels enseignent personnellement, environnement d\'examen 100% authentique',
                                                '6位現任TEF考官親自授課100%還原真實考試環境'
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="feature-card-items">
                                    <div className="icon" style={{color: '#AD0119'}}>
                                        <i className="flaticon-instructor"></i>
                                    </div>
                                    <div className="content">
                                        <h5>{getTranslatedText('98%超高通过率', '98% High Pass Rate', 'Taux de Réussite Élevé 98%', '98%超高通過率')}</h5>
                                        <p>
                                            {getTranslatedText(
                                                '远超过行业平均水平6个月CLB7保证出分',
                                                'Far exceeds industry average, CLB7 guaranteed in 6 months',
                                                'Dépasse largement la moyenne de l\'industrie, CLB7 garanti en 6 mois',
                                                '遠超過行業平均水平6個月CLB7保證出分'
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                <div className="feature-card-items">
                                    <div className="icon" style={{color: '#AD0119'}}>
                                        <i className="flaticon-certficate"></i>
                                    </div>
                                    <div className="content">
                                        <h5>{getTranslatedText('法语移民快速通道', 'French Immigration Fast Track', 'Voie Rapide Immigration Française', '法語移民快速通道')}</h5>
                                        <p>
                                            {getTranslatedText(
                                                'EE项目仅需415分魁省PEQ最快14个月移民',
                                                'EE program only needs 415 points, Quebec PEQ fastest 14 months immigration',
                                                'Programme EE ne nécessite que 415 points, PEQ Québec immigration la plus rapide en 14 mois',
                                                'EE項目僅需415分魁省PEQ最快14個月移民'
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                <div className="feature-card-items">
                                    <div className="icon" style={{color: '#AD0119'}}>
                                        <i className="flaticon-school"></i>
                                    </div>
                                    <div className="content">
                                        <h5>{getTranslatedText('个性化学习路径', 'Personalized Learning Path', 'Parcours d\'Apprentissage Personnalisé', '個性化學習路徑')}</h5>
                                        <p>
                                            {getTranslatedText(
                                                '量身定制课程学习计划课后作业精准提升',
                                                'Customized course learning plan, precise improvement through homework',
                                                'Plan d\'apprentissage de cours personnalisé, amélioration précise par les devoirs',
                                                '量身定制課程學習計劃課後作業精準提升'
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureArea;