import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { useToast } from './ToastContext';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                try {
                    return JSON.parse(savedCart);
                } catch (e) {
                    console.error('Failed to parse cart from localStorage', e);
                    return [];
                }
            }
        }
        return [];
    });

    const [isCartOpen, setIsCartOpen] = useState(false);
    const { addToast } = useToast();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }, [cartItems]);

    const addToCart = useCallback((product) => {
        setCartItems(prevItems => {
            // Check if item with same ID and Size exists
            const existingItemIndex = prevItems.findIndex(
                item => item.id === product.id && item.size === product.size
            );

            if (existingItemIndex > -1) {
                const newItems = [...prevItems];
                newItems[existingItemIndex] = {
                    ...newItems[existingItemIndex],
                    quantity: newItems[existingItemIndex].quantity + (product.quantity || 1)
                };
                return newItems;
            } else {
                return [...prevItems, { ...product, quantity: product.quantity || 1 }];
            }
        });
        setIsCartOpen(true);
    }, []);

    const removeFromCart = useCallback((itemId, size) => {
        setCartItems(prevItems => prevItems.filter(item => !(item.id === itemId && item.size === size)));
    }, []);

    // Support legacy signature for compatibility during refactor
    const removeItemLegacy = useCallback((itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    }, []);

    const updateQuantity = useCallback((itemId, size, quantity) => {
        if (quantity <= 0) {
            removeFromCart(itemId, size);
            return;
        }

        setCartItems(prevItems =>
            prevItems.map(item =>
                (item.id === itemId && item.size === size)
                    ? { ...item, quantity }
                    : item
            )
        );
    }, [removeFromCart]);

    // Support legacy signature for compatibility
    const updateQuantityLegacy = useCallback((itemId, quantity) => {
        if (quantity <= 0) {
            removeItemLegacy(itemId);
            return;
        }
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId ? { ...item, quantity } : item
            )
        );
    }, [removeItemLegacy]);


    const clearCart = useCallback(() => {
        setCartItems([]);
    }, []);

    const cartCount = useMemo(() =>
        cartItems.reduce((sum, item) => sum + item.quantity, 0),
        [cartItems]
    );

    const cartTotal = useMemo(() =>
        cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
        [cartItems]
    );

    const openCart = useCallback(() => setIsCartOpen(true), []);
    const closeCart = useCallback(() => setIsCartOpen(false), []);
    const toggleCart = useCallback(() => setIsCartOpen(prev => !prev), []);

    const value = {
        cartItems,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        openCart,
        closeCart,
        toggleCart,
        // Legacy support
        handleRemoveItem: removeItemLegacy,
        handleUpdateQuantity: updateQuantityLegacy
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
