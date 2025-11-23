import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Navigation from '../components/sanity/Navigation';
import Footer from '../components/sanity/Footer';
import ProductCard from '../components/sanity/ProductCard';
import ShoppingCart from '../components/sanity/ShoppingCart';

const Shop = () => {
  const { theme } = useTheme();
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Sneakers', 'Running', 'Training', 'Football', 'Basketball', 'Apparel'];

  const allProducts = [
    { id: 1, name: 'Ultraboost 23', price: 180, category: 'Sneakers', color: 'Core Black' },
    { id: 2, name: 'Samba OG', price: 100, category: 'Sneakers', color: 'White' },
    { id: 3, name: 'Forum Low', price: 90, category: 'Sneakers', color: 'Cloud White' },
    { id: 4, name: 'NMD R1', price: 130, category: 'Sneakers', color: 'Triple Black' },
    { id: 5, name: 'Stan Smith', price: 80, category: 'Sneakers', color: 'White/Green' },
    { id: 6, name: 'Superstar', price: 85, category: 'Sneakers', color: 'Core Black' },
    { id: 7, name: 'Gazelle', price: 90, category: 'Sneakers', color: 'Cloud White' },
    { id: 8, name: 'Ozweego', price: 120, category: 'Sneakers', color: 'Core Black' },
    { id: 9, name: 'Yeezy Boost 350', price: 220, category: 'Sneakers', color: 'Zebra' },
    { id: 10, name: 'ZX 2K Boost', price: 140, category: 'Sneakers', color: 'Core Black' },
    { id: 11, name: 'Tubular Shadow', price: 110, category: 'Sneakers', color: 'Core White' },
    { id: 12, name: 'Continental 80', price: 75, category: 'Sneakers', color: 'Cloud White' },
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      handleRemoveItem(id);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`min-h-screen transition-colors ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      <Navigation cartCount={cartCount} cartTotal={cartTotal} onCartClick={() => setIsCartOpen(true)} />
      
      <div className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className={`text-5xl lg:text-6xl font-bold mb-4 transition-colors animate-fade-in-up ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              SHOP ALL PRODUCTS
            </h1>
            <p className={`text-lg transition-colors ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
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
                className={`px-6 py-2 rounded-full font-medium transition-all active-scale hover-lift animate-fade-in-up ${
                  selectedCategory === category
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
                onAddToCart={handleAddToCart}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
};

export default Shop;

