"use client";

import {useState, useEffect} from 'react';
import {useLanguage} from '@/contexts/LanguageContext';
import { API_BASE_URL } from '../../constants/api';

interface ApiData {
    [key: string]: any;
}

interface UseApiDataReturn {
    data: ApiData | null;
    loading: boolean;
    error: string | null;
    refetch: () => void;
}

const convertLanguageForBackend = (language: string): string => {
    return language === 'zh-hans' ? 'zh-Hans' : language;
};

export const useHomepageData = (): UseApiDataReturn => {
    const [data, setData] = useState<ApiData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const {currentLanguage, isHydrated} = useLanguage();

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const backendLanguage = convertLanguageForBackend(currentLanguage);
            const response = await fetch(`${API_BASE_URL}/api/homepage/?lang=${backendLanguage}`);
            if (response.ok) {
                const result = await response.json();
                setData(result);
            } else {
                setError('Failed to fetch homepage data');
                setData(getDefaultHomepageData());
            }
        } catch (err) {
            setError('Network error occurred');
            setData(getDefaultHomepageData());
        } finally {
            setLoading(false);
        }
    };

    const getDefaultHomepageData = (): ApiData => {
        return {
            site_config: {
                site_name: 'Quebec Francophone Education Centre',
                site_description: 'Professional French education institution committed to providing students with the highest quality French education.',
                primary_color: '#AD0119',
                secondary_color: '#000000'
            },
            hero_slides: [
                {
                    id: 1,
                    title: 'Start Your French Learning Journey',
                    subtitle: 'Fast Immigration Choice',
                    description: 'Quebec Francophone Education Centre, taught directly by current TEF examiners, achieve CLB7 in 6 months, CLB5 in 4 months.',
                    button_text: 'Start Learning French Now',
                    button_link: '/courses',
                    background_image: '/assets/img/FCHero/FCHero-1.jpg',
                    is_active: true,
                    order: 1
                }
            ],
            features: [
                {
                    id: 1,
                    title: 'Current Examiners Direct Teaching',
                    description: '6 current TEF examiners personally teach, 100% restore real exam environment',
                    icon_class: 'flaticon-graduation',
                    is_active: true,
                    order: 1
                },
                {
                    id: 2,
                    title: '98% Super High Pass Rate',
                    description: 'Far exceeding industry average, 6-month CLB7 guaranteed results',
                    icon_class: 'flaticon-instructor',
                    is_active: true,
                    order: 2
                },
                {
                    id: 3,
                    title: 'French Immigration Fast Track',
                    description: 'EE project only needs 330 points, Quebec PEQ fastest 14 months immigration',
                    icon_class: 'flaticon-certficate',
                    is_active: true,
                    order: 3
                },
                {
                    id: 4,
                    title: 'Personalized Learning Path',
                    description: 'Customized course learning plan, homework for precise improvement',
                    icon_class: 'flaticon-school',
                    is_active: true,
                    order: 4
                }
            ],
            courses: [
                {
                    id: 1,
                    name: 'Basic Course Pre-A1',
                    course_type: 'basic',
                    subtitle: 'Basic Grammar and Speaking Introduction',
                    description: 'Introduction to French grammar and speaking skills for beginners.',
                    price: 680.00,
                    hours: 40,
                    level_required: 'Completed preparatory course',
                    is_featured: true,
                    is_active: true,
                    order: 1
                }
            ],
            teachers: [],
            events: [],
            testimonials: [],
            news: [],
            translations: {}
        };
    };

    useEffect(() => {
        if (isHydrated && currentLanguage) {
            fetchData();
        }
    }, [currentLanguage, isHydrated]);

    return {data, loading, error, refetch: fetchData};
};

export const useCoursesData = (courseType?: string): UseApiDataReturn => {
    const [data, setData] = useState<ApiData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const {currentLanguage, isHydrated} = useLanguage();

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const backendLanguage = convertLanguageForBackend(currentLanguage);
            let url = `${API_BASE_URL}/api/courses-page/?lang=${backendLanguage}`;
            if (courseType) {
                url += `&type=${courseType}`;
            }
            const response = await fetch(url);
            if (response.ok) {
                const result = await response.json();
                setData(result);
            } else {
                setError('Failed to fetch courses data');
                setData({courses: [], translations: {}});
            }
        } catch (err) {
            setError('Network error occurred');
            setData({courses: [], translations: {}});
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isHydrated && currentLanguage) {
            fetchData();
        }
    }, [currentLanguage, courseType, isHydrated]);

    return {data, loading, error, refetch: fetchData};
};

export const useEventsData = (): UseApiDataReturn => {
    const [data, setData] = useState<ApiData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const {currentLanguage, isHydrated} = useLanguage();

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const backendLanguage = convertLanguageForBackend(currentLanguage);
            const response = await fetch(`${API_BASE_URL}/api/events-data/?lang=${backendLanguage}`);
            if (response.ok) {
                const result = await response.json();
                setData(result);
            } else {
                setError('Failed to fetch events data');
                setData({events: [], translations: {}});
            }
        } catch (err) {
            setError('Network error occurred');
            setData({events: [], translations: {}});
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isHydrated && currentLanguage) {
            fetchData();
        }
    }, [currentLanguage, isHydrated]);

    return {data, loading, error, refetch: fetchData};
};

export const useNewsData = (): UseApiDataReturn => {
    const [data, setData] = useState<ApiData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const {currentLanguage, isHydrated} = useLanguage();

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const backendLanguage = convertLanguageForBackend(currentLanguage);
            const response = await fetch(`${API_BASE_URL}/api/news-data/?lang=${backendLanguage}`);
            if (response.ok) {
                const result = await response.json();
                setData(result);
            } else {
                setError('Failed to fetch news data');
                setData({news: [], translations: {}});
            }
        } catch (err) {
            setError('Network error occurred');
            setData({news: [], translations: {}});
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isHydrated && currentLanguage) {
            fetchData();
        }
    }, [currentLanguage, isHydrated]);

    return {data, loading, error, refetch: fetchData};
};

export const useAboutData = (): UseApiDataReturn => {
    const [data, setData] = useState<ApiData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const {currentLanguage, isHydrated} = useLanguage();

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const backendLanguage = convertLanguageForBackend(currentLanguage);
            const response = await fetch(`${API_BASE_URL}/api/about-data/?lang=${backendLanguage}`);
            if (response.ok) {
                const result = await response.json();
                setData(result);
            } else {
                setError('Failed to fetch about data');
                setData({about_content: null, translations: {}});
            }
        } catch (err) {
            setError('Network error occurred');
            setData({about_content: null, translations: {}});
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isHydrated && currentLanguage) {
            fetchData();
        }
    }, [currentLanguage, isHydrated]);

    return {data, loading, error, refetch: fetchData};
};

export const useContactData = (): UseApiDataReturn => {
    const [data, setData] = useState<ApiData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const {currentLanguage, isHydrated} = useLanguage();

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const backendLanguage = convertLanguageForBackend(currentLanguage);
            const response = await fetch(`${API_BASE_URL}/api/contact-data/?lang=${backendLanguage}`);
            if (response.ok) {
                const result = await response.json();
                setData(result);
            } else {
                setError('Failed to fetch contact data');
                setData({contact_content: null, translations: {}});
            }
        } catch (err) {
            setError('Network error occurred');
            setData({contact_content: null, translations: {}});
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isHydrated && currentLanguage) {
            fetchData();
        }
    }, [currentLanguage, isHydrated]);

    return {data, loading, error, refetch: fetchData};
};