import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Navigation from '../components/sanity/Navigation';
import Footer from '../components/sanity/Footer';

const About = () => {
  const { theme } = useTheme();

  const features = [
    {
      icon: '✨',
      title: 'Premium Quality',
      description: 'We source only the finest materials and work with renowned craftsmen to ensure exceptional quality.'
    },
    {
      icon: '🎯',
      title: 'Curated Selection',
      description: 'Every product is carefully selected to meet our high standards of luxury and elegance.'
    },
    {
      icon: '💎',
      title: 'Authentic Products',
      description: 'All our products are 100% authentic and come with certificates of authenticity.'
    },
    {
      icon: '🚚',
      title: 'Worldwide Shipping',
      description: 'We deliver luxury products to customers around the globe with secure packaging.'
    },
  ];

  return (
    <div className={`min-h-screen transition-colors ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      <Navigation cartCount={0} cartTotal={0} onCartClick={() => {}} />
      
      <div className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className={`text-5xl lg:text-6xl font-bold mb-6 transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              About Us
            </h1>
            <p className={`text-xl leading-relaxed transition-colors ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              We are dedicated to bringing you the finest luxury products from around the world. 
              Our mission is to make premium elegance accessible to those who appreciate the finer things in life.
            </p>
          </div>

          {/* Story Section */}
          <div className={`rounded-2xl p-8 mb-16 ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
          }`}>
            <h2 className={`text-3xl font-bold mb-6 transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Our Story
            </h2>
            <div className={`space-y-4 text-lg leading-relaxed transition-colors ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <p>
                Founded with a passion for luxury and elegance, we have been curating exceptional products 
                for discerning customers worldwide. Our journey began with a simple belief: everyone deserves 
                to experience the finest things in life.
              </p>
              <p>
                Over the years, we have built relationships with the world's most prestigious brands and 
                independent artisans, ensuring that every product in our collection meets the highest 
                standards of quality and craftsmanship.
              </p>
              <p>
                Today, we continue to expand our offerings while maintaining our commitment to excellence, 
                authenticity, and exceptional customer service.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-colors ${
                  theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
                }`}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className={`text-xl font-bold mb-3 transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={`transition-colors ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Values Section */}
          <div className="text-center">
            <h2 className={`text-3xl font-bold mb-8 transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Our Values
            </h2>
            <div className={`space-y-4 text-lg transition-colors ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <p>✨ Excellence in every detail</p>
              <p>💎 Authenticity and integrity</p>
              <p>🌍 Global accessibility</p>
              <p>🤝 Customer-first approach</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;

