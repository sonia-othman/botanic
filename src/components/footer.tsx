'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Clock
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useDirection } from '@/components/hooks/useDirection';

export default function Footer() {
  const { t } = useTranslation();
  const { isRTL, direction } = useDirection();
  const currentYear = new Date().getFullYear();

  const navigation = {
    main: [
      { name: t('footers.navigation.home'), href: '/' },
      { name: t('footers.navigation.gallery'), href: '/gallery' },
      { name: t('footers.navigation.showroom'), href: '/showroom' },
      { name: t('footers.navigation.about'), href: '/about' },
      { name: t('footers.navigation.contact'), href: '/contact' },
    ],
    services: [
      { name: t('footers.services.landscapeDesign'), href: '#' },
      { name: t('footers.services.greenRoof'), href: '#' },
      { name: t('footers.services.irrigation'), href: '#' },
      { name: t('footers.services.artificialPlants'), href: '#' },
      { name: t('footers.services.waterproofing'), href: '#' },
    ]
  };

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/17MmwWctzy/?mibextid=wwXIfr',
      icon: Facebook,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/botanic_ltd?igsh=OWRuNnNyY3V2cG5r',
      icon: Instagram,
      color: 'hover:text-pink-600'
    }
  ];

  const contactInfo = {
    phone: '0770 097 2727',
    email: 'botanic.landscape@gmail.com',
    address: t('footers.contact.address'),
    mapUrl: 'https://maps.app.goo.gl/6MkK63eoR68hyZDf7',
    workingHours: t('footers.contact.workingHours'),
    mapImageUrl: 'https://maps.app.goo.gl/6MkK63eoR68hyZDf7'
  };

  return (
    <footer className="relative bg-green-900 text-white overflow-hidden" dir={direction}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/botonicwhite.png" 
          alt="Footer Background" 
          fill
          className="object-cover opacity-10"
          priority={false}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8">
          
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <Link href="/" className={`flex items-center gap-2 mb-4 sm:mb-6 justify-center ${isRTL ? 'sm:justify-start' : 'sm:justify-start'}`}>
              <Image 
                src="https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/botonicwhite.png" 
                alt="Botanic Company" 
                width={60}
                height={60}
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
              />
            </Link>
            <p className={`text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed text-center ${isRTL ? 'sm:text-right' : 'sm:text-left'}`}>
              {t('footers.company.description')}
            </p>
            
            {/* Social Media */}
            <div className={`flex gap-4 mb-4 sm:mb-6 justify-center ${isRTL ? 'sm:justify-start' : 'sm:justify-start'}`}>
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${item.color} transition transform hover:scale-110`}
                  aria-label={item.name}
                >
                  <item.icon className="w-6 h-6 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>

            {/* Working Hours */}
            <div className={`flex items-start gap-3 text-gray-300 justify-center ${isRTL ? 'sm:justify-start' : 'sm:justify-start'}`}>
              <div className={`text-center ${isRTL ? 'sm:text-right' : 'sm:text-left'}`}>
                <p className="text-sm sm:text-sm font-medium">{t('footers.contact.workingHoursLabel')}</p>
                <p className="text-xs sm:text-sm">{contactInfo.workingHours}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`text-center ${isRTL ? 'sm:text-right' : 'sm:text-left'}`}>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-accent">
              {t('footers.quickLinks')}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-gray-300 hover:text-white transition inline-flex items-center group text-sm sm:text-base ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <span className={`w-1 h-1 bg-accent rounded-full ${isRTL ? 'ml-3' : 'mr-3'} opacity-0 group-hover:opacity-100 transition`}></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={`text-center ${isRTL ? 'sm:text-right' : 'sm:text-left'}`}>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-accent">
              {t('footers.ourServices')}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <p
                    className={`text-gray-300 hover:text-white transition inline-flex items-center group text-sm sm:text-base cursor-pointer ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <span className={`w-1 h-1 bg-accent rounded-full ${isRTL ? 'ml-3' : 'mr-3'} opacity-0 group-hover:opacity-100 transition`}></span>
                    {item.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Map */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className={`text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-accent text-center ${isRTL ? 'sm:text-right' : 'sm:text-left'}`}>
              {t('footers.getInTouch')}
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div className={`flex items-start gap-3 justify-center sm:justify-start ${isRTL ? 'sm:text-right' : 'sm:text-left'}`}>
              <Phone
                className={`w-5 h-5 text-accent mt-0.5 flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`}
              />
                <a 
                  dir="ltr"
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="text-gray-300 hover:text-white transition text-sm sm:text-base"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div className={`flex items-start gap-3 justify-center sm:justify-start ${isRTL ? 'sm:text-right' : 'sm:text-left'}`}>
                <Mail className={`w-5 h-5 text-accent mt-0.5 flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-white transition text-sm sm:text-base break-all"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className={`flex items-start gap-3 justify-center sm:justify-start ${isRTL ? 'sm:text-right' : 'sm:text-left'}`}>
                <MapPin className={`w-5 h-5 text-accent mt-0.5 flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                <span className="text-gray-300 text-sm sm:text-base">
                  {contactInfo.address}
                </span>
              </div>
            </div>

            {/* Map Image Box */}
            <div className={`bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-white transition group cursor-pointer max-w-sm mx-auto ${isRTL ? 'sm:ml-auto sm:mr-0' : 'sm:mx-0'}`}>
              <a
                href={contactInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative h-40 sm:h-44 md:h-48 bg-accent overflow-hidden">
                  {/* Actual Map Image */}
                  <Image 
                    src="https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/naxsha.png" 
                    alt="Our Location Map" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  <div className="absolute inset-0 bg-green-400/0 group-hover:bg-green-400/20 transition-colors duration-300"></div>
                </div>
                
                {/* Map Footer */}
                <div className={`px-3 sm:px-4 py-2 sm:py-3 bg-white flex items-center ${isRTL ? 'justify-end' : 'justify-between'}`}>
                  <span className={`text-gray-900 text-xs sm:text-sm flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
                    {t('footers.contact.viewMap')}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}