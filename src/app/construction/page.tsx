"use client"
import React from 'react';
import Navbar from '@/components/Navbar';
import { ArrowLeft, ArrowRight, X } from "lucide-react";

interface Article {
  id: number;
  category: string;
  title: string;
  image: string | null;
}

export default function ConstructionPage() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [allImages, setAllImages] = React.useState<string[]>([]);

  const waterproofingArticles: Article[] = [
    {
      id: 1,
      category: 'WATERPROOFING SOLUTIONS',
      title: 'Complete Guide To Basement Waterproofing',
      image: 'image/14.png',
    },
    {
      id: 2,
      category: 'WATERPROOFING TECHNIQUES',
      title: 'Modern Membrane Systems',
      image: 'image/activities1.png',
    },
    {
      id: 3,
      category: 'WATERPROOFING TIPS',
      title: 'Foundation Sealing Best Practices',
      image:'image/activities2.png',
    },
    {
      id: 4,
      category: 'WATERPROOFING SOLUTIONS',
      title: 'Roof Waterproofing Methods',
      image: 'image/activities10.png',
    },
    {
      id: 5,
      category: 'EXPERT ADVICE',
      title: 'protecting your investment from water damage.',
      image: 'image/g10.png',
    },
    {
      id: 6,
      category: 'WATERPROOFING SYSTEMS',
      title: 'Commercial Building Protection',
      image: 'image/bottomimage.jpg',
    },
    {
      id: 7,
      category: 'WATERPROOFING GUIDE',
      title: 'Underground Structure Waterproofing',
      image: 'image/14.png',
    },
    {
      id: 8,
      category: 'WATERPROOFING MATERIALS',
      title: 'Choosing The Right Sealants',
      image: 'image/layout5.jpg',
    },
    {
      id: 9,
      category: 'WATERPROOFING PROJECTS',
      title: 'Bathroom and Wet Area Solutions',
      image:'image/layout6.jpg',
    },
    {
      id: 10,
      category: 'EXPERT ADVICE',
      title: 'Proper waterproofing prevents costly repairs.',
      image: 'image/layout7.jpg',
    }
  ];

  const insulationArticles: Article[] = [
    {
      id: 1,
      category: 'INSULATION SOLUTIONS',
      title: 'Complete Guide To Thermal Insulation',
      image: 'image/explore.jpg',
    },
    {
      id: 2,
      category: 'INSULATION TYPES',
      title: 'Modern Insulation Materials',
      image: 'image/g2.png',
    },
    {
      id: 3,
      category: 'INSULATION TIPS',
      title: 'Energy Efficient Building Practices',
      image: 'image/greenroof.jpg',
    },
    {
      id: 4,
      category: 'INSULATION METHODS',
      title: 'Spray Foam Installation Guide',
      image: 'image/layout1.jpg',
    },
    {
      id: 5,
      category: 'EXPERT ADVICE',
      title: 'Proper insulation is key to energy efficiency, reducing costs and creating comfortable living spaces.',
      image: 'image/layout4.jpg',

    },
    {
      id: 6,
      category: 'INSULATION SYSTEMS',
      title: 'Commercial Building Insulation',
      image: 'image/atree.png',
    },
    {
      id: 7,
      category: 'INSULATION GUIDE',
      title: 'Attic and Roof Insulation Techniques',
      image: 'image/g1.png',
    },
    {
      id: 8,
      category: 'INSULATION MATERIALS',
      title: 'Choosing Between Fiberglass and Cellulose',
      image: 'image/card1.jpg',
    },
    {
      id: 9,
      category: 'INSULATION PROJECTS',
      title: 'Soundproofing and Acoustic Insulation',
      image: 'image/activities6.png',
    },
    {
      id: 10,
      category: 'EXPERT ADVICE',
      title: 'Quality insulation reduces energy consumption by up to 50%.',
      image: 'image/activities7.png',

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="relative h-full min-h-[300px]">
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs tracking-widest mb-3">{article.category}</p>
                <h3 className="text-xl md:text-xl font-bold mb-4 leading-tight">
                  {article.title}
                </h3>
              </div>
            </div>  
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto bg-gray-50">
      {/* Header */}
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
      {/* Image */}
      <img
        src={selectedImage}
        alt="Preview"
        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
      />

      {/* Text Overlay*/}
      <div className="absolute inset-0 flex items-end justify-start p-8 rounded-lg">
        <div className="text-left text-white max-w-lg">
          <p className="text-sm uppercase tracking-widest opacity-90">
            {[
              ...waterproofingArticles,
              ...insulationArticles,
            ].find((a) => a.image === selectedImage)?.category}
          </p>
          <h2 className="text-xl font-medium mt-2 leading-snug drop-shadow-lg">
            {
              [
                ...waterproofingArticles,
                ...insulationArticles,
              ].find((a) => a.image === selectedImage)?.title
            }
          </h2>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Previous Button */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next Button */}
      {currentIndex < allImages.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 transition-colors"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      )}
    </div>
  </div>
)}
      {/* Waterproofing Section */}
      <section className="py-16 px-4 bg-accent">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Waterproofing
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Expert waterproofing solutions and techniques to protect your structures from water damage. 
            Comprehensive guides on materials, methods, and best practices.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ArticleGrid articles={waterproofingArticles} />
        </div>
      </section>


      {/* Insulation Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Insulation System
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Professional insulation services and techniques for energy efficiency. 
            Expert guidance on thermal and acoustic insulation solutions for your projects.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ArticleGrid articles={insulationArticles} />
        </div>
      </section>
    </div>
  );
}