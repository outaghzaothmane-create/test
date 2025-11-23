import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Navigation from '../components/sanity/Navigation';
import Footer from '../components/sanity/Footer';
import ProductCard from '../components/sanity/ProductCard';
import ShoppingCart from '../components/sanity/ShoppingCart';

const Clearance = () => {
  const { theme } = useTheme();
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const clearanceProducts = [
    { id: 1, name: 'Platinum Ring (Sale)', price: 8999, originalPrice: 12999, category: 'Jewelry', discount: 30 },
    { id: 2, name: 'Luxury Watch (Sale)', price: 5999, originalPrice: 8999, category: 'Watches', discount: 33 },
    { id: 3, name: 'Designer Handbag (Sale)', price: 1499, originalPrice: 2499, category: 'Accessories', discount: 40 },
    { id: 4, name: 'Evening Dress (Sale)', price: 999, originalPrice: 1899, category: 'Fashion', discount: 47 },
    { id: 5, name: 'Gold Necklace (Sale)', price: 3999, originalPrice: 5999, category: 'Jewelry', discount: 33 },
    { id: 6, name: 'Vintage Watch (Sale)', price: 8499, originalPrice: 12499, category: 'Watches', discount: 32 },
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

  return (
    <div className={`min-h-screen transition-colors ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      <Navigation cartCount={cartCount} cartTotal={cartTotal} onCartClick={() => setIsCartOpen(true)} />
      
      <div className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className={`inline-block px-4 py-2 rounded-full mb-4 ${
              theme === 'dark' ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-600'
            }`}>
              <span className="font-bold text-sm uppercase">Clearance Sale</span>
            </div>
            <h1 className={`text-5xl lg:text-6xl font-bold mb-4 transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Up to 50% Off
            </h1>
            <p className={`text-lg transition-colors ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Limited time offers on selected luxury items
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clearanceProducts.map((product) => (
              <div key={product.id} className={`group relative rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border ${
                theme === 'dark'
                  ? 'bg-gray-900 border-gray-800'
                  : 'bg-white border-gray-200'
              }`}>
                {/* Discount Badge */}
                <div className="absolute top-4 left-4 z-10 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  -{product.discount}%
                </div>
                
                {/* Product Image */}
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-700 relative overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-16 h-16 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <p className="text-gray-500 text-sm">Product Image</p>
                    </div>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <p className={`text-xs uppercase tracking-wider mb-2 ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                  }`}>{product.category}</p>
                  <h3 className={`text-lg font-semibold mb-3 transition-colors ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{product.name}</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-2xl font-bold transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>${product.price.toLocaleString()}</span>
                    <span className={`text-lg line-through transition-colors ${
                      theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
                    }`}>${product.originalPrice.toLocaleString()}</span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${
                      theme === 'dark'
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
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

export default Clearance;

