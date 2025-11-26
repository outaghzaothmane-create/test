import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext();

export const useToast = () => {
    return useContext(ToastContext);
};

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((message, type = 'success') => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts((prev) => [...prev, { id, message, type }]);

        setTimeout(() => {
            removeToast(id);
        }, 3000);
    }, []);

    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={`flex items-center px-4 py-3 rounded-apple shadow-lg transform transition-all duration-300 animate-slide-up ${toast.type === 'success'
                                ? 'bg-green-500 text-white'
                                : toast.type === 'error'
                                    ? 'bg-red-500 text-white'
                                    : 'bg-gray-800 text-white'
                            }`}
                    >
                        <span className="material-symbols-outlined mr-2">
                            {toast.type === 'success' ? 'check_circle' : toast.type === 'error' ? 'error' : 'info'}
                        </span>
                        <span className="font-medium">{toast.message}</span>
                        <button
                            onClick={() => removeToast(toast.id)}
                            className="ml-4 hover:opacity-80"
                        >
                            <span className="material-symbols-outlined text-sm">close</span>
                        </button>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};
