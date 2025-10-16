import React from 'react';
import Image from 'next/image';
import { Phone, Home, Calendar, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link'

export default function PrefabHomeLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="mx-auto px-4 lg:px-8 pt-10 pb-16 items-center">
        <div className="grid lg:grid-cols-[1fr_auto] gap-0">
          {/* Left Section*/}
          <div className="bg-gray-50 rounded-[40px] p-8 md:p-12 lg:p-14 flex flex-col justify-between min-h-[700px] relative ">
            {/* Header */}
            <div className="flex items-center">
                <img src="image/logo.png" alt="" className='w-10 mr-15' />
              <nav className="hidden md:flex gap-8 text-sm text-gray-600">
                <Link href="/" className="hover:text-gray-900 transition">Home</Link>
                <Link href="/pricing" className="hover:text-gray-900 transition">Pricing</Link>
                <Link href="/projects" className="hover:text-gray-900 transition">Projects</Link>
              </nav>
              {/* <select
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          value={i18n.language}
          className='hidden md:block bg-white px-6 py-2 rounded-md'
        >
          <option value="ku">Kurdish</option>
          <option value="en">English</option>
        </select> */}
            </div>

            <div className="space-y-8">
              <div className="space-y-5">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
                  Dream Home<br />
                  Made Easy
                </h1>
                <p className="text-gray-600 text-sm md:text-base max-w-md leading-relaxed">
                  Build Your Dream Home with Our Expert Prefab Solutions - Fast, Affordable, and Tailored to You!
                </p>
              </div>

              <Link href="/projects" className="bg-gray-900 text-white px-10 py-4 rounded-full hover:bg-gray-800 transition inline-flex items-center gap-3 group w-fit text-sm">
                Project
                <span className="group-hover:translate-x-1 transition"><ArrowRight></ArrowRight></span>
              </Link>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-light text-gray-900 mb-1">65<span className="text-xl font-black text-gray-400">~</span></div>
                  <div className="text-xs text-gray-500 leading-tight">days for turnkey construction delivery</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-light text-gray-900 mb-1">7<span className="text-xl font-black text-gray-400">+</span></div>
                  <div className="text-xs text-gray-500 leading-tight">Years of warranty on the completed home</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-light text-gray-900 mb-1">180<span className="text-xl font-black text-gray-400">+</span></div>
                  <div className="text-xs text-gray-500 leading-tight">homes built since 2023</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Image Container */}
          <div className="relative min-h-[700px] w-full lg:w-[600px]  lg:-ml-8 ">
            {/* Top Buttons */}
            <div className="absolute top-6 right-13 z-10 flex gap-3">
              <button className="bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition flex items-center gap-2 text-sm font-medium">
                About Us
              </button>
              <button className="bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition flex items-center gap-2 text-sm font-medium">
                <Phone className="w-4 h-4" />
                +964 (999) 999-9999
              </button>
            </div>

            {/* Image that fits the entire container */}
            <Image
              src="/image/land.png"
              alt="Modern prefab home"
              fill
              className="object-cover rounded-[40px]"
              priority
              sizes="(max-width: 768px) 100vw, 65vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}