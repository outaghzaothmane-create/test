import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import Navigation from '../components/sanity/Navigation';
import Footer from '../components/sanity/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Blog = () => {
  const { theme } = useTheme();
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Luxury: Understanding Premium Materials',
      excerpt: 'Discover what makes luxury products truly exceptional and how premium materials elevate your style.',
      date: 'January 15, 2025',
      category: 'Lifestyle',
      image: 'bg-gradient-to-br from-yellow-400/20 to-yellow-600/20',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Timeless Elegance: A Guide to Classic Jewelry',
      excerpt: 'Learn about the history and significance of classic jewelry pieces that never go out of style.',
      date: 'January 10, 2025',
      category: 'Jewelry',
      image: 'bg-gradient-to-br from-blue-400/20 to-blue-600/20',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Caring for Your Luxury Timepieces',
      excerpt: 'Essential tips and tricks to keep your luxury watches in pristine condition for generations.',
      date: 'January 5, 2025',
      category: 'Watches',
      image: 'bg-gradient-to-br from-green-400/20 to-green-600/20',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Fashion Trends: What\'s Hot in 2025',
      excerpt: 'Explore the latest fashion trends and how to incorporate luxury pieces into your wardrobe.',
      date: 'December 28, 2024',
      category: 'Fashion',
      image: 'bg-gradient-to-br from-pink-400/20 to-pink-600/20',
      readTime: '8 min read'
    },
  ];

  return (
    <div className={`min-h-screen transition-colors ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      <Navigation cartCount={0} cartTotal={0} onCartClick={() => {}} />
      
      <div className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className={`text-5xl lg:text-6xl font-bold mb-4 transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              BLOG
            </h1>
            <p className={`text-lg transition-colors animate-fade-in-up animate-delay-200 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Insights, trends, and stories from the world of luxury
            </p>
          </div>

          <div 
            ref={ref}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {blogPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className={`group rounded-apple-lg overflow-hidden hover:shadow-apple-lg transition-all duration-500 hover-lift border animate-fade-in-up ${
                  theme === 'dark'
                    ? 'bg-dark-secondary border-gray-800'
                    : 'bg-light-primary border-gray-200'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className={`aspect-video ${post.image} relative overflow-hidden group-hover:scale-105 transition-all duration-500`}>
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className={`w-16 h-16 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${
                      theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${
                      theme === 'dark'
                        ? 'bg-blue-900/30 text-blue-400'
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {post.category}
                    </span>
                    <span className={`text-xs transition-colors ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {post.date}
                    </span>
                    <span className={`text-xs transition-colors ${
                      theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
                    }`}>
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className={`text-xl font-bold mb-3 transition-colors group-hover:text-blue-500 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {post.title}
                  </h2>
                  <p className={`text-sm mb-4 leading-relaxed transition-colors ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {post.excerpt}
                  </p>
                  <div className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                    theme === 'dark'
                      ? 'text-blue-400 group-hover:text-blue-300'
                      : 'text-blue-600 group-hover:text-blue-700'
                  }`}>
                    <span>Read More</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;

