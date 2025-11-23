import React, { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const ProductCard = memo(({ product, onAddToCart, index = 0, isClickable = true }) => {
  const { theme } = useTheme();
  const { id, name, price, image, category, color } = product;

  const handleAddToCart = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
  }, [product, onAddToCart]);

  const CardWrapper = isClickable ? Link : 'div';
  const cardProps = isClickable ? { to: `/product/${id}` } : {};

  return (
    <CardWrapper 
      {...cardProps}
      className={`group relative rounded-apple-lg overflow-hidden transition-all duration-300 hover:shadow-apple-lg hover-lift border animate-fade-in-up block ${
        theme === 'dark'
          ? 'bg-dark-secondary border-gray-800'
          : 'bg-light-primary border-gray-200'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Product Image */}
      <div className={`aspect-square relative overflow-hidden ${
        theme === 'dark'
          ? 'bg-gray-900'
          : 'bg-gray-100'
      }`}>
        <div className="w-full h-full flex items-center justify-center relative z-10">
          <div className="text-center space-y-4">
            {/* Product Icon */}
            <div className={`w-32 h-32 rounded-apple-lg mx-auto flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-gray-800 to-gray-900'
                : 'bg-gradient-to-br from-white to-gray-50 shadow-apple-lg'
            }`}>
              <svg className={`w-16 h-16 transition-all duration-500 group-hover:scale-110 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>
            <p className={`text-caption-1 font-medium transition-colors ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>{category}</p>
          </div>
        </div>
        {/* Hover overlay */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ${
          theme === 'dark' ? 'bg-black/60' : 'bg-white/90'
        }`}>
          <button
            onClick={handleAddToCart}
            className={`px-6 py-3 rounded-apple-lg font-semibold text-body transition-all shadow-apple-md active-scale hover-lift ${
              theme === 'dark'
                ? 'bg-white text-black hover:bg-gray-100'
                : 'bg-system-blue text-white hover:bg-blue-600'
            }`}
          >
            Add to Cart
          </button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-5 space-y-2">
        <p className={`text-caption-2 font-medium transition-colors ${
          theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
        }`}>{category}</p>
        <h3 className={`text-headline font-semibold transition-colors ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>{name}</h3>
        {color && (
          <p className={`text-subhead transition-colors ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
          }`}>{color}</p>
        )}
        <div className="flex items-center justify-between pt-2">
          <span className={`text-title-2 font-semibold transition-colors ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>${price}</span>
          <button
            onClick={handleAddToCart}
            className={`px-5 py-2 rounded-apple font-semibold text-subhead transition-all active-scale hover-lift ${
              theme === 'dark'
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-system-blue text-white hover:bg-blue-600'
            }`}
          >
            Add
          </button>
        </div>
      </div>
    </CardWrapper>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
