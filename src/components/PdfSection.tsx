// components/PdfSection.tsx
"use client";
import React from "react";
import { useTranslation } from 'react-i18next';

export default function PdfSection() {
    const { t, i18n } = useTranslation();
  const pdfUrl = "/pdf/Botanic-Co-Profile.pdf"; 

  return (
    <div
      className=" relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/image/greenroof.jpg')", 
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4" >
        <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          {t('explore')}
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl mx-auto">
          {t('transform')}
        </p>

        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-22 py-3 bg-primary text-2xl text-white font-semibold rounded-xl shadow-md hover:bg-green-800 transition"
        >
          {t('explored')}
        </a>
      </div>
    </div>
  );
}
