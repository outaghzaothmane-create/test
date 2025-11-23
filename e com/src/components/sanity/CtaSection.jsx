import React from 'react';

const CtaSection = () => {
  return (
    <section className="py-24 px-6 bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F03E2F]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6E56CF]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight px-4">
          Say goodbye to limitations.<br />
          Just build it your way.
        </h2>
        
        <p className="text-xl lg:text-2xl text-gray-300 mb-10 font-light">
          Start in minutes. It's free.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 font-semibold text-lg transition-all hover:scale-105 shadow-xl">
            Get started now
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all font-semibold text-lg hover:scale-105">
            Contact sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

