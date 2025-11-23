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
          
          {/* Right: Product Image Placeholder */}
          <div className="relative animate-slide-in-right animate-delay-300">
            <div className={`aspect-square rounded-apple-xl overflow-hidden shadow-apple-xl relative group hover-scale transition-all duration-500 ${
              theme === 'dark'
                ? 'bg-gray-900'
                : 'bg-gray-100'
            }`}>
              <div className="w-full h-full flex items-center justify-center relative z-10">
                <div className="text-center space-y-6">
                  {/* Product Icon */}
                  <div className={`w-32 h-32 rounded-apple-lg mx-auto flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                    theme === 'dark'
                      ? 'bg-gray-800'
                      : 'bg-white shadow-apple'
                  }`}>
                    <svg className={`w-16 h-16 transition-all duration-500 group-hover:rotate-12 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 11c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4 9 4v6zm-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12L5 6.3v4.92C5 15.54 8.25 20 12 21z"/>
                      <path d="M9 8l6 3-6 3V8z"/>
                    </svg>
                  </div>
                  <div>
                    <p className={`text-headline font-semibold transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Ultraboost 23</p>
                    <p className={`text-subhead mt-1 transition-colors ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
                    }`}>Core Black</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
