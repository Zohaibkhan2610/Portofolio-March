import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],server: {
    host: '0.0.0.0', // Allows access from mobile
    port: 5173, // Default Vite port
    strictPort: true, // Prevents changing ports
  },
})
