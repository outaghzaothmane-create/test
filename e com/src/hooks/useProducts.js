import { useState, useEffect } from 'react';
import { client, urlFor } from '../sanityClient';
import { products as fallbackProducts } from '../data/products';

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const query = '*[_type == "product"]';
                const result = await client.fetch(query);

                if (result && result.length > 0) {
                    // Map Sanity data to our app's structure if needed
                    // For now assuming schema matches or we adapt here
                    const mappedProducts = result.map(p => ({
                        ...p,
                        id: p._id,
                        image: p.image ? urlFor(p.image).url() : null
                    }));
                    setProducts(mappedProducts);
                } else {
                    // Fallback to local data if no products in Sanity yet
                    setProducts(fallbackProducts);
                }
            } catch (err) {
                console.error('Error fetching products:', err);
                setError(err);
                setProducts(fallbackProducts); // Fallback on error
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { products, loading, error };
};

