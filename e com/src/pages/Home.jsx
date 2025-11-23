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
    { id: 7, name: 'Gazelle Burgundy', price: 90, category: 'Sneakers', color: 'Burgundy', image: '/images/image-5-gazelle-burgundy.jpg' },
    { id: 8, name: 'Gazelle Pink', price: 90, category: 'Sneakers', color: 'Pink', image: '/images/image-6-gazelle-pink.jpg' },
    { id: 9, name: 'Gazelle Black CQ', price: 95, category: 'Sneakers', color: 'Black', image: '/images/image-7-gazelle-black-cq.jpg' },
    { id: 10, name: 'Campus 00s Grey', price: 85, category: 'Sneakers', color: 'Grey', image: '/images/image-10-campus-00s-grey.jpg' }
  ], []);

  const bestSellers = useMemo(() => [
    { id: 11, name: 'Gazelle Blue', price: 90, category: 'Sneakers', color: 'Blue', image: '/images/image-1-gazelle-blue.jpg' },
    { id: 12, name: 'Samba OG White', price: 100, category: 'Sneakers', color: 'White', image: '/images/image-8-samba-og-white.jpg' },
    { id: 13, name: 'Gazelle White', price: 90, category: 'Sneakers', color: 'White', image: '/images/image-3-gazelle-white.jpg' },
    { id: 14, name: 'Gazelle Black', price: 90, category: 'Sneakers', color: 'Black', image: '/images/image-2-gazelle-black.jpg' }
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
        backgroundVariant="secondary"
      />
      <ProductGrid
        title="Best Sellers"
        subtitle="Customer Favorites"
        products={bestSellers}
        onAddToCart={onAddToCart}
        backgroundVariant="primary"
      />
    </div>
  );
};

export default Home;

