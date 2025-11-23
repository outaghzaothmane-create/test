import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ShoppingCart = ({ isOpen, onClose, cartItems, onRemoveItem, onUpdateQuantity }) => {
  const { theme } = useTheme();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Backdrop with blur */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          isOpen 
            ? 'opacity-100 backdrop-blur-sm' 
            : 'opacity-0 pointer-events-none'
        } ${
          theme === 'dark' ? 'bg-black/40' : 'bg-black/20'
        }`}
        onClick={onClose}
      />

      {/* Cart Drawer with Apple-style notch */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 transform transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          theme === 'dark'
            ? 'bg-dark-secondary'
            : 'bg-light-primary'
        } ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          boxShadow: isOpen 
            ? (theme === 'dark' 
                ? '-4px 0 24px rgba(0, 0, 0, 0.5)' 
                : '-4px 0 24px rgba(0, 0, 0, 0.15)')
            : 'none'
        }}
      >
        {/* Apple-style Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 flex items-start justify-center pt-1.5">
          <div className={`w-32 h-1 rounded-full transition-colors ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
          }`} />
        </div>

        <div className="flex flex-col h-full pt-6">
          {/* Header */}
          <div className={`flex items-center justify-between px-6 pb-4 border-b transition-colors ${
            theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
          }`}>
            <h2 className={`text-title-2 font-semibold transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Shopping Cart
            </h2>
            <button
              onClick={onClose}
              className={`w-10 h-10 rounded-apple flex items-center justify-center transition-all active-scale hover-lift ${
                theme === 'dark'
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5 icon-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items - Scrollable */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full py-20">
                <div className={`w-20 h-20 rounded-apple-lg flex items-center justify-center mb-6 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <svg className={`w-10 h-10 transition-colors ${
                    theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className={`text-body font-medium transition-colors ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Your cart is empty
                </p>
                <p className={`text-subhead mt-2 transition-colors ${
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  Add items to get started
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div 
                    key={item.id} 
                    className={`flex items-center gap-4 rounded-apple-lg p-4 transition-all ${
                      theme === 'dark' 
                        ? 'bg-dark-tertiary hover:bg-gray-800' 
                        : 'bg-light-secondary hover:bg-gray-100'
                    }`}
                  >
                    {/* Product Image */}
                    <div className={`w-20 h-20 rounded-apple flex-shrink-0 flex items-center justify-center ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                    }`}>
                      <svg className={`w-10 h-10 transition-colors ${
                        theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
                      }`} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 11c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4 9 4v6zm-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12L5 6.3v4.92C5 15.54 8.25 20 12 21z"/>
                        <path d="M9 8l6 3-6 3V8z"/>
                      </svg>
                    </div>
                    
                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-headline font-semibold mb-1 truncate transition-colors ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.name}
                      </h3>
                      {item.color && (
                        <p className={`text-subhead mb-2 transition-colors ${
                          theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
                        }`}>
                          {item.color}
                        </p>
                      )}
                      <p className={`text-body font-semibold mb-3 transition-colors ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        ${item.price.toLocaleString()}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className={`w-9 h-9 rounded-apple flex items-center justify-center transition-all font-semibold text-body active-scale hover-lift ${
                            theme === 'dark'
                              ? 'bg-gray-800 text-white hover:bg-gray-700'
                              : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                          }`}
                        >
                          −
                        </button>
                        <span className={`w-8 text-center text-body font-semibold transition-colors ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className={`w-9 h-9 rounded-apple flex items-center justify-center transition-all font-semibold text-body active-scale hover-lift ${
                            theme === 'dark'
                              ? 'bg-gray-800 text-white hover:bg-gray-700'
                              : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                          }`}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    {/* Remove Button */}
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className={`w-9 h-9 rounded-apple flex items-center justify-center transition-all flex-shrink-0 active-scale hover-lift ${
                        theme === 'dark'
                          ? 'text-gray-500 hover:text-white hover:bg-gray-800'
                          : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <svg className="w-5 h-5 icon-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer - Fixed at bottom */}
          {cartItems.length > 0 && (
            <div className={`border-t px-6 py-6 space-y-4 transition-colors ${
              theme === 'dark' 
                ? 'bg-dark-secondary border-gray-800' 
                : 'bg-light-primary border-gray-200'
            }`}>
              {/* Subtotal */}
              <div className="flex items-center justify-between">
                <span className={`text-body font-medium transition-colors ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Subtotal
                </span>
                <span className={`text-body font-semibold transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  ${total.toLocaleString()}
                </span>
              </div>
              
              {/* Total */}
              <div className={`flex items-center justify-between pt-2 border-t ${
                theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
              }`}>
                <span className={`text-headline font-semibold transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Total
                </span>
                <span className={`text-title-2 font-semibold transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  ${total.toLocaleString()}
                </span>
              </div>
              
              {/* Checkout Button */}
              <button 
                className={`w-full py-4 rounded-apple-lg font-semibold text-body transition-all active-scale hover-lift ${
                  theme === 'dark'
                    ? 'bg-white text-black hover:bg-gray-100 shadow-apple-md'
                    : 'bg-system-blue text-white hover:bg-blue-600 shadow-apple-md'
                }`}
              >
                Checkout
              </button>
              
              {/* Continue Shopping */}
              <button
                onClick={onClose}
                className={`w-full py-3 rounded-apple-lg font-medium text-body transition-all hover-lift ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
