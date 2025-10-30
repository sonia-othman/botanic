"use client"
import React from 'react';
import Navbar from '@/components/Navbar';
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useDirection } from '@/components/hooks/useDirection';

interface Article {
  id: number;
  category: string;
  title: string;
  image: string | null;
}

export default function ConstructionPage() {
  const { t, i18n } = useTranslation();
  const { isRTL, direction } = useDirection();
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [allImages, setAllImages] = React.useState<string[]>([]);

  const waterproofingArticles: Article[] = [
    {
      id: 1,
      category: t('constructions.waterproofing.articles.1.category'),
      title: t('constructions.waterproofing.articles.1.title'),
      image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/14.png',
    },
    {
      id: 2,
      category: t('constructions.waterproofing.articles.2.category'),
      title: t('constructions.waterproofing.articles.2.title'),
      image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/activities1.png',
    },
    {
      id: 3,
      category: t('constructions.waterproofing.articles.3.category'),
      title: t('constructions.waterproofing.articles.3.title'),
      image:'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/activities2.png',
    },
    {
      id: 4,
      category: t('constructions.waterproofing.articles.4.category'),
      title: t('constructions.waterproofing.articles.4.title'),
      image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/activities10.png',
    },
    {
      id: 5,
      category: t('constructions.waterproofing.articles.5.category'),
      title: t('constructions.waterproofing.articles.5.title'),
      image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/g10.png',
    },
    {
      id: 6,
      category: t('constructions.waterproofing.articles.6.category'),
      title: t('constructions.waterproofing.articles.6.title'),
      image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/bottomimage.jpg',
    },
    {
      id: 7,
      category: t('constructions.waterproofing.articles.7.category'),
      title: t('constructions.waterproofing.articles.7.title'),
      image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/14.png',
    },
    {
      id: 8,
      category: t('constructions.waterproofing.articles.8.category'),
      title: t('constructions.waterproofing.articles.8.title'),
      image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/layout5.jpg',
    },
    {
      id: 9,
      category: t('constructions.waterproofing.articles.9.category'),
      title: t('constructions.waterproofing.articles.9.title'),
      image:'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/layout6.jpg',
    },
    {
      id: 10,
      category: t('constructions.waterproofing.articles.10.category'),
      title: t('constructions.waterproofing.articles.10.title'),
      image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/layout7.jpg',
    }
  ];

  const insulationArticles: Article[] = [
    {
      id: 1,
      category: t('constructions.insulation.articles.1.category'),
      title: t('constructions.insulation.articles.1.title'),
      image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/explore.jpg',
    },
    {
      id: 2,
      category: t('constructions.insulation.articles.2.category'),
      title: t('constructions.insulation.articles.2.title'),
      image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/g2.png',
    },
    {
      id: 3,
      category: t('constructions.insulation.articles.3.category'),
      title: t('constructions.insulation.articles.3.title'),
      image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/greenroof.jpg',
    },
    {
      id: 4,
      category: t('constructions.insulation.articles.4.category'),
      title: t('constructions.insulation.articles.4.title'),
      image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/layout1.jpg',
    },
    {
      id: 5,
      category: t('constructions.insulation.articles.5.category'),
      title: t('constructions.insulation.articles.5.title'),
      image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/layout4.jpg',
    },
    {
      id: 6,
      category: t('constructions.insulation.articles.6.category'),
      title: t('constructions.insulation.articles.6.title'),
      image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/atree.png',
    },
    {
      id: 7,
      category: t('constructions.insulation.articles.7.category'),
      title: t('constructions.insulation.articles.7.title'),
      image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/g1.png',
    },
    {
      id: 8,
      category: t('constructions.insulation.articles.8.category'),
      title: t('constructions.insulation.articles.8.title'),
      image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/card1.jpg',
    },
    {
      id: 9,
      category: t('constructions.insulation.articles.9.category'),
      title: t('constructions.insulation.articles.9.title'),
      image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/activities6.png',
    },
    {
      id: 10,
      category: t('constructions.insulation.articles.10.category'),
      title: t('constructions.insulation.articles.10.title'),
      image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/activities7.png',
    }
  ];

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedImage(allImages[newIndex]);
    }
  };

  const handleNext = () => {
    if (currentIndex < allImages.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedImage(allImages[newIndex]);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'ArrowLeft') {
          handlePrevious();
        } else if (e.key === 'ArrowRight') {
          handleNext();
        } else if (e.key === 'Escape') {
          setSelectedImage(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex, allImages]);

  const ArticleGrid = ({ articles }: { articles: Article[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" dir={direction}>
      {articles.map((article) => (
        <div
          key={article.id}
          className={`relative group cursor-pointer overflow-hidden rounded-lg ${
            article.id === 1 || article.id === 7 ? 'md:col-span-2 md:row-span-1' : ''
          } ${article.id === 7 ? 'lg:col-span-2' : ''}`}
          onClick={() => {
            if (article.image) {
              const images = articles
                .map(a => a.image)
                .filter((img): img is string => img !== null);
              setAllImages(images);
              const index = images.indexOf(article.image);
              setCurrentIndex(index);
              setSelectedImage(article.image);
            }
          }}
        >
          <div className="relative h-full min-h-[250px] md:min-h-[300px]">
            {article.image && (
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-xs tracking-widest mb-3">{article.category}</p>
              <h3 className="text-lg md:text-xl font-bold mb-4 leading-tight">
                {article.title}
              </h3>
            </div>
          </div>  
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto bg-gray-50" dir={direction}>
      <Navbar />
      
      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-7xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />

            <div className="absolute inset-0 flex items-end justify-start p-4 md:p-8 rounded-lg">
              <div className={`text-${isRTL ? 'right' : 'left'} text-white max-w-full md:max-w-lg`}>
                <p className="text-xs md:text-sm uppercase tracking-widest opacity-90">
                  {[...waterproofingArticles, ...insulationArticles].find((a) => a.image === selectedImage)?.category}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedImage(null)}
              className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors`}
            >
              <X className="w-6 h-6" />
            </button>

            {currentIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className={`absolute ${isRTL ? 'right-2 md:right-4' : 'left-2 md:left-4'} top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 md:p-3 transition-colors`}
              >
                {isRTL ? <ArrowRight className="w-5 h-5 md:w-6 md:h-6" /> : <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />}
              </button>
            )}

            {currentIndex < allImages.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className={`absolute ${isRTL ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 transition-colors`}
              >
                {isRTL ? <ArrowLeft className="w-6 h-6" /> : <ArrowRight className="w-6 h-6" />}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Waterproofing Section */}
      <section className="py-16 px-4 bg-accent">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            {t('constructions.waterproofing.title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('constructions.waterproofing.description')}
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ArticleGrid articles={waterproofingArticles} />
        </div>
      </section>

      {/* Insulation Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            {t('constructions.insulation.title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('constructions.insulation.description')}
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ArticleGrid articles={insulationArticles} />
        </div>
      </section>
    </div>
  );
}