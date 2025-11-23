/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          'system-ui',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
      },
      fontSize: {
        'display': ['80px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'large-title': ['34px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'title-1': ['28px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'title-2': ['22px', { lineHeight: '1.3', letterSpacing: '0' }],
        'title-3': ['20px', { lineHeight: '1.3', letterSpacing: '0' }],
        'headline': ['17px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body': ['17px', { lineHeight: '1.4', letterSpacing: '0' }],
        'callout': ['16px', { lineHeight: '1.4', letterSpacing: '0' }],
        'subhead': ['15px', { lineHeight: '1.4', letterSpacing: '0' }],
        'footnote': ['13px', { lineHeight: '1.4', letterSpacing: '0' }],
        'caption-1': ['12px', { lineHeight: '1.3', letterSpacing: '0' }],
        'caption-2': ['11px', { lineHeight: '1.3', letterSpacing: '0' }],
      },
      colors: {
        // Apple System Colors
        system: {
          blue: '#007AFF',
          green: '#34C759',
          indigo: '#5856D6',
          orange: '#FF9500',
          pink: '#FF2D55',
          purple: '#AF52DE',
          red: '#FF3B30',
          teal: '#5AC8FA',
          yellow: '#FFCC00',
        },
        // Apple Gray Scale
        gray: {
          50: '#F9F9F9',
          100: '#F2F2F7',
          200: '#E5E5EA',
          300: '#D1D1D6',
          400: '#C7C7CC',
          500: '#AEAEB2',
          600: '#8E8E93',
          700: '#636366',
          800: '#48484A',
          900: '#3A3A3C',
          950: '#2C2C2E',
          975: '#1C1C1E',
          1000: '#000000',
        },
        // Light Mode Backgrounds
        light: {
          primary: '#FFFFFF',
          secondary: '#F2F2F7',
          tertiary: '#FFFFFF',
          grouped: '#F2F2F7',
          groupedSecondary: '#FFFFFF',
        },
        // Dark Mode Backgrounds
        dark: {
          primary: '#000000',
          secondary: '#1C1C1E',
          tertiary: '#2C2C2E',
          grouped: '#000000',
          groupedSecondary: '#1C1C1E',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'apple': '10px',
        'apple-lg': '14px',
        'apple-xl': '20px',
      },
      boxShadow: {
        'apple': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'apple-md': '0 4px 16px rgba(0, 0, 0, 0.1)',
        'apple-lg': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'apple-xl': '0 12px 32px rgba(0, 0, 0, 0.15)',
        'apple-inset': 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'apple-spring': 'spring 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'apple-fade': 'fade 0.3s ease-out',
        'apple-slide': 'slide 0.3s ease-out',
      },
      keyframes: {
        spring: {
          '0%': { transform: 'scale(0.95)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slide: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

