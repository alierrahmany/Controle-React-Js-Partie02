import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/(controle01-React-js-partie02)/",
  plugins: [react()],
})
console.log('Vite configuration loaded');     