import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import Navigation from '../components/sanity/Navigation';
import Footer from '../components/sanity/Footer';

const OrderSuccess = () => {
    const { theme } = useTheme();

    return (
        <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
            <Navigation />
            <div className="flex-grow flex items-center justify-center px-4">
                <div className="text-center max-w-lg">
                    <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${theme === 'dark' ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'
                        }`}>
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        Order Placed Successfully!
                    </h1>
                    <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        Thank you for your purchase. We've sent a confirmation email with your order details.
                    </p>
                    <Link
                        to="/shop"
                        className={`inline-block px-8 py-3 rounded-apple font-semibold transition-all active-scale hover-lift ${theme === 'dark'
                                ? 'bg-white text-black hover:bg-gray-100'
                                : 'bg-system-blue text-white hover:bg-blue-600'
                            }`}
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OrderSuccess;
