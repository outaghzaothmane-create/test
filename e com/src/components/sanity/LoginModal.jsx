import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import { useToast } from '../../contexts/ToastContext';

const LoginModal = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const { login, register, socialLogin } = useAuth();
  const { addToast } = useToast();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const modalRef = React.useRef(null);

  React.useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
        addToast('Successfully logged in!', 'success');
      } else {
        await register({ email, password, firstName: 'New', lastName: 'User' });
        addToast('Account created successfully!', 'success');
      }
      onClose();
      // Reset form
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Auth error:', error);
      addToast(error.message || 'Authentication failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await socialLogin('Google');
      addToast('Successfully logged in with Google!', 'success');
      onClose();
    } catch (error) {
      addToast('Google login failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      setLoading(true);
      await socialLogin('Facebook');
      addToast('Successfully logged in with Facebook!', 'success');
      onClose();
    } catch (error) {
      addToast('Facebook login failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleAppleLogin = async () => {
    try {
      setLoading(true);
      await socialLogin('Apple');
      addToast('Successfully logged in with Apple!', 'success');
      onClose();
    } catch (error) {
      addToast('Apple login failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isOpen
          ? 'opacity-100 bg-black/50 pointer-events-auto'
          : 'opacity-0 bg-black/0 pointer-events-none'
          }`}
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className={`fixed inset-0 z-[101] flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        onClick={onClose}
      >
        <div
          ref={modalRef}
          className={`relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-apple-xl shadow-apple-xl transition-all duration-300 my-auto ${isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-4'
            } ${theme === 'dark'
              ? 'bg-dark-secondary border border-gray-800'
              : 'bg-light-primary border border-gray-200'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 p-2 rounded-apple transition-all active-scale hover-lift ${theme === 'dark'
              ? 'text-gray-400 hover:text-white hover:bg-gray-800'
              : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
          >
            <svg className="w-6 h-6 icon-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-6">
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                {isLogin
                  ? 'Sign in to continue shopping'
                  : 'Join us to start shopping'}
              </p>
            </div>

            {/* OAuth Buttons */}
            <div className="space-y-2.5 mb-5">
              {/* Google Login */}
              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-apple-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all active-scale hover-lift"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>

              {/* Facebook Login */}
              <button
                onClick={handleFacebookLogin}
                className="w-full flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-apple-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all active-scale hover-lift"
              >
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Continue with Facebook</span>
              </button>

              {/* Apple Login */}
              <button
                onClick={handleAppleLogin}
                className="w-full flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-apple-lg border-2 border-gray-300 dark:border-gray-700 bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-gray-900 dark:hover:bg-gray-100 transition-all active-scale hover-lift"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span>Continue with Apple</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative mb-5">
              <div className={`absolute inset-0 flex items-center ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
                }`}>
                <div className={`w-full border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
                  }`}></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className={`px-4 ${theme === 'dark' ? 'bg-dark-secondary text-gray-400' : 'bg-light-primary text-gray-500'
                  }`}>
                  OR
                </span>
              </div>
            </div>

            {/* Email/Password Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={`w-full px-4 py-2.5 rounded-lg border ${theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={`w-full px-4 py-2.5 rounded-lg border ${theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="••••••••"
                />
              </div>
              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className={`ml-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                      Remember me
                    </span>
                  </label>
                  <a
                    href="#"
                    className={`text-sm ${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                      }`}
                  >
                    Forgot password?
                  </a>
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className={`w-full px-6 py-2.5 bg-system-blue text-white rounded-apple-lg font-semibold hover:bg-blue-700 transition-all active-scale hover-lift ${loading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
              >
                {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
              </button>
            </form>

            {/* Toggle Login/Register */}
            <div className="mt-5 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
              >
                {isLogin ? (
                  <>
                    Don't have an account?{' '}
                    <span className={`font-semibold ${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                      }`}>
                      Sign up
                    </span>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <span className={`font-semibold ${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                      }`}>
                      Sign in
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;

