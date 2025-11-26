import React, { useMemo } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Hero from '../components/sanity/Hero';
import ProductCategories from '../components/sanity/ProductCategories';
import FeaturedProducts from '../components/sanity/FeaturedProducts';
import ProductGrid from '../components/sanity/ProductGrid';
import { useProducts } from '../hooks/useProducts';

const Home = () => {
  const { theme } = useTheme();
  const { products, loading, error } = useProducts();

  // Memoize product arrays to prevent unnecessary re-renders
  const newArrivals = useMemo(() => products.slice(6, 10), [products]);
  const bestSellers = useMemo(() => products.slice(0, 4), [products]);

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-dark-primary' : 'bg-light-primary'
        }`}>
        <div className="w-16 h-16 border-4 border-system-blue border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    console.error("Failed to load products:", error);
    // Continue rendering with empty or fallback data if possible, or show error
  }

  return (
    <div className={`min-h-screen transition-colors ${theme === 'dark' ? 'bg-dark-primary' : 'bg-light-primary'
      }`}>
      <Hero />
      <ProductCategories />
      <FeaturedProducts products={products} />
      <ProductGrid
        title="New Arrivals"
        subtitle="Latest Collection"
        products={newArrivals}
        backgroundVariant="secondary"
      />
      <ProductGrid
        title="Best Sellers"
        subtitle="Customer Favorites"
        products={bestSellers}
        backgroundVariant="primary"
      />
    </div>
  );
};

export default Home;

