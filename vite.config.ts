import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import electron from 'vite-electron-plugin';
import renderer from 'vite-plugin-electron-renderer';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const isElectron = mode === 'electron';

  return {
    plugins: [
      react(),
      visualizer({
        open: true,
        gzipSize: true,
      }),
      // Electron 插件
      ...(isElectron
        ? [
            electron([
              {
                // 主进程入口文件
                entry: 'src/main/index.ts',
                vite: {
                  build: {
                    outDir: 'dist-electron',
                    rollupOptions: {
                      external: ['electron'],
                    },
                  },
                },
              },
            ]),
            renderer(),
          ]
        : []),
    ],
    build: {
      target: 'esnext',
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            pdf: ['pdfjs-dist'],
          },
        },
      },
    },
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
    root: '.',
    publicDir: 'public',
    base: './',
    server: {
      port: 5173,
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  };
});
