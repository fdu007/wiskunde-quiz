import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' -> works on GitHub Pages (project site) and locally
export default defineConfig({
  plugins: [react()],
  base: './',
})
