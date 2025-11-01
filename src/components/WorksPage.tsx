"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useDirection } from "./hooks/useDirection";

export default function WorksPages() {
  const { t } = useTranslation();
  const { isRTL, direction } = useDirection();

  const featureCards = [
    {
      title: t("highStrength"),
      text: t("highStrengthDesc"),
      image:
        "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/activities2.png",
    },
    {
      title: t("thermalInsulation"),
      text: t("thermalInsulationDesc"),
      image:
        "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/greenroof.jpg",
    },
    {
      title: t("noShrinkage"),
      text: t("noShrinkageDesc"),
      image:
        "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/showroom.png",
    },
    {
      title: t("ecoFriendly"),
      text: t("ecoFriendlyDesc"),
      image:
        "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/card1.jpg",
    },
    {
      title: t("longLifespan"),
      text: t("longLifespanDesc"),
      image:
        "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/activities12.png",
    },
  ];

  return (
    <div className="bg-accent rounded-4xl px-4 sm:px-8 py-12" dir={direction}>
      <div className="container mx-auto bg-white rounded-3xl overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left Section */}
          <div
            className={`relative p-8 sm:p-12 lg:p-16 flex flex-col justify-between min-h-[500px] ${
              isRTL ? "lg:text-right text-center" : "lg:text-left text-center"
            }`}
          >
            {/* Text Section */}
            <div className="space-y-6 sm:space-y-8 w-full pb-[150px] sm:pb-[200px] lg:pb-[250px]">
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t("we")}
              </h2>
              <p
                className={`text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg lg:max-w-xl mx-auto lg:mx-0 ${
                  isRTL ? "text-right lg:ml-auto lg:mr-0" : "text-left lg:mr-auto lg:ml-0"
                }`}
              >
                {t("sun")}
              </p>
            </div>

            {/* Bottom Image */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center">
              <Image
                src="https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/bottom.png"
                alt="Sketch"
                className="w-2/3 sm:w-1/2 lg:w-full h-auto object-contain"
                width={600}
                height={600}
              />
            </div>
          </div>

          {/* Right Section*/}
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6 bg-white">
            {featureCards.map((card, i) => (
              <div
                key={i}
                className={`bg-gradient-to-tl from-secondary to-primary text-white rounded-2xl p-2 flex items-center gap-4 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl ${
                  isRTL ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white/10 rounded-xl flex items-center justify-center overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                    {card.title}
                  </h3>
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
