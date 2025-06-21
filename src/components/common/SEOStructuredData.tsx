"use client";

import { useLanguage } from '@/contexts/LanguageContext';

const SEOStructuredData = () => {
    const { currentLanguage } = useLanguage();

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": currentLanguage === 'zh' ? "加拿大魁北克法语教育中心" : "Quebec Francophone Education Centre",
        "alternateName": ["QFEC", "Quebec French Education Centre"],
        "url": "https://www.qfec.ca",
        "logo": "https://www.qfec.ca/Logo Black Long.png",
        "image": "https://www.qfec.ca/Logo Black Long.png",
        "description": currentLanguage === 'zh' 
            ? "专业法语教育机构，现任TEF考官直授，98%通过率，助您快速移民加拿大" 
            : "Professional French education institution with current TEF examiners, 98% pass rate, helping you immigrate to Canada quickly",
        "address": [
            {
                "@type": "PostalAddress",
                "streetAddress": "1440 Saint-Catherine St W Unit 501",
                "addressLocality": "Montreal",
                "addressRegion": "QC",
                "postalCode": "H3G 1R8",
                "addressCountry": "CA"
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "Room 201, 141 Bd Saint-Luc",
                "addressLocality": "Saint-Jean-sur-Richelieu",
                "addressRegion": "QC",
                "postalCode": "J2W 2G7",
                "addressCountry": "CA"
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "266 Notre-Dame St W Level 5",
                "addressLocality": "Montreal",
                "addressRegion": "QC",
                "postalCode": "H2Y 1T6",
                "addressCountry": "CA"
            }
        ],
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "info@qfec.ca",
                "availableLanguage": ["zh", "en", "fr"]
            },
            {
                "@type": "ContactPoint",
                "email": "apply@qfec.ca",
                "contactType": "admissions"
            }
        ],
        "sameAs": [
            "https://www.tef-test.ca"
        ],
        "foundingDate": "1991",
        "foundingLocation": "Montreal, Quebec, Canada",
        "legalName": "Quebec Francophone Education Centre",
        "slogan": currentLanguage === 'zh' 
            ? "现任TEF考官直授，98%通过率，快速移民加拿大" 
            : "Taught by current TEF examiners, 98% pass rate, fast immigration to Canada",
        "brand": "QFEC",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": currentLanguage === 'zh' ? "法语课程目录" : "French Course Catalog",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Course",
                        "name": currentLanguage === 'zh' ? "TEF考试培训" : "TEF Exam Preparation",
                        "description": currentLanguage === 'zh' 
                            ? "现任TEF考官直授，100%原题训练，98%通过率" 
                            : "Taught by current TEF examiners, 100% original questions, 98% pass rate",
                        "provider": {
                            "@type": "Organization",
                            "name": "QFEC"
                        }
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Course",
                        "name": currentLanguage === 'zh' ? "TCF考试培训" : "TCF Exam Preparation",
                        "description": currentLanguage === 'zh' 
                            ? "专业TCF考试培训，助您快速达到移民要求" 
                            : "Professional TCF exam training to help you quickly meet immigration requirements"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Course",
                        "name": currentLanguage === 'zh' ? "法语移民课程" : "French Immigration Course",
                        "description": currentLanguage === 'zh' 
                            ? "6个月达CLB7，法语EE快速移民通道" 
                            : "Achieve CLB7 in 6 months, French Express Entry fast track"
                    }
                }
            ]
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "500",
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": [
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "张同学"
                },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "reviewBody": currentLanguage === 'zh' 
                    ? "从零基础到CLB7只用了6个月！考官直授太棒了，遇到的都是原题，现在已经成功移民到多伦多！" 
                    : "From zero to CLB7 in just 6 months! Direct teaching from examiners is amazing, I encountered original questions, and now I've successfully immigrated to Toronto!"
            },
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "李女士"
                },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "reviewBody": currentLanguage === 'zh' 
                    ? "法语EE只要415分，比英语EE容易太多！感谢QFEC，4个月就拿到CLB5，成功收到邀请。" 
                    : "French EE only requires 415 points, much easier than English EE! Thanks to QFEC, I got CLB5 in 4 months and successfully received an invitation."
            }
        ]
    };

    const localBusinessSchema = [
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "QFEC Montreal Downtown Campus",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "1440 Saint-Catherine St W Unit 501",
                "addressLocality": "Montreal",
                "addressRegion": "Quebec",
                "postalCode": "H3G 1R8",
                "addressCountry": "CA"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 45.5017,
                "longitude": -73.5673
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "email": "info@qfec.ca",
            "url": "https://www.qfec.ca"
        },
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "QFEC South Shore Campus",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Room 201, 141 Bd Saint-Luc",
                "addressLocality": "Saint-Jean-sur-Richelieu",
                "addressRegion": "Quebec",
                "postalCode": "J2W 2G7",
                "addressCountry": "CA"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "email": "info@qfec.ca",
            "url": "https://www.qfec.ca"
        },
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "QFEC Old Port Campus",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "266 Notre-Dame St W Level 5",
                "addressLocality": "Montreal",
                "addressRegion": "Quebec",
                "postalCode": "H2Y 1T6",
                "addressCountry": "CA"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "email": "info@qfec.ca",
            "url": "https://www.qfec.ca"
        }
    ];

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": currentLanguage === 'zh' ? "QFEC 魁北克法语教育中心" : "QFEC Quebec Francophone Education Centre",
        "url": "https://www.qfec.ca",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.qfec.ca/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        },
        "sameAs": [
            "https://www.tef-test.ca"
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": currentLanguage === 'zh' ? "首页" : "Home",
                "item": "https://www.qfec.ca"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": currentLanguage === 'zh' ? "法语课程" : "French Courses",
                "item": "https://www.qfec.ca/courses"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "TEF",
                "item": "https://www.qfec.ca/courses/tef"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema)
                }}
            />
            {localBusinessSchema.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema)
                    }}
                />
            ))}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema)
                }}
            />
        </>
    );
};

export default SEOStructuredData; 