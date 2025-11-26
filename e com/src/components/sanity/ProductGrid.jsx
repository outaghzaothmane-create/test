import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import ProductCard from './ProductCard';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ProductGrid = ({ title, subtitle, products, backgroundVariant = 'primary' }) => {
  const { theme } = useTheme();
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  // Determine background based on variant
  const backgroundClass = backgroundVariant === 'secondary'
    ? theme === 'dark'
      ? 'bg-dark-secondary border-gray-800'
      : 'bg-light-secondary border-gray-200'
    : theme === 'dark'
      ? 'bg-dark-primary border-gray-800'
      : 'bg-light-primary border-gray-200';

  return (
    <section
      ref={ref}
      className={`py-12 sm:py-16 md:py-24 px-4 sm:px-6 border-t transition-colors ${backgroundClass}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <p className={`text-footnote font-medium tracking-wide mb-2 sm:mb-4 transition-colors ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>
            {subtitle}
          </p>
          <h2 className={`text-2xl sm:text-3xl md:text-title-1 font-semibold transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-1000'
            }`}>
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
