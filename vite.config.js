import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@wagmi/core/connectors/walletConnect': '@wagmi/core/dist/connectors/walletConnect',
      '@wagmi/core/providers/jsonRpc': '@wagmi/core/dist/providers/jsonRpc',
    },
  },
})
