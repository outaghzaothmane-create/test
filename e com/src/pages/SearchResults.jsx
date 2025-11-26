import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import Navigation from '../components/sanity/Navigation';
import Footer from '../components/sanity/Footer';
import ProductCard from '../components/sanity/ProductCard';
import { useProducts } from '../hooks/useProducts';

const SearchResults = () => {
    const { theme } = useTheme();
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const { products, loading } = useProducts();

    const filteredProducts = useMemo(() => {
        if (!query) return [];
        const lowerQuery = query.toLowerCase();
        return products.filter(p =>
            p.name.toLowerCase().includes(lowerQuery) ||
            p.category.toLowerCase().includes(lowerQuery) ||
            (p.description && p.description.toLowerCase().includes(lowerQuery))
        );
    }, [products, query]);

    if (loading) {
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

            <div className="pt-32 pb-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>
                            Search Results
                        </h1>
                        <p className={`text-lg transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                            {filteredProducts.length} results for "{query}"
                        </p>
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {filteredProducts.map((product, index) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    index={index}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                No products found matching your search.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SearchResults;
