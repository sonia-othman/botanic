'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, Home, Calendar, Users, ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useDirection } from './hooks/useDirection'; 

export default function LandingPage() {
  const { t, i18n } = useTranslation();
  const { isRTL, direction } = useDirection();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-full bg-white" dir={direction}>
      <div className="container mx-auto px-4 sm:px-5 md:px-6 pt-4 pb-14">
        {/* Grid wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-14 items-center">

          {/* LEFT SECTION */}
          <div
            className={`bg-accent rounded-[30px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between relative order-1 lg:order-1 ${isRTL ? 'text-right' : 'text-left'}`}
          >
            {/* Header */}
            <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Link href="/" className="flex items-center space-x-2">
                <Image src="https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/botanic.png" alt="Logo" width={80} height={80} priority />
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex gap-6 text-sm text-primary">
                
                <Link href="/showroom" className="hover:text-gray-700 transition">{t('pricing')}</Link>
                <Link href="/gallery" className="hover:text-gray-700 transition">{t('projectsBtn')}</Link>
                <Link href="/contact" className="hover:text-gray-700 transition">{t('projects')}</Link>
                <Link href="/construction" className="text-primary hover:text-gray-700 transition">{t('construction')}</Link>

              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-md text-primary hover:bg-gray-100 transition"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Language Switcher (Desktop) */}
              <div className="hidden md:flex gap-2">
                <button
                  onClick={() => i18n.changeLanguage('en')}
                  className="px-3 py-2 text-sm rounded-md text-primary bg-white shadow-sm hover:bg-gray-100"
                >
                  English
                </button>
                <button
                  onClick={() => i18n.changeLanguage('ku')}
                  className="px-3 py-2 text-sm rounded-md text-primary bg-white shadow-sm hover:bg-gray-100"
                >
                  کوردی
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="flex flex-col mt-4 bg-white rounded-xl shadow-md p-4 gap-3 md:hidden">
                <Link href="/" className="text-primary hover:text-gray-700 transition">{t('home')}</Link>
                <Link href="/showroom" className="text-primary hover:text-gray-700 transition">{t('pricing')}</Link>
                <Link href="/gallery" className="text-primary hover:text-gray-700 transition">{t('projectsBtn')}</Link>
                <Link href="/contact" className="text-primary hover:text-gray-700 transition">{t('projects')}</Link>
                <Link href="/construction" className="text-primary hover:text-gray-700 transition">{t('construction')}</Link>
                <div className="flex gap-1 mt-3 ">
                  <button
                    onClick={() => i18n.changeLanguage('en')}
                    className="flex-1 px-1 py-1 text-sm rounded-md text-primary bg-gray-100 hover:bg-gray-200"
                  >
                    English
                  </button>
                  <button
                    onClick={() => i18n.changeLanguage('ku')}
                    className="flex-1 px-1 py-1 text-sm rounded-md text-primary bg-gray-100 hover:bg-gray-200"
                  >
                    کوردی
                  </button>
                </div>
              </div>
            )}

            {/* Main Content */}
            <div className="space-y-9 mt-6">
              <div className="space-y-10">
               <div className="space-y-4">
                <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('headline1')}
                </h1>
                <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('headline2')}
                </h1>
              </div>
                <p
                  className={`text-gray-600 text-sm sm:text-base max-w-md leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  {t('subtitle')}
                </p>
              </div>

              <Link
                href="/gallery"
                className={`bg-primary font-bold  text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full hover:bg-green-700 transition inline-flex items-center gap-3 group w-fit text-md ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {t('projectsBtn')}
                <span className={`group-hover:translate-x-1 transition ${isRTL ? 'rotate-180' : ''}`}>
                  <ArrowRight />
                </span>
              </Link>

              {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6">
                  {[
                  { icon: Home, value: '190~', label: t('daysDelivery') },
                  { icon: Calendar, value: '13+', label: t('warranty') },
                  { icon: Users, value: '18+', label: t('homesBuilt') },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center mb-3 mx-auto">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-light text-gray-900 mb-1">{item.value}</div>
                    <div className="text-xs sm:text-sm text-gray-500 leading-tight">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[700px] w-full lg:w-[600px] order-2 lg:order-2 mt-6 lg:mt-0">
            {/* Top Buttons */}
            <div
              className={`absolute top-4 sm:top-6 flex gap-2 sm:gap-3 z-10 ${isRTL ? 'left-4 sm:left-6 flex-row-reverse' : 'right-4 sm:right-6'}`}
            >
              <Link href="/about">
                <button className="bg-accent px-4 py-2 sm:px-6 sm:py-3 text-primary rounded-full shadow-lg hover:shadow-xl transition text-xs sm:text-sm font-medium">
                  {t('aboutUs')}
                </button>
              </Link>
                <button className="bg-accent px-4 py-2 sm:px-6 sm:py-3 text-primary rounded-full shadow-lg hover:shadow-xl transition flex items-center gap-2 text-xs sm:text-sm font-medium">
                  <Phone className="w-4 h-4" />
                  <span dir="ltr" className="sm:inline">0770 097 2727</span>
                </button>
            </div>

            {/* Video */}
            <video
          src="https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/video/intro1.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/portrait.png"
          className="absolute inset-0 w-full h-full object-cover rounded-[30px] sm:rounded-[40px]"
        ></video>
          </div>
        </div>
      </div>
    </div>
  );
}
