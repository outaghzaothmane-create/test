import React from 'react';
import HeroSection from '../src/components/HeroSection.jsx';
import '../src/styles/animations.css';

const HeroDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <HeroSection />
    </div>
  );
};

export default HeroDemo;

