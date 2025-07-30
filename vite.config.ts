import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,         // 修改啟動的 port
    host: true,         // 讓外部設備可以連進來
    strictPort: true    // 如果 port 被佔用就報錯（非必須）
  },
})
