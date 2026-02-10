import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import electron from 'vite-plugin-electron'
import electronRenderer from 'vite-plugin-electron-renderer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    electron([
      {
        // Main process entry
        entry: 'src/main/index.ts',
        vite: {
          build: {
            outDir: 'dist-electron/main',
            emptyOutDir: false, // Disabled to work around locked file issue
            rollupOptions: {
              output: {
                entryFileNames: '[name].js'
              }
            }
          }
        }
      },
      {
        // Preload script entry
        entry: 'src/preload/index.ts',
        vite: {
          build: {
            outDir: 'dist-electron/preload',
            emptyOutDir: false, // Disabled to work around locked file issue
            rollupOptions: {
              output: {
                entryFileNames: '[name].js',
                format: 'cjs'
              }
            }
          }
        }
      }
    ]),
    electronRenderer(),
  ],
  // Optimize for Electron
  server: {
    port: 5174,
    strictPort: false,
  },
  build: {
    outDir: 'renderer-dist',
    emptyOutDir: true,
  },
  optimizeDeps: {
    exclude: ['electron']
  }
})
