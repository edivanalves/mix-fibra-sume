import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mix-fibra-sume/',  // <-- aqui o nome do seu repositório
  plugins: [react()],
})