"use client"
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { API_BASE_URL } from '../../../constants/api';

const TestEventsPage = () => {
    const { currentLanguage } = useLanguage();
    const [apiStatus, setApiStatus] = useState<string>('Testing...');
    const [eventsData, setEventsData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const testAPI = async () => {
            try {
                setApiStatus('Testing API connection...');
                
                // Test events list API
                const url = `${API_BASE_URL}/api/events/?lang=${currentLanguage}`;
                
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                
                setEventsData(data);
                setApiStatus('API connection successful!');
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
                setApiStatus('API connection failed!');
            }
        };

        testAPI();
    }, [currentLanguage]);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Events API Test</h1>
            <div style={{ marginBottom: '20px' }}>
                <h2>Current Language: {currentLanguage}</h2>
                <h3>API Status: {apiStatus}</h3>
                {error && (
                    <div style={{ color: 'red', marginBottom: '10px' }}>
                        Error: {error}
                    </div>
                )}
            </div>

            {eventsData && (
                <div>
                    <h2>Events Data ({eventsData.count} events)</h2>
                    {eventsData.results?.map((event: any) => (
                        <div key={event.id} style={{ 
                            border: '1px solid #ccc', 
                            margin: '10px 0', 
                            padding: '15px',
                            borderRadius: '5px'
                        }}>
                            <h3>ID: {event.id}</h3>
                            <h4>Title: {event.title}</h4>
                            <p><strong>Type:</strong> {event.event_type}</p>
                            <p><strong>Organizer:</strong> {event.organizer}</p>
                            <p><strong>Location:</strong> {event.location_address}</p>
                            <p><strong>Start Date:</strong> {event.start_date}</p>
                            <p><strong>Is Free:</strong> {event.is_free ? 'Yes' : 'No'}</p>
                            <p><strong>Short Description:</strong> {event.short_description}</p>
                        </div>
                    ))}
                </div>
            )}

            <div style={{ marginTop: '20px' }}>
                <h2>Test Different Languages</h2>
                <button onClick={() => window.location.href = '/test-events?lang=en'}>
                    Test English
                </button>
                <button onClick={() => window.location.href = '/test-events?lang=zh-hans'}>
                    Test Chinese
                </button>
                <button onClick={() => window.location.href = '/test-events?lang=fr'}>
                    Test French
                </button>
            </div>
        </div>
    );
};

export default TestEventsPage; 