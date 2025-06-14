"use client";
import Link from 'next/link';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const FCBlogHome = () => {
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
            <section className="news-section fix section-padding pt-0">
                <div className="container">
                    <div className="section-title color-red text-center">
                        <h6 className="wow fadeInUp">
                            {getTranslatedText('最新资讯', 'Latest News', 'Dernières Nouvelles', '最新資訊')}
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            {getTranslatedText('法语移民 · 生活指南 · 政策解读', 'French Immigration · Life Guide · Policy Analysis', 'Immigration Française · Guide de Vie · Analyse des Politiques', '法語移民 · 生活指南 · 政策解讀')}
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="news-left-items">
                                <div className="news-thumb">
                                    <img src="FCImage/Blog-1.png" alt="img"/>
                                    <Link href="/news-details" className="post-box">
                                        {getTranslatedText('移民政策', 'Immigration Policy', 'Politique d\'Immigration', '移民政策')}
                                    </Link>
                                </div>
                                <div className="news-content">
                                    <ul className="post-cat">
                                        <li>
                                            <i className="fal fa-user"></i>
                                            {getTranslatedText('QFEC移民顾问', 'QFEC Immigration Consultant', 'Consultant en Immigration QFEC', 'QFEC移民顧問')}
                                        </li>
                                        <li>
                                            <i className="fal fa-calendar-alt"></i>
                                            {getTranslatedText('2025年5月', 'May 2025', 'Mai 2025', '2025年5月')}
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/news-details">
                                            {getTranslatedText(
                                                '2025年法语EE最新捞取分数415分！比英语EE低100多分的移民机会',
                                                '2025 French EE Latest Draw Score 415! Immigration Opportunity 100+ Points Lower Than English EE',
                                                'Score de Tirage EE Français 2025 : 415 ! Opportunité d\'Immigration 100+ Points Plus Bas que l\'EE Anglais',
                                                '2025年法語EE最新撈取分數415分！比英語EE低100多分的移民機會'
                                            )}
                                        </Link>
                                    </h3>
                                    <p>
                                        {getTranslatedText(
                                            '加拿大政府大力推进法语移民，2025年法语移民目标提升至8.5%，法语Express Entry平均捞取分数仅415分，远低于英语EE的520+分...',
                                            'The Canadian government is vigorously promoting French immigration. The 2025 French immigration target has been raised to 8.5%. French Express Entry average draw score is only 415 points, much lower than English EE\'s 520+ points...',
                                            'Le gouvernement canadien promeut vigoureusement l\'immigration française. L\'objectif d\'immigration française 2025 a été porté à 8,5%. Le score moyen de tirage Express Entry français n\'est que de 415 points, bien inférieur aux 520+ points de l\'EE anglais...',
                                            '加拿大政府大力推進法語移民，2025年法語移民目標提升至8.5%，法語Express Entry平均撈取分數僅415分，遠低於英語EE的520+分...'
                                        )}
                                    </p>
                                    <Link href="/news-details" className="link-btn">{getTranslatedText('阅读全文', 'Read More', 'Lire Plus', '閱讀全文')} <i
                                        className="far fa-chevron-double-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="news-right-items">
                                <div className="news-right-box wow fadeInUp" data-wow-delay=".3s">
                                    <div className="thumb">
                                        <img src="FCImage/Blog-2.png" alt="img"/>
                                        <Link href="/news-details" className="post-box">
                                            {getTranslatedText('生活补助', 'Living Allowance', 'Allocation de Vie', '生活補助')}
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <ul className="post-cat">
                                            <li>
                                                <i className="fal fa-user"></i>
                                                {getTranslatedText('生活顾问', 'Life Consultant', 'Consultant de Vie', '生活顧問')}
                                            </li>
                                            <li>
                                                <i className="fal fa-calendar-alt"></i>
                                                {getTranslatedText('2025年1月', 'January 2025', 'Janvier 2025', '2025年1月')}
                                            </li>
                                        </ul>
                                        <h5>
                                            <Link href="/news-details">
                                                {getTranslatedText(
                                                    '魁省10项政府补助详解最高每月可领$770',
                                                    'Quebec 10 Government Subsidies Explained - Up to $770 Per Month',
                                                    'Explication des 10 Subventions Gouvernementales du Québec - Jusqu\'à 770 $ Par Mois',
                                                    '魁省10項政府補助詳解最高每月可領$770'
                                                )}
                                            </Link>
                                        </h5>
                                        <p>
                                            {getTranslatedText(
                                                '2025年魁北克政府提供多项财政补助，包括儿童津贴、住房补助、社会援助金等，单身人士最高可获得$770/月...',
                                                'In 2025, the Quebec government provides multiple financial subsidies, including child benefits, housing allowances, social assistance, etc. Single individuals can receive up to $770/month...',
                                                'En 2025, le gouvernement du Québec fournit plusieurs subventions financières, y compris les prestations pour enfants, les allocations de logement, l\'aide sociale, etc. Les personnes seules peuvent recevoir jusqu\'à 770 $/mois...',
                                                '2025年魁北克政府提供多項財政補助，包括兒童津貼、住房補助、社會援助金等，單身人士最高可獲得$770/月...'
                                            )}
                                        </p>
                                        <Link href="/news-details" className="link-btn">{getTranslatedText('了解详情', 'Learn More', 'En Savoir Plus', '了解詳情')} <i
                                            className="far fa-chevron-double-right"></i></Link>
                                    </div>
                                </div>
                                <div className="news-right-box wow fadeInUp" data-wow-delay=".5s">
                                    <div className="thumb">
                                        <img src="FCImage/Blog-3.png" alt="img"/>
                                        <Link href="/news-details" className="post-box">
                                            {getTranslatedText('移民指南', 'Immigration Guide', 'Guide d\'Immigration', '移民指南')}
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <ul className="post-cat">
                                            <li>
                                                <i className="fal fa-user"></i>
                                                {getTranslatedText('移民专家', 'Immigration Expert', 'Expert en Immigration', '移民專家')}
                                            </li>
                                            <li>
                                                <i className="fal fa-calendar-alt"></i>
                                                {getTranslatedText('2025年3月', 'March 2025', 'Mars 2025', '2025年3月')}
                                            </li>
                                        </ul>
                                        <h5>
                                            <Link href="/news-details">
                                                {getTranslatedText(
                                                    '新推出！法语社区移民试点项目魁省外也能法语移民',
                                                    'New Launch! French Community Immigration Pilot Project - French Immigration Outside Quebec Too',
                                                    'Nouveau Lancement ! Projet Pilote d\'Immigration Communautaire Française - Immigration Française Aussi en Dehors du Québec',
                                                    '新推出！法語社區移民試點項目魁省外也能法語移民'
                                                )}
                                            </Link>
                                        </h5>
                                        <p>
                                            {getTranslatedText(
                                                'IRCC推出法语社区移民试点项目(FCIP)，魁省以外的法语社区也可以通过法语能力快速移民，中级法语水平即可申请...',
                                                'IRCC launched the French Community Immigration Pilot Project (FCIP). French communities outside Quebec can also immigrate quickly through French language skills. Intermediate French level is sufficient to apply...',
                                                'IRCC a lancé le Projet Pilote d\'Immigration Communautaire Française (FCIP). Les communautés françaises en dehors du Québec peuvent également immigrer rapidement grâce aux compétences linguistiques françaises. Un niveau de français intermédiaire suffit pour postuler...',
                                                'IRCC推出法語社區移民試點項目(FCIP)，魁省以外的法語社區也可以通過法語能力快速移民，中級法語水平即可申請...'
                                            )}
                                        </p>
                                        <Link href="/news-details" className="link-btn">{getTranslatedText('查看详情', 'View Details', 'Voir les Détails', '查看詳情')} <i
                                            className="far fa-chevron-double-right"></i></Link>
                                    </div>
                                </div>
                                <div className="news-right-box wow fadeInUp" data-wow-delay=".9s">
                                    <div className="thumb">
                                        <img src="FCImage/Blog-4.png" alt="img"/>
                                        <Link href="/news-details" className="post-box">
                                            {getTranslatedText('成功案例', 'Success Story', 'Histoire de Succès', '成功案例')}
                                        </Link>
                                    </div>
                                    <div className="content">
                                        <ul className="post-cat">
                                            <li>
                                                <i className="fal fa-user"></i>
                                                {getTranslatedText('学员分享', 'Student Sharing', 'Partage d\'Étudiant', '學員分享')}
                                            </li>
                                            <li>
                                                <i className="fal fa-calendar-alt"></i>
                                                {getTranslatedText('2025年4月', 'April 2025', 'Avril 2025', '2025年4月')}
                                            </li>
                                        </ul>
                                        <h5>
                                            <Link href="/news-details">
                                                {getTranslatedText(
                                                    '从零基础到成功移民67天通过CLB5的奇迹',
                                                    'From Zero to Successful Immigration - The Miracle of Passing CLB5 in 67 Days',
                                                    'De Zéro à l\'Immigration Réussie - Le Miracle de Réussir CLB5 en 67 Jours',
                                                    '從零基礎到成功移民67天通過CLB5的奇蹟'
                                                )}
                                            </Link>
                                        </h5>
                                        <p>
                                            {getTranslatedText(
                                                'QFEC学员张同学仅用67天从零基础达到CLB5水平，成功通过法语EE获得移民邀请，现已登陆多伦多开始新生活...',
                                                'QFEC student Zhang achieved CLB5 level from zero foundation in just 67 days, successfully obtained immigration invitation through French EE, and has now landed in Toronto to start a new life...',
                                                'L\'étudiant Zhang de QFEC a atteint le niveau CLB5 à partir de zéro en seulement 67 jours, a obtenu avec succès une invitation d\'immigration via l\'EE français, et a maintenant atterri à Toronto pour commencer une nouvelle vie...',
                                                'QFEC學員張同學僅用67天從零基礎達到CLB5水平，成功通過法語EE獲得移民邀請，現已登陸多倫多開始新生活...'
                                            )}
                                        </p>
                                        <Link href="/news-details" className="link-btn">{getTranslatedText('学习经验', 'Learning Experience', 'Expérience d\'Apprentissage', '學習經驗')} <i
                                            className="far fa-chevron-double-right"></i></Link>
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

export default FCBlogHome;