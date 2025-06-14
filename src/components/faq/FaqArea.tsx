"use client";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const FaqArea = () => {
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
            <section className="gallery-section section-padding pt-0 fix">
                <div className="faq-wrapper style-5">
                    <div className="container">
                        <div className="section-title text-center">
                            <h6>{getTranslatedText('常见问题', 'FAQ', 'FAQ', '常見問題')}</h6>
                            <h2>
                                {getTranslatedText('解答疑虑，让学习安心', 'Clear Doubts, Learn with Confidence', 'Clarifier les Doutes, Apprendre en Confiance', '解答疑慮，讓學習安心')}
                            </h2>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="faq-content">
                                    <div className="faq-items">
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseOne" aria-expanded="true"
                                                            aria-controls="collapseOne">
                                                        {getTranslatedText('零基础真的能6个月达到CLB7吗？', 'Can beginners really reach CLB7 in 6 months?', 'Débutants peuvent atteindre CLB7 en 6 mois?', '零基礎真的能6個月達到CLB7嗎？')}
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
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseTwo" aria-expanded="false"
                                                            aria-controls="collapseTwo">
                                                        {getTranslatedText('98%通过率是真实数据吗？', 'Is the 98% pass rate real?', 'Le taux de réussite de 98% est-il réel?', '98%通過率是真實數據嗎？')}
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
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingthree">
                                                    <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapsethree" aria-expanded="false"
                                                            aria-controls="collapsethree">
                                                        {getTranslatedText('法语移民真的比英语简单吗？', 'Is French immigration easier than English?', 'L\'immigration française est-elle plus facile?', '法語移民真的比英語簡單嗎？')}
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
                                            <div className="accordion-item mb-0">
                                                <h2 className="accordion-header" id="headingfour">
                                                    <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapsefour" aria-expanded="false"
                                                            aria-controls="collapsefour">
                                                        {getTranslatedText('课程内容会定期更新吗？', 'Is course content regularly updated?', 'Le contenu du cours est-il régulièrement mis à jour?', '課程內容會定期更新嗎？')}
                                                    </button>
                                                </h2>
                                                <div id="collapsefour" className="accordion-collapse collapse"
                                                     aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>
                                                            {getTranslatedText(
                                                                '我们的现任考官每周结合监考经验进行教研，每月更新课程内容。确保您学到的永远是最新、最准确的考试重点，这就是98%通过率的秘密。',
                                                                'Our current examiners conduct research weekly based on proctoring experience, updating course content monthly. Ensures you learn the latest, most accurate exam points - the secret to our 98% pass rate.',
                                                                'Nos examinateurs actuels mènent des recherches hebdomadaires basées sur l\'expérience de surveillance, mettant à jour le contenu mensuel. Garantit que vous apprenez les points d\'examen les plus récents.',
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
                                <div className="faq-content">
                                    <div className="faq-items">
                                        <div className="accordion" id="accordionExample2">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingfive">
                                                    <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapsefive" aria-expanded="true"
                                                            aria-controls="collapsefive">
                                                        {getTranslatedText('QFEC的考官团队有哪些优势？', 'What are the advantages of QFEC examiner team?', 'Quels sont les avantages de l\'équipe d\'examinateurs QFEC?', 'QFEC的考官團隊有哪些優勢？')}
                                                    </button>
                                                </h2>
                                                <div id="collapsefive" className="accordion-collapse collapse"
                                                     aria-labelledby="headingfive" data-bs-parent="#accordionExample2">
                                                    <div className="accordion-body">
                                                        <p>
                                                            {getTranslatedText(
                                                                '我们拥有6位现任考官+4位前任考官，累计2000小时教研成果。现任考官深知TEF评分标准，能精准指导避开失分陷阱，掌握得分要点。',
                                                                'We have 6 current + 4 former examiners with 2000+ hours of research. Current examiners know TEF scoring standards precisely, guiding you to avoid pitfalls and master key points.',
                                                                'Nous avons 6 examinateurs actuels + 4 anciens avec 2000+ heures de recherche. Les examinateurs actuels connaissent précisément les standards de notation TEF.',
                                                                '我們擁有6位現任考官+4位前任考官，累計2000小時教研成果。現任考官深知TEF評分標準，能精準指導避開失分陷阱，掌握得分要點。'
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingsix">
                                                    <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapsesix" aria-expanded="false"
                                                            aria-controls="collapsesix">
                                                        {getTranslatedText('什么是100%原题训练？', 'What is 100% original question training?', 'Qu\'est-ce que l\'entraînement 100% questions originales?', '什麼是100%原題訓練？')}
                                                    </button>
                                                </h2>
                                                <div id="collapsesix" className="accordion-collapse collapse"
                                                     aria-labelledby="headingsix"
                                                     data-bs-parent="#accordionExample2">
                                                    <div className="accordion-body">
                                                        <p>
                                                            {getTranslatedText(
                                                                '我们使用过去5年TEF考试真题，重点选择最近6个月考试原题进行训练。学员在下次考试中能遇到80%以上原题，这不是运气，是我们教研实力的体现。',
                                                                'We use past 5 years TEF real questions, focusing on recent 6 months for training. Students encounter 80%+ original questions in next exam - not luck, but our research strength.',
                                                                'Nous utilisons les vraies questions TEF des 5 dernières années, en nous concentrant sur les 6 derniers mois pour l\'entraînement. Les étudiants rencontrent 80%+ de questions originales.',
                                                                '我們使用過去5年TEF考試真題，重點選擇最近6個月考試原題進行訓練。學員在下次考試中能遇到80%以上原題，這不是運氣，是我們教研實力的體現。'
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingseven">
                                                    <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseseven" aria-expanded="false"
                                                            aria-controls="collapseseven">
                                                        {getTranslatedText('课程价格如何，有优惠吗？', 'How about course pricing and discounts?', 'Comment sont les prix des cours et les remises?', '課程價格如何，有優惠嗎？')}
                                                    </button>
                                                </h2>
                                                <div id="collapseseven" className="accordion-collapse collapse"
                                                     aria-labelledby="headingseven" data-bs-parent="#accordionExample2">
                                                    <div className="accordion-body">
                                                        <p>
                                                            {getTranslatedText(
                                                                '我们提供多种优惠：基础班COMBO学员享受1对1课程88加币/课时优惠；5人团购享9.5折；早鸟价锁定开课享9.5折。详情请咨询我们的课程顾问。',
                                                                'Multiple discounts available: Basic COMBO students get 1-on-1 classes at $88 CAD/hour; 5-person group gets 5% off; early bird pricing 5% off. Contact our advisors for details.',
                                                                'Plusieurs remises disponibles: étudiants COMBO de base obtiennent des cours 1-à-1 à 88$ CAD/heure; groupe de 5 personnes obtient 5% de réduction. Contactez nos conseillers.',
                                                                '我們提供多種優惠：基礎班COMBO學員享受1對1課程88加幣/課時優惠；5人團購享9.5折；早鳥價鎖定開課享9.5折。詳情請諮詢我們的課程顧問。'
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingeight">
                                                    <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseeight" aria-expanded="false"
                                                            aria-controls="collapseeight">
                                                        {getTranslatedText('如何开始学习，有试听课吗？', 'How to start learning? Any trial classes?', 'Comment commencer à apprendre? Des cours d\'essai?', '如何開始學習，有試聽課嗎？')}
                                                    </button>
                                                </h2>
                                                <div id="collapseeight" className="accordion-collapse collapse"
                                                     aria-labelledby="headingeight" data-bs-parent="#accordionExample2">
                                                    <div className="accordion-body">
                                                        <p>
                                                            {getTranslatedText(
                                                                '现在咨询即可免费领取考官直播试听课1节！我们会先为您进行法语水平测试，然后制定个性化学习路径，确保学习效果最大化。',
                                                                'Consult now for 1 FREE examiner live trial class! We\'ll first conduct French level test, then create personalized learning path to maximize results.',
                                                                'Consultez maintenant pour 1 cours d\'essai en direct GRATUIT avec examinateur! Nous effectuerons d\'abord un test de niveau français, puis créerons un parcours d\'apprentissage personnalisé.',
                                                                '現在諮詢即可免費領取考官直播試聽課1節！我們會先為您進行法語水平測試，然後制定個性化學習路徑，確保學習效果最大化。'
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item mb-0">
                                                <h2 className="accordion-header" id="headingnine">
                                                    <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapsenine" aria-expanded="false"
                                                            aria-controls="collapsenine">
                                                        {getTranslatedText('学完后真的能移民成功吗？', 'Can I really immigrate successfully after completion?', 'Puis-je vraiment immigrer avec succès après l\'achèvement?', '學完後真的能移民成功嗎？')}
                                                    </button>
                                                </h2>
                                                <div id="collapsenine" className="accordion-collapse collapse"
                                                     aria-labelledby="headingnine" data-bs-parent="#accordionExample2">
                                                    <div className="accordion-body">
                                                        <p>
                                                            {getTranslatedText(
                                                                '我们的学员张同学67天通过CLB5，已成功登陆多伦多。法语移民是当前最稳妥的选择，CLB7+工作经验基本能满足EE要求，我们帮您实现移民梦想。',
                                                                'Our student Zhang passed CLB5 in 67 days and successfully landed in Toronto. French immigration is currently the most stable choice. CLB7 + work experience basically meets EE requirements. We help realize your immigration dream.',
                                                                'Notre étudiant Zhang a réussi CLB5 en 67 jours et a atterri avec succès à Toronto. L\'immigration française est actuellement le choix le plus stable. CLB7 + expérience de travail répond aux exigences EE.',
                                                                '我們的學員張同學67天通過CLB5，已成功登陸多倫多。法語移民是當前最穩妥的選擇，CLB7+工作經驗基本能滿足EE要求，我們幫您實現移民夢想。'
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
                </div>
            </section>
        </>
    );
};

export default FaqArea;