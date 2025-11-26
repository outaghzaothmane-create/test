import React, { useState, useMemo } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Navigation from '../components/sanity/Navigation';
import Footer from '../components/sanity/Footer';
import ProductCard from '../components/sanity/ProductCard';
import ShoppingCart from '../components/sanity/ShoppingCart';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../contexts/CartContext';

const Shop = () => {
  const { theme } = useTheme();
  const { products, loading, error } = useProducts();
  const { isCartOpen, closeCart, openCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Sneakers', 'Running', 'Training', 'Football', 'Basketball', 'Apparel'];

  const filteredProducts = useMemo(() => {
    return selectedCategory === 'All'
      ? products
      : products.filter(p => p.category === selectedCategory);
  }, [products, selectedCategory]);

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-black' : 'bg-white'
        }`}>
        <div className="w-16 h-16 border-4 border-system-blue border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors ${theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
      <Navigation />

      <div className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className={`text-5xl lg:text-6xl font-bold mb-4 transition-colors animate-fade-in-up ${theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
              SHOP ALL PRODUCTS
            </h1>
            <p className={`text-lg transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
              Browse our complete collection of luxury products
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all active-scale hover-lift animate-fade-in-up ${selectedCategory === category
                    ? 'bg-system-blue text-white shadow-apple-md'
                    : theme === 'dark'
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <ShoppingCart />
    </div>
  );
};

export default Shop;

