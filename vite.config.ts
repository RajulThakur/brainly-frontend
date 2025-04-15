import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    ssr: true,
    rollupOptions: {
      input: {client: './src/main.tsx', server: './src/main.server.tsx'},
    },
  },
});
