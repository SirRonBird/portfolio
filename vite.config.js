import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginString from 'vite-plugin-string'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vitePluginString(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    preserveSymlinks: true
  },
  assetsInclude: ['**/*.jpg','**/*.obj','**/*.ply','**/*.off'],
 

})
