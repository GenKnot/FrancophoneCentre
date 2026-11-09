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
                                                        {getTranslatedText('零基础需要多久能达到CLB7？', 'How long does it take a beginner to reach CLB 7?', 'Combien de temps faut-il à un débutant pour atteindre le NCLC 7 ?', '零基礎需要多久能達到CLB7？')}
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
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseTwo" aria-expanded="false"
                                                            aria-controls="collapseTwo">
                                                        {getTranslatedText('你们的教学成果数据是怎么来的？', 'Where do your results figures come from?', 'D\'où viennent vos chiffres de résultats ?', '你們的教學成果數據是怎麼來的？')}
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
                                                                '我们的现任考官每周结合监考经验进行教研，每月更新课程内容。确保您学到的永远是最新、最准确的考试重点。',
                                                                'Our current examiners conduct research weekly based on proctoring experience, updating course content monthly, so you always learn the latest, most accurate exam points.',
                                                                'Nos examinateurs actuels mènent des recherches hebdomadaires basées sur l\'expérience de surveillance, mettant à jour le contenu mensuel. Garantit que vous apprenez les points d\'examen les plus récents.',
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
                                <div className="faq-content">
                                    <div className="faq-items">
                                        <div className="accordion" id="accordionExample2">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingfive">
                                                    <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapsefive" aria-expanded="true"
                                                            aria-controls="collapsefive">
                                                        {getTranslatedText('CFEC的考官团队有哪些优势？', 'What are the advantages of CFEC examiner team?', 'Quels sont les avantages de l\'équipe d\'examinateurs CFEC?', 'CFEC的考官團隊有哪些優勢？')}
                                                    </button>
                                                </h2>
                                                <div id="collapsefive" className="accordion-collapse collapse"
                                                     aria-labelledby="headingfive" data-bs-parent="#accordionExample2">
                                                    <div className="accordion-body">
                                                        <p>
                                                            {getTranslatedText(
                                                                '我们拥有6位现任考官+4位前任考官，累计2000小时教研成果。现任考官深知TEF/TCF评分标准，能精准指导避开失分陷阱，掌握得分要点。',
                                                                'We have 6 current + 4 former examiners with 2000+ hours of research. Current examiners know TEF/TCF scoring standards precisely, guiding you to avoid pitfalls and master key points.',
                                                                'Nous avons 6 examinateurs actuels + 4 anciens avec 2000+ heures de recherche. Les examinateurs actuels connaissent précisément les standards de notation TEF/TCF.',
                                                                '我們擁有6位現任考官+4位前任考官，累計2000小時教研成果。現任考官深知TEF/TCF評分標準，能精準指導避開失分陷阱，掌握得分要點。'
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
                                                        {getTranslatedText('什么是精选题库训练？', 'What is curated question-bank practice?', 'Qu\'est-ce que l\'entraînement sur banque de questions sélectionnées ?', '什麼是精選題庫訓練？')}
                                                    </button>
                                                </h2>
                                                <div id="collapsesix" className="accordion-collapse collapse"
                                                     aria-labelledby="headingsix"
                                                     data-bs-parent="#accordionExample2">
                                                    <div className="accordion-body">
                                                        <p>
                                                            {getTranslatedText(
                                                                '围绕重点题型集中训练，结合解析与错题复盘，提高备考针对性。题库根据公开信息与合法取得的备考资料整理，并由现任考官结合评分标准讲解。',
                                                                'Focused practice on key question types, with explanations and review of mistakes to make your preparation more targeted. The question bank is built from public information and lawfully obtained preparation materials, and current examiners explain it against the scoring criteria.',
                                                                'Un entraînement ciblé sur les types de questions clés, avec explications et analyse des erreurs. La banque de questions est constituée à partir d\'informations publiques et de ressources de préparation obtenues légalement, commentées par des examinateurs en exercice.',
                                                                '圍繞重點題型集中訓練，結合解析與錯題複盤，提高備考針對性。題庫根據公開資訊與合法取得的備考資料整理，並由現任考官結合評分標準講解。'
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