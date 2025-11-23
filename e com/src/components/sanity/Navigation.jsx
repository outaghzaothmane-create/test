import React, { useState, useEffect } from 'react';
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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
      {/* Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo and Hamburger Menu */}
          <div className="flex items-center space-x-3">
            {/* Hamburger Menu Button - Mobile Only */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`w-10 h-10 rounded-apple flex items-center justify-center transition-all lg:hidden ${
                theme === 'dark'
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Toggle mobile menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 transition-all hover:opacity-80"
            >
              <img 
                src="/logo.svg" 
                alt="LUXE Logo" 
                className="h-7 sm:h-8 w-auto"
              />
            </Link>
          </div>

          {/* Center: Search Bar - Hidden on mobile, shown on tablet+ */}
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
                <span className="material-symbols-outlined text-lg">search</span>
              </button>
            </div>
          </div>

          {/* Center: Navigation Links - Desktop Only */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
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
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Login/Register - Icon only on mobile */}
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className={`flex items-center space-x-2 px-2 sm:px-4 py-2 rounded-apple transition-all active-scale hover-lift ${
                theme === 'dark'
                  ? 'text-white hover:bg-gray-800'
                  : 'text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Sign In"
            >
              <span className={`material-symbols-outlined text-xl icon-bounce transition-colors ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>account_circle</span>
              <span className={`hidden sm:inline text-subhead font-medium transition-colors ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Sign In</span>
            </button>

            {/* Wishlist - Icon only on mobile */}
            <button 
              onClick={toggleWishlist}
              className={`relative p-2 rounded-apple transition-all active-scale hover-lift ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Wishlist"
            >
              <span className={`material-symbols-outlined text-xl sm:text-2xl transition-all icon-bounce ${
                wishlistCount > 0 
                  ? 'text-system-red fill-system-red' 
                  : ''
              }`}>
                {wishlistCount > 0 ? 'favorite' : 'favorite_border'}
              </span>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-system-red text-white text-caption-2 font-semibold rounded-full w-5 h-5 flex items-center justify-center animate-scale-bounce">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Cart */}
            <button
              onClick={onCartClick}
              className="relative flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-apple transition-all active-scale hover-lift hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className={`material-symbols-outlined text-xl sm:text-2xl transition-all icon-bounce ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>shopping_cart</span>
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
              <span className="material-symbols-outlined text-xl">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slide down animation */}
      <div className={`lg:hidden border-t transition-all duration-300 ease-in-out overflow-hidden ${
        mobileMenuOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0'
      } ${
        theme === 'dark' ? 'border-gray-800 bg-dark-secondary' : 'border-gray-200 bg-light-primary'
      }`}>
        <div className="px-4 sm:px-6 py-4 space-y-3">
          {/* Mobile Search Bar */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search products..."
              className={`w-full px-4 py-3 rounded-apple-lg border transition-all text-body ${
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
              <span className="material-symbols-outlined text-lg">search</span>
            </button>
          </div>

          {/* Navigation Links */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-apple-lg transition-all font-medium ${
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
            className={`block px-4 py-3 rounded-apple-lg transition-all font-medium ${
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
            className={`block px-4 py-3 rounded-apple-lg transition-all font-medium ${
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
            className={`block px-4 py-3 rounded-apple-lg transition-all font-medium ${
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
            className={`block px-4 py-3 rounded-apple-lg transition-all font-medium ${
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
            className={`block px-4 py-3 rounded-apple-lg transition-all font-medium ${
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
            className={`block px-4 py-3 rounded-apple-lg transition-all font-medium ${
              theme === 'dark' 
                ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </nav>
  );
};

export default Navigation;
