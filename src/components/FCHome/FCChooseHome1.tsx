"use client"
import VideoPopup from '@/modals/VideoPopup';
import React, { useState } from 'react';

const FCChooseHome1 = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
       <section className="choose-us-section-3 fix section-padding pt-0">
           <div className="choose-us-wrapper-3">
                <div className="row g-0">
                    <div className="col-xxl-7 col-xl-6 col-lg-6">
                        <div className="video-image wow img-custom-anim-left">
                            <img src="FCImage/Choose-1.png" alt="img" />
                            <a 
                            onClick={() => setIsVideoOpen(true)}
                            style={{ cursor: "pointer" }}
                            className="video-btn ripple video-popup">
                                <i className="fas fa-play"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-6 col-lg-6">
                        <div className="choose-content">
                            <div className="section-title">
                                <h6 className="text-white wow fadeInUp">
                                    为什么选择我们
                                </h6>
                                <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                    别人还在苦背单词时 <br/>
                                    你已经在加拿大了
                                </h2>
                            </div>
                            <p className="mt-3 mt-md-0 text-white wow fadeInUp" data-wow-delay=".5s">
                                不走弯路，不浪费时间。跟着真正的TEF考官学最有用的内容，
                                用最短的时间拿到最高的分数，开启你的加拿大新生活。
                            </p>
                            <div className="row">
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="icon-items">
                                        <div className="icon">
                                            <i className="fas fa-user-tie"></i>
                                        </div>
                                        <h3>考官亲自下场教学</h3>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="icon-items">
                                        <div className="icon">
                                            <i className="fas fa-bullseye"></i>
                                        </div>
                                        <h3>精准命中考试要点</h3>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="icon-items">
                                        <div className="icon">
                                            <i className="fas fa-rocket"></i>
                                        </div>
                                        <h3>移民分数轻松达标</h3>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="icon-items">
                                        <div className="icon">
                                            <i className="fas fa-trophy"></i>
                                        </div>
                                        <h3>成功案例遍布全球</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="circle-shape">
                                <img src="assets/img/feature/circle-shape.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </section>

          {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"_YFzgnuiMlk?si=4V8HUMAeOFMYPrfi"}
      />
      {/* video modal end */}
    </>
  );
};

export default FCChooseHome1;