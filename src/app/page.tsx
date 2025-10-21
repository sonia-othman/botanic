import React from 'react';
import PrefabHomeLanding from '../components/PrefabHomeLanding';
import FrameTechnologyPage from '../components/FrameTechnologyPage';
import HouseCatalog from '@/components/HouseCatalog';
import Services from '../components/Service';
import PdfSection from '@/components/PdfSection';
import PlantsSection from '@/components/PlantsSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <PrefabHomeLanding />
      <FrameTechnologyPage />
      <PlantsSection />
      <HouseCatalog />
      <PdfSection />
      <Services />
      
    </div>
  );
}