"use client";

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface HydrationBoundaryProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

const HydrationBoundary: React.FC<HydrationBoundaryProps> = ({ children, fallback }) => {
    const { isHydrated } = useLanguage();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !isHydrated) {
        return <>{fallback || children}</>;
    }

    return <>{children}</>;
};

export default HydrationBoundary; 