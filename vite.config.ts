import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/study-room/',
  resolve: {
    alias: {
      '/src/main.tsx': '/src/study-room/main.tsx',
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
