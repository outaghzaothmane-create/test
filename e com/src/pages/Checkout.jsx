import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useCart } from '../contexts/CartContext';
import Navigation from '../components/sanity/Navigation';
import Footer from '../components/sanity/Footer';

const Checkout = () => {
    const { theme } = useTheme();
    const { cartItems, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        cardNumber: '',
        expiryDate: '',
        cvc: ''
    });

    const [errors, setErrors] = useState({});
    const [isProcessing, setIsProcessing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';

        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.postalCode) newErrors.postalCode = 'Postal code is required';
        if (!formData.country) newErrors.country = 'Country is required';

        // Basic validation for payment fields (would be handled by Stripe Element in real app)
        if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
        if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
        if (!formData.cvc) newErrors.cvc = 'CVC is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsProcessing(true);

            // Simulate API call
            setTimeout(() => {
                setIsProcessing(false);
                clearCart();
                navigate('/order-success'); // We'll need to create this page too
            }, 2000);
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
                <Navigation />
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            Your cart is empty
                        </h2>
                        <button
                            onClick={() => navigate('/shop')}
                            className={`px-6 py-3 rounded-apple font-semibold transition-all active-scale hover-lift ${theme === 'dark'
                                    ? 'bg-white text-black hover:bg-gray-100'
                                    : 'bg-system-blue text-white hover:bg-blue-600'
                                }`}
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className={`min-h-screen transition-colors ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
            <Navigation />

            <div className="pt-32 pb-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className={`text-3xl sm:text-4xl font-bold mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        Checkout
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Checkout Form */}
                        <div className="space-y-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Contact Information */}
                                <div>
                                    <h2 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                        Contact Information
                                    </h2>
                                    <div className="space-y-4">
                                        <div>
                                            <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-apple border focus:ring-2 focus:ring-system-blue outline-none transition-colors ${theme === 'dark'
                                                        ? 'bg-gray-900 border-gray-800 text-white focus:border-system-blue'
                                                        : 'bg-white border-gray-200 text-gray-900 focus:border-system-blue'
                                                    } ${errors.email ? 'border-red-500' : ''}`}
                                            />
                                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                        </div>
                                    </div>
                                </div>

                                {/* Shipping Address */}
                                <div>
                                    <h2 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                        Shipping Address
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="sm:col-span-2">
                                            <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                                Country
                                            </label>
                                            <select
                                                name="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-apple border focus:ring-2 focus:ring-system-blue outline-none transition-colors ${theme === 'dark'
                                                        ? 'bg-gray-900 border-gray-800 text-white focus:border-system-blue'
                                                        : 'bg-white border-gray-200 text-gray-900 focus:border-system-blue'
                                                    } ${errors.country ? 'border-red-500' : ''}`}
                                            >
                                                <option value="">Select Country</option>
                                                <option value="US">United States</option>
                                                <option value="CA">Canada</option>
                                                <option value="UK">United Kingdom</option>
                                                <option value="AU">Australia</option>
                                            </select>
                                            {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                                        </div>
                                        <div>
                                            <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-apple border focus:ring-2 focus:ring-system-blue outline-none transition-colors ${theme === 'dark'
                                                        ? 'bg-gray-900 border-gray-800 text-white focus:border-system-blue'
                                                        : 'bg-white border-gray-200 text-gray-900 focus:border-system-blue'
                                                    } ${errors.firstName ? 'border-red-500' : ''}`}
                                            />
                                            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                                        </div>
                                        <div>
                                            <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-apple border focus:ring-2 focus:ring-system-blue outline-none transition-colors ${theme === 'dark'
                                                        ? 'bg-gray-900 border-gray-800 text-white focus:border-system-blue'
                                                        : 'bg-white border-gray-200 text-gray-900 focus:border-system-blue'
                                                    } ${errors.lastName ? 'border-red-500' : ''}`}
                                            />
                                            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-apple border focus:ring-2 focus:ring-system-blue outline-none transition-colors ${theme === 'dark'
                                                        ? 'bg-gray-900 border-gray-800 text-white focus:border-system-blue'
                                                        : 'bg-white border-gray-200 text-gray-900 focus:border-system-blue'
                                                    } ${errors.address ? 'border-red-500' : ''}`}
                                            />
                                            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                                        </div>
                                        <div>
                                            <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-apple border focus:ring-2 focus:ring-system-blue outline-none transition-colors ${theme === 'dark'
                                                        ? 'bg-gray-900 border-gray-800 text-white focus:border-system-blue'
                                                        : 'bg-white border-gray-200 text-gray-900 focus:border-system-blue'
                                                    } ${errors.city ? 'border-red-500' : ''}`}
                                            />
                                            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                                        </div>
                                        <div>
                                            <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                                Postal Code
                                            </label>
                                            <input
                                                type="text"
                                                name="postalCode"
                                                value={formData.postalCode}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-apple border focus:ring-2 focus:ring-system-blue outline-none transition-colors ${theme === 'dark'
                                                        ? 'bg-gray-900 border-gray-800 text-white focus:border-system-blue'
                                                        : 'bg-white border-gray-200 text-gray-900 focus:border-system-blue'
                                                    } ${errors.postalCode ? 'border-red-500' : ''}`}
                                            />
                                            {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
                                        </div>
                                    </div>
                                </div>

                                {/* Payment (Placeholder) */}
                                <div>
                                    <h2 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                        Payment
                                    </h2>
                                    <div className="space-y-4">
                                        <div className="sm:col-span-2">
                                            <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                                Card Number
                                            </label>
                                            <input
                                                type="text"
                                                name="cardNumber"
                                                placeholder="0000 0000 0000 0000"
                                                value={formData.cardNumber}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-apple border focus:ring-2 focus:ring-system-blue outline-none transition-colors ${theme === 'dark'
                                                        ? 'bg-gray-900 border-gray-800 text-white focus:border-system-blue'
                                                        : 'bg-white border-gray-200 text-gray-900 focus:border-system-blue'
                                                    } ${errors.cardNumber ? 'border-red-500' : ''}`}
                                            />
                                            {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                                    Expiry Date
                                                </label>
                                                <input
                                                    type="text"
                                                    name="expiryDate"
                                                    placeholder="MM/YY"
                                                    value={formData.expiryDate}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-3 rounded-apple border focus:ring-2 focus:ring-system-blue outline-none transition-colors ${theme === 'dark'
                                                            ? 'bg-gray-900 border-gray-800 text-white focus:border-system-blue'
                                                            : 'bg-white border-gray-200 text-gray-900 focus:border-system-blue'
                                                        } ${errors.expiryDate ? 'border-red-500' : ''}`}
                                                />
                                                {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                                            </div>
                                            <div>
                                                <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                                    CVC
                                                </label>
                                                <input
                                                    type="text"
                                                    name="cvc"
                                                    placeholder="123"
                                                    value={formData.cvc}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-3 rounded-apple border focus:ring-2 focus:ring-system-blue outline-none transition-colors ${theme === 'dark'
                                                            ? 'bg-gray-900 border-gray-800 text-white focus:border-system-blue'
                                                            : 'bg-white border-gray-200 text-gray-900 focus:border-system-blue'
                                                        } ${errors.cvc ? 'border-red-500' : ''}`}
                                                />
                                                {errors.cvc && <p className="text-red-500 text-sm mt-1">{errors.cvc}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isProcessing}
                                    className={`w-full py-4 rounded-apple-lg font-semibold text-lg transition-all shadow-apple-md active-scale hover-lift mt-8 ${theme === 'dark'
                                            ? 'bg-white text-black hover:bg-gray-100'
                                            : 'bg-system-blue text-white hover:bg-blue-600'
                                        } ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {isProcessing ? 'Processing...' : `Pay $${cartTotal.toFixed(2)}`}
                                </button>
                            </form>
                        </div>

                        {/* Order Summary */}
                        <div className={`p-6 rounded-apple-lg h-fit ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
                            }`}>
                            <h2 className={`text-xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                Order Summary
                            </h2>
                            <div className="space-y-4 mb-6">
                                {cartItems.map((item) => (
                                    <div key={`${item.id}-${item.size}`} className="flex gap-4">
                                        <div className={`w-16 h-16 rounded-apple overflow-hidden flex-shrink-0 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
                                            }`}>
                                            {item.image && (
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            )}
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                                {item.name}
                                            </h3>
                                            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                                Size: {item.size} | Qty: {item.quantity}
                                            </p>
                                        </div>
                                        <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className={`border-t pt-4 space-y-2 ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
                                <div className="flex justify-between">
                                    <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Subtotal</span>
                                    <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Shipping</span>
                                    <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Free</span>
                                </div>
                                <div className={`flex justify-between pt-4 border-t font-bold text-lg ${theme === 'dark' ? 'border-gray-800 text-white' : 'border-gray-200 text-gray-900'
                                    }`}>
                                    <span>Total</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Checkout;
