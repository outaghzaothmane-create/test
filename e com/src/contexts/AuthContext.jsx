import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check local storage for user session
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setCurrentUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        // Simulate API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email && password) {
                    const user = {
                        id: '1',
                        email,
                        firstName: 'John',
                        lastName: 'Doe',
                        orders: [
                            {
                                id: 'ord_123',
                                date: '2023-10-25',
                                total: 129.99,
                                status: 'Delivered',
                                items: [
                                    { name: 'Premium Cotton T-Shirt', quantity: 2, price: 45.00 },
                                    { name: 'Slim Fit Chinos', quantity: 1, price: 39.99 }
                                ]
                            }
                        ]
                    };
                    setCurrentUser(user);
                    localStorage.setItem('user', JSON.stringify(user));
                    resolve(user);
                } else {
                    reject(new Error('Invalid credentials'));
                }
            }, 1000);
        });
    };

    const register = async (userData) => {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                const user = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...userData,
                    orders: []
                };
                setCurrentUser(user);
                localStorage.setItem('user', JSON.stringify(user));
                resolve(user);
            }, 1000);
        });
    };

    const socialLogin = async (provider) => {
        // Simulate API call for social login
        return new Promise((resolve) => {
            setTimeout(() => {
                const user = {
                    id: `social_${Math.random().toString(36).substr(2, 9)}`,
                    email: `user@${provider.toLowerCase()}.com`,
                    firstName: 'Social',
                    lastName: 'User',
                    provider: provider,
                    orders: []
                };
                setCurrentUser(user);
                localStorage.setItem('user', JSON.stringify(user));
                resolve(user);
            }, 1000);
        });
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('user');
    };

    const updateUser = (data) => {
        const updatedUser = { ...currentUser, ...data };
        setCurrentUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
    };

    const value = {
        currentUser,
        login,
        register,
        logout,
        updateUser,
        socialLogin
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
