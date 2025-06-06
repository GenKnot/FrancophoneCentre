"use client";

import React from 'react';
import { useHomepageData } from '../hooks/useApiData';

const FCMarquee = () => {
    const { data, loading, error } = useHomepageData();
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;
    
    const marqueeItems = data?.marquee_items || [];

    return (
        <>
            <div className="marquee-section section-padding border-bottom">
                <div className="mycustom-marque style-3">
                    <div className="scrolling-wrap">
                        <div className="comm">
                            {marqueeItems.map((item: any, index: number) => (
                                <div key={index} className="cmn-textslide">
                                    <i className={item.icon || "flaticon-medal"}></i> {item.text || ''}
                                </div>
                            ))}
                        </div>
                        <div className="comm">
                            {marqueeItems.map((item: any, index: number) => (
                                <div key={index} className="cmn-textslide">
                                    <i className={item.icon || "flaticon-medal"}></i> {item.text || ''}
                                </div>
                            ))}
                        </div>
                        <div className="comm">
                            {marqueeItems.map((item: any, index: number) => (
                                <div key={index} className="cmn-textslide">
                                    <i className={item.icon || "flaticon-medal"}></i> {item.text || ''}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FCMarquee;