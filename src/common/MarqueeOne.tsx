import React from 'react';

const MarqueeOne = ({style_2}: any) => {
    return (
        <>
            <div className="marquee-section style-header">
                <div className={`mycustom-marque  ${style_2 ? "theme-red-bg-2" : "header-marque theme-blue-bg"}`}>
                    <div className="scrolling-wrap">
                        <div className="comm">
                            <div className="cmn-textslide"><i className="flaticon-medal"></i> 快速移民加拿大</div>
                            <div className="cmn-textslide"><i className="flaticon-certificate"></i> 98%超高通过率</div>
                            <div className="cmn-textslide"><i className="flaticon-instructor"></i> 法语教育首选</div>
                            <div className="cmn-textslide"><i className="flaticon-medal"></i> 快速移民加拿大</div>
                            <div className="cmn-textslide"><i className="flaticon-certificate"></i> 98%超高通过率</div>
                            <div className="cmn-textslide"><i className="flaticon-instructor"></i> 法语教育首选</div>
                        </div>
                        <div className="comm">
                            <div className="cmn-textslide"><i className="flaticon-medal"></i> 快速移民加拿大</div>
                            <div className="cmn-textslide"><i className="flaticon-certificate"></i> 98%超高通过率</div>
                            <div className="cmn-textslide"><i className="flaticon-instructor"></i> 法语教育首选</div>
                            <div className="cmn-textslide"><i className="flaticon-medal"></i> 快速移民加拿大</div>
                            <div className="cmn-textslide"><i className="flaticon-certificate"></i> 98%超高通过率</div>
                            <div className="cmn-textslide"><i className="flaticon-instructor"></i> 法语教育首选</div>
                        </div>
                        <div className="comm">
                            <div className="cmn-textslide"><i className="flaticon-medal"></i> 快速移民加拿大</div>
                            <div className="cmn-textslide"><i className="flaticon-certificate"></i> 98%超高通过率</div>
                            <div className="cmn-textslide"><i className="flaticon-instructor"></i> 法语教育首选</div>
                            <div className="cmn-textslide"><i className="flaticon-medal"></i> 快速移民加拿大</div>
                            <div className="cmn-textslide"><i className="flaticon-certificate"></i> 98%超高通过率</div>
                            <div className="cmn-textslide"><i className="flaticon-instructor"></i> 法语教育首选</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MarqueeOne;