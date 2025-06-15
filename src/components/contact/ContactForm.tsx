"use client"
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ENDPOINTS } from '../../../constants/api';

const ContactForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setSubmitMessage('Please fill in all required fields.');
      setMessageType('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');
    setMessageType('');

    try {
      const response = await fetch(ENDPOINTS.CONTACT.SUBMIT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('Thank you for your message! We will get back to you soon.');
        setMessageType('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitMessage(data.error || 'Failed to send message. Please try again.');
        setMessageType('error');
      }
    } catch (error) {
      setSubmitMessage('Network error. Please try again later.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
        setMessageType('');
      }, 5000);
    }
  };
  
  return (
    <>
       <section className="contact-section-2 section-padding pt-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="contact-form-items">
                            <div className="title text-center">
                                <h2 className="wow fadeInUp">{t('contact.form.title', 'Send Us Message')}</h2>
                            </div>
                            <form id="contact-form" onSubmit={handleSubmit}>
                                <div className="row g-4">
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="form-clt">
                                            <input 
                                                type="text" 
                                                name="name" 
                                                id="name" 
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder={t('contact.form.name_placeholder', 'Full Name')} 
                                                disabled={isSubmitting}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="form-clt">
                                            <input 
                                                type="text" 
                                                name="phone" 
                                                id="phone" 
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder={t('contact.form.phone_placeholder', 'Phone Number')} 
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="form-clt">
                                            <input 
                                                type="email" 
                                                name="email" 
                                                id="email3" 
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder={t('contact.form.email_placeholder', 'Email Address')} 
                                                disabled={isSubmitting}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="form-clt">
                                            <input 
                                                type="text" 
                                                name="subject" 
                                                id="subject" 
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                placeholder={t('contact.form.subject_placeholder', 'Subject')} 
                                                disabled={isSubmitting}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="form-clt">
                                            <textarea 
                                                name="message" 
                                                id="message" 
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                placeholder={t('contact.form.message_placeholder', 'Write message')}
                                                disabled={isSubmitting}
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                    {submitMessage && (
                                        <div className="col-lg-12">
                                            <div className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
                                                {submitMessage}
                                            </div>
                                        </div>
                                    )}
                                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
                                        <button type="submit" className="theme-btn" disabled={isSubmitting}>
                                            {isSubmitting ? 'Sending...' : t('contact.form.submit', 'Send Us Message')}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default ContactForm;