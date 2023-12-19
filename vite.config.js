import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    headers: [
      {
        "key": "Cross-Origin-Embedder-Policy",
        "value": "unsafe-none"
      }
    ],
    build: {
      assetsInlineLimit: 4096,
      sourcemap: true,

      rollupOptions: {
        input: glob.sync('./src/*.html'),
        output: {
          // manualChunks(id) {
          //   if (id.includes('node_modules')) {
          //     return 'vendor';
          //   }
        // },
        manualChunks: undefined,
          entryFileNames: 'commonHelpers.js',
        },
      },
      outDir: '../dist',
    },
    plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  };
});

const express = require('express');
const path = require('path');

const app = express();

// Використовуйте статичні файли у папці 'public'
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '7d', // Заголовок Cache-Control для статичних ресурсів
}));

app.listen(3000, () => {
  console.log('Сервер запущено на порту 3000');
});