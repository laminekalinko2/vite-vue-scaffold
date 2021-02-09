import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import { loadEnv } from './vite.utils'

const env = loadEnv()

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [vue()],
   server: {
      host: env.VITE_HOST,
      port: Number(env.VITE_PORT) > 0 ? Number(env.VITE_PORT) : 3000,
   },
   alias: {
      '@': path.resolve(__dirname, './src'),
   },
})
