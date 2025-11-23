import React from 'react';

const DarkSection = () => {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Decorative gradient mesh on the right - more subtle */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
        }}></div>
      </div>
      
      {/* Abstract geometric pattern - dots and lines */}
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)',
        backgroundSize: '20px 20px'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl">
          <p className="text-sm text-gray-400 mb-4 uppercase tracking-wider">
            THE CONTENT OPERATING SYSTEM
          </p>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-normal text-white mb-16 leading-[1.1] tracking-tight">
            Empower devs and creators to deliver faster—at scale with AI
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-yellow-400 mt-1 flex-shrink-0"></div>
              <div>
                <h3 className="text-white text-sm font-bold mb-2 uppercase tracking-wider">
                  APPS & SDK
                </h3>
                <p className="text-gray-400 text-lg">
                  Content applications that enable custom workflows at scale, from creation to distribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkSection;

