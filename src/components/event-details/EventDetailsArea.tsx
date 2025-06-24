"use client"
import Timer from '@/common/Timer';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEvent } from '@/hooks/useEvents';
import { 
    getEventTranslation, 
    formatEventDate,
    formatEventTime,
    getEventPrice,
    getEventDiscount,
    getEventTypeLabel,
    getLocationTypeLabel,
    isRegistrationOpen,
    getDaysUntilEvent
} from '@/utils/eventUtils';
import { MEDIA_BASE_URL } from '../../../constants/api';

const MyTimer = dynamic(() => import("../../common/Timer"), {ssr: false});

interface EventDetailsAreaProps {
    eventId: number | null;
}

const EventDetailsArea = ({ eventId }: EventDetailsAreaProps) => {
    const { currentLanguage } = useLanguage();
    const { event, loading, error } = useEvent(eventId || 0);

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

    if (loading) {
        return (
            <section className="event-details-section section-padding pt-0">
                <div className="container">
                    <div className="text-center py-5">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">{getTranslatedText('加载中...', 'Loading...', 'Chargement...', '載入中...')}</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (error || !event) {
        return (
            <section className="event-details-section section-padding pt-0">
                <div className="container">
                    <div className="alert alert-danger text-center">
                        {error || getTranslatedText('未找到活动', 'Event not found', 'Événement introuvable', '未找到活動')}
                    </div>
                    <div className="text-center">
                        <Link href="/event" className="theme-btn">
                            {getTranslatedText('返回活动列表', 'Back to Events', 'Retour aux Événements', '返回活動列表')}
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    const eventStartDate = new Date(event.start_date);
    const eventEndDate = new Date(event.end_date);
    const registrationDeadline = event.registration_deadline ? new Date(event.registration_deadline) : null;
    const daysUntilEvent = getDaysUntilEvent(event);

    return (
        <>
            <section className="event-details-section section-padding pt-0">
                <div className="container">
                    <div className="event-details-wrapper">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="event-details-items">
                                    <div className="details-image">
                                        <img 
                                            src={event.image_detail 
                                                ? event.image_detail.startsWith('http') 
                                                    ? event.image_detail 
                                                    : `${MEDIA_BASE_URL}/media/${event.image_detail}` 
                                                : event.image 
                                                    ? event.image.startsWith('http')
                                                        ? event.image
                                                        : `${MEDIA_BASE_URL}/media/${event.image}`
                                                    : "/FCImage/EvenDetail.png"
                                            } 
                                            alt={getEventTranslation(event, 'title', currentLanguage)}
                                        />
                                    </div>
                                    <div className="event-details-content">
                                        <h3>{getTranslatedText('活动详情', 'Event Details', 'Détails de l\'Événement', '活動詳情')}</h3>
                                        
                                        <div 
                                            className="mb-4"
                                            dangerouslySetInnerHTML={{ 
                                                __html: getEventTranslation(event, 'description', currentLanguage) 
                                            }}
                                        />

                                        {event.features && (
                                            <>
                                                <h3>{getTranslatedText('活动亮点', 'Event Highlights', 'Points Forts', '活動亮點')}</h3>
                                                <div className="mb-4">
                                                    {getEventTranslation(event, 'features', currentLanguage)
                                                        .split(',')
                                                        .map((feature, index) => (
                                                            <div key={index} className="mb-2">
                                                                <i className="fas fa-check-circle text-success me-2"></i>
                                                                {feature.trim()}
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </>
                                        )}

                                        {event.target_audience && (
                                            <>
                                                <h3>{getTranslatedText('目标人群', 'Target Audience', 'Public Cible', '目標人群')}</h3>
                                                <p className="mb-4">
                                                    {getEventTranslation(event, 'target_audience', currentLanguage)}
                                                </p>
                                            </>
                                        )}

                                        {event.registration_note && (
                                            <>
                                                <h3>{getTranslatedText('报名须知', 'Registration Notes', 'Notes d\'Inscription', '報名須知')}</h3>
                                                <p className="mb-4">
                                                    {getEventTranslation(event, 'registration_note', currentLanguage)}
                                                </p>
                                            </>
                                        )}

                                        {event.instructor_name && (
                                            <>
                                                <h3>{getTranslatedText('授课教师', 'Instructor', 'Instructeur', '授課教師')}</h3>
                                                <div className="instructor-info mb-4">
                                                    <h4>{getEventTranslation(event, 'instructor_name', currentLanguage)}</h4>
                                                    <p className="text-muted">{getEventTranslation(event, 'instructor_title', currentLanguage)}</p>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="event-details-information sticky-style">
                                    <h4>{getTranslatedText('活动信息', 'Event Information', 'Informations sur l\'Événement', '活動信息')}</h4>
                                    <ul className="information-list">
                                        <li>
                                            <span>
                                                <i className="fas fa-calendar-alt"></i>
                                                {getTranslatedText('开始日期', 'Start Date', 'Date de Début', '開始日期')}
                                            </span>
                                            <span className="text">{formatEventDate(event.start_date, currentLanguage)}</span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fas fa-calendar-alt"></i>
                                                {getTranslatedText('结束日期', 'End Date', 'Date de Fin', '結束日期')}
                                            </span>
                                            <span className="text">{formatEventDate(event.end_date, currentLanguage)}</span>
                                        </li>
                                        {registrationDeadline && (
                                            <li>
                                                <span>
                                                    <i className="fas fa-calendar-alt"></i>
                                                    {getTranslatedText('报名截止', 'Registration Deadline', 'Date Limite d\'Inscription', '報名截止')}
                                                </span>
                                                <span className="text">{formatEventDate(event.registration_deadline!, currentLanguage)}</span>
                                            </li>
                                        )}
                                        <li>
                                            <span>
                                                <i className="far fa-clock"></i>
                                                {getTranslatedText('开始时间', 'Start Time', 'Heure de Début', '開始時間')}
                                            </span>
                                            <span className="text">{formatEventTime(event.start_date, currentLanguage)}</span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="far fa-map-marker-alt"></i>
                                                {getTranslatedText('活动地点', 'Location', 'Lieu', '活動地點')}
                                            </span>
                                            <span className="text">
                                                {getLocationTypeLabel(event.location_type, currentLanguage)}
                                                {event.location_address && (
                                                    <><br/><small>{getEventTranslation(event, 'location_address', currentLanguage)}</small></>
                                                )}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="far fa-user"></i>
                                                {getTranslatedText('主办方', 'Organizer', 'Organisateur', '主辦方')}
                                            </span>
                                            <span className="text">{getEventTranslation(event, 'organizer', currentLanguage)}</span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="far fa-tag"></i>
                                                {getTranslatedText('活动类型', 'Event Type', 'Type d\'Événement', '活動類型')}
                                            </span>
                                            <span className="text">{getEventTypeLabel(event.event_type, currentLanguage)}</span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className={event.is_free ? "far fa-gift" : "far fa-dollar-sign"}></i>
                                                {getTranslatedText('费用', 'Fee', 'Frais', '費用')}
                                            </span>
                                            <span className={`text ${event.is_free ? 'color-2' : ''}`}>
                                                {getEventPrice(event, currentLanguage)}
                                                {!event.is_free && getEventDiscount(event, currentLanguage) && (
                                                    <><br/><small className="color-2">{getEventDiscount(event, currentLanguage)}</small></>
                                                )}
                                            </span>
                                        </li>
                                        {daysUntilEvent > 0 && (
                                            <li>
                                                <span>
                                                    <i className="far fa-clock"></i>
                                                    {getTranslatedText('倒计时', 'Countdown', 'Compte à Rebours', '倒計時')}
                                                </span>
                                                <span className="text color-3">
                                                    {daysUntilEvent} {getTranslatedText('天', 'days', 'jours', '天')}
                                                </span>
                                            </li>
                                        )}
                                    </ul>
                                    
                                    {isRegistrationOpen(event) ? (
                                        <Link href={event.registration_link || "/contact"} className="theme-btn">
                                            {event.is_free 
                                                ? getTranslatedText('免费报名', 'Register Free', 'Inscription Gratuite', '免費報名')
                                                : getTranslatedText('立即报名咨询', 'Register Now', 'S\'inscrire Maintenant', '立即報名諮詢')
                                            }
                                        </Link>
                                    ) : (
                                        <button className="theme-btn disabled" disabled>
                                            {getTranslatedText('报名已截止', 'Registration Closed', 'Inscription Fermée', '報名已截止')}
                                        </button>
                                    )}
                                    
                                    {event.contact_phone && (
                                        <div className="contact-info mt-3">
                                            <small>
                                                <i className="fas fa-phone me-1"></i>
                                                {getTranslatedText('咨询电话', 'Contact Phone', 'Téléphone', '諮詢電話')}: 
                                                <a href={`tel:${event.contact_phone}`} className="ms-1">{event.contact_phone}</a>
                                            </small>
                                        </div>
                                    )}
                                    
                                    {event.contact_email && (
                                        <div className="contact-info mt-2">
                                            <small>
                                                <i className="fas fa-envelope me-1"></i>
                                                {getTranslatedText('联系邮箱', 'Contact Email', 'Email', '聯繫郵箱')}: 
                                                <a href={`mailto:${event.contact_email}`} className="ms-1">{event.contact_email}</a>
                                            </small>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventDetailsArea;