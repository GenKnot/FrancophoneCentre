"use client"
import Link from 'next/link';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const NewsArea = () => {
    const { currentLanguage } = useLanguage();

    const getTranslatedText = (zhText: string, enText: string, frText: string = enText, zhHantText: string = zhText) => {
        switch (currentLanguage) {
            case 'zh-hans':
                return zhText;
            case 'zh-hant':
                return zhHantText;
            case 'fr':
                return frText;
            case 'en':
            default:
                return enText;
        }
    };

    return (
        <>
            <section className="blog-wrapper news-wrapper section-padding pt-0">
                <div className="container">
                    <div className="news-area">
                        <div className="row">
                            <div className="col-12 col-lg-8">
                                <div className="blog-posts">
                                    <div className="single-blog-post">
                                        <div className="post-featured-thumb bg-cover"
                                             style={{background: `url(/FCImage/News-1.png)`}}>

                                        </div>
                                        <div className="post-content">
                                            <div className="post-meta">
                                                <span><i className="fal fa-comments"></i>{getTranslatedText('10 评论', '10 Comments', '10 Commentaires', '10 評論')}</span>
                                                <span><i className="fal fa-calendar-alt"></i>{getTranslatedText('2025年5月15日', 'May 15, 2025', '15 mai 2025', '2025年5月15日')}</span>
                                            </div>
                                            <h2 className="title-anim">
                                                <Link href="/news-details">
                                                    {getTranslatedText(
                                                        '2025年法语EE最新捞取分数415分！比英语EE低100多分的移民机会',
                                                        '2025 French EE Latest Draw: 415 Points! 100+ Points Lower Than English EE',
                                                        'EE français 2025: 415 points! 100+ points de moins que l\'EE anglais',
                                                        '2025年法語EE最新撈取分數415分！比英語EE低100多分的移民機會'
                                                    )}
                                                </Link>
                                            </h2>
                                            <p>
                                                {getTranslatedText(
                                                    '加拿大政府大力推进法语移民，2025年法语移民目标提升至8.5%，法语Express Entry平均捞取分数仅415分，远低于英语EE的520+分。只要CLB7法语+一年工作经验就基本达标，比英语EE的雅思8777+名校硕博要求简单得多。QFEC现任TEF考官直授，98%通过率助您快速移民加拿大。',
                                                    'Canada promotes French immigration with 2025 target of 8.5%. French EE averages 415 points, much lower than English EE\'s 520+. Just CLB7 French + 1 year work experience qualifies. QFEC current TEF examiners teach directly with 98% pass rate.',
                                                    'Le Canada promeut l\'immigration française avec un objectif de 8,5% en 2025. EE français moyenne 415 points, bien inférieur aux 520+ de l\'EE anglais. Juste CLB7 français + 1 an d\'expérience suffit. QFEC examinateurs TEF actuels enseignent directement.',
                                                    '加拿大政府大力推進法語移民，2025年法語移民目標提升至8.5%，法語Express Entry平均撈取分數僅415分，遠低於英語EE的520+分。只要CLB7法語+一年工作經驗就基本達標，比英語EE的雅思8777+名校碩博要求簡單得多。QFEC現任TEF考官直授，98%通過率助您快速移民加拿大。'
                                                )}
                                            </p>
                                            <Link href="/news-details" className="theme-btn mt-4 line-height">
                                                {getTranslatedText('了解详情', 'Learn More', 'En savoir plus', '了解詳情')}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="single-blog-post">
                                        <div className="post-featured-thumb bg-cover"
                                             style={{background: `url(/FCImage/News-2.png)`}}>

                                        </div>
                                        <div className="post-content">
                                            <div className="post-meta">
                                                <span><i className="fal fa-comments"></i>{getTranslatedText('10 评论', '10 Comments', '10 Commentaires', '10 評論')}</span>
                                                <span><i className="fal fa-calendar-alt"></i>{getTranslatedText('2025年5月10日', 'May 10, 2025', '10 mai 2025', '2025年5月10日')}</span>
                                            </div>
                                            <h2 className="title-anim">
                                                <Link href="/news-details">
                                                    {getTranslatedText(
                                                        '从零基础到成功移民：67天通过CLB5的学员奇迹分享',
                                                        'From Zero to Success: Student Achieves CLB5 in 67 Days',
                                                        'De zéro au succès: étudiant atteint CLB5 en 67 jours',
                                                        '從零基礎到成功移民：67天通過CLB5的學員奇蹟分享'
                                                    )}
                                                </Link>
                                            </h2>
                                            <p>
                                                {getTranslatedText(
                                                    'QFEC学员张同学仅用67天从零基础达到CLB5水平，成功通过法语EE获得移民邀请，现已登陆多伦多开始新生活。"考官直授真的太棒了，每道题都能遇到原题，不是运气，是实力！"现任考官+100%原题训练，让您的法语学习之路事半功倍。',
                                                    'QFEC student Zhang achieved CLB5 in just 67 days from zero, successfully got French EE invitation and now lives in Toronto. "Direct examiner teaching is amazing, every question was familiar!" Current examiners + 100% original questions make learning efficient.',
                                                    'L\'étudiant QFEC Zhang a atteint CLB5 en 67 jours depuis zéro, a obtenu une invitation EE français et vit maintenant à Toronto. "L\'enseignement direct des examinateurs est incroyable!" Examinateurs actuels + 100% questions originales.',
                                                    'QFEC學員張同學僅用67天從零基礎達到CLB5水平，成功通過法語EE獲得移民邀請，現已登陸多倫多開始新生活。"考官直授真的太棒了，每道題都能遇到原題，不是運氣，是實力！"現任考官+100%原題訓練，讓您的法語學習之路事半功倍。'
                                                )}
                                            </p>
                                            <Link href="/news-details" className="theme-btn mt-4 line-height">
                                                {getTranslatedText('阅读全文', 'Read More', 'Lire plus', '閱讀全文')}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="single-blog-post quote-post format-quote">
                                        <div className="post-content text-white bg-cover">
                                            <div className="quote-content">
                                                <div className="icon">
                                                    <i className="fas fa-quote-left"></i>
                                                </div>
                                                <div className="quote-text">
                                                    <h2 className="title-anim">{getTranslatedText('梦想与现实之间，只差一个正确的选择', 'Between dreams and reality, only one right choice away', 'Entre rêves et réalité, il ne manque qu\'un bon choix', '夢想與現實之間，只差一個正確的選擇')}</h2>
                                                    <div className="post-meta">
                                                        <span><i className="fal fa-calendar-alt"></i>{getTranslatedText('2025年5月8日', 'May 8, 2025', '8 mai 2025', '2025年5月8日')}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="page-nav-wrap pt-5">
                                    <ul>
                                        <li><a className="page-numbers" href="#">1</a></li>
                                        <li><a className="page-numbers" href="#">2</a></li>
                                        <li><a className="page-numbers" href="#">3</a></li>
                                        <li><a className="page-numbers" href="#">4</a></li>
                                        <li><a className="page-numbers" href="#"><i className="far fa-arrow-right"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="main-sidebar sticky-style">

                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>{getTranslatedText('最新资讯', 'Latest News', 'Dernières Nouvelles', '最新資訊')}</h3>
                                        </div>
                                        <div className="popular-posts">
                                            <div className="single-post-item">
                                                <div className="thumb bg-cover"
                                                     style={{background: `url(/FCImage/News-2.png)`}}></div>
                                                <div className="post-content">
                                                    <h5><Link href="/news-details">
                                                        {getTranslatedText('法语EE最新捞取分数创历史新低', 'French EE Draw Scores Hit Historic Low', 'Scores EE français atteignent un minimum historique', '法語EE最新撈取分數創歷史新低')}</Link></h5>
                                                    <div className="post-date">
                                                        <i className="far fa-calendar-alt"></i>{getTranslatedText('2025年5月15日', 'May 15, 2025', '15 mai 2025', '2025年5月15日')}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-post-item">
                                                <div className="thumb bg-cover"
                                                     style={{background: `url(/FCImage/News-2.png)`}}></div>
                                                <div className="post-content">
                                                    <h5><Link href="/news-details">{getTranslatedText('QFEC学员67天通过CLB5成功案例', 'QFEC Student Passes CLB5 in 67 Days', 'Étudiant QFEC réussit CLB5 en 67 jours', 'QFEC學員67天通過CLB5成功案例')}</Link>
                                                    </h5>
                                                    <div className="post-date">
                                                        <i className="far fa-calendar-alt"></i>{getTranslatedText('2025年5月10日', 'May 10, 2025', '10 mai 2025', '2025年5月10日')}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-post-item">
                                                <div className="thumb bg-cover"
                                                     style={{background: `url(/FCImage/News-2.png)`}}></div>
                                                <div className="post-content">
                                                    <h5><Link href="/news-details">{getTranslatedText('魁北克10项政府补助详解', 'Quebec 10 Government Subsidies Explained', '10 subventions gouvernementales du Québec expliquées', '魁北克10項政府補助詳解')}</Link></h5>
                                                    <div className="post-date">
                                                        <i className="far fa-calendar-alt"></i>{getTranslatedText('2025年5月5日', 'May 5, 2025', '5 mai 2025', '2025年5月5日')}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>{getTranslatedText('热门分类', 'Popular Categories', 'Catégories populaires', '熱門分類')}</h3>
                                        </div>
                                        <div className="widget_categories">
                                            <ul>
                                                <li><Link href="/news">{getTranslatedText('移民政策', 'Immigration Policy', 'Politique d\'immigration', '移民政策')} <span>23</span></Link></li>
                                                <li><Link href="/news">{getTranslatedText('法语学习', 'French Learning', 'Apprentissage français', '法語學習')} <span>18</span></Link></li>
                                                <li><Link href="/news">{getTranslatedText('成功案例', 'Success Stories', 'Histoires de succès', '成功案例')} <span>15</span></Link></li>
                                                <li><Link href="/news">{getTranslatedText('生活指南', 'Life Guide', 'Guide de vie', '生活指南')} <span>12</span></Link></li>
                                                <li><Link href="/news">{getTranslatedText('考试资讯', 'Exam News', 'Nouvelles d\'examen', '考試資訊')} <span>9</span></Link></li>
                                                <li><Link href="/news">{getTranslatedText('教学动态', 'Teaching Updates', 'Mises à jour pédagogiques', '教學動態')} <span>6</span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>{getTranslatedText('关注我们', 'Follow Us', 'Suivez-nous', '關注我們')}</h3>
                                        </div>
                                        <div className="social-link">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="#"><i className="fab fa-youtube"></i></a>
                                        </div>
                                    </div>
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>{getTranslatedText('热门标签', 'Popular Tags', 'Tags populaires', '熱門標籤')}</h3>
                                        </div>
                                        <div className="tagcloud">
                                            <Link href="/news">{getTranslatedText('法语移民', 'French Immigration', 'Immigration française', '法語移民')}</Link>
                                            <Link href="/news-details">{getTranslatedText('TEF考试', 'TEF Exam', 'Examen TEF', 'TEF考試')}</Link>
                                            <Link href="/news-details">{getTranslatedText('CLB7', 'CLB7', 'CLB7', 'CLB7')}</Link>
                                            <Link href="/news-details">{getTranslatedText('魁北克', 'Quebec', 'Québec', '魁北克')}</Link>
                                            <Link href="/news-details">{getTranslatedText('考官直授', 'Direct Examiner Teaching', 'Enseignement direct des examinateurs', '考官直授')}</Link>
                                            <Link href="/news-details">{getTranslatedText('98%通过率', '98% Pass Rate', '98% de réussite', '98%通過率')}</Link>
                                        </div>
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

export default NewsArea;