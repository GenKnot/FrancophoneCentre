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
    event_type: string;
    location_type?: string;
    start_date: string;
    end_date: string;
    registration_deadline?: string;
    original_price?: number;
    discount_percentage?: number;
    final_price?: number;
    is_free?: boolean;
    is_featured?: boolean;
    image?: string;
}

export const getEventTranslation = (event: Event, field: keyof Event, language: string): string => {
    const fieldValue = event[field];
    
    if (typeof fieldValue !== 'string') {
        return fieldValue?.toString() || '';
    }
    
    switch (language) {
        case 'zh-hans':
            const zhHansField = `${field}_zh_Hans` as keyof Event;
            return (event[zhHansField] as string) || fieldValue;
        case 'zh-hant':
            const zhHantField = `${field}_zh_hant` as keyof Event;
            return (event[zhHantField] as string) || fieldValue;
        case 'fr':
            const frField = `${field}_fr` as keyof Event;
            return (event[frField] as string) || fieldValue;
        case 'en':
        default:
            return fieldValue;
    }
};

export const formatEventDate = (dateString: string, language: string): string => {
    if (!dateString) return '';
    
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        
        switch (language) {
            case 'zh-hans':
            case 'zh-hant':
                return date.toLocaleDateString('zh-CN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
            case 'fr':
                return date.toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
            case 'en':
            default:
                return date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
        }
    } catch (error) {
        console.error('Error formatting date:', error);
        return dateString;
    }
};

export const formatEventTime = (dateString: string, language: string): string => {
    if (!dateString) return '';
    
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return '';
        
        return date.toLocaleTimeString(language === 'fr' ? 'fr-FR' : 'en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    } catch (error) {
        console.error('Error formatting time:', error);
        return '';
    }
};

export const getEventPrice = (event: Event, language: string): string => {
    if (event.is_free || event.event_type === 'free_trial') {
        switch (language) {
            case 'zh-hans':
                return '免费';
            case 'zh-hant':
                return '免費';
            case 'fr':
                return 'Gratuit';
            case 'en':
            default:
                return 'Free';
        }
    }
    
    if (event.final_price !== undefined && event.final_price !== null) {
        return `$${event.final_price} CAD`;
    }
    
    if (event.original_price !== undefined && event.original_price !== null) {
        return `$${event.original_price} CAD`;
    }
    
    switch (language) {
        case 'zh-hans':
            return '请咨询';
        case 'zh-hant':
            return '請諮詢';
        case 'fr':
            return 'Nous contacter';
        case 'en':
        default:
            return 'Contact for Price';
    }
};

export const getEventDiscount = (event: Event, language: string): string | null => {
    if (!event.discount_percentage || !event.original_price || !event.final_price) {
        return null;
    }
    
    const discountText = `${event.discount_percentage}%`;
    
    switch (language) {
        case 'zh-hans':
            return `${discountText}优惠`;
        case 'zh-hant':
            return `${discountText}優惠`;
        case 'fr':
            return `${discountText} de réduction`;
        case 'en':
        default:
            return `${discountText} Off`;
    }
};

export const getEventTypeLabel = (eventType: string, language: string): string => {
    const typeLabels: Record<string, Record<string, string>> = {
        'limited_offer': {
            'zh-hans': '限时优惠',
            'zh-hant': '限時優惠',
            'fr': 'Offre Limitée',
            'en': 'Limited Offer'
        },
        'free_trial': {
            'zh-hans': '免费试听',
            'zh-hant': '免費試聽',
            'fr': 'Essai Gratuit',
            'en': 'Free Trial'
        },
        'group_registration': {
            'zh-hans': '团报活动',
            'zh-hant': '團報活動',
            'fr': 'Inscription de Groupe',
            'en': 'Group Registration'
        },
        'workshop': {
            'zh-hans': '专业研讨会',
            'zh-hant': '專業研討會',
            'fr': 'Atelier',
            'en': 'Workshop'
        },
        'seminar': {
            'zh-hans': '讲座',
            'zh-hant': '講座',
            'fr': 'Séminaire',
            'en': 'Seminar'
        },
        'cultural_activity': {
            'zh-hans': '文化活动',
            'zh-hant': '文化活動',
            'fr': 'Activité Culturelle',
            'en': 'Cultural Activity'
        }
    };
    
    return typeLabels[eventType]?.[language] || eventType;
};

export const getLocationTypeLabel = (locationType: string = 'montreal', language: string): string => {
    const locationLabels: Record<string, Record<string, string>> = {
        'montreal': {
            'zh-hans': '蒙特利尔',
            'zh-hant': '蒙特利爾',
            'fr': 'Montréal',
            'en': 'Montreal'
        },
        'saint_jean': {
            'zh-hans': '圣让校区',
            'zh-hant': '聖讓校區',
            'fr': 'Campus Saint-Jean',
            'en': 'Saint-Jean Campus'
        },
        'online': {
            'zh-hans': '在线活动',
            'zh-hant': '在線活動',
            'fr': 'Événement en Ligne',
            'en': 'Online Event'
        },
        'other': {
            'zh-hans': '其他',
            'zh-hant': '其他',
            'fr': 'Autre',
            'en': 'Other'
        }
    };
    
    return locationLabels[locationType]?.[language] || locationType;
};

export const isEventUpcoming = (event: Event): boolean => {
    if (!event.start_date) return false;
    
    try {
        const now = new Date();
        const startDate = new Date(event.start_date);
        return startDate > now;
    } catch (error) {
        console.error('Error checking if event is upcoming:', error);
        return false;
    }
};

export const isRegistrationOpen = (event: Event): boolean => {
    try {
        if (!event.registration_deadline) {
            return isEventUpcoming(event);
        }
        
        const now = new Date();
        const deadline = new Date(event.registration_deadline);
        return deadline > now && isEventUpcoming(event);
    } catch (error) {
        console.error('Error checking registration status:', error);
        return false;
    }
};

export const getDaysUntilEvent = (event: Event): number => {
    if (!event.start_date) return 0;
    
    try {
        const now = new Date();
        const startDate = new Date(event.start_date);
        const diffTime = startDate.getTime() - now.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 0 ? diffDays : 0;
    } catch (error) {
        console.error('Error calculating days until event:', error);
        return 0;
    }
}; 