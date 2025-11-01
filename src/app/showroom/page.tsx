"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Truck, Headphones, RefreshCcw, CreditCard } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useDirection } from '@/components/hooks/useDirection'; 

export default function Showroom() {
  const { t, i18n } = useTranslation();
  const { isRTL, direction } = useDirection();
  const [activeTab, setActiveTab] = useState('new');

  const categories = [
    { name: t('showroom.categories.herbs'), items: 6, image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/pot1.png' },
    { name: t('showroom.categories.shrubs'), items: 2, image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/halwasraw.png' },
    { name: t('showroom.categories.plant'), items: 9, image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/pot2.png' },
    { name: t('showroom.categories.planters'), items: 7, image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/pot3.png' },
    { name: t('showroom.categories.bonsai'), items: 3, image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/pot4.png' },
    { name: t('showroom.categories.basil'), items: 5, image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/pot5.png' }
  ];

  const products = [
    { id: 1, name: 'Drinio Argenlaisle', rating: 5, views: 381, likes: 93, cart: 40, discount: 10, image: '/image/pot1.png' },
    { id: 2, name: 'Silver Cock Comb', discount: 10, image: '/image/halwasraw.png' },
    { id: 3, name: 'Purple Coneflower', rating: 5, views: 240, likes: 93, cart: 40, image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/halwasraw.png' },
    { id: 4, name: 'Epipod Variegole Plant', rating: 5, image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/pot3.png' },
    { id: 5, name: 'Ornamental Sweet Potato', rating: 4, image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/pot4.png' },
    { id: 6, name: 'Denne Blozing Star', rating: 5, views: 846, likes: 93, cart: 40, image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/pot5.png' },
    { id: 7, name: 'Siebold Viburnum', rating: 4, image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/pot1.png' },
    { id: 8, name: 'Whalest Tickseec Plant', rating: 5, image: 'https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/pot2.png' }
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir={direction}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white px-4 py-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-4 tracking-wide">
              {t('showroom.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 italic">
              {t('showroom.hero.subtitle')}
            </p>
          </div>

          {/* Grid Layout with Image in Center */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            
            {/* Left Features */}
            <div className="space-y-12 text-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-green-100 p-3 rounded-2xl flex items-center justify-center">
                  <Truck className="w-6 h-6 text-green-800" />
                </div>              
                <h3 className="text-xl font-semibold text-gray-700">
                  {t('showroom.features.freeDelivery.title')}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {t('showroom.features.freeDelivery.description')}
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="bg-green-100 p-3 rounded-2xl flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-green-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700">
                  {t('showroom.features.support.title')}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {t('showroom.features.support.description')}
                </p>
              </div>
            </div>

            {/* Center Image */}
            <div className="flex justify-center items-center my-8 lg:my-0">
              <Image 
                src="https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/enjanacenter.png" 
                alt="Featured Plant" 
                width={500} 
                height={500} 
                className="object-contain w-full max-w-md"
              />
            </div>

            {/* Right Features */}
            <div className="space-y-12 text-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-green-100 p-3 rounded-2xl flex items-center justify-center">
                  <RefreshCcw className="w-6 h-6 text-green-800" />
                </div>  
                <h3 className="text-xl font-semibold text-gray-700">
                  {t('showroom.features.returns.title')}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {t('showroom.features.returns.description')}
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="bg-green-100 p-3 rounded-2xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-green-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700">
                  {t('showroom.features.payment.title')}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {t('showroom.features.payment.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => {
            const bgColors = [
              'bg-green-50', 
              'bg-blue-50', 
              'bg-amber-50',
              'bg-green-50', 
              'bg-blue-50', 
              'bg-amber-50'
            ];
            const bgColor = bgColors[idx % bgColors.length];
            
            return (
              <div key={idx} className={`${bgColor} rounded-lg p-4 text-center hover:shadow-lg transition cursor-pointer group border border-gray-100`}>
                <div className="w-full h-32 mx-auto mb-3 overflow-hidden group-hover:scale-105 transition flex items-center justify-center">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800 text-sm">{cat.name}</h3>
                  <p className="text-xs text-gray-500 bg-white bg-opacity-70 px-2 py-1 rounded-full">
                    {cat.items} {t('showroom.categories.items')}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trending Products */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-700 mb-6">
            {t('showroom.products.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col">
              {/* Product Image */}
              <div className="bg-gray-100 h-64 flex items-center justify-center p-4 rounded-lg mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>

              {/* Product Information */}
              <div className="space-y-2 text-center">
                <h3 className="font-semibold text-gray-800 text-lg">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div 
            className="p-6 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ 
              backgroundImage: "url('https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/greenbg.png')", 
              backgroundSize: "cover", 
              backgroundPosition: "center" 
            }}
          >
            <div className={`text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
              <p className="italic mb-2">{t('showroom.banner.decor.subtitle')}</p>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
                {t('showroom.banner.decor.title')}
              </h2>
              <p className="bg-white text-green-600 px-6 py-2 rounded-md hover:bg-gray-100 transition inline-block">
                {t('showroom.banner.decor.cta')}
              </p>
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
              <img 
                src="https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/pot1.png" 
                alt="Decor Plant" 
                className="w-full h-full object-contain" 
              />
            </div>
          </div>

          <div 
            className="p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-4" 
            style={{ 
              backgroundImage: "url('https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/backshow.png')", 
              backgroundSize: "cover", 
              backgroundPosition: "center" 
            }}
          >
            <div className={`text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
              <p className="italic text-gray-600 mb-2">{t('showroom.banner.pots.subtitle')}</p>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                {t('showroom.banner.pots.title')}
              </h2>
              <p className="bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition inline-block">
                {t('showroom.banner.pots.cta')}
              </p>
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
              <img 
                src="https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/pot2.png" 
                alt="Home Plant" 
                className="w-full h-full object-contain" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}