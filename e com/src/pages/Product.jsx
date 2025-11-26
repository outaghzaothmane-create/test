import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import Navigation from '../components/sanity/Navigation';
import Footer from '../components/sanity/Footer';
import ProductCard from '../components/sanity/ProductCard';
import ShoppingCart from '../components/sanity/ShoppingCart';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../contexts/CartContext';
import ImageGallery from '../components/sanity/ImageGallery';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { products, loading: productsLoading } = useProducts();
  const { addToCart, openCart } = useCart();

  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!productsLoading && products.length > 0) {
      const foundProduct = products.find(p => p.id === Number(id) || p.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        // Handle product not found, maybe redirect or show error
        // For now, just fallback to first product or keep null
      }
    }
  }, [id, products, productsLoading]);

  const relatedProducts = product
    ? products
      .filter(p => p.id !== product.id && p.category === product.category)
      .slice(0, 4)
    : [];

  const handleAddToCartClick = () => {
    if (!product) return;

    const productToAdd = {
      ...product,
      size: selectedSize,
      quantity: quantity
    };

    // Add to global cart
    addToCart(productToAdd);
    openCart();
  };

  // Mock multiple images for demo purposes if only one exists
  const productImages = product ? [product.image, product.image, product.image].filter(Boolean) : [];

  if (productsLoading || !product) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-black' : 'bg-white'
        }`}>
        <div className="w-16 h-16 border-4 border-system-blue border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors ${theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
      <Navigation />

      {/* Product Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link
            to="/shop"
            className={`inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors hover:gap-3 ${theme === 'dark'
              ? 'text-gray-400 hover:text-white'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Product Gallery */}
            <div>
              <ImageGallery images={productImages} />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className={`inline-block px-4 py-2 rounded-full mb-4 ${theme === 'dark' ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
                  }`}>
                  <span className="font-bold text-sm uppercase tracking-wide">{product.category}</span>
                </div>
                <h1 className={`text-4xl sm:text-5xl font-bold mb-4 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                  {product.name}
                </h1>
                <p className={`text-lg transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                  {product.color}
                </p>
              </div>

              <div>
                <p className={`text-3xl font-bold mb-6 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                  ${product.price}
                </p>
              </div>

              <div>
                <p className={`text-base leading-relaxed transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                  {product.description}
                </p>
              </div>

              {/* Size Selection */}
              <div>
                <label className={`block text-sm font-semibold mb-3 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                  Size
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes?.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-apple font-semibold transition-all active-scale hover-lift ${selectedSize === size
                        ? 'bg-system-blue text-white shadow-apple-md'
                        : theme === 'dark'
                          ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div>
                <label className={`block text-sm font-semibold mb-3 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className={`w-12 h-12 rounded-apple font-semibold transition-all active-scale hover-lift ${theme === 'dark'
                      ? 'bg-gray-800 text-white hover:bg-gray-700'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                  >
                    −
                  </button>
                  <span className={`text-xl font-semibold w-12 text-center transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className={`w-12 h-12 rounded-apple font-semibold transition-all active-scale hover-lift ${theme === 'dark'
                      ? 'bg-gray-800 text-white hover:bg-gray-700'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCartClick}
                disabled={!product.inStock}
                className={`w-full py-4 rounded-apple-lg font-semibold text-lg transition-all shadow-apple-md active-scale hover-lift ${product.inStock
                  ? theme === 'dark'
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-system-blue text-white hover:bg-blue-600'
                  : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  }`}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>

              {/* Product Features */}
              <div className={`pt-6 border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
                }`}>
                <h3 className={`text-lg font-semibold mb-4 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                  Features
                </h3>
                <ul className={`space-y-2 text-sm transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Premium materials
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free shipping
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    30-day returns
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Authenticity guaranteed
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className={`text-3xl font-bold mb-12 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct, index) => (
                  <ProductCard
                    key={relatedProduct.id}
                    product={relatedProduct}
                    index={index}
                    isClickable={true}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <ShoppingCart />
    </div>
  );
};

export default Product;

