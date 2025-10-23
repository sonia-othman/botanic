import React from 'react';
import Services from '../components/Service';
import PdfSection from '@/components/PdfSection';
import PlantsSection from '@/components/PlantsSection';
import LandingPage from '@/components/LandingPage';
import WorksPages from '@/components/WorksPage';
import ClientsPage from '@/components/ClientsPage';
import ActivitiesPage from '@/components/ActivitiesPage';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <LandingPage />
      <WorksPages />
      <PlantsSection />
      <ClientsPage />
      <PdfSection />
      <Services />
      <ActivitiesPage />
    </div>
  );
}