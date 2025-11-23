import React from 'react';

const FrameworkGrid = () => {
  const frameworks = [
    'Next.js', 'Tanstack Start', 'React Router', 'React', 
    'Vite', 'Svelte', 'Nuxt', 'Angular',
    'Astro', 'Remix', 'Bun', 'Laravel',
    '.NET', 'Electron', 'Hydrogen', 'Vue',
    'Eleventy', 'Ember', 'Express', 'Fresh',
    'Gatsby', 'htmx', 'TypeScript', 'Meteor',
    'Nest', 'Node', 'React Native', 'Redwood',
    'Solid', 'Deno', 'PHP', 'Python'
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
          Works where you work
        </h2>
        
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Query, mutate, and render Sanity content with{' '}
          <code className="bg-gray-100 px-3 py-1 rounded font-mono text-lg text-gray-900">
            ${'{your_favorite_framework}'}
          </code>
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4 max-w-6xl mx-auto mb-12">
          {frameworks.map((framework) => (
            <div 
              key={framework} 
              className="p-4 border-2 border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer bg-white"
            >
              <p className="text-sm font-semibold text-gray-700">{framework}</p>
            </div>
          ))}
        </div>
        
        <p className="text-gray-500 text-lg">
          …or whichever one is coming next.
        </p>
        
        <div className="mt-12 flex justify-center items-center space-x-8 flex-wrap gap-4">
          <p className="text-sm text-gray-600 font-medium">Deploy anywhere:</p>
          {['Vercel', 'Netlify', 'Cloudflare', 'AWS', 'Azure', 'Google Cloud'].map((platform) => (
            <div key={platform} className="text-lg font-semibold text-gray-700 opacity-60 hover:opacity-100 transition-opacity">
              {platform}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworkGrid;

