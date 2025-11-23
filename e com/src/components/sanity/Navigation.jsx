import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import LoginModal from './LoginModal';

const Navigation = ({ cartCount = 0, onCartClick, cartTotal = 0 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [brandsDropdown, setBrandsDropdown] = useState(false);
  const [shopDropdown, setShopDropdown] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleWishlist = () => {
    // Toggle wishlist view (in a real app, this would open a wishlist drawer)
    setIsWishlistOpen(!isWishlistOpen);
    // You can add wishlist functionality here
    console.log('Wishlist toggled');
  };

  const wishlistCount = wishlistItems.length;

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-xl transition-colors ${
      theme === 'dark' 
        ? 'bg-dark-secondary/80 border-gray-800' 
        : 'bg-light-primary/80 border-gray-200'
    } border-b`}>
      {/* Bottom Navigation Row */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left: Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`w-10 h-10 rounded-apple flex items-center justify-center transition-all lg:hidden ${
              theme === 'dark'
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Center: Search Bar */}
          <div className="flex-1 max-w-2xl mx-4 hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className={`w-full px-4 py-2.5 rounded-apple-lg border transition-all text-body ${
                  theme === 'dark'
                    ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500'
                    : 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:outline-none focus:ring-2 focus:ring-system-blue/50`}
              />
              <button className={`absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-apple flex items-center justify-center transition-all ${
                theme === 'dark'
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/brands"
              className={`text-subhead font-medium transition-all hover-lift ${
                theme === 'dark' 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Brands
            </Link>
            <Link
              to="/shop"
              className={`text-subhead font-medium transition-all hover-lift ${
                theme === 'dark' 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Shop
            </Link>
            <Link
              to="/clearance"
              className={`text-subhead font-medium transition-all hover-lift ${
                theme === 'dark' 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Clearance
            </Link>
            <Link
              to="/blog"
              className={`text-subhead font-medium transition-all hover-lift ${
                theme === 'dark' 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className={`text-subhead font-medium transition-all hover-lift ${
                theme === 'dark' 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-subhead font-medium transition-all hover-lift ${
                theme === 'dark' 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right: User Actions */}
          <div className="flex items-center space-x-3">
            {/* Login/Register */}
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-apple transition-all active-scale hover-lift ${
                theme === 'dark'
                  ? 'text-white hover:bg-gray-800'
                  : 'text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Sign In"
            >
              <svg className={`w-5 h-5 icon-bounce transition-colors ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className={`hidden sm:inline text-subhead font-medium transition-colors ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Sign In</span>
            </button>

            {/* Wishlist */}
            <button 
              onClick={toggleWishlist}
              className={`relative p-2 rounded-apple transition-all active-scale hover-lift ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Wishlist"
            >
              <svg 
                className={`w-6 h-6 transition-all icon-bounce ${
                  wishlistCount > 0 
                    ? 'fill-system-red text-system-red' 
                    : 'fill-none'
                }`} 
                fill={wishlistCount > 0 ? 'currentColor' : 'none'} 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-system-red text-white text-caption-2 font-semibold rounded-full w-5 h-5 flex items-center justify-center animate-scale-bounce">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Cart */}
            <button
              onClick={onCartClick}
              className="relative flex items-center space-x-2 px-4 py-2 rounded-apple transition-all active-scale hover-lift hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <svg className={`w-6 h-6 transition-all icon-bounce ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-system-blue text-white text-caption-2 font-semibold rounded-full w-5 h-5 flex items-center justify-center animate-scale-bounce">
                  {cartCount}
                </span>
              )}
              {cartTotal > 0 && (
                <span className={`text-subhead font-semibold hidden sm:inline transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  ${cartTotal.toFixed(2)}
                </span>
              )}
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-apple transition-all ${
                theme === 'dark'
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-t ${
          theme === 'dark' ? 'border-gray-800 bg-dark-secondary' : 'border-gray-200 bg-light-primary'
        }`}>
          <div className="px-6 py-4 space-y-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-apple transition-all ${
                theme === 'dark' 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Home
            </Link>
            <Link
              to="/brands"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-apple transition-all ${
                theme === 'dark' 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Brands
            </Link>
            <Link
              to="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-apple transition-all ${
                theme === 'dark' 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Shop
            </Link>
            <Link
              to="/clearance"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-apple transition-all ${
                theme === 'dark' 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Clearance
            </Link>
            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-apple transition-all ${
                theme === 'dark' 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-apple transition-all ${
                theme === 'dark' 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-apple transition-all ${
                theme === 'dark' 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </nav>
  );
};

export default Navigation;
