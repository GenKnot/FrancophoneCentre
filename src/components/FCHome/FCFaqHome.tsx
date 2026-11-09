"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const FCFaqHome = () => {
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
            <section className="faq-section fix section-padding pt-0">
                <div className="container">
                    <div className="faq-wrapper style-2">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-6">
                                <div className="faq-content">
                                    <div className="section-title color-red">
                                        <h6 className="wow fadeInUp">
                                            {getTranslatedText('常见问题', 'FAQ', 'FAQ', '常見問題')}
                                        </h6>
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                            {getTranslatedText('解答疑虑', 'Clear Doubts', 'Clarifier les Doutes', '解答疑慮')} <br />
                                            {getTranslatedText('让学习安心', 'Learn with Confidence', 'Apprendre en Confiance', '讓學習安心')}
                                        </h2>
                                    </div>
                                    <div className="faq-items mt-4 mt-md-0 mb-0">
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item wow fadeInUp" data-wow-delay=".2s">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseOne" aria-expanded="true"
                                                            aria-controls="collapseOne">
                                                        {getTranslatedText(
                                                            '零基础需要多久能达到CLB7？',
                                                            'How long does it take a beginner to reach CLB 7?',
                                                            'Combien de temps faut-il à un débutant pour atteindre le NCLC 7 ?',
                                                            '零基礎需要多久能達到CLB7？'
                                                        )}
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse show"
                                                     aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>
                                                            {getTranslatedText(
                                                                '因人而异。历史数据中，CLB7最快167天达标，CLB5最快67天达标；个案不代表普遍结果。我们会根据你的基础和目标安排课程，基础课与刷题班衔接，减少重复学习。',
                                                                'It depends on the learner. In our historical data, the fastest students reached CLB 7 in 167 days and CLB 5 in 67 days; individual results vary. We plan your courses around your level and goals, linking foundation classes with exam practice to avoid repetition.',
                                                                'Cela dépend de chacun. Dans nos données historiques, les plus rapides ont atteint le NCLC 7 en 167 jours et le NCLC 5 en 67 jours ; les résultats individuels varient. Nous adaptons le parcours à votre niveau et à vos objectifs.',
                                                                '因人而異。歷史數據中，CLB7最快167天達標，CLB5最快67天達標；個案不代表普遍結果。我們會根據你的基礎和目標安排課程，基礎課與刷題班銜接，減少重複學習。'
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item wow fadeInUp" data-wow-delay=".4s">
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseTwo" aria-expanded="false"
                                                            aria-controls="collapseTwo">
                                                        {getTranslatedText(
                                                            '你们的教学成果数据是怎么来的？',
                                                            'Where do your results figures come from?',
                                                            'D\'où viennent vos chiffres de résultats ?',
                                                            '你們的教學成果數據是怎麼來的？'
                                                        )}
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse"
                                                     aria-labelledby="headingTwo"
                                                     data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>
                                                            {getTranslatedText(
                                                                '来自原魁北克法语教育中心（QFEC）截至2026年5月30日的历史统计：以CLB5为目标累计740+名学员，530+人达标；以CLB7为目标累计210+名学员，70+人达标。个案不代表普遍结果。',
                                                                'Historical records of the former Quebec Francophone Education Centre (QFEC) as of May 30, 2026: 740+ students aimed for CLB 5 and 530+ reached it; 210+ aimed for CLB 7 and 70+ reached it. Individual results vary.',
                                                                'Statistiques historiques de l\'ancien Centre d\'éducation francophone du Québec (QFEC) au 30 mai 2026 : 740+ élèves visaient le NCLC 5 et 530+ l\'ont atteint ; 210+ visaient le NCLC 7 et 70+ l\'ont atteint. Les résultats individuels varient.',
                                                                '來自原魁北克法語教育中心（QFEC）截至2026年5月30日的歷史統計：以CLB5為目標累計740+名學員，530+人達標；以CLB7為目標累計210+名學員，70+人達標。個案不代表普遍結果。'
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item wow fadeInUp" data-wow-delay=".6s">
                                                <h2 className="accordion-header" id="headingthree">
                                                    <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapsethree" aria-expanded="false"
                                                            aria-controls="collapsethree">
                                                        {getTranslatedText(
                                                            '法语移民真的比英语简单吗？',
                                                            'Is French immigration easier than English?',
                                                            'L\'immigration française est-elle plus facile?',
                                                            '法語移民真的比英語簡單嗎？'
                                                        )}
                                                    </button>
                                                </h2>
                                                <div id="collapsethree" className="accordion-collapse collapse"
                                                     aria-labelledby="headingthree" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>
                                                            {getTranslatedText(
                                                                '数据说话：2025年法语EE平均捞取分数415分，英语EE需要520+分。只要CLB7法语+一年工作经验就基本达标，比英语EE的雅思8777+名校硕博要求简单得多。',
                                                                'Data speaks: 2025 French EE average 415 points, English EE needs 520+. Just CLB7 French + 1 year work experience qualifies, much easier than English EE requirements.',
                                                                'Les données parlent: EE français 2025 moyenne 415 points, EE anglais nécessite 520+. Juste CLB7 français + 1 an d\'expérience suffit.',
                                                                '數據說話：2025年法語EE平均撈取分數415分，英語EE需要520+分。只要CLB7法語+一年工作經驗就基本達標，比英語EE的雅思8777+名校碩博要求簡單得多。'
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item mb-0 wow fadeInUp" data-wow-delay="1s">
                                                <h2 className="accordion-header" id="headingfive">
                                                    <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapsefive" aria-expanded="false"
                                                            aria-controls="collapsefive">
                                                        {getTranslatedText(
                                                            '课程内容会定期更新吗？',
                                                            'Are courses updated regularly?',
                                                            'Les cours sont-ils mis à jour régulièrement?',
                                                            '課程內容會定期更新嗎？'
                                                        )}
                                                    </button>
                                                </h2>
                                                <div id="collapsefive" className="accordion-collapse collapse"
                                                     aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>
                                                            {getTranslatedText(
                                                                '我们的现任考官每周结合监考经验进行教研，每月更新课程内容。确保您学到的永远是最新、最准确的考试重点。',
                                                                'Our current examiners conduct weekly research based on exam experience, updating courses monthly, so you always learn the latest, most accurate exam points.',
                                                                'Nos examinateurs actuels mènent des recherches hebdomadaires basées sur l\'expérience d\'examen et mettent à jour les cours chaque mois, pour que vous appreniez toujours les points d\'examen les plus récents.',
                                                                '我們的現任考官每週結合監考經驗進行教研，每月更新課程內容。確保您學到的永遠是最新、最準確的考試重點。'
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="faq-image-2">
                                    <img src="FCImage/FAQ-1.png" alt="img" className="wow img-custom-anim-left"/>
                                    <div className="bg-shape">
                                        <img src="FCImage/bg-shape.png" alt="img"/>
                                    </div>
                                    <div className="quote-shape float-bob-x">
                                        <img src="FCImage/FAQ-3.png" alt="img"/>
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

export default FCFaqHome;