import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import LoginModal from './LoginModal';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { cartCount, cartTotal, openCart } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const toggleWishlist = () => {
    setIsWishlistOpen(!isWishlistOpen);
    console.log('Wishlist toggled');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setMobileMenuOpen(false);
      setSearchQuery('');
    }
  };

  const wishlistCount = wishlistItems.length;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 animate-slide-down ${isScrolled
          ? `backdrop-blur-xl border-b shadow-sm ${theme === 'dark'
            ? 'bg-dark-secondary/80 border-gray-800'
            : 'bg-white/80 border-gray-200'
          }`
          : 'bg-transparent border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left: Logo and Hamburger Menu */}
          <div className="flex items-center space-x-4">
            {/* Hamburger Menu Button - Mobile Only */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all lg:hidden ${theme === 'dark'
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
              className="flex items-center space-x-2 group"
            >
              <div className="relative">
                <img
                  src="/logo.svg"
                  alt="LUXE Logo"
                  className="h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-white/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          </div>

          {/* Center: Search Bar - Hidden on mobile, shown on tablet+ */}
          <div className={`flex-1 max-w-xl mx-8 hidden md:block transition-all duration-300 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-0'}`}>
            <form onSubmit={handleSearch} className="relative group">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full px-5 py-2.5 rounded-full border transition-all duration-300 ${theme === 'dark'
                    ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:bg-gray-800'
                    : 'bg-gray-100/50 border-gray-200 text-gray-900 placeholder-gray-500 focus:bg-white'
                  } focus:outline-none focus:ring-2 focus:ring-system-blue/50 focus:shadow-lg`}
              />
              <button type="submit" className={`absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all ${theme === 'dark'
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                }`}>
                <span className="material-symbols-outlined text-lg">search</span>
              </button>
            </form>
          </div>

          {/* Center: Navigation Links - Desktop Only */}
          <div className="hidden lg:flex items-center space-x-8">
            {['Brands', 'Shop', 'Clearance', 'Blog', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className={`relative text-sm font-medium tracking-wide transition-colors group py-2 ${theme === 'dark'
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {item}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left ${theme === 'dark' ? 'bg-white' : 'bg-black'
                  }`} />
              </Link>
            ))}
          </div>

          {/* Right: User Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Login/Register or Profile */}
            {currentUser ? (
              <Link
                to="/profile"
                className={`p-2 rounded-full transition-all hover:scale-110 ${theme === 'dark'
                    ? 'text-white hover:bg-gray-800'
                    : 'text-gray-900 hover:bg-gray-100'
                  }`}
                aria-label="User Profile"
              >
                <span className="material-symbols-outlined text-xl sm:text-2xl">person</span>
              </Link>
            ) : (
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className={`p-2 rounded-full transition-all hover:scale-110 ${theme === 'dark'
                    ? 'text-white hover:bg-gray-800'
                    : 'text-gray-900 hover:bg-gray-100'
                  }`}
                aria-label="Sign In"
              >
                <span className="material-symbols-outlined text-xl sm:text-2xl">account_circle</span>
              </button>
            )}

            {/* Wishlist */}
            <button
              onClick={toggleWishlist}
              className={`relative p-2 rounded-full transition-all hover:scale-110 ${theme === 'dark'
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              aria-label="Wishlist"
            >
              <span className={`material-symbols-outlined text-xl sm:text-2xl ${wishlistCount > 0 ? 'text-system-red fill-current' : ''}`}>
                {wishlistCount > 0 ? 'favorite' : 'favorite_border'}
              </span>
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 bg-system-red text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center animate-bounce">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Cart */}
            <button
              onClick={openCart}
              className={`relative p-2 rounded-full transition-all hover:scale-110 ${theme === 'dark'
                  ? 'text-white hover:bg-gray-800'
                  : 'text-gray-900 hover:bg-gray-100'
                }`}
            >
              <span className="material-symbols-outlined text-xl sm:text-2xl">shopping_cart</span>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-system-blue text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all hover:rotate-180 duration-500 ${theme === 'dark'
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
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

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full border-t transition-all duration-300 ease-in-out overflow-hidden shadow-xl ${mobileMenuOpen
          ? 'max-h-screen opacity-100'
          : 'max-h-0 opacity-0'
        } ${theme === 'dark' ? 'border-gray-800 bg-dark-secondary/95 backdrop-blur-xl' : 'border-gray-200 bg-white/95 backdrop-blur-xl'
        }`}>
        <div className="px-4 py-6 space-y-4">
          <div className="relative">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border transition-all ${theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 text-white'
                    : 'bg-gray-100 border-gray-200 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-system-blue`}
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                <span className="material-symbols-outlined text-gray-500">search</span>
              </button>
            </form>
          </div>

          <div className="space-y-2">
            {['Home', 'Brands', 'Shop', 'Clearance', 'Blog', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl font-medium transition-all ${theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </nav>
  );
};

export default Navigation;
