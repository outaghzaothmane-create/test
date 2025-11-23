import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import ProductCard from './ProductCard';

const FeaturedProducts = ({ onAddToCart }) => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredProducts = [
    { id: 1, name: 'Gazelle Blue', price: 90, category: 'Sneakers', color: 'Blue', image: '/images/image-1-gazelle-blue.jpg' },
    { id: 2, name: 'Samba OG White', price: 100, category: 'Sneakers', color: 'White', image: '/images/image-8-samba-og-white.jpg' },
    { id: 3, name: 'Gazelle White', price: 90, category: 'Sneakers', color: 'White', image: '/images/image-3-gazelle-white.jpg' },
    { id: 4, name: 'Gazelle Black', price: 90, category: 'Sneakers', color: 'Black', image: '/images/image-2-gazelle-black.jpg' },
    { id: 5, name: 'Samba OG Black', price: 100, category: 'Sneakers', color: 'Black', image: '/images/image-9-samba-og-black.jpg' },
    { id: 6, name: 'Gazelle Grey', price: 90, category: 'Sneakers', color: 'Grey', image: '/images/image-4-gazelle-grey.jpg' }
  ];

  // Responsive products per view: 1 on mobile, 2 on tablet, 4 on desktop
  const [productsPerView, setProductsPerView] = useState(4);
  
  useEffect(() => {
    const updateProductsPerView = () => {
      if (window.innerWidth < 640) {
        setProductsPerView(1); // Mobile: 1 product
      } else if (window.innerWidth < 1024) {
        setProductsPerView(2); // Tablet: 2 products
      } else {
        setProductsPerView(4); // Desktop: 4 products
      }
    };
    
    updateProductsPerView();
    window.addEventListener('resize', updateProductsPerView);
    return () => window.removeEventListener('resize', updateProductsPerView);
  }, []);
  
  const maxIndex = Math.max(0, featuredProducts.length - productsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className={`py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden transition-colors ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-dark-primary via-dark-secondary to-dark-primary' 
        : 'bg-gradient-to-b from-light-primary via-light-secondary to-light-primary'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <p className={`text-footnote font-medium tracking-wide mb-2 sm:mb-4 transition-colors animate-fade-in ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>
              Featured Selection
            </p>
            <h2 className={`text-2xl sm:text-3xl md:text-title-1 font-semibold transition-colors animate-fade-in-up animate-delay-200 ${
              theme === 'dark' ? 'text-white' : 'text-gray-1000'
            }`}>
              Featured Sneakers
            </h2>
          </div>
          
          {/* Navigation buttons - hidden on mobile if only 1 product per view */}
          {productsPerView < featuredProducts.length && (
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-apple flex items-center justify-center transition-all active-scale hover-lift ${
                  theme === 'dark'
                    ? 'bg-dark-secondary hover:bg-dark-tertiary text-white'
                    : 'bg-light-secondary hover:bg-gray-200 text-gray-900'
                }`}
                aria-label="Previous products"
              >
                <span className="material-symbols-outlined text-lg sm:text-xl icon-bounce">chevron_left</span>
              </button>
              <button
                onClick={nextSlide}
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-apple flex items-center justify-center transition-all active-scale hover-lift ${
                  theme === 'dark'
                    ? 'bg-dark-secondary hover:bg-dark-tertiary text-white'
                    : 'bg-light-secondary hover:bg-gray-200 text-gray-900'
                }`}
                aria-label="Next products"
              >
                <span className="material-symbols-outlined text-lg sm:text-xl icon-bounce">chevron_right</span>
              </button>
            </div>
          )}
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / productsPerView)}%)` }}
          >
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="flex-shrink-0 px-2 sm:px-3" style={{ width: `${100 / productsPerView}%` }}>
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
