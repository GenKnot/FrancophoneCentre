import Link from 'next/link';
import React from 'react';

const FCTeamHome = ({style_2} : any) => {
    return (
        <>
            <section className={`team-section-5 fix section-padding ${style_2 ? "section-bg" : ""}`}>
                <div className="container">
                    <div className="section-title text-center">
                        <h6 className="wow fadeInUp" style={{color: '#AD0119'}}>
                            我们的老师
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            现任考官 + 前任考官联合授课
                        </h2>
                        <p className="wow fadeInUp" data-wow-delay=".5s">
                            6位现任TEF考官 + 4位前任考官，2000小时教研成果精华
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="team-card-items">
                                <div className="thumb">
                                    <img src="FCImage/teacher-1.png" alt="img" />
                                </div>
                                <div className="content">
                                    <h4>考官 AYMÉRIC</h4>
                                    <p>现任TEF考官 - 法国</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="team-card-items">
                                <div className="thumb">
                                    <img src="FCImage/teacher-1.png" alt="img" />
                                </div>
                                <div className="content">
                                    <h4>考官 ÉLOANNE</h4>
                                    <p>现任TEF/TCF考官 - 加拿大</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="team-card-items">
                                <div className="thumb">
                                    <img src="FCImage/teacher-1.png" alt="img" />
                                </div>
                                <div className="content">
                                    <h4>考官 JORICK</h4>
                                    <p>现任TEF/TCF考官 - 加拿大</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                            <div className="team-card-items">
                                <div className="thumb">
                                    <img src="FCImage/teacher-1.png" alt="img" />
                                </div>
                                <div className="content">
                                    <h4>前任考官 Selene LI</h4>
                                    <p>DALF C2持有者 - 中国</p>
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