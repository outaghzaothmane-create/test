import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import { ToastProvider } from './contexts/ToastContext';
import Navigation from './components/sanity/Navigation';
import Footer from './components/sanity/Footer';
import ShoppingCart from './components/sanity/ShoppingCart';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Brands = lazy(() => import('./pages/Brands'));
const Shop = lazy(() => import('./pages/Shop'));
const Product = lazy(() => import('./pages/Product'));
const Clearance = lazy(() => import('./pages/Clearance'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Checkout = lazy(() => import('./pages/Checkout'));
const OrderSuccess = lazy(() => import('./pages/OrderSuccess'));
const SearchResults = lazy(() => import('./pages/SearchResults'));
const Profile = lazy(() => import('./pages/Profile'));

// Loading fallback component
const PageLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-gray-200 dark:border-gray-800 rounded-full"></div>
      <div className="w-16 h-16 border-4 border-system-blue border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
    </div>
    <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm font-medium">Loading...</p>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <AuthProvider>
          <CartProvider>
            <Router>
              <ScrollToTop />
              <Navigation />
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/brands" element={<Brands />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/product/:id" element={<Product />} />
                  <Route path="/clearance" element={<Clearance />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogPost />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/order-success" element={<OrderSuccess />} />
                  <Route path="/search" element={<SearchResults />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              <Footer />
              <ShoppingCart />
            </Router>
          </CartProvider>
        </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
