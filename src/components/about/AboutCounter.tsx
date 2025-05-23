"use client"
import Count from '@/common/Count';
import React from 'react';

const AboutCounter = () => {
    return (
        <>
            <div className="counter-section-23 section-padding pt-0">
                <div className="container custom-container">
                    <div className="counter-wrapper-2 bg-cover"
                         style={{background: `url(/assets/img/counter-bg.jpg)`}}>
                        <div className="counter-items">
                            <div className="icon" style={{color: '#ffffff'}}>
                                <i className="flaticon-success"></i>
                            </div>
                            <div className="content">
                                <h2 style={{color: '#ffffff'}}><span className="odometer" data-count="217"> <Count
                                    number={217} text=''/> </span></h2>
                                <p>在校学员</p>
                            </div>
                        </div>
                        <div className="counter-items">
                            <div className="icon" style={{color: '#ffffff'}}>
                                <i className="flaticon-medal"></i>
                            </div>
                            <div className="content">
                                <h2 style={{color: '#ffffff'}}><span className="odometer" data-count="98"> <Count
                                    number={98} text='%'/> </span></h2>
                                <p>TEF通过率</p>
                            </div>
                        </div>
                        <div className="counter-items">
                            <div className="icon" style={{color: '#ffffff'}}>
                                <i className="flaticon-satisfaction"></i>
                            </div>
                            <div className="content">
                                <h2 style={{color: '#ffffff'}}><span className="odometer" data-count="154"> <Count
                                    number={154} text=''/> </span></h2>
                                <p>成功拿到CLB5</p>
                            </div>
                        </div>
                        <div className="counter-items">
                            <div className="icon" style={{color: '#ffffff'}}>
                                <i className="flaticon-instructor"></i>
                            </div>
                            <div className="content">
                                <h2 style={{color: '#ffffff'}}><span className="odometer" data-count="10"> <Count
                                    number={10} text='位'/> </span></h2>
                                <p>现任+前任考官</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AboutCounter;