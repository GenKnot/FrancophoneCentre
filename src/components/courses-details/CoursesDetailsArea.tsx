"use client"
import VideoPopup from '@/modals/VideoPopup';
import Link from 'next/link';
import React, {useState} from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface CourseDetailData {
    id: number;
    name: string;
    name_zh_hans?: string;
    name_zh_hant?: string;
    name_fr?: string;
    course_type: string;
    subtitle: string;
    subtitle_zh_hans?: string;
    subtitle_zh_hant?: string;
    subtitle_fr?: string;
    description: string;
    description_zh_hans?: string;
    description_zh_hant?: string;
    description_fr?: string;
    short_description: string;
    short_description_zh_hans?: string;
    short_description_zh_hant?: string;
    short_description_fr?: string;
    slug: string;
    price: number | null;
    price_text: string;
    price_text_zh_hans?: string;
    price_text_zh_hant?: string;
    price_text_fr?: string;
    hours: number | null;
    duration_weeks: string;
    duration_weeks_zh_hans?: string;
    duration_weeks_zh_hant?: string;
    duration_weeks_fr?: string;
    target_level: string;
    target_level_zh_hans?: string;
    target_level_zh_hant?: string;
    target_level_fr?: string;
    required_level: string;
    required_level_zh_hans?: string;
    required_level_zh_hant?: string;
    required_level_fr?: string;
    language_of_instruction: string;
    language_of_instruction_zh_hans?: string;
    language_of_instruction_zh_hant?: string;
    language_of_instruction_fr?: string;
    pass_rate: string;
    special_features: string;
    special_features_zh_hans?: string;
    special_features_zh_hant?: string;
    special_features_fr?: string;
    difficulty_level: number;
    consultation_text: string;
    consultation_text_zh_hans?: string;
    consultation_text_zh_hant?: string;
    consultation_text_fr?: string;
    button_contact_text: string;
    button_contact_text_zh_hans?: string;
    button_contact_text_zh_hant?: string;
    button_contact_text_fr?: string;
    button_secondary_text: string;
    button_secondary_text_zh_hans?: string;
    button_secondary_text_zh_hant?: string;
    button_secondary_text_fr?: string;
    image_homepage: string;
    image_listing: string;
    image_detail_large: string;
    image_detail_small: string;
    image_instagram: string;
    rating: number;
    rating_count: number;
    video_url: string;
    course_introduction: string;
    course_introduction_zh_hans?: string;
    course_introduction_zh_hant?: string;
    course_introduction_fr?: string;
    course_benefits: string;
    course_benefits_zh_hans?: string;
    course_benefits_zh_hant?: string;
    course_benefits_fr?: string;
    course_advantages: string;
    course_advantages_zh_hans?: string;
    course_advantages_zh_hant?: string;
    course_advantages_fr?: string;
    teacher_data: any[];
    sections: any[];
    featured_reviews: any[];
}

interface CoursesDetailsAreaProps {
    courseData?: CourseDetailData;
}

const CoursesDetailsArea: React.FC<CoursesDetailsAreaProps> = ({ courseData }) => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Course');
    const [activeAccordion, setActiveAccordion] = useState(0);
    const { currentLanguage, t } = useLanguage();

    const getTranslatedField = (fieldName: string, fallback: string = '') => {
        if (!courseData) return fallback;
        
        const baseField = (courseData as any)[fieldName];
        
        if (currentLanguage === 'en' || currentLanguage === 'en-US') {
            return baseField || fallback;
        }
        
        const langCode = currentLanguage.replace('-', '_');
        const translatedField = (courseData as any)[`${fieldName}_${langCode}`];
        
        return translatedField || baseField || fallback;
    };

    const getFixedText = (key: string, zhText: string, enText: string = zhText, frText: string = zhText, zhHantText: string = zhText) => {
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

    const getReviewTranslatedField = (review: any, fieldName: string, fallback: string = '') => {
        if (!review) return fallback;
        
        const baseField = review[fieldName];
        
        if (currentLanguage === 'en' || currentLanguage === 'en-US') {
            return baseField || fallback;
        }
        
        const langCode = currentLanguage.replace('-', '_');
        const translatedField = review[`${fieldName}_${langCode}`];
        
        return translatedField || baseField || fallback;
    };

    const copyToClipboard = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert(getFixedText('url_copied', 'URL已复制到剪贴板！', 'URL copied to clipboard!', 'URL copiée dans le presse-papiers !'));
        });
    };

    return (
        <>
            {/* video modal start */}
            <VideoPopup
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={courseData?.video_url || "_YFzgnuiMlk?si=kgaOPq2FyoaUmT7k"}
            />
            {/* video modal end */}
            <section className="courses-details-section section-padding pt-0">
                <div className="container">
                    <div className="courses-details-wrapper">
                        <div className="row g-4">
                            <div className="col-lg-8">
                                <div className="courses-details-items">
                                    <div className="courses-image">
                                        <img src={courseData?.image_detail_large || "/FCImage/Coures-10.png"} alt="img" />
                                        <a
                                            onClick={() => setIsVideoOpen(true)}
                                            style={{cursor: "pointer"}}
                                            className="video-btn ripple video-popup">
                                            <i className="fas fa-play"></i>
                                        </a>
                                    </div>
                                    <div className="courses-details-content">
                                        <ul className="nav">
                                            <li className="nav-item wow fadeInUp" data-wow-delay=".3s">
                                                <a 
                                                    href="#Course" 
                                                    onClick={(e) => { e.preventDefault(); setActiveTab('Course'); }}
                                                    className={`nav-link ${activeTab === 'Course' ? 'active' : ''}`}>
                                                    {getFixedText('course_info', '课程信息', 'Course Info', 'Informations du cours', '課程信息')}
                                                </a>
                                            </li>
                                            <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
                                                <a 
                                                    href="#Curriculum" 
                                                    onClick={(e) => { e.preventDefault(); setActiveTab('Curriculum'); }}
                                                    className={`nav-link ${activeTab === 'Curriculum' ? 'active' : ''}`}>
                                                    {getFixedText('curriculum', '课程大纲', 'Curriculum', 'Programme du cours', '課程大綱')}
                                                </a>
                                            </li>
                                            <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
                                                <a 
                                                    href="#Instructors" 
                                                    onClick={(e) => { e.preventDefault(); setActiveTab('Instructors'); }}
                                                    className={`nav-link ${activeTab === 'Instructors' ? 'active' : ''}`}>
                                                    {getFixedText('instructors', '授课教师', 'Instructors', 'Instructeurs', '授課教師')}
                                                </a>
                                            </li>
                                            <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
                                                <a 
                                                    href="#Reviews" 
                                                    onClick={(e) => { e.preventDefault(); setActiveTab('Reviews'); }}
                                                    className={`nav-link bb-none ${activeTab === 'Reviews' ? 'active' : ''}`}>
                                                    {getFixedText('reviews', '学员评价', 'Reviews', 'Avis des étudiants', '學員評價')}
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div id="Course" className={`tab-pane fade ${activeTab === 'Course' ? 'show active' : ''}`}>
                                                <div className="description-content">
                                                    <h3>{getFixedText('course_introduction', '课程介绍', 'Course Introduction', 'Présentation du cours', '課程介紹')}</h3>
                                                    {getTranslatedField('course_introduction') ? (
                                                        <div dangerouslySetInnerHTML={{ __html: getTranslatedField('course_introduction') }} />
                                                    ) : (
                                                        <>
                                                            <p className="mb-3">
                                                                {getTranslatedField('description', 'CLB7刷题冲刺班是QFEC为已具备B2水平学员精心设计的考试专项训练课程。本课程由现任TEF考官直接授课，采用100%真题训练模式，确保学员在考试中能够遇到80%以上的原题，从而大幅提升通过率。')}
                                                            </p>
                                                        </>
                                                    )}
                                                    
                                                    {getTranslatedField('course_benefits') ? (
                                                        <>
                                                            <h3 className="mt-5">{getFixedText('course_benefits', '课程学习收获', 'Course Benefits', 'Avantages du cours')}</h3>
                                                            <div dangerouslySetInnerHTML={{ __html: getTranslatedField('course_benefits') }} />
                                                        </>
                                                    ) : (
                                                        <>
                                                            <h3 className="mt-5">{getFixedText('course_benefits', '课程学习收获', 'Course Benefits', 'Avantages du cours')}</h3>
                                                            <p className="mb-4">
                                                                完成本课程后，学员将具备强大的TEF应试能力，通过率高达98%，远超行业平均水平。
                                                                同时掌握约1500个TEF常考词汇，能够熟练运用高分语法结构。
                                                            </p>
                                                            <div className="row g-4 mb-5">
                                                                <div className="col-lg-6">
                                                                    <ul className="list-item">
                                                                        <li>
                                                                            <i className="fas fa-check-circle"></i>
                                                                            100%考试真题训练
                                                                        </li>
                                                                        <li>
                                                                            <i className="fas fa-check-circle"></i>
                                                                            现任考官直授技巧
                                                                        </li>
                                                                        <li>
                                                                            <i className="fas fa-check-circle"></i>
                                                                            听力阅读专项突破
                                                                        </li>
                                                                        <li>
                                                                            <i className="fas fa-check-circle"></i>
                                                                            口语评测系统训练
                                                                        </li>
                                                                        <li>
                                                                            <i className="fas fa-check-circle"></i>
                                                                            写作高分模板掌握
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <ul className="list-item">
                                                                        <li>
                                                                            <i className="fas fa-check-circle"></i>
                                                                            考试环境100%还原
                                                                        </li>
                                                                        <li>
                                                                            <i className="fas fa-check-circle"></i>
                                                                            核心词汇全面覆盖
                                                                        </li>
                                                                        <li>
                                                                            <i className="fas fa-check-circle"></i>
                                                                            应试心理调节指导
                                                                        </li>
                                                                        <li>
                                                                            <i className="fas fa-check-circle"></i>
                                                                            个性化弱项提升
                                                                        </li>
                                                                        <li>
                                                                            <i className="fas fa-check-circle"></i>
                                                                            CLB7分数保障
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}

                                                    {getTranslatedField('course_advantages') ? (
                                                        <>
                                                            <h3>{getFixedText('course_advantages', '课程优势', 'Course Advantages', 'Avantages du cours')}</h3>
                                                            <div dangerouslySetInnerHTML={{ __html: getTranslatedField('course_advantages') }} />
                                                        </>
                                                    ) : (
                                                        <>
                                                            <h3>{getFixedText('course_advantages', '课程优势', 'Course Advantages', 'Avantages du cours')}</h3>
                                                            <p>
                                                                现任考官直授是本课程最大优势，考官深知TEF评分标准和出题规律，能够精准指导学员避开失分陷阱，
                                                                掌握得分要点。结合2000小时教研成果，确保每位学员都能在短时间内实现分数突破。
                                                            </p>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            <div id="Curriculum" className={`tab-pane fade ${activeTab === 'Curriculum' ? 'show active' : ''}`}>
                                                <div className="course-curriculum-items">
                                                    <h3>{getFixedText('curriculum', '课程大纲', 'Curriculum', 'Programme du cours', '課程大綱')}</h3>

                                                    {(courseData?.sections && courseData.sections.length > 0) ? (
                                                        <div className="courses-faq-items">
                                                            <div className="accordion" id="accordionExample">
                                                                {courseData.sections.map((section, index) => (
                                                                    <div key={section.id} className="accordion-item">
                                                                        <h2 className="accordion-header" id={`heading${index}`}>
                                                                            <button 
                                                                                className={`accordion-button ${activeAccordion !== index ? 'collapsed' : ''}`} 
                                                                                type="button"
                                                                                onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                                                                                aria-expanded={activeAccordion === index ? "true" : "false"}
                                                                                aria-controls={`collapse${index}`}>
                                                                                {section.title_zh_hans && currentLanguage === 'zh-hans' ? section.title_zh_hans : 
                                                                                 section.title_zh_hant && currentLanguage === 'zh-hant' ? section.title_zh_hant :
                                                                                 section.title_fr && currentLanguage === 'fr' ? section.title_fr : section.title}
                                                                            </button>
                                                                        </h2>
                                                                        <div 
                                                                            id={`collapse${index}`}
                                                                            className={`accordion-collapse collapse ${activeAccordion === index ? 'show' : ''}`}
                                                                            aria-labelledby={`heading${index}`}>
                                                                            <div className="accordion-body">
                                                                                <ul>
                                                                                    {(section.lessons || []).map((lesson: any) => (
                                                                                        <li key={lesson.id}>
                                                                                            <span>
                                                                                                <i className="fas fa-file-alt"></i>
                                                                                                {lesson.title_zh_hans && currentLanguage === 'zh-hans' ? lesson.title_zh_hans : 
                                                                                                 lesson.title_zh_hant && currentLanguage === 'zh-hant' ? lesson.title_zh_hant :
                                                                                                 lesson.title_fr && currentLanguage === 'fr' ? lesson.title_fr : lesson.title}
                                                                                            </span>
                                                                                            <span>
                                                                                                <i className="far fa-clock"></i> {lesson.duration_minutes ? `(${lesson.duration_minutes} ${getFixedText('minutes', '分钟', 'minutes', 'minutes')})` : ''}
                                                                                            </span>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="courses-faq-items">
                                                            <div className="accordion" id="accordionExample">
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="headingOne">
                                                                        <button 
                                                                                className={`accordion-button ${activeAccordion !== 0 ? 'collapsed' : ''}`}
                                                                                type="button"
                                                                                onClick={() => setActiveAccordion(activeAccordion === 0 ? -1 : 0)}
                                                                                aria-expanded={activeAccordion === 0 ? "true" : "false"}
                                                                                aria-controls="collapseOne">
                                                                            第一阶段：听力阅读专项训练
                                                                        </button>
                                                                    </h2>
                                                                    <div id="collapseOne"
                                                                         className={`accordion-collapse collapse ${activeAccordion === 0 ? 'show' : ''}`}
                                                                         aria-labelledby="headingOne">
                                                                        <div className="accordion-body">
                                                                            <ul>
                                                                                <li>
                                                                                <span>
                                                                                    <i className="fas fa-file-alt"></i>
                                                                                    第1课：TEF听力题型全解析
                                                                                </span>
                                                                                    <span>
                                                                                    <i className="far fa-clock"></i>  (90分钟)
                                                                                </span>
                                                                                </li>
                                                                                <li>
                                                                                <span>
                                                                                    <i className="fas fa-file-alt"></i>
                                                                                    第2课：高频词汇听力训练
                                                                                </span>
                                                                                    <span>
                                                                                    <i className="far fa-clock"></i>  (90分钟)
                                                                                </span>
                                                                                </li>
                                                                                <li>
                                                                                <span>
                                                                                    <i className="fas fa-file-alt"></i>
                                                                                    第3课：阅读理解技巧掌握
                                                                                </span>
                                                                                    <span>
                                                                                    <i className="far fa-clock"></i>  (90分钟)
                                                                                </span>
                                                                                </li>
                                                                                <li>
                                                                                <span>
                                                                                    <i className="fas fa-file-alt"></i>
                                                                                    第4课：真题模拟测试
                                                                                </span>
                                                                                    <span>
                                                                                    <i className="far fa-clock"></i>  (90分钟)
                                                                                </span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="headingTwo">
                                                                        <button 
                                                                                className={`accordion-button ${activeAccordion !== 1 ? 'collapsed' : ''}`}
                                                                                type="button"
                                                                                onClick={() => setActiveAccordion(activeAccordion === 1 ? -1 : 1)}
                                                                                aria-expanded={activeAccordion === 1 ? "true" : "false"}
                                                                                aria-controls="collapseTwo">
                                                                            第二阶段：口语写作高分冲刺
                                                                        </button>
                                                                    </h2>
                                                                    <div id="collapseTwo"
                                                                         className={`accordion-collapse collapse ${activeAccordion === 1 ? 'show' : ''}`}
                                                                         aria-labelledby="headingTwo">
                                                                        <div className="accordion-body">
                                                                            <ul>
                                                                                <li>
                                                                                <span>
                                                                                    <i className="fas fa-file-alt"></i>
                                                                                    第1课：口语表达结构训练
                                                                                </span>
                                                                                    <span>
                                                                                    <i className="far fa-clock"></i>  (90分钟)
                                                                                </span>
                                                                                </li>
                                                                                <li>
                                                                                <span>
                                                                                    <i className="fas fa-file-alt"></i>
                                                                                    第2课：写作高分模板学习
                                                                                </span>
                                                                                    <span>
                                                                                    <i className="far fa-clock"></i>  (90分钟)
                                                                                </span>
                                                                                </li>
                                                                                <li>
                                                                                <span>
                                                                                    <i className="fas fa-file-alt"></i>
                                                                                    第3课：考官面对面模拟
                                                                                </span>
                                                                                    <span>
                                                                                    <i className="far fa-clock"></i>  (90分钟)
                                                                                </span>
                                                                                </li>
                                                                                <li>
                                                                                <span>
                                                                                    <i className="fas fa-file-alt"></i>
                                                                                    第4课：综合能力测评
                                                                                </span>
                                                                                    <span>
                                                                                    <i className="far fa-clock"></i>  (90分钟)
                                                                                </span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item mb-0">
                                                                    <h2 className="accordion-header" id="headingthree">
                                                                        <button 
                                                                                className={`accordion-button ${activeAccordion !== 2 ? 'collapsed' : ''}`}
                                                                                type="button"
                                                                                onClick={() => setActiveAccordion(activeAccordion === 2 ? -1 : 2)}
                                                                                aria-expanded={activeAccordion === 2 ? "true" : "false"}
                                                                                aria-controls="collapsethree">
                                                                            第三阶段：考前冲刺强化
                                                                        </button>
                                                                    </h2>
                                                                    <div id="collapsethree"
                                                                         className={`accordion-collapse collapse ${activeAccordion === 2 ? 'show' : ''}`}
                                                                         aria-labelledby="headingthree">
                                                                        <div className="accordion-body">
                                                                            <ul>
                                                                                <li>
                                                                                <span>
                                                                                    <i className="fas fa-file-alt"></i>
                                                                                    第1课：全真模拟考试
                                                                                </span>
                                                                                    <span>
                                                                                    <i className="far fa-clock"></i>  (120分钟)
                                                                                </span>
                                                                                </li>
                                                                                <li>
                                                                                <span>
                                                                                    <i className="fas fa-file-alt"></i>
                                                                                    第2课：个性化弱项提升
                                                                                </span>
                                                                                    <span>
                                                                                    <i className="far fa-clock"></i>  (90分钟)
                                                                                </span>
                                                                                </li>
                                                                                <li>
                                                                                <span>
                                                                                    <i className="fas fa-file-alt"></i>
                                                                                    第3课：考试心理调节
                                                                                </span>
                                                                                    <span>
                                                                                    <i className="far fa-clock"></i>  (60分钟)
                                                                                </span>
                                                                                </li>
                                                                                <li>
                                                                                <span>
                                                                                    <i className="fas fa-file-alt"></i>
                                                                                    第4课：考前最后冲刺
                                                                                </span>
                                                                                    <span>
                                                                                    <i className="far fa-clock"></i>  (90分钟)
                                                                                </span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div id="Instructors" className={`tab-pane fade ${activeTab === 'Instructors' ? 'show active' : ''}`}>
                                                <div className="instructors-items">
                                                    <h3>{getFixedText('instructors', '授课教师', 'Instructors', 'Instructeurs', '授課教師')}</h3>
                                                    {(courseData?.teacher_data && courseData.teacher_data.length > 0) ? (
                                                        courseData.teacher_data.map((teacher) => (
                                                            <div key={teacher.id} className="instructors-box-items">
                                                                <div className="thumb">
                                                                    <img src={teacher.photo || "/FCImage/Testimonial-1.png"} alt="img"/>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>{teacher.name}</h4>
                                                                    <span>{teacher.title}</span>
                                                                    <p>{teacher.bio}</p>
                                                                    {teacher.detailed_bio && (
                                                                        <div dangerouslySetInnerHTML={{ __html: teacher.detailed_bio }} />
                                                                    )}
                                                                </div>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <>
                                                            <div className="instructors-box-items">
                                                                <div className="thumb">
                                                                    <img src="/FCImage/Testimonial-1.png" alt="img"/>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>考官 ABLE</h4>
                                                                    <span>现任TEF/TCF/DELF考官</span>
                                                                    <p>
                                                                        累计审核1000+份试卷，备课极其仔细，深受学员好评。擅长针对英语薄弱、法语基础较弱的学员进行专项辅导，
                                                                        教学方法灵活多样，能够快速帮助学员找到适合的学习方法。
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="instructors-box-items style-2">
                                                                <div className="thumb">
                                                                    <img src="/FCImage/Testimonial-1.png" alt="img"/>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>前任考官 Selene LI</h4>
                                                                    <span>DALF C2持有者，前任TCF考官</span>
                                                                    <p>
                                                                        曾在法国担任记者，具有丰富的法语实际应用经验和跨文化交际能力。教学经验丰富，善于因材施教，
                                                                        特别擅长帮助中国学员理解法语思维模式。
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            <div id="Reviews" className={`tab-pane fade ${activeTab === 'Reviews' ? 'show active' : ''}`}>
                                                <div className="courses-reviews-items">
                                                    <h3>{getFixedText('reviews', '学员评价', 'Student Reviews', 'Avis des étudiants', '學員評價')}</h3>
                                                    {(courseData?.featured_reviews && courseData.featured_reviews.length > 0) ? (
                                                        <div className="courses-reviews-box-items">
                                                            {courseData.featured_reviews.map((review) => (
                                                                <div key={review.id} className="instructors-box-items">
                                                                    <div className="thumb">
                                                                        <img src={review.student_photo || "/FCImage/Testimonial-1.png"} alt="img"/>
                                                                    </div>
                                                                    <div className="content">
                                                                        <h4>{getReviewTranslatedField(review, 'student_name', review.student_name)}</h4>
                                                                        <span>{getReviewTranslatedField(review, 'student_profession', review.student_profession)}</span>
                                                                        <p>"{getReviewTranslatedField(review, 'content', review.content)}"</p>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <div className="courses-reviews-box-items">
                                                            <div className="instructors-box-items">
                                                                <div className="thumb">
                                                                    <img src="/FCImage/Testimonial-1.png" alt="img"/>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>{getFixedText('student_name_1', '张同学', 'Student Zhang', 'Étudiant Zhang', '張同學')}</h4>
                                                                    <span>{getFixedText('student_profession_1', '软件工程师', 'Software Engineer', 'Ingénieur logiciel', '軟件工程師')}</span>
                                                                    <p>
                                                                        "{getFixedText('review_content_1', '报名CLB7刷题班后，考官ABLE的教学让我受益匪浅。真题训练真的很有效，考试的时候遇到了很多原题，最终顺利拿到CLB7分数！', 'After enrolling in the CLB7 intensive course, Teacher ABLE\'s instruction was extremely beneficial. The practice tests were very effective, and I encountered many similar questions during the actual exam, ultimately achieving my CLB7 score!', 'Après m\'être inscrit au cours intensif CLB7, l\'enseignement du professeur ABLE m\'a été extrêmement bénéfique. Les tests pratiques étaient très efficaces, et j\'ai rencontré de nombreuses questions similaires lors de l\'examen réel, atteignant finalement mon score CLB7!', '報名CLB7刷題班後，考官ABLE的教學讓我受益匪淺。真題訓練真的很有效，考試的時候遇到了很多原題，最終順利拿到CLB7分數！')}"
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="instructors-box-items">
                                                                <div className="thumb">
                                                                    <img src="/FCImage/Testimonial-1.png" alt="img"/>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>{getFixedText('student_name_2', '李女士', 'Ms. Li', 'Mme Li', '李女士')}</h4>
                                                                    <span>{getFixedText('student_profession_2', '会计师', 'Accountant', 'Comptable', '會計師')}</span>
                                                                    <p>
                                                                        "{getFixedText('review_content_2', '老师的教学方法很实用，特别是口语部分的训练让我进步很快。课程安排合理，每次课都有收获。', 'The teacher\'s teaching methods are very practical, especially the speaking training helped me improve quickly. The course schedule is reasonable, and I gained something from every class.', 'Les méthodes d\'enseignement du professeur sont très pratiques, en particulier l\'entraînement à l\'expression orale m\'a aidé à progresser rapidement. L\'horaire du cours est raisonnable, et j\'ai appris quelque chose à chaque cours.', '老師的教學方法很實用，特別是口語部分的訓練讓我進步很快。課程安排合理，每次課都有收穫。')}"
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="courses-sidebar-area sticky-style">
                                    <div className="courses-items">
                                        <div className="courses-image">
                                            <img src={courseData?.image_detail_large || "/FCImage/Coures-10.png"} alt="img" />
                                            <h3 className="courses-title">{getTranslatedField('name', 'CLB7冲刺')}</h3>
                                            <h4 className="topic-title">{getTranslatedField('subtitle', '高分冲刺保障')}</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="/assets/img/courses/a1.png" alt="img"/>
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="/assets/img/courses/a2.png" alt="img"/>
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="/assets/img/courses/a3.png" alt="img"/>
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="/assets/img/courses/a4.png" alt="img"/>
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="/assets/img/courses/a5.png" alt="img"/>
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="/assets/img/courses/a6.png" alt="img"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            {courseData?.price && courseData.price > 0 ? (
                                                <>
                                                    <div className="price-section mb-3">
                                                        <h2 className="price-display text-center mb-2" style={{color: '#AD0119', fontSize: '2rem', fontWeight: 'bold'}}>
                                                            {getTranslatedField('price_text', `$${courseData.price} CAD`)}
                                                        </h2>
                                                    </div>
                                                    <p className="mb-3">
                                                        {getTranslatedField('short_description', getTranslatedField('description', '专业法语课程，助您快速提升法语水平。'))}
                                                    </p>
                                                </>
                                            ) : (
                                                <>
                                                    <h3>{getFixedText('consultation_price', '咨询价格', 'Contact for Price', 'Prix sur demande')}</h3>
                                                    <p className="mb-3">
                                                        {getTranslatedField('consultation_text', '现任考官直授的专业法语课程，98%通过率保障，助您快速达到移民要求分数。')}
                                                    </p>
                                                </>
                                            )}
                                            
                                            <div className="courses-btn">
                                                <Link href="/contact" className="theme-btn">
                                                    {getTranslatedField('button_contact_text', getFixedText('contact_now', '立即咨询', 'Contact Now', 'Contactez-nous'))}
                                                </Link>
                                                <Link href="/contact" className="theme-btn style-2">
                                                    {getTranslatedField('button_secondary_text', getFixedText('book_trial', '预约试听', 'Book Trial', 'Réserver un essai'))}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="courses-category-items">
                                        <h5>{getFixedText('course_includes', '课程包含：', 'Course Includes:', 'Le cours comprend :')}</h5>
                                        <ul>
                                            <li>
                                            <span>
                                                <i className="far fa-chalkboard-teacher"></i>
                                                {getFixedText('instructor', '授课教师', 'Instructor', 'Instructeur')}
                                            </span>
                                                <span className="text">
                                                    {courseData?.teacher_data && courseData.teacher_data.length > 0 
                                                        ? courseData.teacher_data[0].name 
                                                        : "考官 ABLE"}
                                                </span>
                                            </li>
                                            <li>
                                            <span>
                                                <i className="far fa-clock"></i>
                                                {getFixedText('duration', '课程时长', 'Duration', 'Durée')}
                                            </span>
                                                <span className="text">{courseData?.hours ? `${courseData.hours}${getFixedText('hours', '课时', ' hours', ' heures')}` : getFixedText('unlimited_hours', '120课时', '120 hours', '120 heures')}</span>
                                            </li>
                                            <li>
                                            <span>
                                                <i className="far fa-calendar-alt"></i>
                                                {getFixedText('period', '课程周期', 'Period', 'Période')}
                                            </span>
                                                <span className="text">{getTranslatedField('duration_weeks', '8-12周')}</span>
                                            </li>
                                            <li>
                                            <span>
                                                <i className="far fa-user"></i>
                                                {getFixedText('suitable_for', '适合学员', 'Suitable For', 'Convient pour')}
                                            </span>
                                                <span className="text">{getTranslatedField('required_level', 'B2水平')}</span>
                                            </li>
                                            <li>
                                            <span>
                                                <i className="far fa-globe"></i>
                                                {getFixedText('language', '授课语言', 'Language', 'Langue')}
                                            </span>
                                                <span className="text">{getTranslatedField('language_of_instruction', '法语+中文')}</span>
                                            </li>
                                            <li>
                                            <span>
                                                <i className="far fa-target"></i>
                                                {getFixedText('target_level', '目标分数', 'Target Level', 'Niveau cible')}
                                            </span>
                                                <span className="text">{getTranslatedField('target_level', 'CLB7 (移民达标)')}</span>
                                            </li>
                                            <li>
                                            <span>
                                                <i className="far fa-signal-alt"></i>
                                                {getFixedText('pass_rate', '通过率', 'Pass Rate', 'Taux de réussite')}
                                            </span>
                                                <span className="text">{courseData?.pass_rate || '98%'}</span>
                                            </li>
                                            <li>
                                            <span>
                                                <i className="fal fa-medal"></i>
                                                {getFixedText('features', '课程特色', 'Features', 'Caractéristiques')}
                                            </span>
                                                <span className="text">{getTranslatedField('special_features', '100%真题训练')}</span>
                                            </li>
                                        </ul>
                                        <a className="share-btn" href="#" onClick={(e) => { e.preventDefault(); copyToClipboard(); }}>
                                            <i className="fas fa-share"></i> {getFixedText('share_course', '分享此课程', 'Share Course', 'Partager le cours')}
                                        </a>
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

export default CoursesDetailsArea;