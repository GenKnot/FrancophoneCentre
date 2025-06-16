"use client";

import React, {useState} from 'react';
import {useLanguage} from '@/contexts/LanguageContext';

interface LanguageSwitcherProps {
    className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({className = ''}) => {
    const {currentLanguage, availableLanguages, changeLanguage} = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const currentLang = availableLanguages.find(lang => lang.code === currentLanguage);

    const handleLanguageChange = (langCode: string) => {
        changeLanguage(langCode);
        setIsOpen(false);
    };

    return (
        <div className={`language-switcher ${className}`}>
            <div className="dropdown">
                <button
                    className="nav-link dropdown-toggle"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'inherit',
                        cursor: 'pointer',
                        fontSize: 'inherit'
                    }}
                >
                    <i className="fas fa-globe me-1"></i>
                    <span suppressHydrationWarning>{currentLang?.name || 'Language'}</span>
                </button>
                {isOpen && (
                    <ul
                        className="dropdown-menu show"
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            zIndex: 1000,
                            display: 'block',
                            minWidth: '160px',
                            backgroundColor: '#fff',
                            border: '1px solid rgba(0,0,0,.15)',
                            borderRadius: '0.375rem',
                            boxShadow: '0 0.5rem 1rem rgba(0,0,0,.15)'
                        }}
                    >
                        {availableLanguages.map((language) => (
                            <li key={language.code}>
                                <button
                                    className={`dropdown-item ${currentLanguage === language.code ? 'active' : ''}`}
                                    onClick={() => handleLanguageChange(language.code)}
                                    style={{
                                        display: 'block',
                                        width: '100%',
                                        padding: '0.25rem 1rem',
                                        clear: 'both',
                                        fontWeight: 400,
                                        color: '#212529',
                                        textAlign: 'left',
                                        textDecoration: 'none',
                                        backgroundColor: 'transparent',
                                        border: 0,
                                        cursor: 'pointer'
                                    }}
                                >
                                    <span suppressHydrationWarning>{language.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default LanguageSwitcher;