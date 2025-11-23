import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`pt-32 pb-24 px-6 relative overflow-hidden transition-colors ${
      theme === 'dark' ? 'bg-dark-primary' : 'bg-light-primary'
    }`}>
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 entrance-slide-up">
            <p className={`text-footnote font-medium tracking-wide transition-colors animate-fade-in ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>
              NEW COLLECTION
            </p>

            <h1 className={`text-display font-semibold leading-none tracking-tight transition-colors animate-fade-in-up animate-delay-200 ${
              theme === 'dark' ? 'text-white' : 'text-gray-1000'
            }`}>
              Impossible is Nothing
            </h1>
            
            <p className={`text-body leading-relaxed transition-colors animate-fade-in-up animate-delay-300 ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-700'
            }`}>
              Push your limits. Break boundaries. Discover the latest in performance 
              and style with our premium athletic collection.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 animate-fade-in-up animate-delay-400">
              <button className={`px-8 py-3.5 rounded-apple-lg font-semibold text-body transition-all active-scale hover-lift ${
                theme === 'dark'
                  ? 'bg-white text-black hover:bg-gray-100 shadow-apple-md'
                  : 'bg-system-blue text-white hover:bg-blue-600 shadow-apple-md'
              }`}>
                Shop Now
              </button>
              <button className={`px-8 py-3.5 rounded-apple-lg font-semibold text-body border-2 transition-all active-scale hover-lift ${
                theme === 'dark'
                  ? 'border-gray-600 text-white hover:bg-gray-800'
                  : 'border-gray-300 text-gray-900 hover:bg-gray-100'
              }`}>
                Explore Collection
              </button>
            </div>
          </div>
          
          {/* Right: Product Image */}
          <div className="relative animate-slide-in-right animate-delay-300">
            <div className={`aspect-square rounded-apple-xl overflow-hidden shadow-apple-xl relative group hover-scale transition-all duration-500 ${
              theme === 'dark'
                ? 'bg-gray-900'
                : 'bg-gray-100'
            }`}>
              <img 
                src="/images/image-1-gazelle-blue.jpg" 
                alt="Gazelle Blue - Featured Product"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="eager"
              />
              {/* Product Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className={`text-headline font-semibold text-white transition-colors`}>
                  Gazelle Blue
                </p>
                <p className={`text-subhead mt-1 text-white/80 transition-colors`}>
                  Classic Style
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
