import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useCart } from '../../contexts/CartContext';

const QuickViewModal = ({ product, isOpen, onClose }) => {
    const { theme } = useTheme();
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState('M');
    const [quantity, setQuantity] = useState(1);

    if (!isOpen || !product) return null;

    const handleAddToCart = () => {
        addToCart(product, quantity, selectedSize);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            <div className={`relative w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden transform transition-all ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                }`}>
                <button
                    onClick={onClose}
                    className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors ${theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        }`}
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Image */}
                    <div className={`aspect-square md:aspect-auto relative ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                        }`}>
                        {product.image && (
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>

                    {/* Details */}
                    <div className="p-6 md:p-8 flex flex-col h-full">
                        <div className="mb-auto">
                            <h2 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                {product.name}
                            </h2>
                            <p className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                ${product.price}
                            </p>
                            <p className={`mb-6 line-clamp-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                {product.description}
                            </p>

                            {/* Size Selector */}
                            <div className="mb-6">
                                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Size
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${selectedSize === size
                                                    ? theme === 'dark'
                                                        ? 'bg-white text-black'
                                                        : 'bg-black text-white'
                                                    : theme === 'dark'
                                                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 mt-6">
                            <button
                                onClick={handleAddToCart}
                                className={`w-full py-3 rounded-apple font-semibold transition-all active-scale hover-lift ${theme === 'dark'
                                        ? 'bg-white text-black hover:bg-gray-100'
                                        : 'bg-system-blue text-white hover:bg-blue-600'
                                    }`}
                            >
                                Add to Cart
                            </button>
                            <Link
                                to={`/product/${product.id}`}
                                onClick={onClose}
                                className={`block w-full py-3 text-center rounded-apple font-semibold transition-colors ${theme === 'dark'
                                        ? 'bg-gray-800 text-white hover:bg-gray-700'
                                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                    }`}
                            >
                                View Full Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickViewModal;
