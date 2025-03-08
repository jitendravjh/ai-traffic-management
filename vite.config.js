import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ai-traffic-management/',  // Ensure correct path for GitHub Pages
  plugins: [react()]
});
