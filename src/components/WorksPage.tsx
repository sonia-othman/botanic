"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import { useDirection } from './hooks/useDirection';

export default function WorksPages() {
  const { t, i18n } = useTranslation();
  const { isRTL, direction } = useDirection();

  return (
    <div className="bg-accent rounded-4xl px-4 sm:px-8 py-12" dir={direction}>
      <div className="container mx-auto bg-white rounded-3xl overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left Section */}
          <div className={`p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative ${isRTL ? 'lg:text-right' : 'lg:text-left'} text-center`}>
            {/* Text Section */}
            <div className="space-y-8 w-full pb-48 sm:pb-56 lg:pb-64">
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('we')} <br />
              </h2>
              <p className={`text-gray-600 text-base sm:text-lg leading-relaxed max-w-md ${isRTL ? 'lg:mr-0 lg:ml-auto' : 'lg:ml-0 lg:mr-auto'} mx-auto lg:mx-0 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('sun')}
              </p>
            </div>

            {/* Image Section - Responsive positioning */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] sm:w-[80%] lg:w-full max-w-[600px]">
              <Image
                src="https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/bottom.png"
                alt="Sketch"
                width={600}
                height={600}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Right Section (Feature Cards) */}
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-4 sm:space-y-6 bg-white">
            {[
              { title: t('highStrength'), text: t('highStrengthDesc'), image: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/activities2.png" },
              { title: t('thermalInsulation'), text: t('thermalInsulationDesc'), image: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/greenroof.jpg" },
              { title: t('noShrinkage'), text: t('noShrinkageDesc'), image: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/showroom.png" },
              { title: t('ecoFriendly'), text: t('ecoFriendlyDesc'), image: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/card1.jpg" },
              { title: t('longLifespan'), text: t('longLifespanDesc'), image: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/activities12.png" }
            ].map((card, i) => (
              <div
                key={i}
                className={`bg-gradient-to-tl from-secondary to-primary text-white rounded-2xl p-2 flex items-center gap-3 sm:gap-4 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/10 rounded-xl flex items-center justify-center overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">{card.title}</h3>
                  <p className="text-gray-50 text-xs sm:text-sm lg:text-base leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}