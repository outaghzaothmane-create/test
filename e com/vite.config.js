import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    // Optimize build size
    minify: 'esbuild', // esbuild is faster and included with Vite
    // Enable source maps for production debugging (optional)
    sourcemap: false,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dev server
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
  // CSS optimization
  css: {
    devSourcemap: false,
  },
})

