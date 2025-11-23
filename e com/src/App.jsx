import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
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
  const [cartItems, setCartItems] = React.useState([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const handleAddToCart = React.useCallback((product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }, [cartItems]);

  const handleRemoveItem = React.useCallback((id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  }, [cartItems]);

  const handleUpdateQuantity = React.useCallback((id, quantity) => {
    if (quantity <= 0) {
      handleRemoveItem(id);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  }, [cartItems, handleRemoveItem]);

  const cartCount = React.useMemo(() => 
    cartItems.reduce((sum, item) => sum + item.quantity, 0), 
    [cartItems]
  );
  
  const cartTotal = React.useMemo(() => 
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0), 
    [cartItems]
  );

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Navigation 
          cartCount={cartCount} 
          cartTotal={cartTotal} 
          onCartClick={() => setIsCartOpen(true)} 
        />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
            <Route path="/brands" element={<Brands onAddToCart={handleAddToCart} />} />
            <Route path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
            <Route path="/product/:id" element={<Product onAddToCart={handleAddToCart} />} />
            <Route path="/clearance" element={<Clearance onAddToCart={handleAddToCart} />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
        <ShoppingCart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onRemoveItem={handleRemoveItem}
          onUpdateQuantity={handleUpdateQuantity}
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;

