import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ProductCategories = () => {
  const { theme } = useTheme();
  const categories = [
    {
      name: 'Sneakers',
      icon: 'sports',
      color: 'system-blue'
    },
    {
      name: 'Running',
      icon: 'directions_run',
      color: 'system-green'
    },
    {
      name: 'Training',
      icon: 'fitness_center',
      color: 'system-red'
    },
    {
      name: 'Football',
      icon: 'sports_soccer',
      color: 'system-yellow'
    },
    {
      name: 'Basketball',
      icon: 'sports_basketball',
      color: 'system-orange'
    },
    {
      name: 'Apparel',
      icon: 'checkroom',
      color: 'system-purple'
    }
  ];

  return (
    <section className={`py-12 sm:py-16 md:py-24 px-4 sm:px-6 border-t transition-colors ${
      theme === 'dark' 
        ? 'bg-dark-secondary border-gray-800' 
        : 'bg-light-secondary border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <p className={`text-footnote font-medium tracking-wide mb-2 sm:mb-4 transition-colors animate-fade-in ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
          }`}>
            Shop by Category
          </p>
          <h2 className={`text-2xl sm:text-3xl md:text-title-1 font-semibold mb-4 transition-colors animate-fade-in-up animate-delay-200 ${
            theme === 'dark' ? 'text-white' : 'text-gray-1000'
          }`}>
            Shop by Sport
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group rounded-apple-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-apple-md hover-lift cursor-pointer animate-fade-in-up ${
                theme === 'dark'
                  ? 'bg-dark-secondary hover:bg-dark-tertiary'
                  : 'bg-light-secondary hover:bg-gray-200'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-apple mx-auto mb-3 sm:mb-4 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${
                theme === 'dark'
                  ? 'bg-gray-800 text-gray-400'
                  : category.color === 'system-blue' ? 'bg-system-blue text-white' :
                    category.color === 'system-green' ? 'bg-system-green text-white' :
                    category.color === 'system-red' ? 'bg-system-red text-white' :
                    category.color === 'system-yellow' ? 'bg-system-yellow text-white' :
                    category.color === 'system-orange' ? 'bg-system-orange text-white' :
                    'bg-system-purple text-white'
              }`}>
                <span className="material-symbols-outlined text-2xl sm:text-4xl">
                  {category.icon}
                </span>
              </div>
              <h3 className={`text-center text-xs sm:text-subhead font-semibold transition-colors ${
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
