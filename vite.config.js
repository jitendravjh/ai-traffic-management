import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ai-traffic-management/', // GitHub Pages base path
  plugins: [react()],
});
