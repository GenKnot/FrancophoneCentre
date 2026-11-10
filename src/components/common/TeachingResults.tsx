"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Historical results from the CFEC brochure (2026 edition, p.10).
const ROWS = [
    { level: 'CLB 5', total: '740+', reached: '530+', fastest: 67 },
    { level: 'CLB 7', total: '210+', reached: '70+', fastest: 167 },
];

const TeachingResults = ({ className = '' }: { className?: string }) => {
    const { currentLanguage } = useLanguage();

    const t = (zh: string, en: string, fr: string, zhHant: string) => {
        switch (currentLanguage) {
            case 'zh-hans':
                return zh;
            case 'zh-hant':
                return zhHant;
            case 'fr':
                return fr;
            default:
                return en;
        }
    };
    const days = (n: number) => t(`${n}天`, `${n} days`, `${n} jours`, `${n}天`);

    return (
        <section className={`teaching-results-section section-padding ${className}`}>
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="wow fadeInUp">{t('教学成果', 'Our Results', 'Nos résultats', '教學成果')}</h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        {t('历史教学数据', 'Historical Teaching Results', 'Résultats historiques', '歷史教學數據')}
                    </h2>
                    <p className="teaching-results-date wow fadeInUp" data-wow-delay=".4s">
                        {t('截至2026年5月30日', 'As of May 30, 2026', 'Au 30 mai 2026', '截至2026年5月30日')}
                    </p>
                </div>
                <div className="teaching-results-table wow fadeInUp" data-wow-delay=".5s">
                    <table>
                        <thead>
                            <tr>
                                <th>{t('学习目标', 'Target', 'Objectif', '學習目標')}</th>
                                <th>{t('累计学员', 'Students', 'Élèves', '累計學員')}</th>
                                <th>{t('达标学员', 'Reached target', 'Objectif atteint', '達標學員')}</th>
                                <th>{t('最快达标', 'Fastest', 'Le plus rapide', '最快達標')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ROWS.map((r) => (
                                <tr key={r.level}>
                                    <td className="level">{r.level}</td>
                                    <td>{r.total}</td>
                                    <td className="reached">{r.reached}</td>
                                    <td>{days(r.fastest)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="teaching-results-note">
                        {t(
                            '数据为原魁北克法语教育中心（QFEC）历史统计；个案不代表普遍结果。',
                            'Historical records of the former Quebec Francophone Education Centre (QFEC). Individual results vary.',
                            'Statistiques historiques de l\'ancien Centre d\'éducation francophone du Québec (QFEC). Les résultats individuels varient.',
                            '數據為原魁北克法語教育中心（QFEC）歷史統計；個案不代表普遍結果。'
                        )}
                    </p>
                </div>
                <div className="teaching-results-gallery">
                    <h4 className="wow fadeInUp">{t('真实学员成绩展示', 'Real Student Results', 'Résultats réels d\'élèves', '真實學員成績展示')}</h4>
                    <div className="gallery-grid">
                        {[1, 2, 3, 4].map((n) => (
                            <img key={n} src={`/assets/img/results/result-${n}.jpg`} alt={t('学员TEF四项CLB7成绩', 'Student TEF results: CLB 7 in all four skills', 'Résultats TEF : NCLC 7 dans les quatre compétences', '學員TEF四項CLB7成績')} loading="lazy"/>
                        ))}
                    </div>
                    <h4 className="wow fadeInUp">{t('学员真实反馈', 'Student Feedback', 'Témoignages d\'élèves', '學員真實反饋')}</h4>
                    <div className="feedback-image">
                        <img src="/assets/img/results/student-feedback.jpg" alt={t('学员反馈截图', 'Student feedback screenshots', 'Captures de témoignages', '學員反饋截圖')} loading="lazy"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeachingResults;
