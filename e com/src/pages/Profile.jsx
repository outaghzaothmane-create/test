import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import Navigation from '../components/sanity/Navigation';
import Footer from '../components/sanity/Footer';

const Profile = () => {
    const { theme } = useTheme();
    const { currentUser, logout, updateUser } = useAuth();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        firstName: currentUser?.firstName || '',
        lastName: currentUser?.lastName || '',
        email: currentUser?.email || ''
    });

    if (!currentUser) {
        navigate('/');
        return null;
    }

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        updateUser(formData);
        setIsEditing(false);
    };

    return (
        <div className={`min-h-screen transition-colors ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
            <Navigation />

            <div className="pt-32 pb-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Sidebar */}
                        <div className="w-full md:w-1/4">
                            <div className={`p-6 rounded-apple-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900 shadow-sm'
                                        }`}>
                                        {currentUser.firstName[0]}{currentUser.lastName[0]}
                                    </div>
                                    <div>
                                        <h2 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                            {currentUser.firstName} {currentUser.lastName}
                                        </h2>
                                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                            {currentUser.email}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="w-full py-2 px-4 rounded-apple border border-red-500 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 space-y-8">
                            {/* Personal Information */}
                            <section>
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                        Personal Information
                                    </h2>
                                    <button
                                        onClick={() => setIsEditing(!isEditing)}
                                        className={`text-system-blue hover:underline`}
                                    >
                                        {isEditing ? 'Cancel' : 'Edit'}
                                    </button>
                                </div>

                                {isEditing ? (
                                    <form onSubmit={handleUpdate} className="space-y-4 max-w-md">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.firstName}
                                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                    className={`w-full px-4 py-2 rounded-apple border ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'
                                                        }`}
                                                />
                                            </div>
                                            <div>
                                                <label className={`block text-sm font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.lastName}
                                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                    className={`w-full px-4 py-2 rounded-apple border ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'
                                                        }`}
                                                />
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="px-6 py-2 bg-system-blue text-white rounded-apple hover:bg-blue-600 transition-colors"
                                        >
                                            Save Changes
                                        </button>
                                    </form>
                                ) : (
                                    <div className={`p-6 rounded-apple-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>First Name</p>
                                                <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{currentUser.firstName}</p>
                                            </div>
                                            <div>
                                                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Last Name</p>
                                                <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{currentUser.lastName}</p>
                                            </div>
                                            <div>
                                                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Email</p>
                                                <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{currentUser.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </section>

                            {/* Order History */}
                            <section>
                                <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                    Order History
                                </h2>
                                <div className="space-y-4">
                                    {currentUser.orders && currentUser.orders.length > 0 ? (
                                        currentUser.orders.map((order) => (
                                            <div key={order.id} className={`p-6 rounded-apple-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
                                                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                                    <div>
                                                        <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                                            Order #{order.id}
                                                        </p>
                                                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                                            Placed on {order.date}
                                                        </p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                                            ${order.total.toFixed(2)}
                                                        </p>
                                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${order.status === 'Delivered'
                                                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                                                : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                                                            }`}>
                                                            {order.status}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className={`border-t pt-4 ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
                                                    {order.items.map((item, idx) => (
                                                        <div key={idx} className="flex justify-between py-2">
                                                            <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                                                                {item.quantity}x {item.name}
                                                            </span>
                                                            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                                                                ${item.price.toFixed(2)}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                                            No orders yet.
                                        </p>
                                    )}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
