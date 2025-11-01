"use client";
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Droplets, LandPlot, LeafyGreen, Table, DropletOff, ArrowRight, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useTranslation } from 'react-i18next';
import { useDirection } from '@/components/hooks/useDirection';

const GalleryPage = () => {
  const { t } = useTranslation();
  const { isRTL, direction } = useDirection();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const portfolioImages = [
    "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/slider1.jpg",
    "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/slider2.jpg",
    "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/slider3.jpg",
    "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/slider4.jpg",
    "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/slider5.jpg",
    "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/slider6.jpg",
    "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/slider7.jpg",
  ];

  const features = [
    { icon: <LandPlot className="w-12 h-12" />, title: t('gallery.landscapeTitle'), subtitle: t('gallery.landscapeSubtitle')},
    { icon: <LeafyGreen className="w-12 h-12" />, title: t('gallery.greenroofTitle'), subtitle: t('gallery.greenroofSubtitle') },
    { icon: <Droplets className="w-12 h-12" />, title: t('gallery.irrigationTitle'), subtitle: t('gallery.irrigationSubtitle') },
    { icon: <Table className="w-12 h-12" />, title: t('gallery.showroomTitle'), subtitle: t('gallery.showroomSubtitle') },
    { icon: <DropletOff className="w-12 h-12" />, title: t('gallery.waterproofingTitle'), subtitle: t('gallery.waterproofingSubtitle') }
  ];

  const masonryImages = [
    { 
      src: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/layout1.jpg", 
      titleKey: "gallery.projects.qaiwan1.title", 
      subtitleKey: "gallery.projects.qaiwan1.subtitle" 
    },
    { 
      src: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/layout2.jpg", 
      titleKey: "gallery.projects.aburinasan1.title", 
      subtitleKey: "gallery.projects.aburinasan1.subtitle" 
    },
    { 
      src: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/layout3.jpg", 
      titleKey: "gallery.projects.qaiwan2.title", 
      subtitleKey: "gallery.projects.qaiwan2.subtitle" 
    },
    { 
      src: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/layout4.jpg", 
      titleKey: "gallery.projects.aburinasan2.title", 
      subtitleKey: "gallery.projects.aburinasan2.subtitle" 
    },
    { 
      src: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/layout5.jpg", 
      titleKey: "gallery.projects.halabja.title", 
      subtitleKey: "gallery.projects.halabja.subtitle" 
    },
    { 
      src: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/layout6.jpg", 
      titleKey: "gallery.projects.faruq.title", 
      subtitleKey: "gallery.projects.faruq.subtitle" 
    },
    { 
      src: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/layout7.jpg", 
      titleKey: "gallery.projects.mass.title", 
      subtitleKey: "gallery.projects.mass.subtitle" 
    },
    { 
      src: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/garden.jpg", 
      titleKey: "gallery.projects.qaiwan3.title", 
      subtitleKey: "gallery.projects.qaiwan3.subtitle" 
    },
    { 
      src: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/landingpage.jpg", 
      titleKey: "gallery.projects.aburinasan3.title", 
      subtitleKey: "gallery.projects.aburinasan3.subtitle" 
    },
    { 
      src: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/layout7.jpg", 
      titleKey: "gallery.projects.rozhi.title", 
      subtitleKey: "gallery.projects.rozhi.subtitle" 
    },
    { 
      src: "https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/layout5.jpg", 
      titleKey: "gallery.projects.villa.title", 
      subtitleKey: "gallery.projects.villa.subtitle" 
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  };

  const openPreview = (index: number) => {
    setSelectedImage(index);
  };

  const closePreview = () => {
    setSelectedImage(null);
  };

  const nextPreview = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! + 1) % masonryImages.length);
    }
  };

  const prevPreview = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! - 1 + masonryImages.length) % masonryImages.length);
    }
  };

  // Handle click outside modal
  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closePreview();
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closePreview();
    }
    if (e.key === 'ArrowLeft') {
      isRTL ? nextPreview() : prevPreview();
    }
    if (e.key === 'ArrowRight') {
      isRTL ? prevPreview() : nextPreview();
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    if (selectedImage !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, isRTL]);

  return (
    <div className="min-h-screen bg-white" dir={direction}>
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'url("https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/hero.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-8">
          <div className="inline-block bg-green-600/30 backdrop-blur-sm px-6 py-2 rounded-full text-sm mb-6 border border-green-500/30">
            {t('gallery.since2012')}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {t('gallery.heroTitle')}
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            {t('gallery.heroDescription')}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-green-600">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-accent py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('gallery.galleryTitle')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('gallery.galleryDescription')}</p>
          </div>

          {/* Image Carousel */}
          <div className="relative mb-16">
            <button 
              onClick={prevSlide}
              className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition border border-gray-200`}
            >
              <ChevronLeft className={`w-6 h-6 text-gray-900 ${isRTL ? 'rotate-180' : ''}`} />
            </button>

            <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
              {portfolioImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={image}
                    alt={`Portfolio image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className={`absolute ${isRTL ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition border border-gray-200`}
            >
              <ChevronRight className={`w-6 h-6 text-gray-900 ${isRTL ? 'rotate-180' : ''}`} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {portfolioImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition ${
                    currentSlide === index ? 'bg-green-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Masonry Gallery */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">{t('gallery.portfolioTitle')}</h3>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
              {masonryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="break-inside-avoid mb-6 cursor-pointer"
                  onClick={() => openPreview(index)}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group border border-gray-100">
                    <img 
                      src={image.src}
                      alt={t(image.titleKey)}
                      className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <h4 className="font-bold text-lg mb-1">{t(image.titleKey)}</h4>
                        <p className="text-sm text-gray-200">{t(image.subtitleKey)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/bottomimage.jpg"
                alt="Luxury interior with green sofa"
                className="w-full h-auto"
              />
            </div>

            <div className="text-gray-800">
              <h2 className="text-4xl font-bold mb-6">
                {t('gallery.transformTitle')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t('gallery.transformDescription')}
              </p>
              <Link 
                href="/contact" 
                className={`bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-medium transition inline-flex items-center gap-3 group ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {t('gallery.contactButton')}
                <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition ${isRTL ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Preview Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
          onClick={handleClickOutside}
        >
          {/* Blur Background */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-lg"></div>
          
          {/* Image Container*/}
          <div 
            ref={modalRef}
            className="relative max-w-4xl max-h-[85vh] mx-4 z-50 cursor-auto"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden relative">
              <img
                src={masonryImages[selectedImage].src}
                alt={t(masonryImages[selectedImage].titleKey)}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 to-transparent p-6 text-white">
                <h3 className="text-xl font-bold mb-2">
                  {t(masonryImages[selectedImage].titleKey)}
                </h3>
                <p className="text-gray-200">
                  {t(masonryImages[selectedImage].subtitleKey)}
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={closePreview}
              className="absolute -top-12 right-0 z-60 text-white hover:text-gray-300 transition p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevPreview}
              className={`absolute -top-12 ${isRTL ? 'right-12' : 'left-0'} z-60 text-white hover:text-gray-300 transition p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm`}
            >
              <ChevronLeft className={`w-6 h-6 ${isRTL ? 'rotate-180' : ''}`} />
            </button>

            <button
              onClick={nextPreview}
              className={`absolute -top-12 ${isRTL ? 'left-0' : 'right-12'} z-60 text-white hover:text-gray-300 transition p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm`}
            >
              <ChevronRight className={`w-6 h-6 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-60 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
            {selectedImage + 1} / {masonryImages.length}
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-60 flex gap-2">
            {masonryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-2 h-2 rounded-full transition ${
                  selectedImage === index ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;