import React from 'react';

const FaqArea = () => {
    return (
        <>
            <section className="gallery-section section-padding pt-0 fix">
                <div className="faq-wrapper style-5">
                    <div className="container">
                        <div className="section-title text-center">
                            <h6>常见问题</h6>
                            <h2>
                                解答疑虑，让学习安心
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
                                                        零基础真的能6个月达到CLB7吗？
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse show"
                                                     aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>
                                                            完全可以！我们的平均数据显示：0基础学员平均275天达到CLB7，最快的学员仅用167天。
                                                            关键在于现任考官直授+100%原题训练，让您学到的就是考试要考的。
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
                                                        98%通过率是真实数据吗？
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse"
                                                     aria-labelledby="headingTwo"
                                                     data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>
                                                            这是我们2024年6月-12月的真实统计：217名0基础学员中，154人成功通过CLB5考试，
                                                            通过率远超行业平均55%水平。原因很简单：考官知道怎么考，自然知道怎么教。
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
                                                        法语移民真的比英语简单吗？
                                                    </button>
                                                </h2>
                                                <div id="collapsethree" className="accordion-collapse collapse"
                                                     aria-labelledby="headingthree" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>
                                                            数据说话：2025年法语EE平均捞取分数415分，英语EE需要520+分。
                                                            只要CLB7法语+一年工作经验就基本达标，比英语EE的雅思8777+名校硕博要求简单得多。
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
                                                        课程内容会定期更新吗？
                                                    </button>
                                                </h2>
                                                <div id="collapsefour" className="accordion-collapse collapse"
                                                     aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>
                                                            我们的现任考官每周结合监考经验进行教研，每月更新课程内容。
                                                            确保您学到的永远是最新、最准确的考试重点，这就是98%通过率的秘密。
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
                                                        QFEC的考官团队有哪些优势？
                                                    </button>
                                                </h2>
                                                <div id="collapsefive" className="accordion-collapse collapse"
                                                     aria-labelledby="headingfive" data-bs-parent="#accordionExample2">
                                                    <div className="accordion-body">
                                                        <p>
                                                            我们拥有6位现任考官+4位前任考官，累计2000小时教研成果。
                                                            现任考官深知TEF评分标准，能精准指导避开失分陷阱，掌握得分要点。
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
                                                        什么是100%原题训练？
                                                    </button>
                                                </h2>
                                                <div id="collapsesix" className="accordion-collapse collapse"
                                                     aria-labelledby="headingsix"
                                                     data-bs-parent="#accordionExample2">
                                                    <div className="accordion-body">
                                                        <p>
                                                            我们使用过去5年TEF考试真题，重点选择最近6个月考试原题进行训练。
                                                            学员在下次考试中能遇到80%以上原题，这不是运气，是我们教研实力的体现。
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
                                                        课程价格如何，有优惠吗？
                                                    </button>
                                                </h2>
                                                <div id="collapseseven" className="accordion-collapse collapse"
                                                     aria-labelledby="headingseven" data-bs-parent="#accordionExample2">
                                                    <div className="accordion-body">
                                                        <p>
                                                            我们提供多种优惠：基础班COMBO学员享受1对1课程88加币/课时优惠；
                                                            5人团购享9.5折；早鸟价锁定开课享9.5折。详情请咨询我们的课程顾问。
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
                                                        如何开始学习，有试听课吗？
                                                    </button>
                                                </h2>
                                                <div id="collapseeight" className="accordion-collapse collapse"
                                                     aria-labelledby="headingeight" data-bs-parent="#accordionExample2">
                                                    <div className="accordion-body">
                                                        <p>
                                                            现在咨询即可免费领取考官直播试听课1节！
                                                            我们会先为您进行法语水平测试，然后制定个性化学习路径，确保学习效果最大化。
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
                                                        学完后真的能移民成功吗？
                                                    </button>
                                                </h2>
                                                <div id="collapsenine" className="accordion-collapse collapse"
                                                     aria-labelledby="headingnine" data-bs-parent="#accordionExample2">
                                                    <div className="accordion-body">
                                                        <p>
                                                            我们的学员张同学67天通过CLB5，已成功登陆多伦多。
                                                            法语移民是当前最稳妥的选择，CLB7+工作经验基本能满足EE要求，我们帮您实现移民梦想。
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