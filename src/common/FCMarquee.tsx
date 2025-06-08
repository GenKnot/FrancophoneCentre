"use client";
<<<<<<< Updated upstream

import React from 'react';
import { useHomepageData } from '../hooks/useApiData';

const FCMarquee = () => {
    const { data, loading, error } = useHomepageData();
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;
    
    const marqueeItems = data?.marquee_items || [];
=======
import React from 'react';
import { useHomepageData } from '@/hooks/useApiData';
import { useLanguage } from '@/contexts/LanguageContext';

const FCMarquee = () => {
    const { data, loading } = useHomepageData();
    const { t } = useLanguage();

    if (loading) {
        return (
            <div className="marquee-section section-padding border-bottom">
                <div className="mycustom-marque style-3">
                    <div className="container">
                        <div className="text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">{t('common.loading', 'Loading...')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const marqueeItems = data?.marquee_items || [];
    
    // Default fallback items if no API data
    const defaultItems = [
        { id: 1, text: '快速移民加拿大', icon: 'flaticon-medal', is_active: true, order: 1 },
        { id: 2, text: '98%超高通过率', icon: 'flaticon-certificate', is_active: true, order: 2 },
        { id: 3, text: '法语教育首选', icon: 'flaticon-instructor', is_active: true, order: 3 }
    ];

    // Use API data if available, otherwise use default
    const itemsToShow = marqueeItems.length > 0 
        ? marqueeItems.filter((item: any) => item.is_active).sort((a: any, b: any) => a.order - b.order)
        : defaultItems;

    // Ensure we have at least 3 items by repeating if necessary
    const repeatedItems = itemsToShow.length > 0 ? itemsToShow : defaultItems;
    const itemsForDisplay = [...repeatedItems, ...repeatedItems, ...repeatedItems]; // Triple to ensure smooth scrolling
>>>>>>> Stashed changes

    return (
        <>
            <div className="marquee-section section-padding border-bottom">
                <div className="mycustom-marque style-3">
                    <div className="scrolling-wrap">
                        <div className="comm">
<<<<<<< Updated upstream
                            {marqueeItems.map((item: any, index: number) => (
                                <div key={index} className="cmn-textslide">
                                    <i className={item.icon || "flaticon-medal"}></i> {item.text || ''}
=======
                            {itemsForDisplay.map((item: any, index: number) => (
                                <div key={`${item.id}-${index}`} className="cmn-textslide">
                                    <i className={item.icon || 'flaticon-medal'}></i> {item.text}
>>>>>>> Stashed changes
                                </div>
                            ))}
                        </div>
                        <div className="comm">
<<<<<<< Updated upstream
                            {marqueeItems.map((item: any, index: number) => (
                                <div key={index} className="cmn-textslide">
                                    <i className={item.icon || "flaticon-medal"}></i> {item.text || ''}
=======
                            {itemsForDisplay.map((item: any, index: number) => (
                                <div key={`${item.id}-${index}-2`} className="cmn-textslide">
                                    <i className={item.icon || 'flaticon-medal'}></i> {item.text}
>>>>>>> Stashed changes
                                </div>
                            ))}
                        </div>
                        <div className="comm">
<<<<<<< Updated upstream
                            {marqueeItems.map((item: any, index: number) => (
                                <div key={index} className="cmn-textslide">
                                    <i className={item.icon || "flaticon-medal"}></i> {item.text || ''}
=======
                            {itemsForDisplay.map((item: any, index: number) => (
                                <div key={`${item.id}-${index}-3`} className="cmn-textslide">
                                    <i className={item.icon || 'flaticon-medal'}></i> {item.text}
>>>>>>> Stashed changes
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