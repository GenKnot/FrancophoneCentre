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
    teachers: any[];
    sections: any[];
    featured_reviews: any[];
    related_courses: any[];
}

interface CoursesDetailsAreaProps {
    courseData: CourseDetailData;
}

const CoursesDetailsArea: React.FC<CoursesDetailsAreaProps> = ({ courseData }) => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [currentUrl, setCurrentUrl] = useState('');

    const copyToClipboard = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('URL copied to clipboard!');
        });
    };

    React.useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    return (
        <>
            <VideoPopup
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={courseData.video_url || "_YFzgnuiMlk?si=kgaOPq2FyoaUmT7k"}
            />
            <section className="courses-details-section section-padding pt-0">
                <div className="container">
                    <div className="courses-details-wrapper">
                        <div className="row g-4">
                            <div className="col-lg-8">
                                <div className="courses-details-items">
                                    <div className="courses-image">
                                        <img src={courseData.image_detail_large || "FCImage/Coures-10.png"} alt={courseData.name} />
                                        {courseData.video_url && (
                                            <a
                                                onClick={() => setIsVideoOpen(true)}
                                                style={{cursor: "pointer"}}
                                                className="video-btn ripple video-popup">
                                                <i className="fas fa-play"></i>
                                            </a>
                                        )}
                                    </div>
                                    <div className="courses-details-content">
                                        <ul className="nav">
                                            <li className="nav-item wow fadeInUp" data-wow-delay=".3s">
                                                <a href="#Course" data-bs-toggle="tab" className="nav-link active">
                                                    Course Information
                                                </a>
                                            </li>
                                            <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
                                                <a href="#Curriculum" data-bs-toggle="tab" className="nav-link">
                                                    Curriculum
                                                </a>
                                            </li>
                                            <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
                                                <a href="#Instructors" data-bs-toggle="tab" className="nav-link">
                                                    Instructors
                                                </a>
                                            </li>
                                            <li className="nav-item wow fadeInUp" data-wow-delay=".5s">
                                                <a href="#Reviews" data-bs-toggle="tab" className="nav-link bb-none">
                                                    Reviews
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div id="Course" className="tab-pane fade show active">
                                                <div className="description-content">
                                                    <h3>Course Introduction</h3>
                                                    <div dangerouslySetInnerHTML={{ __html: courseData.course_introduction || courseData.description }} />
                                                    
                                                    {courseData.course_benefits && (
                                                        <>
                                                            <h3 className="mt-5">What You Will Learn</h3>
                                                            <div dangerouslySetInnerHTML={{ __html: courseData.course_benefits }} />
                                                        </>
                                                    )}
                                                    
                                                    {courseData.course_advantages && (
                                                        <>
                                                            <h3 className="mt-5">Course Advantages</h3>
                                                            <div dangerouslySetInnerHTML={{ __html: courseData.course_advantages }} />
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            <div id="Curriculum" className="tab-pane fade">
                                                <div className="course-curriculum-items">
                                                    <h3>Course Curriculum</h3>
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
                                                                                {section.lessons.map((lesson: any) => (
                                                                                    <li key={lesson.id}>
                                                                                        <span>
                                                                                            <i className="fas fa-file-alt"></i>
                                                                                            {lesson.title}
                                                                                        </span>
                                                                                        <span>
                                                                                            <i className="far fa-clock"></i> ({lesson.duration_minutes} minutes)
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
                                                </div>
                                            </div>
                                            <div id="Instructors" className="tab-pane fade">
                                                <div className="instructors-content">
                                                    <h3>Course Instructors</h3>
                                                    <div className="row g-4">
                                                        {courseData.teachers.map((teacher) => (
                                                            <div key={teacher.id} className="col-lg-6">
                                                                <div className="instructor-item">
                                                                    <div className="instructor-image">
                                                                        <img src={teacher.photo} alt={teacher.name} />
                                                                    </div>
                                                                    <div className="instructor-content">
                                                                        <h4>{teacher.name}</h4>
                                                                        <p className="position">{teacher.title}</p>
                                                                        <p>{teacher.bio}</p>
                                                                        {teacher.detailed_bio && (
                                                                            <div dangerouslySetInnerHTML={{ __html: teacher.detailed_bio }} />
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="Reviews" className="tab-pane fade">
                                                <div className="reviews-content">
                                                    <h3>Student Reviews</h3>
                                                    <div className="row g-4">
                                                        {courseData.featured_reviews.map((review) => (
                                                            <div key={review.id} className="col-lg-12">
                                                                <div className="review-item">
                                                                    <div className="review-header">
                                                                        <div className="reviewer-info">
                                                                            {review.student_photo && (
                                                                                <img src={review.student_photo} alt={review.student_name} />
                                                                            )}
                                                                            <div>
                                                                                <h5>{review.student_name}</h5>
                                                                                {review.student_profession && (
                                                                                    <p>{review.student_profession}</p>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                        <div className="rating">
                                                                            {[...Array(5)].map((_, i) => (
                                                                                <i key={i} className={`fas fa-star ${i < review.rating ? 'active' : ''}`}></i>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                    <p>{review.content}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="courses-details-sidebar">
                                    <div className="courses-sidebar-widget">
                                        <div className="courses-sidebar-content">
                                            <div className="courses-image">
                                                <img src={courseData.image_detail_small || courseData.image_listing} alt={courseData.name} />
                                            </div>
                                            <div className="courses-content">
                                                <h3>{courseData.name}</h3>
                                                {courseData.subtitle && <p>{courseData.subtitle}</p>}
                                                <div className="price-section">
                                                    {courseData.price ? (
                                                        <h4 className="price">${courseData.price}</h4>
                                                    ) : (
                                                        <h4 className="price">{courseData.price_text || 'Contact for Price'}</h4>
                                                    )}
                                                </div>
                                                <div className="courses-info">
                                                    <ul>
                                                        <li>
                                                            <span>Instructors:</span>
                                                            <span>{courseData.teachers.map(t => t.name).join(', ') || 'ABLE Examiner'}</span>
                                                        </li>
                                                        <li>
                                                            <span>Duration:</span>
                                                            <span>{courseData.hours ? `${courseData.hours} hours` : '120 hours'}</span>
                                                        </li>
                                                        <li>
                                                            <span>Course Period:</span>
                                                            <span>{courseData.duration_weeks || '8-12 weeks'}</span>
                                                        </li>
                                                        <li>
                                                            <span>Suitable for:</span>
                                                            <span>{courseData.required_level || 'B2 level'}</span>
                                                        </li>
                                                        <li>
                                                            <span>Language:</span>
                                                            <span>{courseData.language_of_instruction}</span>
                                                        </li>
                                                        <li>
                                                            <span>Target Score:</span>
                                                            <span>{courseData.target_level || 'CLB7 (Immigration Standard)'}</span>
                                                        </li>
                                                        <li>
                                                            <span>Pass Rate:</span>
                                                            <span>{courseData.pass_rate}</span>
                                                        </li>
                                                        <li>
                                                            <span>Features:</span>
                                                            <span>{courseData.special_features}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="courses-btn">
                                                    <Link href="/contact" className="theme-btn">
                                                        Contact Now
                                                    </Link>
                                                    <Link href="/courses" className="theme-btn-2">
                                                        Other Courses
                                                    </Link>
                                                </div>
                                                <div className="share-section">
                                                    <button onClick={copyToClipboard} className="share-btn">
                                                        <i className="fas fa-share-alt"></i> Share Course
                                                    </button>
                                                </div>
                                            </div>
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

export default CoursesDetailsArea;