"use client"
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useTranslation } from 'react-i18next';
import { useDirection } from '@/components/hooks/useDirection';

const ContactPage = () => {
  const { t } = useTranslation();
  const { isRTL, direction } = useDirection();
  
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '91973476-58ec-4eab-8732-4bd5ce5d8873',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ email: '', name: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50" dir={direction}>
      {/* Header */}
      <header className="bg-slate-700 text-white">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="bg-slate-700 text-white" style={{ backgroundImage: "url('/image/greenbg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container mx-auto px-4 py-20">
          <div className="items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4 text-center">
                {t('contact.title')}
              </h1>
              <p className="text-gray-300 text-center">
                {t('contact.heroDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-4 py-16">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">
            {t('contact.infoTitle')}
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            {t('contact.infoDescription')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={30} />
              </div>
              <h3 className="font-medium text-slate-700 mb-2">
                <span dir="ltr">0770 036 6363 | 0773 097 2727</span>
              </h3>
       </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={30} />
              </div>
              <h3 className="font-medium text-slate-700 mb-2">botanic.landscape@gmail.com</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={30} />
              </div>
              <h3 className="font-medium text-slate-700 mb-2">
                {t('contact.address')}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Form and Location Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gradient-to-t from-primary to-green-700 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              {t('contact.formTitle')}
            </h2>
            <p className="text-gray-300 mb-6">
              {t('contact.formDescription')}
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder={t('contact.emailPlaceholder')}
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-full border border-white focus:outline-none focus:border-emerald-500 text-slate-800 placeholder-gray-400 bg-white ${isRTL ? 'text-right' : 'text-left'}`}
              />
              <input
                type="text"
                name="name"
                placeholder={t('contact.namePlaceholder')}
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-full border border-white focus:outline-none focus:border-emerald-500 text-slate-800 placeholder-gray-400 bg-white ${isRTL ? 'text-right' : 'text-left'}`}
              />
              <textarea
                name="message"
                placeholder={t('contact.messagePlaceholder')}
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`w-full px-4 py-3 rounded-2xl border border-white focus:outline-none focus:border-emerald-500 text-slate-800 placeholder-gray-400 bg-white resize-none ${isRTL ? 'text-right' : 'text-left'}`}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white hover:bg-gray-50 px-8 py-3 rounded-full transition font-semibold text-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('contact.sending') : t('contact.submitButton')}
              </button>
              {submitStatus === 'success' && (
                <p className="text-white font-semibold">{t('contact.successMessage')}</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-200 font-semibold">{t('contact.errorMessage')}</p>
              )}
            </form>
          </div>

          {/* Location */}
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              {t('contact.locationTitle')}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('contact.locationDescription')}
            </p>
            <div className="bg-gray-200 rounded-lg h-64 mb-6 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.2667007581704!2d45.46871847524435!3d35.547114937330676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40002b0011f56c29%3A0x518a8296c8fd92e9!2sBotanic%20LTD!5e0!3m2!1sen!2siq!4v1761034790273!5m2!1sen!2siq"                
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div>
              <h3 className={`text-xl font-bold text-slate-800 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('contact.socialMedia')}
              </h3>
              <div className={"flex space-x-4 "}>
                <a
                  href="https://www.facebook.com/share/17MmwWctzy/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary hover:bg-emerald-700 rounded-lg flex items-center justify-center transition"
                >
                  <Facebook className="text-white" size={20} />
                </a>

                <a
                  href="https://www.instagram.com/botanic_ltd?igsh=OWRuNnNyY3V2cG5r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary hover:bg-emerald-700 rounded-lg flex items-center justify-center transition"
                >
                  <Instagram className="text-white" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;