import React, { useState } from 'react';

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState('studio');

  const tabs = [
    { id: 'studio', label: 'Sanity Studio', subtitle: 'The most flexible Headless CMS' },
    { id: 'visual', label: 'Real-time + Visual Editing', subtitle: 'Interactive visual editing' },
    { id: 'agent', label: 'Content Agent', subtitle: 'The agent that knows your content' },
    { id: 'sdk', label: 'APP SDK + APIS', subtitle: 'Custom apps equals tailored workflows' },
    { id: 'functions', label: 'Functions + Agent Actions', subtitle: 'Automate your content operations' },
    { id: 'lake', label: 'Content Lake + CDN', subtitle: 'The database optimized for content' }
  ];

  const tabContent = {
    studio: {
      title: 'The most flexible Headless CMS',
      description: 'Configure with TypeScript. Customize with React. The feature-rich, real-time content workspace your team needs.',
      gradient: 'from-blue-100 to-purple-100'
    },
    visual: {
      title: 'Interactive visual editing',
      description: 'Serve visual drag-and-drop editing as you expect without compromising on content reusability.',
      gradient: 'from-green-100 to-blue-100'
    },
    agent: {
      title: 'The agent that knows your content',
      description: 'Accelerate your work. Query, audit, edit at scale through natural language. Turn hours of work into minutes.',
      gradient: 'from-purple-100 to-pink-100'
    },
    sdk: {
      title: 'Custom apps equals tailored workflows',
      description: 'Create dashboards, tables, and grids or complex apps that power exactly the workflows your team needs.',
      gradient: 'from-yellow-100 to-orange-100'
    },
    functions: {
      title: 'Automate your content operations',
      description: 'Deploy serverless functions. Trigger on any content change. Use AI to let your content act—automate, adapt, and transform as you want.',
      gradient: 'from-indigo-100 to-purple-100'
    },
    lake: {
      title: 'The database optimized for content',
      description: 'Store content as JSON, from any source, structured your way. Query anything with GROQ. Serve it fast anywhere from a real-time content backend.',
      gradient: 'from-teal-100 to-cyan-100'
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Full stack</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-4 leading-tight px-4">
            Take control of your content workflows.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Gain full control to build, scale, and ship the content applications your team needs, 
            so they can move faster, collaborate and scale without friction.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="flex overflow-x-auto border-b border-gray-200 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'border-b-2 border-gray-900 text-gray-900 bg-gray-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {tabContent[activeTab].description}
                </p>
              </div>
              
              <div className={`bg-gradient-to-br ${tabContent[activeTab].gradient} rounded-2xl h-80 flex items-center justify-center relative overflow-hidden shadow-inner`}>
                {/* Abstract SVG Illustration */}
                <svg className="w-full h-full opacity-20" viewBox="0 0 400 320" fill="none">
                  <rect x="20" y="20" width="360" height="40" rx="8" fill="currentColor" className="text-gray-400" />
                  <rect x="20" y="80" width="240" height="200" rx="12" fill="currentColor" className="text-gray-300" />
                  <rect x="280" y="80" width="100" height="200" rx="12" fill="currentColor" className="text-gray-300" />
                  <circle cx="60" cy="40" r="8" fill="currentColor" className="text-red-400" />
                  <circle cx="90" cy="40" r="8" fill="currentColor" className="text-yellow-400" />
                  <circle cx="120" cy="40" r="8" fill="currentColor" className="text-green-400" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-500 font-semibold text-lg">Feature Preview</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTabs;

