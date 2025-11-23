import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ProductCategories = () => {
  const { theme } = useTheme();
  const categories = [
    {
      name: 'Sneakers',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 11c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4 9 4v6zm-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12L5 6.3v4.92C5 15.54 8.25 20 12 21z"/>
        </svg>
      ),
      color: 'system-blue'
    },
    {
      name: 'Running',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'system-green'
    },
    {
      name: 'Training',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'system-red'
    },
    {
      name: 'Football',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'system-yellow'
    },
    {
      name: 'Basketball',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: 'system-orange'
    },
    {
      name: 'Apparel',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: 'system-purple'
    }
  ];

  return (
    <section className={`py-24 px-6 border-t transition-colors ${
      theme === 'dark' 
        ? 'bg-dark-primary border-gray-800' 
        : 'bg-light-primary border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className={`text-footnote font-medium tracking-wide mb-4 transition-colors animate-fade-in ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
          }`}>
            Shop by Category
          </p>
          <h2 className={`text-title-1 font-semibold mb-4 transition-colors animate-fade-in-up animate-delay-200 ${
            theme === 'dark' ? 'text-white' : 'text-gray-1000'
          }`}>
            Shop by Sport
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group rounded-apple-lg p-6 transition-all duration-300 hover:shadow-apple-md hover-lift cursor-pointer animate-fade-in-up ${
                theme === 'dark'
                  ? 'bg-dark-secondary hover:bg-dark-tertiary'
                  : 'bg-light-secondary hover:bg-gray-200'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-apple mx-auto mb-4 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${
                theme === 'dark'
                  ? 'bg-gray-800 text-gray-400'
                  : category.color === 'system-blue' ? 'bg-system-blue text-white' :
                    category.color === 'system-green' ? 'bg-system-green text-white' :
                    category.color === 'system-red' ? 'bg-system-red text-white' :
                    category.color === 'system-yellow' ? 'bg-system-yellow text-white' :
                    category.color === 'system-orange' ? 'bg-system-orange text-white' :
                    'bg-system-purple text-white'
              }`}>
                {category.icon}
              </div>
              <h3 className={`text-center text-subhead font-semibold transition-colors ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
