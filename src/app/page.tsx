import React from 'react';
import PrefabHomeLanding from '../components/PrefabHomeLanding';
import FrameTechnologyPage from '../components/FrameTechnologyPage';
import HouseCatalog from '@/components/HouseCatalog';
import AboutUs from '@/components/AboutUs';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PrefabHomeLanding />
      
      {/* Frame Technology Section */}
      <FrameTechnologyPage />
      <HouseCatalog />
      <AboutUs />
      
    </div>
  );
}