'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PlantsSection = () => {
  const { t, i18n } = useTranslation();
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderListRef = useRef<HTMLDivElement>(null);
  const thumbnailRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const isRTL = i18n.language === 'ku' || i18n.language === 'ar';

  const sliderData = [
    {
      id: 1,
      image: '/image/landscape4.png',
      titleKey: 'plants.showroom',
      typeKey: 'plants.types.flower',
      descriptionKey: 'plants.descriptions.flower'
    },
    {
      id: 2,
      image: '/image/enjana4.png',
      titleKey: 'plants.showroom',
      typeKey: 'plants.types.greenDecor',
      descriptionKey: 'plants.descriptions.greenDecor'
    },
    {
      id: 3,
      image: '/image/atree.png',
      titleKey: 'plants.showroom',
      typeKey: 'plants.types.artificialTree',
      descriptionKey: 'plants.descriptions.artificialTree'
    },
    {
      id: 4,
      image: '/image/enjana5.png',
      titleKey: 'plants.showroom',
      typeKey: 'plants.types.potsAndPlanters',
      descriptionKey: 'plants.descriptions.potsAndPlanters'
    }
  ];

  const moveSlider = (direction: 'next' | 'prev') => {
    const slider = sliderRef.current;
    const sliderList = sliderListRef.current;
    const thumbnail = thumbnailRef.current;

    if (!slider || !sliderList || !thumbnail) return;

    const sliderItems = sliderList.querySelectorAll('.item');
    const thumbnailItems = thumbnail.querySelectorAll('.item');

    if (direction === 'next') {
      sliderList.appendChild(sliderItems[0]);
      thumbnail.appendChild(thumbnailItems[0]);
      slider.classList.add('next');
    } else {
      sliderList.prepend(sliderItems[sliderItems.length - 1]);
      thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
      slider.classList.add('prev');
    }

    const handleAnimationEnd = () => {
      if (direction === 'next') {
        slider.classList.remove('next');
      } else {
        slider.classList.remove('prev');
      }
    };

    slider.addEventListener('animationend', handleAnimationEnd, { once: true });
    
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      moveSlider('next');
    }, 5000); 
  };

  useEffect(() => {
    if (thumbnailRef.current) {
      const thumbnailItems = thumbnailRef.current.querySelectorAll('.item');
      if (thumbnailItems.length > 0) {
        thumbnailRef.current.appendChild(thumbnailItems[0]);
      }
    }

    resetAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden" dir="ltr">
      <style jsx>{`
        /* Animation keyframes that can't be done with Tailwind */
        @keyframes showContent {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
        @keyframes showImage {
          to {
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 0;
          }
        }
        @keyframes showThumbnail {
          from {
            width: 0;
            opacity: 0;
          }
        }
        @keyframes effectNext {
          from {
            transform: translateX(150px);
          }
        }
        @keyframes outFrame {
          to {
            width: 150px;
            height: 220px;
            bottom: 50px;
            left: 50%;
            border-radius: 20px;
          }
        }
        @keyframes contentOut {
          to {
            transform: translateY(-150px);
            filter: blur(20px);
            opacity: 0;
          }
        }

        .slider .list .item:nth-child(1) {
          z-index: 1;
        }

        .slider .list .item:nth-child(1) .content .title,
        .slider .list .item:nth-child(1) .content .type,
        .slider .list .item:nth-child(1) .content .description,
        .slider .list .item:nth-child(1) .content .buttons {
          transform: translateY(50px);
          filter: blur(20px);
          opacity: 0;
          animation: showContent 0.5s 1s linear 1 forwards;
        }

        .slider .list .item:nth-child(1) .content .title {
          animation-delay: 0.4s !important;
        }
        .slider .list .item:nth-child(1) .content .type {
          animation-delay: 0.6s !important;
        }
        .slider .list .item:nth-child(1) .content .description {
          animation-delay: 0.8s !important;
        }
        .slider .list .item:nth-child(1) .content .buttons {
          animation-delay: 1s !important;
        }

        .slider.next .list .item:nth-child(1) img {
          width: 150px;
          height: 220px;
          position: absolute;
          bottom: 50px;
          left: 50%;
          border-radius: 30px;
          animation: showImage 0.5s linear 1 forwards;
        }

        .slider.next .thumbnail .item:nth-last-child(1) {
          overflow: hidden;
          animation: showThumbnail 0.5s linear 1 forwards;
        }

        .slider.prev .list .item img {
          z-index: 100;
        }

        .slider.next .thumbnail {
          animation: effectNext 0.5s linear 1 forwards;
        }

        .slider.prev .list .item:nth-child(2) {
          z-index: 2;
        }

        .slider.prev .list .item:nth-child(2) img {
          animation: outFrame 0.5s linear 1 forwards;
          position: absolute;
          bottom: 0;
          left: 0;
        }

        .slider.prev .thumbnail .item:nth-child(1) {
          overflow: hidden;
          opacity: 0;
          animation: showThumbnail 0.5s linear 1 forwards;
        }

        .slider.next .nextPrevArrows button,
        .slider.prev .nextPrevArrows button {
          pointer-events: none;
        }

        .slider.prev .list .item:nth-child(2) .content .title,
        .slider.prev .list .item:nth-child(2) .content .type,
        .slider.prev .list .item:nth-child(2) .content .description,
        .slider.prev .list .item:nth-child(2) .content .buttons {
          animation: contentOut 1.5s linear 1 forwards !important;
        }
      `}</style>

      <header className="w-full max-w-[80%] mx-auto h-[50px] flex items-center relative z-[100]">
      </header>

      <div className="slider h-screen -mt-[50px] w-full overflow-hidden relative" ref={sliderRef}>
        <div className="list" ref={sliderListRef}>
          {sliderData.map((item) => (
            <div key={item.id} className="item w-full h-full absolute inset-0">
              <img src={item.image} alt={t(item.typeKey)} className="w-full h-full object-cover" />
              <div className={`content absolute top-[20%] w-full px-4 md:px-0 md:max-w-[80%] left-1/2 -translate-x-1/2 ${isRTL ? 'md:pl-[30%]' : 'md:pr-[30%]'} box-border text-white`}>
                <div className={`title text-[1.5em] pb-5 sm:text-[2.5em] md:text-[3em] font-bold leading-[1.3em] ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
                  {t(item.titleKey)}
                </div>
                <div className={`type text-[1.5em] sm:text-[2.5em] md:text-[2.5em] font-bold leading-[1.3em] text-gray-100 ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
                  {t(item.typeKey)}
                </div>
                <div className={`description text-sm md:text-base mt-2 ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
                  {t(item.descriptionKey)}
                </div>
                <div className={`buttons grid grid-cols-1 sm:grid-cols-[repeat(2,130px)] gap-3 mt-5 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                  <Link href="/showroom" className="border-none bg-primary rounded-2xl font-medium cursor-pointer transition-all duration-400 tracking-[2px] hover:tracking-[3px] flex items-center justify-center text-white no-underline py-2">
                    {t('plants.seeMore')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail absolute bottom-[50px] left-1/2 w-max z-[100] flex gap-2 md:gap-5 overflow-x-auto px-4 -translate-x-1/2" ref={thumbnailRef}>
          {sliderData.map((item) => (
            <div key={item.id} className="item w-[100px] md:w-[150px] h-[150px] md:h-[220px] flex-shrink-0 relative">
              <img src={item.image} alt={t(item.typeKey)} className="w-full h-full object-cover rounded-[20px] shadow-[5px_0_15px_rgba(0,0,0,0.3)]" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PlantsSection;