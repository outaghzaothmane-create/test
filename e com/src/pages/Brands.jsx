import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Navigation from '../components/sanity/Navigation';
import Footer from '../components/sanity/Footer';
import ProductGrid from '../components/sanity/ProductGrid';

const Brands = () => {
  const { theme } = useTheme();

  const brands = [
    { id: 1, name: 'Tiffany & Co.', products: [
      { id: 101, name: 'Tiffany Diamond Ring', price: 25000, category: 'Jewelry' },
      { id: 102, name: 'Tiffany Necklace', price: 15000, category: 'Jewelry' },
      { id: 103, name: 'Tiffany Bracelet', price: 8000, category: 'Jewelry' },
    ]},
    { id: 2, name: 'Rolex', products: [
      { id: 201, name: 'Rolex Submariner', price: 12000, category: 'Watches' },
      { id: 202, name: 'Rolex Datejust', price: 15000, category: 'Watches' },
      { id: 203, name: 'Rolex GMT', price: 18000, category: 'Watches' },
    ]},
    { id: 3, name: 'Cartier', products: [
      { id: 301, name: 'Cartier Love Bracelet', price: 7500, category: 'Jewelry' },
      { id: 302, name: 'Cartier Tank Watch', price: 6000, category: 'Watches' },
      { id: 303, name: 'Cartier Ring', price: 9500, category: 'Jewelry' },
    ]},
    { id: 4, name: 'Gucci', products: [
      { id: 401, name: 'Gucci Handbag', price: 2500, category: 'Accessories' },
      { id: 402, name: 'Gucci Sunglasses', price: 450, category: 'Accessories' },
      { id: 403, name: 'Gucci Belt', price: 650, category: 'Accessories' },
    ]},
  ];

  const handleAddToCart = (product) => {
    console.log('Add to cart:', product);
  };

  return (
    <div className={`min-h-screen transition-colors ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      <Navigation cartCount={0} cartTotal={0} onCartClick={() => {}} />
      
      <div className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className={`text-5xl lg:text-6xl font-bold mb-4 transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Our Brands
            </h1>
            <p className={`text-lg transition-colors ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Discover luxury brands and premium collections
            </p>
          </div>

          <div className="space-y-20">
            {brands.map((brand) => (
              <div key={brand.id} className={`border-b pb-12 ${
                theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
              }`}>
                <h2 className={`text-3xl font-bold mb-8 transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {brand.name}
                </h2>
                <ProductGrid
                  title=""
                  subtitle=""
                  products={brand.products}
                  onAddToCart={handleAddToCart}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Brands;

