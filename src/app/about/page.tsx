"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useTranslation } from 'react-i18next';
import { useDirection } from "@/components/hooks/useDirection";
import { ArrowUpRight, Leaf, HandHeart, Sprout } from 'lucide-react';
import Link from "next/link";
export default function AboutPage() {
  const { t } = useTranslation();
  const { direction } = useDirection();

  return (
    <div className="min-h-screen flex flex-col" dir={direction}>
      <Navbar />
      <section
        className="relative h-[60vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/about.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-5xl font-bold text-white z-10">
          {t('about.title')}
        </h1>
        <p className="relative text-white mt-4 max-w-2xl text-center z-10">
          {t('about.heroDescription')}
        </p>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              {t('about.storyTitle')}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('about.storyDescription')}
            </p>
          </div>
          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden">
            <Image
              src="https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/aboutstory1.jpg"
              alt="Our Story"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-3">
              {t('about.missionTitle')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('about.missionDescription')}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-3">
              {t('about.visionTitle')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('about.visionDescription')}
            </p>
          </div>
        </div>
      </section>

      <section className="h-full bg-accent">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary flex-1">
              {t('gallery.heroTitle')}
            </h1>
           
          </div>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            {t('about.established')}
          </p>
        </div>

        {/* Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {/* Large Card - Farmer Portrait */}
          <div className="md:row-span-2 lg:row-span-2">
            <div className="relative h-full min-h-[500px] md:min-h-[700px] rounded-3xl overflow-hidden group">
              <img
                src="https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/ab2.jpg"
                alt="Farmer in field"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/95 via-green-900/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  {t('about.passion')}
                </h2>
                <p className="text-green-100 mb-6 text-base sm:text-lg">
                {t('about.urban')}
                </p>
                
              </div>
            </div>
          </div>

          {/* Natural Farming Card */}
          <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mb-6">
              <Leaf className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{t('about.expertise')}</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {t('about.expertiseDesc')}
            </p>
          </div>

          {/* Watering Plants Image */}
          <div className="md:row-span-2 lg:row-span-1 rounded-3xl overflow-hidden ">
            <img
              src="https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/activities12.png"
              alt="Watering plants"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Farmer Working Image */}
          <div className="lg:row-span-1 rounded-3xl overflow-hidden min-h-[300px]">
            <img
              src="https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/greenroof.jpg"
              alt="Farmer working in field"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Quality Products Card */}
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-6 sm:p-8  flex flex-col items-center justify-center text-center lg:col-start-3">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mb-6 ">
              <HandHeart className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{t('about.commitment')}</h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              {t('about.commitmentDesc')}
            </p>
            <Link href="/contact" className="bg-green-800 hover:bg-green-600 text-white px-8 py-3 rounded-4xl font-semibold">
              {t('gallery.contactButton')}
            </Link>
          </div>
        </div>
      </div>
    </section>
      {/* Core Values */}
      <section className="py-20 bg-white px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            {t('about.valuesTitle')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-primary mb-3">
                {t('about.innovationTitle')}
              </h4>
              <p className="text-gray-600">
                {t('about.innovationDescription')}
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-primary mb-3">
                {t('about.integrityTitle')}
              </h4>
              <p className="text-gray-600">
                {t('about.integrityDescription')}
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-primary mb-3">
                {t('about.sustainabilityTitle')}
              </h4>
              <p className="text-gray-600">
                {t('about.sustainabilityDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>
       <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-center text-center">          
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t('about.missionstate')}
            </h1>
            <Sprout className="w-12 h-12 text-green-600 flex-shrink-0" strokeWidth={1.5} />
          </div>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 leading-relaxed">
              {t('about.missionDesc')}
            </p>
            
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-3xl overflow-hidden shadow-xl">
          <img 
            src="https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/garden1.jpg" 
            alt="Person watering plants in a sustainable garden"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat 1 */}
          <div className="bg-accent rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-5xl font-bold text-gray-700 mb-3">10</h3>
            <p className="text-gray-700 font-semibold mb-3">Suppliers</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have
            </p>
          </div>

          {/* Stat 2 - Highlighted */}
          <div className="bg-emerald-800 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-5xl font-bold text-white mb-3">190+</h3>
            <p className="text-white font-semibold mb-3">Completed Projects</p>
            <p className="text-white/90 text-sm leading-relaxed">
              There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have
            </p>
          </div>

          {/* Stat 3 */}
          <div className="bg-accent rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-5xl font-bold text-gray-700 mb-3">15+</h3>
            <p className="text-gray-700 font-semibold mb-3">Total Clients</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have
            </p>
          </div>

          {/* Stat 4 */}
          <div className="bg-emerald-800 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-5xl font-bold text-white mb-3">12</h3>
            <p className="text-white font-semibold mb-3">Employees</p>
            <p className="text-white/90 text-sm leading-relaxed">
              There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            {t('about.teamTitle')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rebaz Aziz", role: t('about.ceoRole') },
              { name: "Sakar Namiq", role: t('about.accountantRole') },
              { name: "Ranjdar Salar", role: t('about.engineerRole') },
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="https://znlzvtokjovapsijnhwg.supabase.co/storage/v1/object/public/images/images/user1.png"
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-semibold text-gray-800">{member.name}</h4>
                <p className="text-primary text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}