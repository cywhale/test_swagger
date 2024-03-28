import { defineConfig } from 'vite' //Plugin
import { resolve } from 'path'
import preact from '@preact/preset-vite'
//import react from '@vitejs/plugin-react'
import replace from '@rollup/plugin-replace'
//import externalize from "vite-plugin-externalize-dependencies"
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { SplitVendorChunkCache, staticImportedByEntry } from './config/splitvendorchunk.js'
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
      plugins: [
        nodeResolve({
          moduleDirectories: ['node_modules']
        }),
      ],
      //external: swagPkg,
      treeshake: {
        //preset: 'smallest',
        propertyReadSideEffects: false
      },
      output: {
        format: 'es', //'iife',
        manualChunks (id: any, { getModuleInfo }) {
          const cache = new Map()
          const cssLangs = `\\.(css|less|sass|scss|styl|stylus|pcss|postcss)($|\\?)`
          const cssLangRE = new RegExp(cssLangs)
          const isCSSRequest = (request: string): boolean => cssLangRE.test(request)
          if (id.includes('immutable')) {
            return 'immutable'
          } else if (id.includes('history')) {
            return 'history'
          } else if (id.includes('url-parse')) {
            return 'url-parse'
          //} else if (id.includes('redux')) {
          //  return 'redux' //casue ReferenceError: can't access lexical declaration "require$$0" before initialization
          } else if (id.includes('zenscroll')) {
            return 'zenscroll'
          } else if (id.includes('reselect')) {
            return 'reselect'
          } else if (id.includes('randexp')) {
            return 'randexp'
          } else if (id.includes('drange')) {
            return 'drange'
          } else if (id.includes('base64-js')) {
            return 'base64-js'
          } else if (id.includes('css.escape')) {
            return 'css-escape'
          } else if (id.includes('serialize-error')) {
            return 'serialize-error'
          } else if (id.includes('prop-types')) {
            return 'prop-types'
          } else if (id.includes('ieee754')) {
            return 'ieee754'
          } else if (id.includes('dompurify')) {
            return 'dompurify'
          } else if (id.includes('remarkable')) {
            return 'remarkable'
          } else if (id.includes('swagger-client') || id.includes('swagger-api')) {
            return 'swagger-client'
          } else if (id.includes('swaggeri-ui-react')) {
            return 'swagger-ui-react'
          } else if (id.includes('node_modules') && !isCSSRequest(id) && staticImportedByEntry(id, getModuleInfo, cache)) {
            //see: https://github.com/vitejs/vite/blob/main/packages/vite/src/node/plugins/splitVendorChunk.ts
            //also: https://www.jianshu.com/p/a0845aa1ff07
            return 'vendor'
          } else if (id.includes('react-redux') || id.includes('redux-immutable') || id.includes('react-is') || id.includes('react-syntax-highlighter') ||
                     id.includes('react-immutable-pure-component') || id.includes('react-copy-to-clipboard') || id.includes('react-dom') ||
                     id.includes('react-immutable-proptypes') || id.includes('react-debounce-input') || id.includes('react-inspector'))  {
            return 'react'
          } else if (id.includes('autolinker')) {
            return 'autolinker'
          } else if (id.includes('js-yaml')) {
            return 'js-yaml'
          } else if (id.includes('@babel+runtime-corejs3') || id.includes('@babel+runtime')) {
            return 'babel-runtime'
          } else if (id.includes('core-js')) {
            return 'core-js'
          } else if (id.includes('highlight')) {
            return 'highlight'
          } else if (id.includes('lodash')) {
            return 'lodash'
          } else {
            console.log(JSON.stringify(id))
          }
        },
      },
    }
  },
  //optimizeDeps: {
  //  exclude: swagPkg
  //},
  define: {
    _global: ({}), //https://stackoverflow.com/questions/75925195/how-to-fix-vite-build-syntax-error-unexpected-token-in-third-party-dependenc
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
    preact({
      babel: {
        plugins: ["macros"],
      },
    }),
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
