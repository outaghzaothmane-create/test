import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import Navigation from '../components/sanity/Navigation';
import Footer from '../components/sanity/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const BlogPost = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  // Blog posts data (in a real app, this would come from an API)
  const blogPosts = {
    '1': {
      id: 1,
      title: 'The Art of Luxury: Understanding Premium Materials',
      excerpt: 'Discover what makes luxury products truly exceptional and how premium materials elevate your style.',
      date: 'January 15, 2025',
      category: 'Lifestyle',
      author: 'Sarah Johnson',
      readTime: '5 min read',
      image: 'bg-gradient-to-br from-yellow-400/20 to-yellow-600/20',
      content: [
        { type: 'p', text: 'In the world of luxury fashion and accessories, materials matter. The difference between a premium product and an ordinary one often lies in the quality of materials used in its creation.' },
        { type: 'h2', text: 'The Foundation of Excellence' },
        { type: 'p', text: 'Premium materials are not just about aesthetics—they represent a commitment to quality, durability, and craftsmanship. From the finest Italian leather to the most exquisite precious metals, every material choice tells a story.' },
        { type: 'p', text: 'When you invest in luxury, you\'re investing in materials that have been carefully selected, tested, and refined to meet the highest standards. These materials don\'t just look better; they feel better, last longer, and age beautifully.' },
        { type: 'h2', text: 'Sustainable Luxury' },
        { type: 'p', text: 'Today\'s luxury brands are increasingly focused on sustainability. Premium materials are now sourced ethically, with consideration for environmental impact and social responsibility.' },
        { type: 'p', text: 'This shift towards sustainable luxury means that premium products are not only beautiful and durable but also aligned with values that matter to modern consumers.' }
      ]
    },
    '2': {
      id: 2,
      title: 'Timeless Elegance: A Guide to Classic Jewelry',
      excerpt: 'Learn about the history and significance of classic jewelry pieces that never go out of style.',
      date: 'January 10, 2025',
      category: 'Jewelry',
      author: 'Michael Chen',
      readTime: '7 min read',
      image: 'bg-gradient-to-br from-blue-400/20 to-blue-600/20',
      content: [
        { type: 'p', text: 'Classic jewelry pieces have stood the test of time, remaining elegant and relevant across generations. These timeless designs continue to inspire and captivate.' },
        { type: 'h2', text: 'The Power of Simplicity' },
        { type: 'p', text: 'Classic jewelry designs often follow the principle of "less is more." Simple, elegant pieces that focus on quality materials and expert craftsmanship tend to remain fashionable year after year.' },
        { type: 'p', text: 'From the iconic tennis bracelet to the classic solitaire ring, these pieces have become staples in luxury collections worldwide. Their enduring appeal lies in their versatility and timeless beauty.' },
        { type: 'h2', text: 'Investment Value' },
        { type: 'p', text: 'Beyond their aesthetic appeal, classic jewelry pieces often retain or increase in value over time. They represent not just fashion choices, but wise investments in quality and craftsmanship.' }
      ]
    },
    '3': {
      id: 3,
      title: 'Caring for Your Luxury Timepieces',
      excerpt: 'Essential tips and tricks to keep your luxury watches in pristine condition for generations.',
      date: 'January 5, 2025',
      category: 'Watches',
      author: 'Emma Williams',
      readTime: '6 min read',
      image: 'bg-gradient-to-br from-green-400/20 to-green-600/20',
      content: [
        { type: 'p', text: 'A luxury timepiece is more than just a watch—it\'s a precision instrument and a work of art. Proper care ensures it will serve you well for decades to come.' },
        { type: 'h2', text: 'Daily Care Routine' },
        { type: 'p', text: 'Regular maintenance is key to preserving your watch\'s beauty and functionality. Simple practices like keeping it clean, avoiding extreme temperatures, and regular servicing can significantly extend its lifespan.' },
        { type: 'p', text: 'For mechanical watches, regular winding and proper storage are essential. For water-resistant models, ensure gaskets are checked during servicing to maintain water resistance.' },
        { type: 'h2', text: 'Professional Servicing' },
        { type: 'p', text: 'Even the finest timepieces require professional attention. Regular servicing by certified watchmakers ensures optimal performance and helps maintain the watch\'s value over time.' }
      ]
    },
    '4': {
      id: 4,
      title: 'Fashion Trends: What\'s Hot in 2025',
      excerpt: 'Explore the latest fashion trends and how to incorporate luxury pieces into your wardrobe.',
      date: 'December 28, 2024',
      category: 'Fashion',
      author: 'David Martinez',
      readTime: '8 min read',
      image: 'bg-gradient-to-br from-pink-400/20 to-pink-600/20',
      content: [
        { type: 'p', text: 'Fashion in 2025 continues to evolve, blending timeless elegance with modern innovation. This year\'s trends emphasize sustainability, versatility, and personal expression.' },
        { type: 'h2', text: 'Sustainable Fashion' },
        { type: 'p', text: 'The movement towards sustainable fashion is stronger than ever. Luxury brands are leading the way with eco-friendly materials, ethical production practices, and circular fashion initiatives.' },
        { type: 'p', text: 'Consumers are increasingly valuing quality over quantity, investing in pieces that will last for years rather than following fast fashion trends.' },
        { type: 'h2', text: 'Versatile Wardrobe Essentials' },
        { type: 'p', text: 'The trend towards versatile, multi-purpose pieces continues. Luxury items that can be dressed up or down, worn across seasons, and styled in multiple ways are in high demand.' }
      ]
    }
  };

  const post = blogPosts[id] || blogPosts['1'];

  const relatedPosts = Object.values(blogPosts)
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  return (
    <div className={`min-h-screen transition-colors ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      <Navigation cartCount={0} cartTotal={0} onCartClick={() => {}} />
      
      {/* Hero Section */}
      <section className={`pt-32 pb-16 px-4 sm:px-6 relative overflow-hidden transition-colors ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className={`inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors hover:gap-3 ${
              theme === 'dark'
                ? 'text-gray-400 hover:text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className={`inline-block px-4 py-2 rounded-full mb-6 animate-fade-in-up ${
            theme === 'dark' ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
          }`}>
            <span className="font-bold text-sm uppercase tracking-wide">{post.category}</span>
          </div>

          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-colors animate-fade-in-up animate-delay-200 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {post.title}
          </h1>

          <div className={`flex flex-wrap items-center gap-6 mb-8 text-sm animate-fade-in-up animate-delay-300 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className={`aspect-video ${post.image} rounded-2xl overflow-hidden mb-12 relative animate-fade-in-up animate-delay-400`}>
            <div className="w-full h-full flex items-center justify-center">
              <svg className={`w-32 h-32 transition-colors ${
                theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section 
        ref={ref}
        className={`pb-20 px-4 sm:px-6 transition-colors ${
          theme === 'dark' ? 'bg-black' : 'bg-white'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <article className={`max-w-none transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className={`text-lg leading-relaxed space-y-6 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {post.content.map((item, index) => {
                if (item.type === 'h2') {
                  return (
                    <h2 key={index} className={`text-3xl font-bold mb-4 mt-12 transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.text}
                    </h2>
                  );
                }
                return (
                  <p key={index} className="mb-6">
                    {item.text}
                  </p>
                );
              })}
            </div>
          </article>

          {/* Share Section */}
          <div className={`mt-16 pt-12 border-t ${
            theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
          }`}>
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h3 className={`text-lg font-bold mb-4 transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Share this article
                </h3>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all transform hover:scale-110 ${
                      theme === 'dark'
                        ? 'bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all transform hover:scale-110 ${
                      theme === 'dark'
                        ? 'bg-gray-800 text-gray-300 hover:bg-blue-400 hover:text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-blue-400 hover:text-white'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all transform hover:scale-110 ${
                      theme === 'dark'
                        ? 'bg-gray-800 text-gray-300 hover:bg-red-600 hover:text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-red-600 hover:text-white'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.246 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.413-.569-.24-.96-.478-1.379-.896-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-20">
              <h2 className={`text-3xl font-bold mb-12 transition-colors ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className={`group rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border animate-fade-in-up ${
                      theme === 'dark'
                        ? 'bg-gray-900 border-gray-800'
                        : 'bg-white border-gray-200'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`aspect-video ${relatedPost.image} relative overflow-hidden`}>
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className={`w-16 h-16 transition-colors ${
                          theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                          theme === 'dark'
                            ? 'bg-blue-900/30 text-blue-400'
                            : 'bg-blue-100 text-blue-600'
                        }`}>
                          {relatedPost.category}
                        </span>
                        <span className={`text-xs transition-colors ${
                          theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                        }`}>
                          {relatedPost.date}
                        </span>
                      </div>
                      <h3 className={`text-xl font-bold mb-3 transition-colors group-hover:text-blue-500 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {relatedPost.title}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-colors ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;

