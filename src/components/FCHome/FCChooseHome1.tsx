"use client"
import VideoPopup from '@/modals/VideoPopup';
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const FCChooseHome1 = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { currentLanguage, isHydrated } = useLanguage();

  const getTranslatedText = (zhText: string, enText: string, frText: string = enText, zhHantText: string = zhText) => {
    if (!isHydrated) {
      return enText;
    }
    
    switch (currentLanguage) {
      case 'zh-hans':
      case 'zh-CN':
      case 'zh-Hans':
        return zhText;
      case 'zh-hant':
      case 'zh-TW':
      case 'zh-Hant':
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
                                    {getTranslatedText(
                                        '为什么选择我们',
                                        'Why Choose Us',
                                        'Pourquoi nous choisir',
                                        '為什麼選擇我們'
                                    )}
                                </h6>
                                <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                    {getTranslatedText(
                                        '别人还在苦背单词时',
                                        'While Others Are Still Memorizing Words',
                                        'Pendant que d\'autres mémorisent encore des mots',
                                        '別人還在苦背單詞時'
                                    )} <br/>
                                    {getTranslatedText(
                                        '你已经在加拿大了',
                                        'You\'re Already in Canada',
                                        'Vous êtes déjà au Canada',
                                        '你已經在加拿大了'
                                    )}
                                </h2>
                            </div>
                            <p className="mt-3 mt-md-0 text-white wow fadeInUp" data-wow-delay=".5s">
                                {getTranslatedText(
                                    '不走弯路，不浪费时间。跟着真正的TEF考官学最有用的内容，用最短的时间拿到最高的分数，开启你的加拿大新生活。',
                                    'No detours, no wasted time. Learn the most useful content from real TEF examiners, get the highest scores in the shortest time, and start your new life in Canada.',
                                    'Pas de détours, pas de temps perdu. Apprenez le contenu le plus utile avec de vrais examinateurs TEF, obtenez les meilleurs scores en un minimum de temps et commencez votre nouvelle vie au Canada.',
                                    '不走彎路，不浪費時間。跟著真正的TEF考官學最有用的內容，用最短的時間拿到最高的分數，開啟你的加拿大新生活。'
                                )}
                            </p>
                            <div className="row">
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="icon-items">
                                        <div className="icon">
                                            <i className="fas fa-user-tie"></i>
                                        </div>
                                        <h3>{getTranslatedText(
                                            '考官亲自下场教学',
                                            'Examiners Teach Personally',
                                            'Les examinateurs enseignent personnellement',
                                            '考官親自下場教學'
                                        )}</h3>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="icon-items">
                                        <div className="icon">
                                            <i className="fas fa-bullseye"></i>
                                        </div>
                                        <h3>{getTranslatedText(
                                            '精准命中考试要点',
                                            'Precisely Target Exam Points',
                                            'Cibler précisément les points d\'examen',
                                            '精準命中考試要點'
                                        )}</h3>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="icon-items">
                                        <div className="icon">
                                            <i className="fas fa-rocket"></i>
                                        </div>
                                        <h3>{getTranslatedText(
                                            '移民分数轻松达标',
                                            'Easily Meet Immigration Scores',
                                            'Atteindre facilement les scores d\'immigration',
                                            '移民分數輕鬆達標'
                                        )}</h3>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="icon-items">
                                        <div className="icon">
                                            <i className="fas fa-trophy"></i>
                                        </div>
                                        <h3>{getTranslatedText(
                                            '成功案例遍布全球',
                                            'Success Stories Worldwide',
                                            'Histoires de succès dans le monde entier',
                                            '成功案例遍布全球'
                                        )}</h3>
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