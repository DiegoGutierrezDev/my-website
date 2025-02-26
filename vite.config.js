import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    hmr: {
      host: 'localhost',
    },
  },
  build: {
    sourcemap: true,
  },
  plugins: [
    vue(),
  ],
  // base: '/my-website/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
