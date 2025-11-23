import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl mx-auto w-full">
        {/* Badge */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-full shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-700">Now available</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8 animate-fade-in-up animation-delay-200">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
            Create beautiful
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900">
              experiences
            </span>
          </h1>
        </div>

        {/* Subheading */}
        <div className="text-center mb-12 animate-fade-in-up animation-delay-400">
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            A minimal, powerful platform designed for creators who value 
            simplicity and elegance in their work.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-600">
          <button className="group relative w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-base overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <span className="relative z-10">Start creating</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="group w-full sm:w-auto px-8 py-4 bg-white/60 backdrop-blur-sm border-2 border-gray-200/50 text-gray-900 rounded-full font-medium text-base transition-all duration-300 hover:bg-white hover:border-gray-300 hover:scale-105 hover:shadow-lg">
            Watch demo
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* Social Proof */}
        <div className="text-center animate-fade-in-up animation-delay-800">
          <p className="text-sm text-gray-500 mb-6">
            Trusted by creative teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            <div className="text-xl font-semibold text-gray-400">Stripe</div>
            <div className="text-xl font-semibold text-gray-400">Notion</div>
            <div className="text-xl font-semibold text-gray-400">Linear</div>
            <div className="text-xl font-semibold text-gray-400">Vercel</div>
            <div className="text-xl font-semibold text-gray-400">Figma</div>
          </div>
        </div>

        {/* Floating Cards Preview */}
        <div className="relative mt-20 animate-fade-in-up animation-delay-1000">
          <div className="relative mx-auto max-w-4xl">
            {/* Main Card */}
            <div className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200/50 p-8 sm:p-12">
              <div className="space-y-4">
                <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
                <div className="h-3 bg-gray-200 rounded-full w-5/6"></div>
                
                <div className="pt-6 grid grid-cols-2 gap-4">
                  <div className="h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl"></div>
                  <div className="h-32 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl"></div>
                </div>
              </div>
            </div>

            {/* Floating Card 1 */}
            <div className="absolute -top-8 -left-8 hidden lg:block">
              <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-6 w-48 animate-float">
                <div className="space-y-3">
                  <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-2/3"></div>
                  <div className="h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl mt-4"></div>
                </div>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -bottom-6 -right-8 hidden lg:block">
              <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 p-6 w-48 animate-float animation-delay-2000">
                <div className="space-y-3">
                  <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                  <div className="h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

