"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useDirection } from './hooks/useDirection'; 

export default function PropertyCatalog() {
  const { t, i18n } = useTranslation();
  const { isRTL, direction } = useDirection();
  
  const properties = [
    { title: "Qaiwan Group", count: "Qaiwan City, Qaiwan Heights", image: "image/qaiwangroup.png" },
    { title: "Faruq Holdings", count: "Faruq Underpass", image: "image/faruq1.png" },
    { title: "South Kurdistan Group", count: "Kurdistan Motors", image: "image/skg.png" },
    { title: "Balla Company", count: "Grand Boulevard, Nergiz Park", image: "image/balla.png" },
    { title: "Kaso Group", count: "Baghdad Marina", image: "image/kasogroup.png" },
    { title: "HST Group", count: "3 Projects in Sulaymaniah", image: "image/hsn.png" },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6" dir={direction}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT SECTION */}
        <div className={`space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
            {t('ourClients.title')} <span className="text-primary">{t('ourClients.highlight')}</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed max-w-md">
            {t('ourClients.description')}
          </p>
          
          <Link
            href="/contact"
            className={`bg-primary text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full hover:bg-green-700 transition inline-flex items-center gap-3 group w-fit text-md ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {t('projects')}
            <span className={`group-hover:translate-x-1 transition ${isRTL ? 'rotate-180' : ''}`}>
              <ArrowRight />
            </span>
          </Link>

          <div className={`pt-6 border-t border-gray-200 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {t('ourClients.nursery.title')}
            </h3>
            <p className="text-sm text-gray-600">
              {t('ourClients.nursery.description')}
            </p>
          </div>
        </div>

        {/* RIGHT SLIDER SECTION */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={28}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
            dir={isRTL ? 'rtl' : 'ltr'}
            key={direction}
          >
            {properties.map((property, index) => (
              <SwiperSlide key={index}>
                <div className="group relative rounded-2xl bg-white overflow-hidden transition-all duration-300 h-[360px] flex flex-col">
                  <div className="h-56 w-full overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className={`flex-1 p-5 flex flex-col justify-between ${isRTL ? 'text-right' : 'text-left'}`}>
                    <div>
                      <h3 className="text-md text-primary">{property.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{property.count}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button className={`custom-prev w-11 h-11 flex items-center justify-center rounded-full bg-white border border-gray-300 hover:bg-gray-100 transition ${isRTL ? 'order-2' : 'order-1'}`}>
              <ChevronLeft className={`w-6 h-6 text-primary transition-transform ${isRTL ? 'rotate-180' : ''}`} />
            </button>

            <button className={`custom-next w-11 h-11 flex items-center justify-center rounded-full bg-white border border-gray-300 hover:bg-gray-100 transition ${isRTL ? 'order-1' : 'order-2'}`}>
              <ChevronRight className={`w-6 h-6 text-primary transition-transform ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}