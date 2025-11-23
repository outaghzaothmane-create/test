import React from 'react';

const ThreeColumn = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12 sm:mb-16 lg:mb-20 leading-tight px-4">
          Empower devs and creators to deliver<br />faster—at scale with AI
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* APPS & SDK Card */}
          <div className="group p-10 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#0090FF] rounded-xl mb-6 flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 letter-spacing-wide">
              APPS & SDK
            </h3>
            <p className="text-lg text-gray-900 leading-relaxed">
              Content applications that enable custom workflows at scale, from creation to distribution.
            </p>
          </div>
          
          {/* Compute + AI Card */}
          <div className="group p-10 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#6E56CF] rounded-xl mb-6 flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
              Compute + AI
            </h3>
            <p className="text-lg text-gray-900 leading-relaxed">
              Automate anything with functions and agent actions, powering your content operations with AI
            </p>
          </div>
          
          {/* Content Lake Card */}
          <div className="group p-10 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-emerald-500 rounded-xl mb-6 flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
              Content Lake
            </h3>
            <p className="text-lg text-gray-900 leading-relaxed">
              A database optimized for content queries, authoring and delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeColumn;

