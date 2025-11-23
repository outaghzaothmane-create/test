import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const footerSections = [
    {
      title: 'Shop',
      links: ['New Arrivals', 'Best Sellers', 'Collections', 'Gift Cards', 'Sale', 'Limited Edition']
    },
    {
      title: 'Customer Service',
      links: ['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Track Order', 'Contact Us']
    },
    {
      title: 'About',
      links: ['Our Story', 'Sustainability', 'Careers', 'Press', 'Store Locations', 'Partnerships']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Returns Policy', 'Cookie Policy', 'Accessibility', 'Warranty']
    }
  ];

  return (
    <footer className={`py-20 px-6 border-t transition-colors ${
      theme === 'dark'
        ? 'bg-dark-primary text-gray-500 border-gray-800'
        : 'bg-light-primary text-gray-600 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className={`font-semibold mb-6 text-headline transition-colors ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={link} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                    <a href="#" className={`text-body transition-all hover-lift ${
                      theme === 'dark'
                        ? 'hover:text-white'
                        : 'hover:text-gray-900'
                    }`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Newsletter */}
        <div className={`border-t pt-12 mb-12 transition-colors ${
          theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="max-w-md">
            <h4 className={`font-semibold mb-4 text-headline transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Subscribe to Our Newsletter</h4>
            <p className={`text-body mb-4 transition-colors ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>Get exclusive offers and updates on new collections</p>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className={`flex-1 px-4 py-3 border rounded-apple-lg focus:outline-none focus:ring-2 focus:ring-system-blue/50 transition-colors text-body ${
                  theme === 'dark'
                    ? 'bg-dark-secondary border-gray-700 text-white placeholder-gray-500'
                    : 'bg-light-primary border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
              <button className={`px-6 py-3 rounded-apple-lg font-semibold text-body transition-all active-scale hover-lift ${
                theme === 'dark'
                  ? 'bg-white text-black hover:bg-gray-100'
                  : 'bg-system-blue text-white hover:bg-blue-600'
              }`}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-6 transition-colors ${
          theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="flex items-center space-x-2">
            <Link to="/">
              <span className={`font-semibold text-title-2 transition-colors ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>LUXE</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-6 text-body">
            <span className={theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}>Free Shipping on Orders Over $500</span>
            <span className={theme === 'dark' ? 'text-gray-700' : 'text-gray-400'}>•</span>
            <span className={theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}>30-Day Returns</span>
          </div>
          
          <p className={`text-body transition-colors ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
          }`}>© LUXE 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
