import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import Navigation from '../components/sanity/Navigation';
import Footer from '../components/sanity/Footer';

const NotFound = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      <Navigation cartCount={0} cartTotal={0} onCartClick={() => {}} />
      
      <div className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Icon */}
          <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full mb-8 ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
          }`}>
            <svg 
              className={`w-16 h-16 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>

          {/* 404 Text */}
          <h1 className={`text-8xl sm:text-9xl font-bold mb-4 transition-colors ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            404
          </h1>

          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Page Not Found
          </h2>

          <p className={`text-lg mb-8 max-w-md mx-auto transition-colors ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className={`px-8 py-4 rounded-apple-lg font-semibold text-lg transition-all shadow-apple-md active-scale hover-lift ${
                theme === 'dark'
                  ? 'bg-white text-black hover:bg-gray-100'
                  : 'bg-system-blue text-white hover:bg-blue-600'
              }`}
            >
              Go Home
            </Link>
            <Link
              to="/shop"
              className={`px-8 py-4 rounded-apple-lg font-semibold text-lg transition-all active-scale hover-lift ${
                theme === 'dark'
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              Browse Shop
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="mt-16">
            <p className={`text-sm mb-4 transition-colors ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>
              You might be interested in:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/brands"
                className={`px-4 py-2 rounded-apple text-sm font-medium transition-all hover-lift ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Brands
              </Link>
              <Link
                to="/clearance"
                className={`px-4 py-2 rounded-apple text-sm font-medium transition-all hover-lift ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Clearance
              </Link>
              <Link
                to="/blog"
                className={`px-4 py-2 rounded-apple text-sm font-medium transition-all hover-lift ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className={`px-4 py-2 rounded-apple text-sm font-medium transition-all hover-lift ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;

