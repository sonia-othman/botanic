"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import { useDirection } from './hooks/useDirection';

export default function FrameTechnologyPage() {
  const { t, i18n } = useTranslation();
  const { isRTL, direction } = useDirection();

  return (
    <div className="bg-accent rounded-4xl px-4 sm:px-8 py-12" dir={direction}>
      <div className="container mx-auto bg-white rounded-3xl overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left Section */}
          <div className={`p-8 sm:p-12 lg:p-16 flex flex-col justify-between min-h-[500px] relative ${isRTL ? 'lg:text-right' : 'lg:text-left'} text-center`}>
            {/* Text Section */}
            <div className="space-y-8 w-full pb-[250px] lg:pb-[250px]">
                <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('we')} <br />
              </h2>
              <p className={`text-gray-600 text-base sm:text-lg leading-relaxed max-w-md ${isRTL ? 'lg:mr-0 lg:ml-auto' : 'lg:ml-0 lg:mr-auto'} mx-auto lg:mx-0 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('sun')}
              </p>
            </div>

            {/* Image Section */}
            <div className={`absolute bottom-0 w-full flex ${isRTL ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
              <Image
                src="/image/bottom.png"
                alt="Sketch"
                width={550}
                height={550}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Section (Feature Cards) */}
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6 bg-white">
            {[ 
              { title: t('highStrength'), text: t('highStrengthDesc'), image: "/image/card1.jpg" },
              { title: t('thermalInsulation'), text: t('thermalInsulationDesc'), image: "/image/greenroof.jpg" },
              { title: t('noShrinkage'), text: t('noShrinkageDesc'), image: "/image/showroom.png" }
            ].map((card, i) => (
              <div
                key={i}
                className={`bg-gradient-to-tl from-secondary to-primary text-white rounded-2xl p-2 flex items-center gap-6 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-25 h-25 bg-white/10 rounded-xl flex items-center justify-center overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="text-gray-50 text-sm sm:text-base leading-relaxed">
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