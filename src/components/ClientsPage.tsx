"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useDirection } from "./hooks/useDirection";

export default function ClientsPage() {
  const { t } = useTranslation();
  const { isRTL, direction } = useDirection();

  const properties = [
    { title: "Qaiwan Group", count: "Qaiwan City, Qaiwan Heights", image: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/qaiwangroup.png" },
    { title: "Faruq Holdings", count: "Faruq Underpass", image: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/faruq1.png" },
    { title: "South Kurdistan Group", count: "Kurdistan Motors", image: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/skg.png" },
    { title: "Balla Company", count: "Grand Boulevard, Nergiz Park", image: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/balla.png" },
    { title: "Kaso Group", count: "Baghdad Marina", image: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/kasogroup.png" },
    { title: "HST Group", count: "3 Projects in Sulaymaniah", image: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/hsn.png" },
    { title: "Rost Valley Group", count: "Peshang Towers", image: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/peshang.png" },
    { title: "Rozhi Nwe Company", count: "Slamani New Terminal", image: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/rozhinwe.png" },
    { title: "Newroz Stadium", count: "Stadium Landscape", image: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/newroz.png" },
    { title: "Kitab University", count: "Kirkuk Campus", image: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/kitab.png" },
    { title: "Slemani Municipality", count: "Slemani Municipality Build", image: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/sharawani.png" },
    { title: "Halabja Group", count: "Halabja City", image: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/halaja.png" },
    { title: "Mass Holding", count: "Mass Holding", image: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/mass.jpg" },
    { title: "Najmadin Group", count: "Najmadin City", image: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/najmadin.png" },
    { title: "Nokan Group", count: "Nokan Group", image: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/nokan.png" },
  ];

  return (
    <section
      className="bg-accent py-16 px-4 sm:px-6 md:px-10 lg:px-16"
      dir={direction}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT SECTION */}
        <div
          className={`space-y-6 sm:space-y-8 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            {t("ourClients.title")}{" "}
            <span className="text-primary">{t("ourClients.highlight")}</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md">
            {t("ourClients.description")}
          </p>

          <Link
            href="/contact"
            className={`bg-primary text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full hover:bg-green-700 transition inline-flex items-center gap-3 group w-fit text-md ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            {t("projects")}
            <span
              className={`group-hover:translate-x-1 transition ${
                isRTL ? "rotate-180" : ""
              }`}
            >
              <ArrowRight />
            </span>
          </Link>

          <div
            className={`pt-6 border-t border-gray-200 ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-1">
              {t("ourClients.nursery.title")}
            </h3>
            <p className="text-sm text-gray-600">
              {t("ourClients.nursery.description")}
            </p>
          </div>
        </div>

        {/* RIGHT SLIDER SECTION */}
        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              480: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
            dir={isRTL ? "rtl" : "ltr"}
            key={direction}
          >
            {properties.map((property, index) => (
              <SwiperSlide key={index}>
                <div className="group relative rounded-2xl bg-white overflow-hidden transition-all duration-300 flex flex-col h-[300px] sm:h-[340px] md:h-[360px]">
                  <div className="h-48 sm:h-52 w-full overflow-hidden flex justify-center items-center">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div
                    className={`flex-1 p-4 sm:p-5 flex flex-col justify-between ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    <h3 className="text-md sm:text-lg text-primary font-medium">
                      {property.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{property.count}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-4 sm:mt-6">
            <button
              className={`custom-prev w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white border border-gray-300 hover:bg-gray-100 transition ${
                isRTL ? "order-2" : "order-1"
              }`}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </button>

            <button
              className={`custom-next w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white border border-gray-300 hover:bg-gray-100 transition ${
                isRTL ? "order-1" : "order-2"
              }`}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
