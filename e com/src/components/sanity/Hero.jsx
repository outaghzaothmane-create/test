import React, { useEffect, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { theme } = useTheme();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className={`min-h-[90vh] flex items-center pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 relative overflow-hidden transition-colors ${theme === 'dark' ? 'bg-dark-primary' : 'bg-light-primary'
      }`}>
      {/* Background Brand Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden select-none">
        <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold opacity-[0.03] tracking-tighter animate-float ${theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
          LUXE
        </span>
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 animate-blob ${theme === 'dark' ? 'bg-blue-900' : 'bg-blue-200'
          }`} />
        <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 animate-blob animation-delay-2000 ${theme === 'dark' ? 'bg-purple-900' : 'bg-purple-200'
          }`} />
      </div>

      <div className="max-w-7xl mx-auto relative w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left z-10">
            <div className="overflow-hidden">
              <p className={`text-sm sm:text-base font-bold tracking-[0.2em] uppercase transition-colors animate-slide-in-left ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`}>
                New Collection 2024
              </p>
            </div>

            <h1 className={`text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.9] tracking-tight transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
              <span className="block overflow-hidden">
                <span className="block animate-fade-in-up animation-delay-100">Redefine</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block animate-fade-in-up animation-delay-200 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-shimmer">
                  Your Style
                </span>
              </span>
            </h1>

            <p className={`text-lg sm:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 transition-colors animate-fade-in-up animation-delay-400 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
              Experience the perfect blend of luxury and performance.
              Designed for those who dare to stand out.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up animation-delay-600">
              <Link
                to="/shop"
                className={`group relative w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 ${theme === 'dark'
                    ? 'bg-white text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                    : 'bg-black text-white hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]'
                  }`}
              >
                Shop Now
                <span className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20"></span>
              </Link>
              <Link
                to="/about"
                className={`group w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg border-2 transition-all hover:scale-105 ${theme === 'dark'
                    ? 'border-gray-700 text-white hover:border-white hover:bg-white/5'
                    : 'border-gray-200 text-black hover:border-black hover:bg-black/5'
                  }`}
              >
                Explore
              </Link>
            </div>

            {/* Stats or Trust Indicators */}
            <div className="pt-8 sm:pt-12 flex items-center justify-center lg:justify-start gap-8 sm:gap-12 animate-fade-in-up animation-delay-800 border-t border-gray-200/10">
              <div>
                <p className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>2k+</p>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Premium Products</p>
              </div>
              <div>
                <p className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>15k+</p>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative z-10 lg:h-[600px] flex items-center justify-center animate-scale-in animation-delay-400">
            <div className="relative w-full max-w-lg aspect-[4/5] group">
              {/* Decorative elements */}
              <div className={`absolute -inset-4 rounded-[2rem] opacity-50 blur-2xl transition-all duration-500 group-hover:opacity-70 ${theme === 'dark' ? 'bg-gradient-to-tr from-blue-600 to-purple-600' : 'bg-gradient-to-tr from-blue-400 to-purple-400'
                }`} />

              <div className={`relative h-full rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:-translate-y-2 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                }`}>
                <img
                  src="/images/image-1-gazelle-blue.jpg"
                  alt="Featured Collection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Floating Card */}
                <div className={`absolute bottom-8 left-8 right-8 p-6 rounded-2xl backdrop-blur-xl border shadow-lg transition-all duration-500 group-hover:translate-y-[-10px] ${theme === 'dark'
                    ? 'bg-gray-900/80 border-gray-700/50'
                    : 'bg-white/80 border-white/50'
                  }`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Featured</p>
                      <p className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Gazelle Blue</p>
                    </div>
                    <span className={`text-lg font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>$90.00</span>
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
