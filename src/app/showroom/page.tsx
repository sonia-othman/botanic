"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Truck, Headphones, RefreshCcw, CreditCard } from 'lucide-react';

export default function Showroom() {
  const [activeTab, setActiveTab] = useState('new');

  const categories = [
    { name: 'Herbs', items: 6, image: '/image/pot1.png' },
    { name: 'Shrubs', items: 2, image: '/image/halwasraw.png' },
    { name: 'Plant', items: 9, image: '/image/pot2.png' },
    { name: 'Planters', items: 7, image: '/image/pot3.png' },
    { name: 'Bonsai', items: 3, image: '/image/pot4.png' },
    { name: 'Basil', items: 5, image: '/image/pot5.png' }
  ];

  const products = [
    { id: 1, name: 'Drinio Argenlaisle',   rating: 5, views: 381, likes: 93, cart: 40, discount: 10, image: '/image/pot1.png' },
    { id: 2, name: 'Silver Cock Comb', discount: 10, image: '/image/halwasraw.png' },
    { id: 3, name: 'Purple Coneflower',  rating: 5, views: 240, likes: 93, cart: 40, image: '/image/pot2.png' },
    { id: 4, name: 'Epipod Variegole Plant', rating: 5, image: '/image/pot3.png' },
    { id: 5, name: 'Ornamental Sweet Potato',  rating: 4, image: '/image/pot4.png' },
    { id: 6, name: 'Denne Blozing Star',  rating: 5, views: 846, likes: 93, cart: 40, image: '/image/pot5.png' },
    { id: 7, name: 'Siebold Viburnum', rating: 4, image: '/image/pot1.png' },
    { id: 8, name: 'Whalest Tickseec Plant', rating: 5, image: '/image/pot2.png' }
  ];

  const features = [
    { title: 'Free Shipping', desc: 'Lorem ipsum Dolor' },
    { title: '24/7 Support', desc: 'Lorem ipsum Dolor' },
    { title: 'Big Saving', desc: 'Lorem ipsum Dolor' },
    { title: 'Online Payment', desc: 'Lorem ipsum Dolor' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-white px-4 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-left">
          <h1 className="text-5xl text-center md:text-6xl font-extrabold text-primary mb-4 tracking-wide">
            Botanic Company
          </h1>
          <p className="text-lg text-center md:text-xl text-gray-700 italic">
            Discover the most incredible plants for your home
          </p>
        </div>

        {/* Grid Layout with Image in Center */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Left Features */}
          <div className="space-y-12 text-left">
            <div className="flex flex-col items-start space-y-2">
            <div className="bg-green-100 p-3 rounded-2xl flex items-center justify-center">
              <Truck className="w-6 h-6 text-green-800" />
            </div>              
            <h3 className="text-xl font-semibold text-gray-700">
                Free and Fast Delivery
              </h3>
              <p className="text-gray-600 text-sm">
                Plants delivered fresh to your door — free on orders over $50.
              </p>
            </div>

            <div className="flex flex-col items-start space-y-2">
             <div className="bg-green-100 p-3 rounded-2xl flex items-center justify-center">
              <Headphones className="w-6 h-6 text-green-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700">
                24/7 Customer Support
              </h3>
              <p className="text-gray-600 text-sm">
                We're here whenever you need us — day or night.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center">
            <Image 
              src="/image/object.png" 
              alt="Featured Plant" 
              width={300} 
              height={300} 
              className="object-contain"
            />
          </div>

          {/* Right Features */}
          <div className="space-y-12 text-left">
            <div className="flex flex-col items-start space-y-2">
            <div className="bg-green-100 p-3 rounded-2xl flex items-center justify-center">
                <RefreshCcw className="w-6 h-6 text-green-800" />
              </div>  
              <h3 className="text-xl font-semibold text-gray-700">
                Hassle-Free Returns
              </h3>
              <p className="text-gray-600 text-sm">
                Changed your mind? Return it within 30 days, no stress.
              </p>
            </div>

            <div className="flex flex-col items-start space-y-2">
            <div className="bg-green-100 p-3 rounded-2xl flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-green-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700">
                Secure Payments
              </h3>
              <p className="text-gray-600 text-sm">
                Pay safely with 100% encrypted checkout.
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
                <div className="w-full h-30 mx-auto mb-3 overflow-hidden group-hover:scale-105 transition flex items-center justify-center">
                    <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-contain" 
                    />
                </div>
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-800 text-sm">{cat.name}</h3>
                    <p className="text-xs text-gray-500 bg-white bg-opacity-70 px-2 py-1 rounded-full">{cat.items} items</p>
                </div>
                </div>
            );
            })}
        </div>
        </section>

      {/* Trending Products */}
     <section className="max-w-7xl mx-auto px-4 py-12">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-700 mb-6">Our Products</h2>
    <div className="flex justify-center space-x-8 mb-12">
      
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
    {products.map((product) => (
      <div key={product.id} className="flex flex-col">
        {/* Product Image */}
        <div className="bg-gray-100 h-70 flex items-center justify-center p-4 rounded-lg mb-4">
          <img 
            src={product.image} 
            alt={product.name} 
            className="max-w-full max-h-full object-contain" 
          />
        </div>

        {/* Product Information*/}
        <div className="space-y-2 text-center">
          {/* Product Name */}
          <h3 className="font-semibold text-gray-800 text-lg">{product.name}</h3>
          
         

         
        </div>
      </div>
    ))}
  </div>

  
</section>

      {/* Banner Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-12 text-white flex items-center justify-between"style={{ backgroundImage: "url('/image/greenbg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div>
              <p className="italic mb-2">natural</p>
              <h2 className="text-4xl font-bold mb-6">Decor Home</h2>
              <p className="bg-white text-green-600 px-6 py-2 rounded-md hover:bg-gray-100 transition">
                Turning Spaces into Green Stories.
              </p>
            </div>
            <div className="w-50 h-50">
              <img src="/image/pot1.png" alt="Decor Plant" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="bg-gray-200 p-12 flex items-center justify-between" style={{ backgroundImage: "url('/image/backshow.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div>
              <p className="italic text-gray-600 mb-2">Pots</p>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Home Plants</h2>
              <p className="bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition">
                The Art of Living Green.
              </p>
            </div>
            <div className="w-50 h-50">
              <img src="/image/pot2.png" alt="Home Plant" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

   
    </div>
  );
}