import React, { useState } from 'react';
import { useTheme } from './contexts/ThemeContext';
import Navigation from './components/sanity/Navigation';
import Hero from './components/sanity/Hero';
import ProductCategories from './components/sanity/ProductCategories';
import FeaturedProducts from './components/sanity/FeaturedProducts';
import ProductGrid from './components/sanity/ProductGrid';
import ShoppingCart from './components/sanity/ShoppingCart';
import Footer from './components/sanity/Footer';

const SanityClone = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sample products
  const newArrivals = [
    { id: 7, name: 'Emerald Necklace', price: 15999, category: 'Jewelry' },
    { id: 8, name: 'Vintage Timepiece', price: 12499, category: 'Watches' },
    { id: 9, name: 'Cashmere Scarf', price: 899, category: 'Accessories' },
    { id: 10, name: 'Silk Blouse', price: 1299, category: 'Fashion' }
  ];

  const bestSellers = [
    { id: 11, name: 'Gold Bracelet', price: 3499, category: 'Jewelry' },
    { id: 12, name: 'Leather Wallet', price: 599, category: 'Accessories' },
    { id: 13, name: 'Designer Sunglasses', price: 799, category: 'Accessories' },
    { id: 14, name: 'Pearl Earrings', price: 2499, category: 'Jewelry' }
  ];

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

  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      <Navigation cartCount={cartCount} cartTotal={cartTotal} onCartClick={() => setIsCartOpen(true)} />
      <Hero />
      <ProductCategories />
      <FeaturedProducts onAddToCart={handleAddToCart} />
      <ProductGrid
        title="New Arrivals"
        subtitle="Latest Collection"
        products={newArrivals}
        onAddToCart={handleAddToCart}
      />
      <ProductGrid
        title="Best Sellers"
        subtitle="Customer Favorites"
        products={bestSellers}
        onAddToCart={handleAddToCart}
      />
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

export default SanityClone;

