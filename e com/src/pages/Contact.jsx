import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Navigation from '../components/sanity/Navigation';
import Footer from '../components/sanity/Footer';

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: 'info@luxe.com',
      link: 'mailto:info@luxe.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Address',
      content: '123 Luxury Street, New York, NY 10001',
      link: '#'
    },
  ];

  return (
    <div className={`min-h-screen transition-colors ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      <Navigation cartCount={0} cartTotal={0} onCartClick={() => {}} />
      
      <div className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className={`text-5xl lg:text-6xl font-bold mb-4 transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Contact Us
            </h1>
            <p className={`text-lg transition-colors ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              We'd love to hear from you. Get in touch with us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`rounded-2xl p-8 ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
            }`}>
              <h2 className={`text-2xl font-bold mb-6 transition-colors ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 transition-colors ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 transition-colors ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 transition-colors ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 transition-colors ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className={`text-2xl font-bold mb-6 transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Get in touch
                </h2>
                <p className={`mb-8 leading-relaxed transition-colors ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Have a question or need assistance? We're here to help. Reach out to us through 
                  any of the following channels, and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className={`flex items-start gap-4 p-6 rounded-xl transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-900 hover:bg-gray-800'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className={`p-3 rounded-lg ${
                      theme === 'dark' ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className={`font-semibold mb-1 transition-colors ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {info.title}
                      </h3>
                      <p className={`transition-colors ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {info.content}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;

