import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import Navigation from '../components/sanity/Navigation';
import Footer from '../components/sanity/Footer';
import ProductCard from '../components/sanity/ProductCard';
import ShoppingCart from '../components/sanity/ShoppingCart';

const Product = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Product data (in a real app, this would come from an API)
  const allProducts = {
    '1': { id: 1, name: 'Ultraboost 23', price: 180, category: 'Sneakers', color: 'Core Black', description: 'Experience ultimate comfort with the Ultraboost 23. Featuring our signature Boost midsole technology and Primeknit upper for a perfect fit.', sizes: ['S', 'M', 'L', 'XL'], inStock: true },
    '2': { id: 2, name: 'Samba OG', price: 100, category: 'Sneakers', color: 'White', description: 'The classic Samba OG returns with timeless style and premium materials. A true icon that never goes out of fashion.', sizes: ['S', 'M', 'L', 'XL'], inStock: true },
    '3': { id: 3, name: 'Forum Low', price: 90, category: 'Sneakers', color: 'Cloud White', description: 'Clean lines and minimalist design make the Forum Low a versatile addition to any wardrobe.', sizes: ['S', 'M', 'L'], inStock: true },
    '4': { id: 4, name: 'NMD R1', price: 130, category: 'Sneakers', color: 'Triple Black', description: 'Street-ready style meets performance technology. The NMD R1 delivers comfort and style in equal measure.', sizes: ['M', 'L', 'XL'], inStock: true },
    '5': { id: 5, name: 'Stan Smith', price: 80, category: 'Sneakers', color: 'White/Green', description: 'The legendary Stan Smith combines classic tennis heritage with modern comfort. A wardrobe essential.', sizes: ['S', 'M', 'L', 'XL'], inStock: true },
    '6': { id: 6, name: 'Superstar', price: 85, category: 'Sneakers', color: 'Core Black', description: 'Iconic shell-toe design meets contemporary comfort. The Superstar is a true classic.', sizes: ['S', 'M', 'L'], inStock: true },
    '7': { id: 7, name: 'Gazelle', price: 90, category: 'Sneakers', color: 'Cloud White', description: 'Retro-inspired design with modern comfort. The Gazelle brings vintage style to your everyday look.', sizes: ['S', 'M', 'L', 'XL'], inStock: true },
    '8': { id: 8, name: 'Ozweego', price: 120, category: 'Sneakers', color: 'Core Black', description: 'Futuristic design meets everyday comfort. The Ozweego stands out with its unique aesthetic.', sizes: ['M', 'L', 'XL'], inStock: true },
    '9': { id: 9, name: 'Yeezy Boost 350', price: 220, category: 'Sneakers', color: 'Zebra', description: 'Premium materials and innovative design come together in the Yeezy Boost 350. A statement piece for the modern sneaker enthusiast.', sizes: ['S', 'M', 'L'], inStock: true },
    '10': { id: 10, name: 'ZX 2K Boost', price: 140, category: 'Sneakers', color: 'Core Black', description: 'Advanced Boost technology meets retro-inspired design. Maximum comfort, maximum style.', sizes: ['S', 'M', 'L', 'XL'], inStock: true },
    '11': { id: 11, name: 'Tubular Shadow', price: 110, category: 'Sneakers', color: 'Core White', description: 'Sleek and modern, the Tubular Shadow offers a unique silhouette with premium comfort.', sizes: ['M', 'L'], inStock: true },
    '12': { id: 12, name: 'Continental 80', price: 75, category: 'Sneakers', color: 'Cloud White', description: 'Classic tennis-inspired design with contemporary updates. The Continental 80 delivers timeless style.', sizes: ['S', 'M', 'L', 'XL'], inStock: true },
  };

  const product = allProducts[id] || allProducts['1'];
  const relatedProducts = Object.values(allProducts)
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCartClick = () => {
    const productToAdd = {
      ...product,
      size: selectedSize,
      quantity: quantity
    };
    
    if (onAddToCart) {
      // Add to App-level cart (call multiple times for quantity)
      for (let i = 0; i < quantity; i++) {
        onAddToCart({ ...productToAdd, quantity: 1 });
      }
    }
    
    // Also add to local cart for ShoppingCart component on this page
    const existingItem = cartItems.find(item => item.id === productToAdd.id && item.size === selectedSize);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === productToAdd.id && item.size === selectedSize
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCartItems([...cartItems, productToAdd]);
    }
    
    setIsCartOpen(true);
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const handleUpdateQuantity = (itemId, qty) => {
    if (qty <= 0) {
      handleRemoveItem(itemId);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === itemId ? { ...item, quantity: qty } : item
      ));
    }
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`min-h-screen transition-colors ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      <Navigation 
        cartCount={cartCount} 
        cartTotal={cartTotal} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      {/* Product Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link
            to="/shop"
            className={`inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors hover:gap-3 ${
              theme === 'dark'
                ? 'text-gray-400 hover:text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Product Image */}
            <div className={`aspect-square rounded-apple-lg overflow-hidden ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
            }`}>
              <div className="w-full h-full flex items-center justify-center relative">
                <div className="text-center space-y-4">
                  <div className={`w-48 h-48 rounded-apple mx-auto flex items-center justify-center transition-all duration-500 ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-apple'
                  }`}>
                    <svg className={`w-24 h-24 transition-all duration-500 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 11c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4 9 4v6zm-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12L5 6.3v4.92C5 15.54 8.25 20 12 21z"/>
                      <path d="M9 8l6 3-6 3V8z"/>
                    </svg>
                  </div>
                  <p className={`text-caption-1 font-medium transition-colors ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
                  }`}>{product.category}</p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className={`inline-block px-4 py-2 rounded-full mb-4 ${
                  theme === 'dark' ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  <span className="font-bold text-sm uppercase tracking-wide">{product.category}</span>
                </div>
                <h1 className={`text-4xl sm:text-5xl font-bold mb-4 transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {product.name}
                </h1>
                <p className={`text-lg transition-colors ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {product.color}
                </p>
              </div>

              <div>
                <p className={`text-3xl font-bold mb-6 transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  ${product.price}
                </p>
              </div>

              <div>
                <p className={`text-base leading-relaxed transition-colors ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {product.description}
                </p>
              </div>

              {/* Size Selection */}
              <div>
                <label className={`block text-sm font-semibold mb-3 transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Size
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-apple font-semibold transition-all active-scale hover-lift ${
                        selectedSize === size
                          ? 'bg-system-blue text-white shadow-apple-md'
                          : theme === 'dark'
                          ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div>
                <label className={`block text-sm font-semibold mb-3 transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className={`w-12 h-12 rounded-apple font-semibold transition-all active-scale hover-lift ${
                      theme === 'dark'
                        ? 'bg-gray-800 text-white hover:bg-gray-700'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    −
                  </button>
                  <span className={`text-xl font-semibold w-12 text-center transition-colors ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className={`w-12 h-12 rounded-apple font-semibold transition-all active-scale hover-lift ${
                      theme === 'dark'
                        ? 'bg-gray-800 text-white hover:bg-gray-700'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCartClick}
                disabled={!product.inStock}
                className={`w-full py-4 rounded-apple-lg font-semibold text-lg transition-all shadow-apple-md active-scale hover-lift ${
                  product.inStock
                    ? theme === 'dark'
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'bg-system-blue text-white hover:bg-blue-600'
                    : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                }`}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>

              {/* Product Features */}
              <div className={`pt-6 border-t ${
                theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
              }`}>
                <h3 className={`text-lg font-semibold mb-4 transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Features
                </h3>
                <ul className={`space-y-2 text-sm transition-colors ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Premium materials
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free shipping
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    30-day returns
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Authenticity guaranteed
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className={`text-3xl font-bold mb-12 transition-colors ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct, index) => (
                  <ProductCard
                    key={relatedProduct.id}
                    product={relatedProduct}
                    onAddToCart={onAddToCart || (() => {})}
                    index={index}
                    isClickable={true}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

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

export default Product;

