import { defineConfig } from 'vite' //Plugin
import { resolve } from 'path'
import preact from '@preact/preset-vite'
//import react from '@vitejs/plugin-react'
import replace from '@rollup/plugin-replace'
//import externalize from "vite-plugin-externalize-dependencies"
import { nodeResolve } from '@rollup/plugin-node-resolve'
import fs from 'fs'

const base = 'swag'
//const swagPkg = ['react-immutable-pure-component', 'react-debounce-input', 'react-copy-to-clipboard',
//                 'react-syntax-highlighter', 'react-redux']
/*
function reactResolverForSwaggerUI(): Plugin {
  return {
    name: 'react-resolver-for-swagger-ui',
    resolveId(source, importer) {
      console.log("Test module to use react", importer)
      if (importer &&
          (importer.includes('node_modules/swagger-ui') ||
           importer.includes('react-immutable-pure-component') ||
           importer.includes('react-debounce-input') ||
           importer.includes('react-copy-to-clipboard')) &&
          (source === 'react' || source === 'react-dom')) {
        return { id: source, external: 'absolute' };
      }
    },
  }
}
*/
export default defineConfig({
  base: `/${base}/`,
  mode: "development",
  build: {
    sourcemap: true,
    manifest: true,
    minify: false,
    minifyIdentifiers: false,
    minifySyntax: false,
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
      //external: swagPkg,
    }
  },
  //optimizeDeps: {
  //  exclude: swagPkg
  //},
  define: {
    global: {}, //'globalThis',
    'process.env': process.env,
  },
  resolve: {
    extensions: ['.js', '.jsx', 'ts', 'tsx'],
    mainFields: ['module'],
    alias: {
      "@": resolve(__dirname, "src"),
      //"swagger-ui-react/react": "react",
      //"swagger-ui-react/react-dom": "react-dom",
      "react": "preact/compat",
      "react-dom": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react/jsx-runtime": "preact/jsx-runtime",
      //"swagger-ui-react": "/home/odbadmin/backup/js/swagger-ui/dist"
    }
  },
  plugins: [
    preact(),
    //reactResolverForSwaggerUI(),
    /* react({
      babel: {
        plugins: ['@babel/plugin-transform-react-jsx'],
      },
    }), */
    //externalize({ externals: swagPkg }),
    /* Add the following Vite plugin to handle MIME types
    {
      name: 'fix-mime-types',
      enforce: 'pre',
      transform(code, id) {
        if (id.endsWith('.js') || id.endsWith('.jsx')) {
          return code.replace(/import.meta.url/g, '""');
        }
      },
    },*/
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
