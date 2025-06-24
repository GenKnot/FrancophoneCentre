import { useState, useEffect } from 'react';
import { ENDPOINTS } from '../../constants/api';
import { useLanguage } from '@/contexts/LanguageContext';

interface Event {
    id: number;
    title: string;
    title_zh_Hans?: string;
    title_zh_hant?: string;
    title_fr?: string;
    short_description?: string;
    short_description_zh_Hans?: string;
    short_description_zh_hant?: string;
    short_description_fr?: string;
    description: string;
    description_zh_Hans?: string;
    description_zh_hant?: string;
    description_fr?: string;
    event_type: string;
    location_type?: string;
    location_address?: string;
    location_address_zh_Hans?: string;
    location_address_zh_hant?: string;
    location_address_fr?: string;
    organizer?: string;
    organizer_zh_Hans?: string;
    organizer_zh_hant?: string;
    organizer_fr?: string;
    instructor_name?: string;
    instructor_name_zh_Hans?: string;
    instructor_name_zh_hant?: string;
    instructor_name_fr?: string;
    instructor_title?: string;
    instructor_title_zh_Hans?: string;
    instructor_title_zh_hant?: string;
    instructor_title_fr?: string;
    features?: string;
    features_zh_Hans?: string;
    features_zh_hant?: string;
    features_fr?: string;
    target_audience?: string;
    target_audience_zh_Hans?: string;
    target_audience_zh_hant?: string;
    target_audience_fr?: string;
    registration_note?: string;
    registration_note_zh_Hans?: string;
    registration_note_zh_hant?: string;
    registration_note_fr?: string;
    start_date: string;
    end_date: string;
    registration_deadline?: string;
    original_price?: number;
    discount_percentage?: number;
    final_price?: number;
    is_free?: boolean;
    is_featured?: boolean;
    is_active?: boolean;
    image?: string;
    image_detail?: string;
    registration_link?: string;
    contact_phone?: string;
    contact_email?: string;
    created_at?: string;
    updated_at?: string;
}

interface UseEventsReturn {
    events: Event[];
    loading: boolean;
    error: string | null;
    featuredEvents: Event[];
}

interface UseEventReturn {
    event: Event | null;
    loading: boolean;
    error: string | null;
}

export const useEvents = (): UseEventsReturn => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { currentLanguage } = useLanguage();

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setLoading(true);
                const url = `${ENDPOINTS.EVENTS.LIST}?lang=${currentLanguage}`;
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                
                // Handle both paginated and non-paginated responses
                const eventsData = data.results || data;
                
                if (!Array.isArray(eventsData)) {
                    throw new Error('Invalid data format received from API');
                }
                
                const processedEvents = eventsData.map((event: any) => ({
                    ...event,
                    is_free: event.is_free ?? (event.event_type === 'free_trial'),
                    is_featured: event.is_featured ?? false,
                    is_active: event.is_active ?? true,
                    organizer: event.organizer ?? 'QFEC',
                    location_type: event.location_type ?? 'montreal',
                    location_address: event.location_address ?? 'Montreal, QC',
                    short_description: event.short_description ?? (event.description ? event.description.substring(0, 200) + '...' : ''),
                }));
                
                setEvents(processedEvents);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch events');
                setEvents([]);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, [currentLanguage]);

    const featuredEvents = events.filter(event => event.is_featured && (event.is_active !== false));
    const activeEvents = events.filter(event => event.is_active !== false);

    return { events: activeEvents, loading, error, featuredEvents };
};

export const useEvent = (id: number): UseEventReturn => {
    const [event, setEvent] = useState<Event | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { currentLanguage } = useLanguage();

    useEffect(() => {
        if (!id) {
            setLoading(false);
            return;
        }

        const fetchEvent = async () => {
            try {
                setLoading(true);
                const url = `${ENDPOINTS.EVENTS.DETAIL(id)}?lang=${currentLanguage}`;
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                
                const processedEvent = {
                    ...data,
                    is_free: data.is_free ?? (data.event_type === 'free_trial'),
                    is_featured: data.is_featured ?? false,
                    is_active: data.is_active ?? true,
                    organizer: data.organizer ?? 'QFEC',
                    location_type: data.location_type ?? 'montreal',
                    location_address: data.location_address ?? 'Montreal, QC',
                    short_description: data.short_description ?? data.description?.substring(0, 200) + '...',
                };
                
                setEvent(processedEvent);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch event');
                setEvent(null);
            } finally {
                setLoading(false);
            }
        };

        fetchEvent();
    }, [id, currentLanguage]);

    return { event, loading, error };
}; 