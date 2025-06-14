"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const FCFaqHome = () => {
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
                                                            '零基础真的能6个月达到CLB7吗？',
                                                            'Can beginners really reach CLB7 in 6 months?',
                                                            'Débutants peuvent atteindre CLB7 en 6 mois?',
                                                            '零基礎真的能6個月達到CLB7嗎？'
                                                        )}
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse show"
                                                     aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>
                                                            {getTranslatedText(
                                                                '完全可以！我们的平均数据显示：0基础学员平均275天达到CLB7，最快的学员仅用167天。关键在于现任考官直授+100%原题训练，让您学到的就是考试要考的。',
                                                                'Absolutely! Our data shows beginners average 275 days to CLB7, fastest in 167 days. Key: direct examiner teaching + 100% original questions.',
                                                                'Absolument! Nos données: débutants atteignent CLB7 en 275 jours en moyenne, le plus rapide en 167 jours. Clé: enseignement direct des examinateurs.',
                                                                '完全可以！我們的平均數據顯示：0基礎學員平均275天達到CLB7，最快的學員僅用167天。關鍵在於現任考官直授+100%原題訓練，讓您學到的就是考試要考的。'
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
                                                            '98%通过率是真实数据吗？',
                                                            'Is the 98% pass rate real?',
                                                            'Le taux de réussite de 98% est-il réel?',
                                                            '98%通過率是真實數據嗎？'
                                                        )}
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse"
                                                     aria-labelledby="headingTwo"
                                                     data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>
                                                            {getTranslatedText(
                                                                '这是我们2024年6月-12月的真实统计：217名0基础学员中，154人成功通过CLB5考试，通过率远超行业平均55%水平。原因很简单：考官知道怎么考，自然知道怎么教。',
                                                                'Real stats from June-Dec 2024: 154 out of 217 beginners passed CLB5, far exceeding industry average of 55%. Simple reason: examiners know how to test, so they know how to teach.',
                                                                'Statistiques réelles juin-déc 2024: 154 sur 217 débutants ont réussi CLB5, dépassant largement la moyenne de 55%. Raison simple: les examinateurs savent comment tester.',
                                                                '這是我們2024年6月-12月的真實統計：217名0基礎學員中，154人成功通過CLB5考試，通過率遠超行業平均55%水平。原因很簡單：考官知道怎麼考，自然知道怎麼教。'
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
                                                                '我们的现任考官每周结合监考经验进行教研，每月更新课程内容。确保您学到的永远是最新、最准确的考试重点，这就是98%通过率的秘密。',
                                                                'Our current examiners conduct weekly research based on exam experience, updating courses monthly. This ensures you learn the latest, most accurate exam points - the secret to our 98% pass rate.',
                                                                'Nos examinateurs actuels mènent des recherches hebdomadaires basées sur l\'expérience d\'examen, mettant à jour les cours mensuellement. Le secret de notre taux de réussite de 98%.',
                                                                '我們的現任考官每週結合監考經驗進行教研，每月更新課程內容。確保您學到的永遠是最新、最準確的考試重點，這就是98%通過率的秘密。'
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