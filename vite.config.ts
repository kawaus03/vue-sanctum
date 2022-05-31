import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  server: {
    host: true,
    port: 3000,
    hmr: {
      host: 'docker-laravel-vue.work',
      clientPort: 80,
    },
  }

})
