import React from 'react';

const ContactArea = () => {
    return (
        <>
            <section className="contact-section section-padding pt-0 fix">
                <div className="container">
                    <div className="section-title text-center">
                        <h6 className="wow fadeInUp">联系我们</h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            需要更多信息？
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="contact-box-items">
                                <div className="icon">
                                    <i className="flaticon-map"></i>
                                </div>
                                <h5>
                                    蒙特利尔校区
                                </h5>
                                <div className="image">
                                    <img src="assets/img/small-line.png" alt="img"/>
                                </div>
                                <h4>
                                    1440 Saint-Catherine St W Unit 500
                                </h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="contact-box-items">
                                <div className="icon">
                                    <i className="flaticon-send-data"></i>
                                </div>
                                <h5>
                                    联系邮箱
                                </h5>
                                <div className="image">
                                    <img src="assets/img/small-line.png" alt="img"/>
                                </div>
                                <h4>
                                    <a href="mailto:info@gfec.ca">info@gfec.ca</a> <br/>
                                </h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="contact-box-items">
                                <div className="icon">
                                    <img src="assets/img/call.png" alt="img"/>
                                </div>
                                <h5>
                                    圣让校区
                                </h5>
                                <div className="image">
                                    <img src="assets/img/small-line.png" alt="img"/>
                                </div>
                                <h4>
                                    141 Bd Saint-Luc, <br/>
                                    Saint-Jean-sur-Richelieu
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactArea;