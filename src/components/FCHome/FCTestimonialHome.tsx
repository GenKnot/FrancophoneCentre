"use client";
import Count from '@/common/Count';
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useLanguage } from '@/contexts/LanguageContext';

const FCTestimonialHome = () => {
    const { currentLanguage, isHydrated } = useLanguage();

    const getTranslatedText = (zhText: string, enText: string, frText: string = enText, zhHantText: string = zhText) => {
        if (!isHydrated) {
            return enText;
        }
        
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
            <section className="testimonial-section-3 fix pt-0 section-padding bg-cover" style={{background: `url(/FCImage/testimonial-bg-1.png)`, backgroundAttachment: "fixed"}}>
                <div className="counter-section-2 section-padding pt-0">
                    <div className="container custom-container">
                        <div className="counter-wrapper-2 bg-cover" style={{background: `url(/assets/img/counter-bg.jpg)`}}>
                            <div className="counter-items wow fadeInUp" data-wow-delay=".2s">
                                <div className="icon">
                                    <i className="flaticon-success"></i>
                                </div>
                                <div className="content">
                                    <h2><span className="odometer" data-count="217"> <Count number={217} text=''  /> </span></h2>
                                    <p>{getTranslatedText('在校学员', 'Current Students', 'Étudiants Actuels', '在校學員')}</p>
                                </div>
                            </div>
                            <div className="counter-items wow fadeInUp" data-wow-delay=".4s">
                                <div className="icon">
                                    <i className="flaticon-medal"></i>
                                </div>
                                <div className="content">
                                    <h2><span className="odometer" data-count="98"> <Count number={98} text='%'  /> </span></h2>
                                    <p>{getTranslatedText('TEF通过率', 'TEF Pass Rate', 'Taux de Réussite TEF', 'TEF通過率')}</p>
                                </div>
                            </div>
                            <div className="counter-items wow fadeInUp" data-wow-delay=".6s">
                                <div className="icon">
                                    <i className="flaticon-satisfaction"></i>
                                </div>
                                <div className="content">
                                    <h2><span className="odometer" data-count="154"> <Count number={154} text=''  /> </span></h2>
                                    <p>{getTranslatedText('成功拿到CLB5', 'Achieved CLB5', 'Obtenu CLB5', '成功拿到CLB5')}</p>
                                </div>
                            </div>
                            <div className="counter-items wow fadeInUp" data-wow-delay=".8s">
                                <div className="icon">
                                    <i className="flaticon-instructor"></i>
                                </div>
                                <div className="content">
                                    <h2><span className="odometer" data-count="10"> <Count number={10} text={getTranslatedText('位', '', '', '位')}  /> </span></h2>
                                    <p>{getTranslatedText('现任+前任考官', 'Current + Former Examiners', 'Examinateurs Actuels + Anciens', '現任+前任考官')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="section-title text-center">
                        <h6 className="text-white wow fadeInUp">
                            {getTranslatedText('学员真实反馈', 'Student Testimonials', 'Témoignages d\'Étudiants', '學員真實反饋')}
                        </h6>
                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                            {getTranslatedText('听听他们的加拿大移民故事', 'Hear Their Canadian Immigration Stories', 'Écoutez Leurs Histoires d\'Immigration Canadienne', '聽聽他們的加拿大移民故事')}
                        </h2>
                    </div>
                    <Swiper
                        spaceBetween={30}
                        speed={2000}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el: ".dot",
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        breakpoints={{
                            1199: {
                                slidesPerView: 3,
                            },
                            991: {
                                slidesPerView: 2,
                            },
                            767: {
                                slidesPerView: 1,
                            },
                            575: {
                                slidesPerView: 1,
                            },
                            0: {
                                slidesPerView: 1,
                            },
                        }}
                        className="swiper testimonial-slider-3">

                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items">
                                <div className="client-info">
                                    <h3>{getTranslatedText('张同学', 'Student Zhang', 'Étudiant Zhang', '張同學')}</h3>
                                    <span>{getTranslatedText('软件工程师', 'Software Engineer', 'Ingénieur Logiciel', '軟件工程師')}</span>
                                </div>
                                <div className="client-img bg-cover" style={{background: `url(/FCImage/Testimonial-1.png)`}}></div>
                                <p>
                                    {getTranslatedText(
                                        '"零基础到CLB7只用了6个月！考官直授真的太棒了，每道题都能遇到原题，现在已经成功登陆多伦多！"',
                                        '"From zero to CLB7 in just 6 months! Direct teaching from examiners is amazing, I encountered original questions in every test, and now I\'ve successfully landed in Toronto!"',
                                        '"De zéro à CLB7 en seulement 6 mois ! L\'enseignement direct des examinateurs est incroyable, j\'ai rencontré des questions originales à chaque test, et maintenant j\'ai réussi à m\'installer à Toronto !"',
                                        '"零基礎到CLB7只用了6個月！考官直授真的太棒了，每道題都能遇到原題，現在已經成功登陸多倫多！"'
                                    )}
                                </p>
                                <div className="icon">
                                    <i className="flaticon-double-quotes"></i>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items">
                                <div className="client-info">
                                    <h3>{getTranslatedText('李女士', 'Ms. Li', 'Mme Li', '李女士')}</h3>
                                    <span>{getTranslatedText('会计师', 'Accountant', 'Comptable', '會計師')}</span>
                                </div>
                                <div className="client-img bg-cover" style={{background: `url(/FCImage/Testimonial-1.png)`}}></div>
                                <p>
                                    {getTranslatedText(
                                        '"法语EE只需要415分，比英语EE简单太多了！感谢QFEC让我4个月就拿到CLB5，顺利获得邀请。"',
                                        '"French EE only requires 415 points, much easier than English EE! Thanks to QFEC, I got CLB5 in 4 months and successfully received an invitation."',
                                        '"L\'EE français ne nécessite que 415 points, beaucoup plus facile que l\'EE anglais ! Grâce à QFEC, j\'ai obtenu CLB5 en 4 mois et j\'ai reçu une invitation avec succès."',
                                        '"法語EE只需要415分，比英語EE簡單太多了！感謝QFEC讓我4個月就拿到CLB5，順利獲得邀請。"'
                                    )}
                                </p>
                                <div className="icon">
                                    <i className="flaticon-double-quotes"></i>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items">
                                <div className="client-info">
                                    <h3>{getTranslatedText('王先生', 'Mr. Wang', 'M. Wang', '王先生')}</h3>
                                    <span>{getTranslatedText('市场专员', 'Marketing Specialist', 'Spécialiste Marketing', '市場專員')}</span>
                                </div>
                                <div className="client-img bg-cover" style={{background: `url(/FCImage/Testimonial-1.png)`}}></div>
                                <p>
                                    {getTranslatedText(
                                        '"COMBO套餐超值！从零基础一路学到刷题班，考官1对1指导让我口语从B1直接跳到B2水平。"',
                                        '"COMBO package is great value! From zero foundation all the way to practice classes, 1-on-1 guidance from examiners helped my speaking jump directly from B1 to B2 level."',
                                        '"Le forfait COMBO est d\'un excellent rapport qualité-prix ! De zéro à la classe de pratique, les conseils individuels des examinateurs ont aidé mon expression orale à passer directement du niveau B1 au niveau B2."',
                                        '"COMBO套餐超值！從零基礎一路學到刷題班，考官1對1指導讓我口語從B1直接跳到B2水平。"'
                                    )}
                                </p>
                                <div className="icon">
                                    <i className="flaticon-double-quotes"></i>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items">
                                <div className="client-info">
                                    <h3>{getTranslatedText('陈小姐', 'Ms. Chen', 'Mlle Chen', '陳小姐')}</h3>
                                    <span>{getTranslatedText('护士', 'Nurse', 'Infirmière', '護士')}</span>
                                </div>
                                <div className="client-img bg-cover" style={{background: `url(/FCImage/Testimonial-1.png)`}}></div>
                                <p>
                                    {getTranslatedText(
                                        '"PEQ项目真的是最快的移民方式！现在在魁北克读法语课程，明年就能申请移民了。"',
                                        '"PEQ program is really the fastest immigration route! Now studying French courses in Quebec, I can apply for immigration next year."',
                                        '"Le programme PEQ est vraiment la voie d\'immigration la plus rapide ! Maintenant j\'étudie des cours de français au Québec, je peux demander l\'immigration l\'année prochaine."',
                                        '"PEQ項目真的是最快的移民方式！現在在魁北克讀法語課程，明年就能申請移民了。"'
                                    )}
                                </p>
                                <div className="icon">
                                    <i className="flaticon-double-quotes"></i>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-card-items">
                                <div className="client-info">
                                    <h3>{getTranslatedText('刘同学', 'Student Liu', 'Étudiant Liu', '劉同學')}</h3>
                                    <span>{getTranslatedText('金融分析师', 'Financial Analyst', 'Analyste Financier', '金融分析師')}</span>
                                </div>
                                <div className="client-img bg-cover" style={{background: `url(/FCImage/Testimonial-1.png)`}}></div>
                                <p>
                                    {getTranslatedText(
                                        '"88加币的1对1课程太划算了！考官直接告诉我哪些是必考点，学习效率提升了10倍。"',
                                        '"The $88 CAD 1-on-1 course is such great value! Examiners directly told me which are the must-know points, my learning efficiency improved 10 times."',
                                        '"Le cours individuel à 88 $ CAD est d\'un excellent rapport qualité-prix ! Les examinateurs m\'ont directement dit quels sont les points incontournables, mon efficacité d\'apprentissage s\'est améliorée de 10 fois."',
                                        '"88加幣的1對1課程太划算了！考官直接告訴我哪些是必考點，學習效率提升了10倍。"'
                                    )}
                                </p>
                                <div className="icon">
                                    <i className="flaticon-double-quotes"></i>
                                </div>
                            </div>
                        </SwiperSlide>

                        <div className="swiper-dot white-color text-center mt-5">
                            <div className="dot"></div>
                        </div>
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default FCTestimonialHome;