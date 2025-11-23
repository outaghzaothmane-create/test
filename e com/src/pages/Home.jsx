import React, { useMemo } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Hero from '../components/sanity/Hero';
import ProductCategories from '../components/sanity/ProductCategories';
import FeaturedProducts from '../components/sanity/FeaturedProducts';
import ProductGrid from '../components/sanity/ProductGrid';

const Home = ({ onAddToCart }) => {
  const { theme } = useTheme();

  // Memoize product arrays to prevent unnecessary re-renders
  const newArrivals = useMemo(() => [
    { id: 7, name: 'Ultraboost 23', price: 180, category: 'Sneakers', color: 'Core Black' },
    { id: 8, name: 'Samba OG', price: 100, category: 'Sneakers', color: 'White' },
    { id: 9, name: 'Forum Low', price: 90, category: 'Sneakers', color: 'Cloud White' },
    { id: 10, name: 'NMD R1', price: 130, category: 'Sneakers', color: 'Triple Black' }
  ], []);

  const bestSellers = useMemo(() => [
    { id: 11, name: 'Stan Smith', price: 80, category: 'Sneakers', color: 'White/Green' },
    { id: 12, name: 'Superstar', price: 85, category: 'Sneakers', color: 'Core Black' },
    { id: 13, name: 'Gazelle', price: 90, category: 'Sneakers', color: 'Cloud White' },
    { id: 14, name: 'Ozweego', price: 120, category: 'Sneakers', color: 'Core Black' }
  ], []);

  return (
    <div className={`min-h-screen transition-colors ${
      theme === 'dark' ? 'bg-dark-primary' : 'bg-light-primary'
    }`}>
      <Hero />
      <ProductCategories />
      <FeaturedProducts onAddToCart={onAddToCart} />
      <ProductGrid
        title="New Arrivals"
        subtitle="Latest Collection"
        products={newArrivals}
        onAddToCart={onAddToCart}
      />
      <ProductGrid
        title="Best Sellers"
        subtitle="Customer Favorites"
        products={bestSellers}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};

export default Home;

