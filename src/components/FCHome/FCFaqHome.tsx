import React from 'react';

const FCFaqHome = () => {
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
                                            常见问题
                                        </h6>
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                            解答疑虑
                                            让学习安心
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
                                            <div className="accordion-item wow fadeInUp" data-wow-delay=".4s">
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
                                            <div className="accordion-item wow fadeInUp" data-wow-delay=".6s">
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
                                            <div className="accordion-item mb-0 wow fadeInUp" data-wow-delay="1s">
                                                <h2 className="accordion-header" id="headingfive">
                                                    <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapsefive" aria-expanded="false"
                                                            aria-controls="collapsefive">
                                                        课程内容会定期更新吗？
                                                    </button>
                                                </h2>
                                                <div id="collapsefive" className="accordion-collapse collapse"
                                                     aria-labelledby="headingfive" data-bs-parent="#accordionExample">
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