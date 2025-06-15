// Dev
// export const API_BASE_URL = 'http://127.0.0.1:8000';

export const API_BASE_URL = 'https://api.qfec.ca';

export const ENDPOINTS = {
    SITE_CONFIG: {
        LIST: `${API_BASE_URL}/api/site-config/`,
        DETAIL: (id: number) => `${API_BASE_URL}/api/site-config/${id}/`,
    },
    HERO_SLIDES: {
        LIST: `${API_BASE_URL}/api/hero-slides/`,
        DETAIL: (id: number) => `${API_BASE_URL}/api/hero-slides/${id}/`,
    },
    FEATURES: {
        LIST: `${API_BASE_URL}/api/features/`,
        DETAIL: (id: number) => `${API_BASE_URL}/api/features/${id}/`,
    },
    COURSES: {
        LIST: `${API_BASE_URL}/api/courses/`,
        DETAIL: (id: number) => `${API_BASE_URL}/api/courses/${id}/`,
        COURSE_DETAIL: (id: string) => `${API_BASE_URL}/api/course/${id}/`,
        DATA: `${API_BASE_URL}/api/courses-data/`,
    },
    TEACHERS: {
        LIST: `${API_BASE_URL}/api/teachers/`,
        DETAIL: (id: number) => `${API_BASE_URL}/api/teachers/${id}/`,
    },
    EVENTS: {
        LIST: `${API_BASE_URL}/api/events/`,
        DETAIL: (id: number) => `${API_BASE_URL}/api/events/${id}/`,
        DATA: `${API_BASE_URL}/api/events-data/`,
    },
    NEWS: {
        LIST: `${API_BASE_URL}/api/news/`,
        DETAIL: (id: number) => `${API_BASE_URL}/api/news/${id}/`,
        DATA: `${API_BASE_URL}/api/news-data/`,
    },
    TESTIMONIALS: {
        LIST: `${API_BASE_URL}/api/testimonials/`,
        DETAIL: (id: number) => `${API_BASE_URL}/api/testimonials/${id}/`,
    },
    TRANSLATIONS: {
        GET: `${API_BASE_URL}/api/translations/`,
        SAVE: `${API_BASE_URL}/api/translations/save/`,
    },
    LANGUAGES: {
        LIST: `${API_BASE_URL}/api/languages/`,
    },
    HOMEPAGE: {
        DATA: `${API_BASE_URL}/api/homepage/`,
    },
    ABOUT: {
        DATA: `${API_BASE_URL}/api/about-data/`,
    },
    CONTACT: {
        DATA: `${API_BASE_URL}/api/contact-page/`,
        SUBMIT: `${API_BASE_URL}/api/contact/`,
    },
    NEWSLETTER: {
        SUBSCRIBE: `${API_BASE_URL}/api/newsletter/subscribe/`,
    },
};