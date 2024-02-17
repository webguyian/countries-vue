import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/countries-vue/',
  plugins: [vue()],
  server: {
    port: 4000
  }
});
