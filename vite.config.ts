import { defineConfig } from 'vite'
import { resolve } from 'path'
import preact from '@preact/preset-vite'
import replace from '@rollup/plugin-replace'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import fs from 'fs'

const base = 'swag'

export default defineConfig({
  base: `/${base}/`,
  mode: "development",
  build: {
    sourcemap: true,
    manifest: true,
    outDir: resolve(__dirname, `./dist/${base}/`),
    target: 'esnext',
    emptyOutDir: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        format: 'es',
      },
      plugins: [
        nodeResolve({
          moduleDirectories: ['node_modules']
        }),
      ],
      //external: ['lodash'],
    }
  },
  //optimizeDeps: {
  //  include: ['lodash']
  //},
  define: {
    'process.env': process.env,
  },
  resolve: {
    extensions: ['.js', '.jsx', 'ts', 'tsx'],
    mainFields: ['module'],
    alias: {
      "@": resolve(__dirname, "src"),
      "react": "preact/compat",
      "react-dom": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react/jsx-runtime": "preact/jsx-runtime",
    }
  },
  plugins: [
    preact(),
    replace({
      __DATE__: new Date().toISOString(),
      __ROUTE__: base,
    }),
  ],
  server:{
    host: "0.0.0.0",
    port: 8010,
    strictPort: true,
    hmr: false,
  }
})
