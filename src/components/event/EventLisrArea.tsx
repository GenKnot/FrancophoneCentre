"use client"
import NiceSelect from '@/ui/NiceSelect';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEvents } from '@/hooks/useEvents';
import { 
    getEventTranslation, 
    formatEventDate,
    getEventPrice,
    getEventDiscount,
    getEventTypeLabel,
    getLocationTypeLabel,
    isRegistrationOpen
} from '@/utils/eventUtils';
import { MEDIA_BASE_URL } from '../../../constants/api';

const EventLisrArea = () => {
    const { currentLanguage } = useLanguage();
    const { events, loading, error } = useEvents();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedType, setSelectedType] = useState('');

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

    const filteredEvents = events.filter(event => {
        const titleMatch = getEventTranslation(event, 'title', currentLanguage)
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const descriptionMatch = getEventTranslation(event, 'short_description', currentLanguage)
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        
        const searchMatch = !searchTerm || titleMatch || descriptionMatch;
        const locationMatch = !selectedLocation || event.location_type === selectedLocation;
        const typeMatch = !selectedType || event.event_type === selectedType;
        
        return searchMatch && locationMatch && typeMatch;
    });

    const handleLocationChange = (e: any) => {
        setSelectedLocation(e.value === "01" ? "" : 
            e.value === "02" ? "montreal" :
            e.value === "03" ? "saint_jean" :
            e.value === "04" ? "online" : "");
    };

    const handleTypeChange = (e: any) => {
        setSelectedType(e.value === "01" ? "" :
            e.value === "02" ? "limited_offer" :
            e.value === "03" ? "free_trial" :
            e.value === "04" ? "group_registration" : "");
    };

    if (loading) {
        return (
            <section className="event-list-section fix section-padding pt-0">
                <div className="container">
                    <div className="event-list-wrapper">
                        <div className="text-center py-5">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">{getTranslatedText('加载中...', 'Loading...', 'Chargement...', '載入中...')}</span>
                            </div>
                            <p className="mt-3">{getTranslatedText('正在加载活动...', 'Loading events...', 'Chargement des événements...', '正在載入活動...')}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="event-list-section fix section-padding pt-0">
                <div className="container">
                    <div className="event-list-wrapper">
                        <div className="alert alert-danger text-center">
                            {getTranslatedText('加载活动时出错', 'Error loading events', 'Erreur lors du chargement des événements', '載入活動時出錯')}: {error}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="event-list-section fix section-padding pt-0">
                <div className="container">
                    <div className="event-list-wrapper">
                        <div className="event-list-top-area">
                            <div className="search-widget">
                                <input 
                                    type="text" 
                                    placeholder={getTranslatedText('搜索活动', 'Search Events', 'Rechercher Événements', '搜索活動')}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <div className="sub-icon"><i className="fal fa-search"></i></div>
                            </div>
                            <div className="form-clt">
                                <NiceSelect
                                    className="category"
                                    options={[
                                        {value: "01", text: getTranslatedText("活动地点", "Event Location", "Lieu d'Événement", "活動地點")},
                                        {value: "02", text: getTranslatedText("蒙特利尔", "Montreal", "Montréal", "蒙特利爾")},
                                        {value: "03", text: getTranslatedText("圣让校区", "Saint-Jean Campus", "Campus Saint-Jean", "聖讓校區")},
                                        {value: "04", text: getTranslatedText("在线活动", "Online Event", "Événement en Ligne", "在線活動")},
                                    ]}
                                    defaultCurrent={0}
                                    onChange={handleLocationChange}
                                    name=""
                                    placeholder=""/>
                            </div>
                            <div className="form-clt">
                                <NiceSelect
                                    className="category"
                                    options={[
                                        {value: "01", text: getTranslatedText("活动类型", "Event Type", "Type d'Événement", "活動類型")},
                                        {value: "02", text: getTranslatedText("限时优惠", "Limited Offer", "Offre Limitée", "限時優惠")},
                                        {value: "03", text: getTranslatedText("免费试听", "Free Trial", "Essai Gratuit", "免費試聽")},
                                        {value: "04", text: getTranslatedText("团报活动", "Group Registration", "Inscription de Groupe", "團報活動")},
                                    ]}
                                    defaultCurrent={0}
                                    onChange={handleTypeChange}
                                    name=""
                                    placeholder=""/>
                            </div>
                            <div className="event-button-top">
                                <button type="submit" className="theme-btn">
                                    {getTranslatedText('查找活动', 'Find Events', 'Trouver Événements', '查找活動')}
                                </button>
                            </div>
                        </div>

                        {filteredEvents.length === 0 ? (
                            <div className="text-center py-5">
                                <h4>{getTranslatedText('暂无活动', 'No Events Found', 'Aucun Événement Trouvé', '暫無活動')}</h4>
                                <p>{getTranslatedText('请尝试调整搜索条件或稍后再试', 'Please try adjusting your search criteria or check back later', 'Veuillez ajuster vos critères de recherche ou revenir plus tard', '請嘗試調整搜索條件或稍後再試')}</p>
                            </div>
                        ) : (
                            filteredEvents.map((event) => {
                                const eventDate = new Date(event.start_date);
                                const day = eventDate.getDate();
                                const month = eventDate.toLocaleDateString(currentLanguage === 'fr' ? 'fr-FR' : 'en-US', { month: 'short' });
                                const year = eventDate.getFullYear();
                                
                                return (
                                    <div key={event.id} className="event-list-items">
                                        <div className="event-content">
                                            <div className="content">
                                                <div className="date">
                                                    {event.is_free ? (
                                                        <>
                                                            <h2>{getTranslatedText('免费', 'Free', 'Gratuit', '免費')}</h2>
                                                            <span>{getEventTypeLabel(event.event_type, currentLanguage)}</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <h2>{day}</h2>
                                                            <span>{month} {year}</span>
                                                        </>
                                                    )}
                                                </div>
                                                <div className="title-text">
                                                    <h4>
                                                        <Link href={`/event-details?id=${event.id}`}>
                                                            {getEventTranslation(event, 'title', currentLanguage)}
                                                        </Link>
                                                    </h4>
                                                    <ul className="post-time">
                                                        <li>
                                                            <i className="far fa-user"></i>
                                                            {getEventTranslation(event, 'organizer', currentLanguage)}
                                                        </li>
                                                        <li>
                                                            <i className="far fa-map-marker-alt"></i>
                                                            {getLocationTypeLabel(event.location_type, currentLanguage)}
                                                        </li>
                                                        <li>
                                                            <i className={event.is_free ? "far fa-gift" : "far fa-percent"}></i>
                                                            {event.is_free 
                                                                ? getTranslatedText('完全免费', 'Completely Free', 'Complètement Gratuit', '完全免費')
                                                                : (getEventDiscount(event, currentLanguage) || getEventPrice(event, currentLanguage))
                                                            }
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="event-image">
                                            <img 
                                                src={event.image 
                                                    ? event.image.startsWith('http')
                                                        ? event.image
                                                        : `${MEDIA_BASE_URL}/media/${event.image}`
                                                    : "/FCImage/Even-5.png"
                                                } 
                                                alt={getEventTranslation(event, 'title', currentLanguage)} 
                                            />
                                        </div>
                                        <div className="event-btn">
                                            <Link 
                                                href={`/event-details?id=${event.id}`} 
                                                className={`theme-btn ${!isRegistrationOpen(event) ? 'disabled' : ''}`}
                                            >
                                                {event.is_free 
                                                    ? getTranslatedText('免费领取', 'Get Free', 'Obtenir Gratuitement', '免費領取')
                                                    : isRegistrationOpen(event)
                                                        ? getTranslatedText('立即报名', 'Register Now', 'S\'inscrire Maintenant', '立即報名')
                                                        : getTranslatedText('报名已截止', 'Registration Closed', 'Inscription Fermée', '報名已截止')
                                                }
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })
                        )}

                        <div className="event-button">
                            <Link href="/contact" className="theme-btn">
                                {getTranslatedText('联系我们了解更多', 'Contact Us for More', 'Contactez-nous pour Plus', '聯繫我們了解更多')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventLisrArea;