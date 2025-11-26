import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useCart } from '../../contexts/CartContext';
import QuickViewModal from './QuickViewModal';

const ProductCard = ({ product, index }) => {
  const { theme } = useTheme();
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleQuickView = (e) => {
    e.preventDefault(); // Prevent navigation to product page
    setIsQuickViewOpen(true);
  };

  return (
    <>
      <Link
        to={`/product/${product.id}`}
        className="group relative block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`relative aspect-[3/4] overflow-hidden rounded-apple-lg mb-4 transition-all duration-500 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
          }`}>
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-full object-cover object-center transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'
                }`}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-gray-400">image</span>
            </div>
          )}

          {/* Overlay Actions */}
          <div className={`absolute inset-x-0 bottom-0 p-4 translate-y-full transition-transform duration-300 ${isHovered ? 'translate-y-0' : ''
            }`}>
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className={`w-full py-3 rounded-apple font-semibold shadow-lg mb-2 transition-transform active:scale-95 ${theme === 'dark'
                  ? 'bg-white text-black hover:bg-gray-100'
                  : 'bg-white text-gray-900 hover:bg-gray-50'
                }`}
            >
              Add to Cart
            </button>
            <button
              onClick={handleQuickView}
              className={`w-full py-3 rounded-apple font-semibold shadow-lg backdrop-blur-md transition-transform active:scale-95 ${theme === 'dark'
                  ? 'bg-black/50 text-white hover:bg-black/70'
                  : 'bg-white/80 text-gray-900 hover:bg-white'
                }`}
            >
              Quick View
            </button>
          </div>

          {/* Badges */}
          {product.isNew && (
            <span className="absolute top-3 left-3 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-black text-white rounded-full">
              New
            </span>
          )}
          {product.discount && (
            <span className="absolute top-3 right-3 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-system-red text-white rounded-full">
              -{product.discount}%
            </span>
          )}
        </div>

        <div className="space-y-1">
          <h3 className={`text-lg font-medium transition-colors ${theme === 'dark' ? 'text-white group-hover:text-gray-300' : 'text-gray-900 group-hover:text-gray-600'
            }`}>
            {product.name}
          </h3>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            {product.category}
          </p>
          <div className="flex items-center justify-between">
            <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              ${product.price}
            </p>
          </div>
        </div>
      </Link>

      <QuickViewModal
        product={product}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
};

export default ProductCard;
