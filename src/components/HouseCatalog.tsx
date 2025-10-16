'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import Link from 'next/link';

interface House {
  id: number;
  name: string;
  location: string;
  price: number;
  image_base64?: string;
  sqft?: number;
}

export default function HouseCatalog() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [houses, setHouses] = useState<House[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch houses from Supabase
  useEffect(() => {
    const fetchHouses = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('properties')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(8); // Limit to 8 for the slider

        if (error) throw error;
        setHouses((data as House[]) || []);
      } catch (err) {
        console.error('Error fetching houses:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchHouses();
  }, []);

  // Calculate how many items to show at once based on screen size
  const itemsPerView = 4;
  const maxIndex = Math.max(0, houses.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading catalog...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="text-5xl font-bold text-gray-800 mb-2">
              Catalog of ours
            </h1>
            <h1 className="text-5xl font-bold text-gray-800">
              objects for 2024
            </h1>
          </div>
          <div className="text-right">
            <p className="text-gray-700 font-medium">Frame technology</p>
            <p className="text-gray-700 font-medium">of house construction in Kurdistan</p>
            <p className="text-gray-400 text-sm mt-1">at the peak of popularity</p>
          </div>
        </div>

        {/* Houses Grid */}
        {houses.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-xl">No properties available at the moment.</p>
          </div>
        ) : (
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex gap-6 transition-transform duration-500 ease-out"
                style={{ 
                  transform: `translateX(-${currentIndex * (100 / itemsPerView + 1.5)}%)` 
                }}
              >
                {houses.map((house) => (
                  <div 
                    key={house.id} 
                    className="min-w-[calc(25%-18px)] flex-shrink-0"
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer">
                      {house.image_base64 ? (
                        <img 
                          src={house.image_base64} 
                          alt={house.name}
                          className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-96 bg-gray-300 flex items-center justify-center">
                          <span className="text-gray-500">No Image</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-semibold mb-1">
                          {house.name}
                        </h3>
                        <p className="text-sm text-white/80 mb-2">
                          {house.location}
                        </p>
                        {house.sqft && (
                          <p className="text-sm text-white/80 mb-1">
                            {house.sqft}m²
                          </p>
                        )}
                        <p className="text-lg">
                          Price: ${formatPrice(house.price)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              <Link 
                href="/projects"
                className="flex items-center gap-2 px-8 py-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                To catalog
                <ChevronRight className="w-5 h-5" />
              </Link>
              
              <div className="flex gap-3 ml-auto">
                <button 
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className={`w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                    currentIndex === 0 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-gray-100 hover:scale-110'
                  }`}
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>
                <button 
                  onClick={nextSlide}
                  disabled={currentIndex >= maxIndex}
                  className={`w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                    currentIndex >= maxIndex 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-gray-100 hover:scale-110'
                  }`}
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}