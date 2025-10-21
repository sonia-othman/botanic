"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useTranslation } from 'react-i18next';
import { useDirection } from "@/components/hooks/useDirection";

export default function AboutPage() {
  const { t } = useTranslation();
  const { direction } = useDirection();

  return (
    <div className="min-h-screen flex flex-col" dir={direction}>
      <Navbar />
      <section
        className="relative h-[60vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/image/about.jpg')" }}
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
              src="/image/aboutstory1.jpg"
              alt="Our Story"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 px-6 md:px-12">
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
                    src="/image/user1.png"
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