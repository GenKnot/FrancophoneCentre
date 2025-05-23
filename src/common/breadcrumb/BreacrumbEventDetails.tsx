import Link from 'next/link';
import React from 'react';

const BreacrumbEventDetails = () => {
    return (
        <>
            <section className="breadcrumb-wrapper style-2 style-event pt-5">
                <div className="shape-1">
                    <img src="assets/img/breadcrumb/shape-1.png" alt="img"/>
                </div>
                <div className="shape-2">
                    <img src="assets/img/breadcrumb/shape-2.png" alt="img"/>
                </div>
                <div className="dot-shape">
                    <img src="assets/img/breadcrumb/dot-shape.png" alt="img"/>
                </div>
                <div className="vector-shape">
                    <img src="assets/img/breadcrumb/Vector.png" alt="img"/>
                </div>
                <div className="container">
                    <div className="page-heading">
                        <ul className="breadcrumb-items">
                            <li><Link href="/">主页</Link></li>
                            <li><Link href="/event">活动</Link></li>
                            <li className="style-2">活动详情</li>
                        </ul>
                        <div className="breadcrumb-content">
                            <h1>早鸟优惠 - 3月31日开课基础班 <br/>9.5折限时特惠</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BreacrumbEventDetails;