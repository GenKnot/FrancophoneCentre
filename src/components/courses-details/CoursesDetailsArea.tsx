"use client"
import VideoPopup from '@/modals/VideoPopup';
import Link from 'next/link';
import React, {useState} from 'react';

interface CourseDetailData {
    id: number;
    name: string;
    course_type: string;
    subtitle: string;
    description: string;
    short_description: string;
    slug: string;
    price: number | null;
    price_text: string;
    hours: number | null;
    duration_weeks: string;
    target_level: string;
    required_level: string;
    language_of_instruction: string;
    pass_rate: string;
    special_features: string;
    difficulty_level: number;
    consultation_text: string;
    button_contact_text: string;
    button_secondary_text: string;
    image_homepage: string;
    image_listing: string;
    image_detail_large: string;
    image_detail_small: string;
    image_instagram: string;
    rating: number;
    rating_count: number;
    video_url: string;
    course_introduction: string;
    course_benefits: string;
    course_advantages: string;
    teacher_data: any[];
    sections: any[];
    featured_reviews: any[];
}

interface CoursesDetailsAreaProps {
    courseData?: CourseDetailData;
}

const CoursesDetailsArea: React.FC<CoursesDetailsAreaProps> = ({ courseData }) => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const copyToClipboard = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('URL copied to clipboard!');
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
                                                <a href="#Course" data-bs-toggle="tab" className="nav-link active">
                                                    课程信息
                                                </a>
                                            </li>
                                            <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
                                                <a href="#Curriculum" data-bs-toggle="tab" className="nav-link">
                                                    课程大纲
                                                </a>
                                            </li>
                                            <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
                                                <a href="#Instructors" data-bs-toggle="tab" className="nav-link">
                                                    授课教师
                                                </a>
                                            </li>
                                            <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
                                                <a href="#Reviews" data-bs-toggle="tab" className="nav-link bb-none">
                                                    学员评价
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div id="Course" className="tab-pane fade show active">
                                                <div className="description-content">
                                                    <h3>课程介绍</h3>
                                                    {courseData?.course_introduction ? (
                                                        <div dangerouslySetInnerHTML={{ __html: courseData.course_introduction }} />
                                                    ) : (
                                                        <>
                                                            <p className="mb-3">
                                                                CLB7刷题冲刺班是QFEC为已具备B2水平学员精心设计的考试专项训练课程。本课程由现任TEF考官直接授课，
                                                                采用100%真题训练模式，确保学员在考试中能够遇到80%以上的原题，从而大幅提升通过率。
                                                            </p>
                                                            <p>
                                                                课程特色在于"精准覆盖听力阅读题目+口语写作高分指导"，通过原题背诵+原题解析的教学方式，
                                                                帮助学员在最短时间内掌握考试技巧，达到CLB7移民要求分数。
                                                            </p>
                                                        </>
                                                    )}
                                                    
                                                    {courseData?.course_benefits ? (
                                                        <>
                                                            <h3 className="mt-5">课程学习收获</h3>
                                                            <div dangerouslySetInnerHTML={{ __html: courseData.course_benefits }} />
                                                        </>
                                                    ) : (
                                                        <>
                                                            <h3 className="mt-5">课程学习收获</h3>
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

                                                    {courseData?.course_advantages ? (
                                                        <>
                                                            <h3>课程优势</h3>
                                                            <div dangerouslySetInnerHTML={{ __html: courseData.course_advantages }} />
                                                        </>
                                                    ) : (
                                                        <>
                                                            <h3>课程优势</h3>
                                                            <p>
                                                                现任考官直授是本课程最大优势，考官深知TEF评分标准和出题规律，能够精准指导学员避开失分陷阱，
                                                                掌握得分要点。结合2000小时教研成果，确保每位学员都能在短时间内实现分数突破。
                                                            </p>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            <div id="Curriculum" className="tab-pane fade">
                                                <div className="course-curriculum-items">
                                                    <h3>课程大纲</h3>
                                                    {(courseData?.sections && courseData.sections.length > 0) ? (
                                                        <div className="courses-faq-items">
                                                            <div className="accordion" id="accordionExample">
                                                                {courseData.sections.map((section, index) => (
                                                                    <div key={section.id} className="accordion-item">
                                                                        <h2 className="accordion-header" id={`heading${index}`}>
                                                                            <button 
                                                                                className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`} 
                                                                                type="button"
                                                                                data-bs-toggle="collapse"
                                                                                data-bs-target={`#collapse${index}`}
                                                                                aria-expanded={index === 0 ? "true" : "false"}
                                                                                aria-controls={`collapse${index}`}>
                                                                                {section.title}
                                                                            </button>
                                                                        </h2>
                                                                        <div 
                                                                            id={`collapse${index}`}
                                                                            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                                            aria-labelledby={`heading${index}`}
                                                                            data-bs-parent="#accordionExample">
                                                                            <div className="accordion-body">
                                                                                {section.description && <p>{section.description}</p>}
                                                                                <ul>
                                                                                    {(section.lessons || []).map((lesson: any) => (
                                                                                        <li key={lesson.id}>
                                                                                            <span>
                                                                                                <i className="fas fa-file-alt"></i>
                                                                                                {lesson.title}
                                                                                            </span>
                                                                                            <span>
                                                                                                <i className="far fa-clock"></i> ({lesson.duration_minutes} 分钟)
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
                                                                        <button className="accordion-button" type="button"
                                                                                data-bs-toggle="collapse"
                                                                                data-bs-target="#collapseOne"
                                                                                aria-expanded="true"
                                                                                aria-controls="collapseOne">
                                                                            第一阶段：听力阅读专项训练
                                                                        </button>
                                                                    </h2>
                                                                    <div id="collapseOne"
                                                                         className="accordion-collapse collapse show"
                                                                         aria-labelledby="headingOne"
                                                                         data-bs-parent="#accordionExample">
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
                                                                        <button className="accordion-button collapsed"
                                                                                type="button" data-bs-toggle="collapse"
                                                                                data-bs-target="#collapseTwo"
                                                                                aria-expanded="false"
                                                                                aria-controls="collapseTwo">
                                                                            第二阶段：口语写作高分冲刺
                                                                        </button>
                                                                    </h2>
                                                                    <div id="collapseTwo"
                                                                         className="accordion-collapse collapse"
                                                                         aria-labelledby="headingTwo"
                                                                         data-bs-parent="#accordionExample">
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
                                                                        <button className="accordion-button collapsed"
                                                                                type="button" data-bs-toggle="collapse"
                                                                                data-bs-target="#collapsethree"
                                                                                aria-expanded="false"
                                                                                aria-controls="collapsethree">
                                                                            第三阶段：考前冲刺强化
                                                                        </button>
                                                                    </h2>
                                                                    <div id="collapsethree"
                                                                         className="accordion-collapse collapse"
                                                                         aria-labelledby="headingthree"
                                                                         data-bs-parent="#accordionExample">
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
                                            <div id="Instructors" className="tab-pane fade">
                                                <div className="instructors-items">
                                                    <h3>授课教师</h3>
                                                    {(courseData?.teacher_data && courseData.teacher_data.length > 0) ? (
                                                        courseData.teacher_data.map((teacher) => (
                                                            <div key={teacher.id} className="instructors-box-items">
                                                                <div className="thumb">
                                                                    <img src={teacher.photo || "/assets/img/courses/instructors-1.png"} alt="img"/>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>{teacher.name}</h4>
                                                                    <span>{teacher.title}</span>
                                                                    <p>{teacher.bio}</p>
                                                                    {teacher.detailed_bio && (
                                                                        <div dangerouslySetInnerHTML={{ __html: teacher.detailed_bio }} />
                                                                    )}
                                                                    <div className="social-icon">
                                                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                                                        <a href="#"><i className="fab fa-dribbble"></i></a>
                                                                        <a href="#"><i className="fab fa-behance"></i></a>
                                                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <>
                                                            <div className="instructors-box-items">
                                                                <div className="thumb">
                                                                    <img src="/assets/img/courses/instructors-1.png" alt="img"/>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>考官 ABLE</h4>
                                                                    <span>现任TEF/TCF/DELF考官</span>
                                                                    <p>
                                                                        累计审核1000+份试卷，备课极其仔细，深受学员好评。擅长针对英语薄弱、法语基础较弱的学员进行专项辅导，
                                                                        教学方法灵活多样，能够快速帮助学员找到适合的学习方法。
                                                                    </p>
                                                                    <div className="social-icon">
                                                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                                                        <a href="#"><i className="fab fa-dribbble"></i></a>
                                                                        <a href="#"><i className="fab fa-behance"></i></a>
                                                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="instructors-box-items style-2">
                                                                <div className="thumb">
                                                                    <img src="/assets/img/courses/instructors-2.png" alt="img"/>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>前任考官 Selene LI</h4>
                                                                    <span>DALF C2持有者，前任TCF考官</span>
                                                                    <p>
                                                                        曾在法国担任记者，具有丰富的法语实际应用经验和跨文化交际能力。教学经验丰富，善于因材施教，
                                                                        特别擅长帮助中国学员理解法语思维模式。
                                                                    </p>
                                                                    <div className="social-icon">
                                                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                                                        <a href="#"><i className="fab fa-dribbble"></i></a>
                                                                        <a href="#"><i className="fab fa-behance"></i></a>
                                                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            <div id="Reviews" className="tab-pane fade">
                                                <div className="courses-reviews-items">
                                                    <h3>学员评价</h3>
                                                    {(courseData?.featured_reviews && courseData.featured_reviews.length > 0) ? (
                                                        <div className="courses-reviews-box-items">
                                                            <div className="courses-reviews-box">
                                                                <div className="reviews-box">
                                                                    <h2><span className="count">{courseData.rating || 4.9}</span></h2>
                                                                    <div className="star">
                                                                        {[...Array(5)].map((_, i) => (
                                                                            <i key={i} className={`fas fa-star ${i < (courseData.rating || 5) ? '' : 'color-2'}`}></i>
                                                                        ))}
                                                                    </div>
                                                                    <p>{courseData.rating_count || 143}+ 学员评价</p>
                                                                </div>
                                                            </div>
                                                            {courseData.featured_reviews.map((review) => (
                                                                <div key={review.id} className="instructors-box-items">
                                                                    <div className="thumb">
                                                                        <img src={review.student_photo || "FCImage/Testimonial-1.png"} alt="img"/>
                                                                    </div>
                                                                    <div className="content">
                                                                        <h4>{review.student_name}</h4>
                                                                        <span>{review.student_profession}</span>
                                                                        <div className="star">
                                                                            {[...Array(5)].map((_, i) => (
                                                                                <i key={i} className={`fas fa-star ${i < review.rating ? '' : 'color-2'}`}></i>
                                                                            ))}
                                                                        </div>
                                                                        <p>"{review.content}"</p>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <div className="courses-reviews-box-items">
                                                            <div className="courses-reviews-box">
                                                                <div className="reviews-box">
                                                                    <h2><span className="count">4.9</span></h2>
                                                                    <div className="star">
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                    </div>
                                                                    <p>143+ 学员评价</p>
                                                                </div>
                                                                <div className="reviews-ratting-right">
                                                                    <div className="reviews-ratting-item">
                                                                        <div className="star">
                                                                            <i className="fas fa-star"></i>
                                                                            <i className="fas fa-star"></i>
                                                                            <i className="fas fa-star"></i>
                                                                            <i className="fas fa-star"></i>
                                                                            <i className="fas fa-star"></i>
                                                                        </div>
                                                                        <div className="progress">
                                                                            <div className="progress-value style-two"></div>
                                                                        </div>
                                                                        <span>(126)</span>
                                                                    </div>
                                                                    <div className="reviews-ratting-item">
                                                                        <div className="star">
                                                                            <i className="fas fa-star"></i>
                                                                            <i className="fas fa-star"></i>
                                                                            <i className="fas fa-star"></i>
                                                                            <i className="fas fa-star"></i>
                                                                            <i className="fas fa-star color-2"></i>
                                                                        </div>
                                                                        <div className="progress">
                                                                            <div
                                                                                className="progress-value style-three"></div>
                                                                        </div>
                                                                        <span>(15)</span>
                                                                    </div>
                                                                    <div className="reviews-ratting-item">
                                                                        <div className="star">
                                                                            <i className="fas fa-star"></i>
                                                                            <i className="fas fa-star"></i>
                                                                            <i className="fas fa-star"></i>
                                                                            <i className="fas fa-star color-2"></i>
                                                                            <i className="fas fa-star color-2"></i>
                                                                        </div>
                                                                        <div className="progress">
                                                                            <div
                                                                                className="progress-value style-three"></div>
                                                                        </div>
                                                                        <span>(2)</span>
                                                                    </div>
                                                                    <div className="reviews-ratting-item">
                                                                        <div className="star">
                                                                            <i className="fas fa-star"></i>
                                                                            <i className="fas fa-star"></i>
                                                                            <i className="fas fa-star color-2"></i>
                                                                            <i className="fas fa-star color-2"></i>
                                                                            <i className="fas fa-star color-2"></i>
                                                                        </div>
                                                                        <div className="progress">
                                                                            <div
                                                                                className="progress-value style-four"></div>
                                                                        </div>
                                                                        <span>(0)</span>
                                                                    </div>
                                                                    <div className="reviews-ratting-item">
                                                                        <div className="star">
                                                                            <i className="fas fa-star"></i>
                                                                            <i className="fas fa-star color-2"></i>
                                                                            <i className="fas fa-star color-2"></i>
                                                                            <i className="fas fa-star color-2"></i>
                                                                            <i className="fas fa-star color-2"></i>
                                                                        </div>
                                                                        <div className="progress">
                                                                            <div
                                                                                className="progress-value style-five"></div>
                                                                        </div>
                                                                        <span>(0)</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="instructors-box-items">
                                                                <div className="thumb">
                                                                    <img src="FCImage/Testimonial-1.png" alt="img"/>
                                                                </div>
                                                                <div className="content">
                                                                    <h4>张同学</h4>
                                                                    <span>软件工程师</span>
                                                                    <div className="star">
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                        <i className="fas fa-star"></i>
                                                                    </div>
                                                                    <p>
                                                                        "报名CLB7刷题班后，考官ABLE的教学让我受益匪浅。真题训练真的很有效，考试的时候遇到了很多原题，最终顺利拿到CLB7分数！"
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
                                            <h3 className="courses-title">{courseData?.name || "CLB7冲刺"}</h3>
                                            <h4 className="topic-title">{courseData?.subtitle || "高分冲刺保障"}</h4>
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
                                            <h3>咨询价格</h3>
                                            <p>
                                                {courseData?.price_text || "现任考官直授的CLB7冲刺班，98%通过率保障，助您快速达到移民要求分数。"}
                                            </p>
                                            <div className="courses-btn">
                                                <Link href="/contact" className="theme-btn">{courseData?.button_contact_text || "立即咨询"}</Link>
                                                <Link href="/contact" className="theme-btn style-2">{courseData?.button_secondary_text || "预约试听"}</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="courses-category-items">
                                        <h5>课程包含：</h5>
                                        <ul>
                                            <li>
                                            <span>
                                                <i className="far fa-chalkboard-teacher"></i>
                                                授课教师
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
                                                课程时长
                                            </span>
                                                <span className="text">{courseData?.hours ? `${courseData.hours}课时` : "120课时"}</span>
                                            </li>
                                            <li>
                                            <span>
                                                <i className="far fa-calendar-alt"></i>
                                                课程周期
                                            </span>
                                                <span className="text">{courseData?.duration_weeks || "8-12周"}</span>
                                            </li>
                                            <li>
                                            <span>
                                                <i className="far fa-user"></i>
                                                适合学员
                                            </span>
                                                <span className="text">{courseData?.required_level || "B2水平"}</span>
                                            </li>
                                            <li>
                                            <span>
                                                <i className="far fa-globe"></i>
                                                授课语言
                                            </span>
                                                <span className="text">{courseData?.language_of_instruction || "法语+中文"}</span>
                                            </li>
                                            <li>
                                            <span>
                                                <i className="far fa-target"></i>
                                                目标分数
                                            </span>
                                                <span className="text">{courseData?.target_level || "CLB7 (移民达标)"}</span>
                                            </li>
                                            <li>
                                            <span>
                                                <i className="far fa-signal-alt"></i>
                                                通过率
                                            </span>
                                                <span className="text">{courseData?.pass_rate || "98%"}</span>
                                            </li>
                                            <li>
                                            <span>
                                                <i className="fal fa-medal"></i>
                                                课程特色
                                            </span>
                                                <span className="text">{courseData?.special_features || "100%真题训练"}</span>
                                            </li>
                                        </ul>
                                        <a className="share-btn" href="#" onClick={(e) => { e.preventDefault(); copyToClipboard(); }}>
                                            <i className="fas fa-share"></i> 分享此课程
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