import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ['./src/lib'], rollupTypes: true })],
  build: {
    lib: {
      entry: resolve(__dirname, './src/lib/main.ts'),
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', "react-dom", 'react/jsx-runtime', "react-aria-components", "tailwind-merge", "tailwindcss"],
    }
  },
  resolve: { alias: { src: resolve('src/') } },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },

})
