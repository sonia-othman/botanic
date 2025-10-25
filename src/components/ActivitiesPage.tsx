"use client"
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useDirection } from './hooks/useDirection';

export default function ActivitiesPage() {
  const { t, i18n } = useTranslation();
  const { isRTL, direction } = useDirection();
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: "image/activities1.png",
    },
    {
      id: 2,
      image: "image/activities2.png",
    },
    {
      id: 3,
      image: "image/activities3.jpg",
    },
    {
      id: 4,
      image: "image/activities4.png",
    },
    {
      id: 5,
      image: "image/activities5.png",
    },
    {
      id: 6,
      image: "image/activities6.png",
    },
    {
      id: 7,
      image: "image/activities7.png",
    },
    {
      id: 8,
      image: "image/activities8.png",
    },
    {
      id: 9,
      image: "image/activities9.png",
    },
    {
      id: 10,
      image: "image/activities10.png",
    },
    {
      id: 11,
      image: "image/activities11.png",
    },
    {
      id: 12,
      image: "image/activities12.png",
    },
    {
      id: 13,
      image: "image/activities13.png",
    },
    {
      id: 14,
      image: "image/activities14.png",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div 
      className="Container bg-accent flex flex-col items-center justify-center p-4 sm:p-6 md:p-10 lg:p-16 xl:p-20 mx-auto" 
      dir={direction} 
      style={{ 
        backgroundImage: "url('/image/backshow.png')", 
        backgroundSize: "cover", 
        backgroundPosition: "center" 
      }}
    >
      {/* Title Section */}
      <div className="text-center mb-6 sm:mb-8 lg:mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
          {t('testimonials.title')}
        </h1>
        <div className="w-20 sm:w-24 md:w-28 h-1 bg-gray-700 mt-4 md:mt-6 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-6xl w-full bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 relative overflow-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className={`absolute ${isRTL ? 'right-1 sm:right-2 md:right-4' : 'left-1 sm:left-2 md:left-4'} top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-emerald-200 hover:bg-emerald-300 transition-colors flex items-center justify-center shadow-lg`}
          aria-label={t('testimonials.navigation.previous')}
        >
          {isRTL ? <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-emerald-700" /> : <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-emerald-700" />}
        </button>

        <button
          onClick={nextSlide}
          className={`absolute ${isRTL ? 'left-1 sm:left-2 md:left-4' : 'right-1 sm:right-2 md:right-4'} top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-emerald-200 hover:bg-emerald-300 transition-colors flex items-center justify-center shadow-lg`}
          aria-label={t('testimonials.navigation.next')}
        >
          {isRTL ? <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-emerald-700" /> : <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-emerald-700" />}
        </button>

        {/* Slider Content */}
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-xl aspect-[4/3]">
              <img
                src={testimonials[currentSlide].image}
                alt="Testimonial"
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
            {/* Quote Mark Background */}
            <div className="relative">
              <div className={`absolute -top-2 sm:-top-4 ${isRTL ? '-right-1 sm:-right-2' : '-left-1 sm:-left-2'} text-emerald-200 opacity-50 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-none select-none`}>
                "
              </div>
              
              {/* Quote */}
              <h2 className="relative text-base sm:text-lg md:text-xl font-medium text-gray-700 mb-4 px-2 sm:px-0">
                {t(`testimonials.slides.${currentSlide}.quote`)}
              </h2>
            </div>
            
            {/* Pagination Dots */}
            <div className="flex gap-1.5 sm:gap-2 pt-2 sm:pt-4 justify-center md:justify-start flex-wrap">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-6 sm:w-8 bg-emerald-500' 
                      : 'w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}