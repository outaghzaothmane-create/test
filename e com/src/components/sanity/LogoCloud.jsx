import React from 'react';

const LogoCloud = () => {
  const topRow = [
    'RIOT GAMES', 'Linear', 'SKIMS', 'Spotify', 'ANTHROPIC', 'MoMA', 
    "ARC'TERYX", 'COMPLEX', 'GAGA', 'NORDSTROM'
  ];
  
  const bottomRow = [
    'replit', 'Brex', 'carhartt', 'Expedia', 'Figma', 
    'JUST EAT Takeaway.com', 'shopify', 'TECOVAS', 'Unity', 'lovevery'
  ];

  return (
    <section className="py-16 px-6 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto overflow-hidden">
        {/* Top row */}
        <div className="flex items-center gap-12 mb-12 opacity-60">
          {topRow.map((company, index) => (
            <div 
              key={index} 
              className="text-white font-bold text-xl whitespace-nowrap hover:opacity-100 transition-opacity"
            >
              {company}
            </div>
          ))}
        </div>
        
        {/* Bottom row */}
        <div className="flex items-center gap-12 opacity-60">
          {bottomRow.map((company, index) => (
            <div 
              key={index} 
              className="text-white font-bold text-xl whitespace-nowrap hover:opacity-100 transition-opacity"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;

