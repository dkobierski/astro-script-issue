import { defineConfig } from 'astro/config';
// import node from '@astrojs/node';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  // adapter: node({ mode: 'standalone' }),
  // build: {
  //   assetsPrefix: 'https://cdn.example.com/'
  // },
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/entry.[hash].mjs',
          chunkFileNames: 'assets/chunks/chunk.[hash].mjs',
          assetFileNames: 'assets/asset.[hash][extname]',
        },
      },
    },
  },
});
