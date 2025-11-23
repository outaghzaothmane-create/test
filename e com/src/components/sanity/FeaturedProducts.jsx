import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import ProductCard from './ProductCard';

const FeaturedProducts = ({ onAddToCart }) => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredProducts = [
    { id: 1, name: 'Ultraboost 23', price: 180, category: 'Sneakers', color: 'Core Black' },
    { id: 2, name: 'Samba OG', price: 100, category: 'Sneakers', color: 'White' },
    { id: 3, name: 'Forum Low', price: 90, category: 'Sneakers', color: 'Cloud White' },
    { id: 4, name: 'NMD R1', price: 130, category: 'Sneakers', color: 'Triple Black' },
    { id: 5, name: 'Stan Smith', price: 80, category: 'Sneakers', color: 'White/Green' },
    { id: 6, name: 'Superstar', price: 85, category: 'Sneakers', color: 'Core Black' }
  ];

  const productsPerView = 4;
  const maxIndex = Math.max(0, featuredProducts.length - productsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className={`py-24 px-6 relative overflow-hidden transition-colors ${
      theme === 'dark' ? 'bg-dark-primary' : 'bg-light-primary'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className={`text-footnote font-medium tracking-wide mb-4 transition-colors animate-fade-in ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>
              Featured Selection
            </p>
            <h2 className={`text-title-1 font-semibold transition-colors animate-fade-in-up animate-delay-200 ${
              theme === 'dark' ? 'text-white' : 'text-gray-1000'
            }`}>
              Featured Sneakers
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className={`w-11 h-11 rounded-apple flex items-center justify-center transition-all active-scale hover-lift ${
                theme === 'dark'
                  ? 'bg-dark-secondary hover:bg-dark-tertiary text-white'
                  : 'bg-light-secondary hover:bg-gray-200 text-gray-900'
              }`}
            >
              <svg className="w-5 h-5 icon-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className={`w-11 h-11 rounded-apple flex items-center justify-center transition-all active-scale hover-lift ${
                theme === 'dark'
                  ? 'bg-dark-secondary hover:bg-dark-tertiary text-white'
                  : 'bg-light-secondary hover:bg-gray-200 text-gray-900'
              }`}
            >
              <svg className="w-5 h-5 icon-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / productsPerView)}%)` }}
          >
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="flex-shrink-0 px-3" style={{ width: `${100 / productsPerView}%` }}>
                <ProductCard product={product} onAddToCart={onAddToCart} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
