import path from 'path'
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'tailwind.config.js': 'tailwind.config.js'
    },
  },
  optimizeDeps: {
    include: [
      'tailwind.config.js',
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {}
    }
  },
})
