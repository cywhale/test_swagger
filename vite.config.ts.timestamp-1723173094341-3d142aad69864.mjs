// vite.config.ts
import { defineConfig } from "file:///home/odbadmin/proj/test_swagger/node_modules/.pnpm/vite@5.4.0/node_modules/vite/dist/node/index.js";
import { nodePolyfills } from "file:///home/odbadmin/proj/test_swagger/node_modules/.pnpm/vite-plugin-node-polyfills@0.22.0_vite@5.4.0/node_modules/vite-plugin-node-polyfills/dist/index.js";
import { resolve } from "path";
import preact from "file:///home/odbadmin/proj/test_swagger/node_modules/.pnpm/@preact+preset-vite@2.9.0_@babel+core@7.24.8_preact@10.23.1_vite@5.4.0/node_modules/@preact/preset-vite/dist/esm/index.mjs";
import replace from "file:///home/odbadmin/proj/test_swagger/node_modules/.pnpm/@rollup+plugin-replace@5.0.5/node_modules/@rollup/plugin-replace/dist/es/index.js";
import { nodeResolve } from "file:///home/odbadmin/proj/test_swagger/node_modules/.pnpm/@rollup+plugin-node-resolve@15.2.3/node_modules/@rollup/plugin-node-resolve/dist/es/index.js";

// config/splitvendorchunk.js
function staticImportedByEntry(id, getModuleInfo, cache, importStack = []) {
  if (cache.has(id)) {
    return !!cache.get(id);
  }
  if (importStack.includes(id)) {
    cache.set(id, false);
    return false;
  }
  const mod = getModuleInfo(id);
  if (!mod) {
    cache.set(id, false);
    return false;
  }
  if (mod.isEntry) {
    cache.set(id, true);
    return true;
  }
  const someImporterIs = mod.importers.some(
    (importer) => staticImportedByEntry(
      importer,
      getModuleInfo,
      cache,
      importStack.concat(id)
    )
  );
  cache.set(id, someImporterIs);
  return someImporterIs;
}

// vite.config.ts
var __vite_injected_original_dirname = "/home/odbadmin/proj/test_swagger";
var base = "swag";
var isProd = process.env.NODE_ENV === "production";
var global_define = isProd ? {
  //'process.env': process.env,
  //global: {},
  "process": JSON.stringify({
    env: process.env,
    platform: "browser"
  })
} : {
  global: {},
  "process.env": process.env
  //'process': JSON.stringify({
  //  env: process.env,
  //  platform: 'browser',
  //}),
};
var vite_config_default = defineConfig({
  base: `/${base}/`,
  mode: "development",
  build: {
    sourcemap: true,
    manifest: true,
    minify: false,
    minifyIdentifiers: false,
    minifySyntax: false,
    outDir: resolve(__vite_injected_original_dirname, `./dist/${base}/`),
    target: "esnext",
    emptyOutDir: true,
    commonjsOptions: {
      transformMixedEsModules: true
    },
    rollupOptions: {
      input: {
        main: resolve(__vite_injected_original_dirname, "index.html")
      },
      plugins: [
        nodeResolve({
          moduleDirectories: ["node_modules"]
        })
        //globals(),
        //builtins(),
      ],
      //external: swagPkg,
      treeshake: {
        //preset: 'smallest',
        propertyReadSideEffects: false
      },
      output: {
        format: "es",
        //'iife',
        manualChunks(id, { getModuleInfo }) {
          const cache = /* @__PURE__ */ new Map();
          const cssLangs = `\\.(css|less|sass|scss|styl|stylus|pcss|postcss)($|\\?)`;
          const cssLangRE = new RegExp(cssLangs);
          const isCSSRequest = (request) => cssLangRE.test(request);
          if (id.includes("immutable")) {
            return "immutable";
          } else if (id.includes("history")) {
            return "history";
          } else if (id.includes("url-parse")) {
            return "url-parse";
          } else if (id.includes("zenscroll")) {
            return "zenscroll";
          } else if (id.includes("reselect")) {
            return "reselect";
          } else if (id.includes("randexp")) {
            return "randexp";
          } else if (id.includes("drange")) {
            return "drange";
          } else if (id.includes("base64-js")) {
            return "base64-js";
          } else if (id.includes("css.escape")) {
            return "css-escape";
          } else if (id.includes("serialize-error")) {
            return "serialize-error";
          } else if (id.includes("prop-types")) {
            return "prop-types";
          } else if (id.includes("ieee754")) {
            return "ieee754";
          } else if (id.includes("dompurify")) {
            return "dompurify";
          } else if (id.includes("remarkable")) {
            return "remarkable";
          } else if (id.includes("swagger-client") || id.includes("swagger-api")) {
            return "swagger-client";
          } else if (id.includes("swaggeri-ui-react")) {
            return "swagger-ui-react";
          } else if (id.includes("node_modules") && !isCSSRequest(id) && staticImportedByEntry(id, getModuleInfo, cache)) {
            return "vendor";
          } else if (id.includes("react-redux") || id.includes("redux-immutable") || id.includes("react-is") || id.includes("react-syntax-highlighter") || id.includes("react-immutable-pure-component") || id.includes("react-copy-to-clipboard") || id.includes("react-dom") || id.includes("react-immutable-proptypes") || id.includes("react-debounce-input") || id.includes("react-inspector")) {
            return "react";
          } else if (id.includes("autolinker")) {
            return "autolinker";
          } else if (id.includes("js-yaml")) {
            return "js-yaml";
          } else if (id.includes("@babel+runtime-corejs3") || id.includes("@babel+runtime")) {
            return "babel-runtime";
          } else if (id.includes("core-js")) {
            return "core-js";
          } else if (id.includes("highlight")) {
            return "highlight";
          } else if (id.includes("lodash")) {
            return "lodash";
          } else {
            console.log(JSON.stringify(id));
          }
        }
      }
    }
  },
  //optimizeDeps: {
  //  exclude: swagPkg
  //},
  define: {
    ...global_define
    //_global: ({}), //https://stackoverflow.com/questions/75925195/how-to-fix-vite-build-syntax-error-unexpected-token-in-third-party-dependenc
    //'process.env': process.env,
  },
  resolve: {
    extensions: [".js", ".jsx", "ts", "tsx"],
    mainFields: ["module"],
    alias: {
      "@": resolve(__vite_injected_original_dirname, "src"),
      //fs: require.resolve('rollup-plugin-node-builtins'),
      "fs": "memfs",
      //"swagger-ui-react/react": "react",
      //"swagger-ui-react/react-dom": "react-dom",
      "react": "preact/compat",
      "react-dom": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react/jsx-runtime": "preact/jsx-runtime"
      //"swagger-ui-react": "/home/odbadmin/backup/js/swagger-ui/dist"
    }
  },
  plugins: [
    preact({
      babel: {
        plugins: ["macros"]
      }
    }),
    nodePolyfills({
      // To add only specific polyfills, add them here. If no option is passed, adds all polyfills
      include: ["path"],
      // To exclude specific polyfills, add them to this list. Note: if include is provided, this has no effect
      exclude: [
        "http"
        // Excludes the polyfill for `http` and `node:http`.
      ],
      // Whether to polyfill specific globals.
      globals: {
        Buffer: true,
        // can also be 'build', 'dev', or false
        global: true,
        process: true
      },
      // Override the default polyfills for specific modules.
      overrides: {
        // Since `fs` is not supported in browsers, we can use the `memfs` package to polyfill it.
        fs: "memfs"
      },
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true
    }),
    //builtinsPlugin,
    //globalsPlugin,
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
      __DATE__: (/* @__PURE__ */ new Date()).toISOString(),
      __ROUTE__: base
    })
  ],
  server: {
    host: "0.0.0.0",
    port: 8010,
    strictPort: true,
    hmr: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiY29uZmlnL3NwbGl0dmVuZG9yY2h1bmsuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9vZGJhZG1pbi9wcm9qL3Rlc3Rfc3dhZ2dlclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvb2RiYWRtaW4vcHJvai90ZXN0X3N3YWdnZXIvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvb2RiYWRtaW4vcHJvai90ZXN0X3N3YWdnZXIvdml0ZS5jb25maWcudHNcIjsvL2ltcG9ydCB7IGNyZWF0ZVJlcXVpcmUgfSBmcm9tICdub2RlOm1vZHVsZSdcbi8vY29uc3QgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUoIGltcG9ydC5tZXRhLnVybCApXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJyAvL1BsdWdpblxuLy9pbXBvcnQgYnVpbHRpbnMgZnJvbSAncm9sbHVwLXBsdWdpbi1ub2RlLWJ1aWx0aW5zJ1xuLy9pbXBvcnQgZ2xvYmFscyBmcm9tICdyb2xsdXAtcGx1Z2luLW5vZGUtZ2xvYmFscycgLy9jYXVzZSB2aXRlIGJ1aWxkIGNyYXNoXG5pbXBvcnQgeyBub2RlUG9seWZpbGxzIH0gZnJvbSAndml0ZS1wbHVnaW4tbm9kZS1wb2x5ZmlsbHMnXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCBwcmVhY3QgZnJvbSAnQHByZWFjdC9wcmVzZXQtdml0ZSdcbi8vaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHJlcGxhY2UgZnJvbSAnQHJvbGx1cC9wbHVnaW4tcmVwbGFjZSdcbi8vaW1wb3J0IGV4dGVybmFsaXplIGZyb20gXCJ2aXRlLXBsdWdpbi1leHRlcm5hbGl6ZS1kZXBlbmRlbmNpZXNcIlxuaW1wb3J0IHsgbm9kZVJlc29sdmUgfSBmcm9tICdAcm9sbHVwL3BsdWdpbi1ub2RlLXJlc29sdmUnXG5pbXBvcnQgeyBTcGxpdFZlbmRvckNodW5rQ2FjaGUsIHN0YXRpY0ltcG9ydGVkQnlFbnRyeSB9IGZyb20gJy4vY29uZmlnL3NwbGl0dmVuZG9yY2h1bmsuanMnXG4vL2ltcG9ydCBmcyBmcm9tICdmcydcblxuY29uc3QgYmFzZSA9ICdzd2FnJ1xuY29uc3QgaXNQcm9kID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXG4vL2NvbnN0IHN3YWdQa2cgPSBbJ3JlYWN0LWltbXV0YWJsZS1wdXJlLWNvbXBvbmVudCcsICdyZWFjdC1kZWJvdW5jZS1pbnB1dCcsICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCcsXG4vLyAgICAgICAgICAgICAgICAgJ3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcicsICdyZWFjdC1yZWR1eCddXG4vKlxuZnVuY3Rpb24gcmVhY3RSZXNvbHZlckZvclN3YWdnZXJVSSgpOiBQbHVnaW4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdyZWFjdC1yZXNvbHZlci1mb3Itc3dhZ2dlci11aScsXG4gICAgcmVzb2x2ZUlkKHNvdXJjZSwgaW1wb3J0ZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVGVzdCBtb2R1bGUgdG8gdXNlIHJlYWN0XCIsIGltcG9ydGVyKVxuICAgICAgaWYgKGltcG9ydGVyICYmXG4gICAgICAgICAgKGltcG9ydGVyLmluY2x1ZGVzKCdub2RlX21vZHVsZXMvc3dhZ2dlci11aScpIHx8XG4gICAgICAgICAgIGltcG9ydGVyLmluY2x1ZGVzKCdyZWFjdC1pbW11dGFibGUtcHVyZS1jb21wb25lbnQnKSB8fFxuICAgICAgICAgICBpbXBvcnRlci5pbmNsdWRlcygncmVhY3QtZGVib3VuY2UtaW5wdXQnKSB8fFxuICAgICAgICAgICBpbXBvcnRlci5pbmNsdWRlcygncmVhY3QtY29weS10by1jbGlwYm9hcmQnKSkgJiZcbiAgICAgICAgICAoc291cmNlID09PSAncmVhY3QnIHx8IHNvdXJjZSA9PT0gJ3JlYWN0LWRvbScpKSB7XG4gICAgICAgIHJldHVybiB7IGlkOiBzb3VyY2UsIGV4dGVybmFsOiAnYWJzb2x1dGUnIH07XG4gICAgICB9XG4gICAgfSxcbiAgfVxufVxuKi9cbi8qXG5jb25zdCBidWlsdGluc1BsdWdpbiA9IHtcbiAgLi4uYnVpbHRpbnMoeyBjcnlwdG86IHRydWUgfSksXG4gIG5hbWU6IFwiYnVpbHRpbnNcIixcbn1cbmNvbnN0IGdsb2JhbHNQbHVnaW4gPSB7XG4gIC4uLmdsb2JhbHMoKSxcbiAgbmFtZTogXCJnbG9iYWxzXCIsXG59XG4qL1xudmFyIGdsb2JhbF9kZWZpbmUgPSBpc1Byb2Q/IHtcbiAgICAgIC8vJ3Byb2Nlc3MuZW52JzogcHJvY2Vzcy5lbnYsXG4gICAgICAvL2dsb2JhbDoge30sXG4gICAgICAncHJvY2Vzcyc6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZW52OiBwcm9jZXNzLmVudixcbiAgICAgICAgcGxhdGZvcm06ICdicm93c2VyJyxcbiAgICAgIH0pLFxuICAgIH06IHtcbiAgICAgIGdsb2JhbDoge30sXG4gICAgICAncHJvY2Vzcy5lbnYnOiBwcm9jZXNzLmVudixcbiAgICAgIC8vJ3Byb2Nlc3MnOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAvLyAgZW52OiBwcm9jZXNzLmVudixcbiAgICAgIC8vICBwbGF0Zm9ybTogJ2Jyb3dzZXInLFxuICAgICAgLy99KSxcbiAgICB9XG5cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYmFzZTogYC8ke2Jhc2V9L2AsXG4gIG1vZGU6IFwiZGV2ZWxvcG1lbnRcIixcbiAgYnVpbGQ6IHtcbiAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgbWFuaWZlc3Q6IHRydWUsXG4gICAgbWluaWZ5OiBmYWxzZSxcbiAgICBtaW5pZnlJZGVudGlmaWVyczogZmFsc2UsXG4gICAgbWluaWZ5U3ludGF4OiBmYWxzZSxcbiAgICBvdXREaXI6IHJlc29sdmUoX19kaXJuYW1lLCBgLi9kaXN0LyR7YmFzZX0vYCksXG4gICAgdGFyZ2V0OiAnZXNuZXh0JyxcbiAgICBlbXB0eU91dERpcjogdHJ1ZSxcbiAgICBjb21tb25qc09wdGlvbnM6IHtcbiAgICAgIHRyYW5zZm9ybU1peGVkRXNNb2R1bGVzOiB0cnVlLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgbWFpbjogcmVzb2x2ZShfX2Rpcm5hbWUsICdpbmRleC5odG1sJyksXG4gICAgICB9LFxuICAgICAgcGx1Z2luczogW1xuICAgICAgICBub2RlUmVzb2x2ZSh7XG4gICAgICAgICAgbW9kdWxlRGlyZWN0b3JpZXM6IFsnbm9kZV9tb2R1bGVzJ11cbiAgICAgICAgfSksXG4gICAgICAgIC8vZ2xvYmFscygpLFxuICAgICAgICAvL2J1aWx0aW5zKCksXG4gICAgICBdLFxuICAgICAgLy9leHRlcm5hbDogc3dhZ1BrZyxcbiAgICAgIHRyZWVzaGFrZToge1xuICAgICAgICAvL3ByZXNldDogJ3NtYWxsZXN0JyxcbiAgICAgICAgcHJvcGVydHlSZWFkU2lkZUVmZmVjdHM6IGZhbHNlXG4gICAgICB9LFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGZvcm1hdDogJ2VzJywgLy8naWlmZScsXG4gICAgICAgIG1hbnVhbENodW5rcyAoaWQ6IGFueSwgeyBnZXRNb2R1bGVJbmZvIH0pIHtcbiAgICAgICAgICBjb25zdCBjYWNoZSA9IG5ldyBNYXAoKVxuICAgICAgICAgIGNvbnN0IGNzc0xhbmdzID0gYFxcXFwuKGNzc3xsZXNzfHNhc3N8c2Nzc3xzdHlsfHN0eWx1c3xwY3NzfHBvc3Rjc3MpKCR8XFxcXD8pYFxuICAgICAgICAgIGNvbnN0IGNzc0xhbmdSRSA9IG5ldyBSZWdFeHAoY3NzTGFuZ3MpXG4gICAgICAgICAgY29uc3QgaXNDU1NSZXF1ZXN0ID0gKHJlcXVlc3Q6IHN0cmluZyk6IGJvb2xlYW4gPT4gY3NzTGFuZ1JFLnRlc3QocmVxdWVzdClcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ2ltbXV0YWJsZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2ltbXV0YWJsZSdcbiAgICAgICAgICB9IGVsc2UgaWYgKGlkLmluY2x1ZGVzKCdoaXN0b3J5JykpIHtcbiAgICAgICAgICAgIHJldHVybiAnaGlzdG9yeSdcbiAgICAgICAgICB9IGVsc2UgaWYgKGlkLmluY2x1ZGVzKCd1cmwtcGFyc2UnKSkge1xuICAgICAgICAgICAgcmV0dXJuICd1cmwtcGFyc2UnXG4gICAgICAgICAgLy99IGVsc2UgaWYgKGlkLmluY2x1ZGVzKCdyZWR1eCcpKSB7XG4gICAgICAgICAgLy8gIHJldHVybiAncmVkdXgnIC8vY2FzdWUgUmVmZXJlbmNlRXJyb3I6IGNhbid0IGFjY2VzcyBsZXhpY2FsIGRlY2xhcmF0aW9uIFwicmVxdWlyZSQkMFwiIGJlZm9yZSBpbml0aWFsaXphdGlvblxuICAgICAgICAgIH0gZWxzZSBpZiAoaWQuaW5jbHVkZXMoJ3plbnNjcm9sbCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3plbnNjcm9sbCdcbiAgICAgICAgICB9IGVsc2UgaWYgKGlkLmluY2x1ZGVzKCdyZXNlbGVjdCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3Jlc2VsZWN0J1xuICAgICAgICAgIH0gZWxzZSBpZiAoaWQuaW5jbHVkZXMoJ3JhbmRleHAnKSkge1xuICAgICAgICAgICAgcmV0dXJuICdyYW5kZXhwJ1xuICAgICAgICAgIH0gZWxzZSBpZiAoaWQuaW5jbHVkZXMoJ2RyYW5nZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2RyYW5nZSdcbiAgICAgICAgICB9IGVsc2UgaWYgKGlkLmluY2x1ZGVzKCdiYXNlNjQtanMnKSkge1xuICAgICAgICAgICAgcmV0dXJuICdiYXNlNjQtanMnXG4gICAgICAgICAgfSBlbHNlIGlmIChpZC5pbmNsdWRlcygnY3NzLmVzY2FwZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Nzcy1lc2NhcGUnXG4gICAgICAgICAgfSBlbHNlIGlmIChpZC5pbmNsdWRlcygnc2VyaWFsaXplLWVycm9yJykpIHtcbiAgICAgICAgICAgIHJldHVybiAnc2VyaWFsaXplLWVycm9yJ1xuICAgICAgICAgIH0gZWxzZSBpZiAoaWQuaW5jbHVkZXMoJ3Byb3AtdHlwZXMnKSkge1xuICAgICAgICAgICAgcmV0dXJuICdwcm9wLXR5cGVzJ1xuICAgICAgICAgIH0gZWxzZSBpZiAoaWQuaW5jbHVkZXMoJ2llZWU3NTQnKSkge1xuICAgICAgICAgICAgcmV0dXJuICdpZWVlNzU0J1xuICAgICAgICAgIH0gZWxzZSBpZiAoaWQuaW5jbHVkZXMoJ2RvbXB1cmlmeScpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2RvbXB1cmlmeSdcbiAgICAgICAgICB9IGVsc2UgaWYgKGlkLmluY2x1ZGVzKCdyZW1hcmthYmxlJykpIHtcbiAgICAgICAgICAgIHJldHVybiAncmVtYXJrYWJsZSdcbiAgICAgICAgICB9IGVsc2UgaWYgKGlkLmluY2x1ZGVzKCdzd2FnZ2VyLWNsaWVudCcpIHx8IGlkLmluY2x1ZGVzKCdzd2FnZ2VyLWFwaScpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3N3YWdnZXItY2xpZW50J1xuICAgICAgICAgIH0gZWxzZSBpZiAoaWQuaW5jbHVkZXMoJ3N3YWdnZXJpLXVpLXJlYWN0JykpIHtcbiAgICAgICAgICAgIHJldHVybiAnc3dhZ2dlci11aS1yZWFjdCdcbiAgICAgICAgICB9IGVsc2UgaWYgKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKSAmJiAhaXNDU1NSZXF1ZXN0KGlkKSAmJiBzdGF0aWNJbXBvcnRlZEJ5RW50cnkoaWQsIGdldE1vZHVsZUluZm8sIGNhY2hlKSkge1xuICAgICAgICAgICAgLy9zZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS92aXRlanMvdml0ZS9ibG9iL21haW4vcGFja2FnZXMvdml0ZS9zcmMvbm9kZS9wbHVnaW5zL3NwbGl0VmVuZG9yQ2h1bmsudHNcbiAgICAgICAgICAgIC8vYWxzbzogaHR0cHM6Ly93d3cuamlhbnNodS5jb20vcC9hMDg0NWFhMWZmMDdcbiAgICAgICAgICAgIHJldHVybiAndmVuZG9yJ1xuICAgICAgICAgIH0gZWxzZSBpZiAoaWQuaW5jbHVkZXMoJ3JlYWN0LXJlZHV4JykgfHwgaWQuaW5jbHVkZXMoJ3JlZHV4LWltbXV0YWJsZScpIHx8IGlkLmluY2x1ZGVzKCdyZWFjdC1pcycpIHx8IGlkLmluY2x1ZGVzKCdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXInKSB8fFxuICAgICAgICAgICAgICAgICAgICAgaWQuaW5jbHVkZXMoJ3JlYWN0LWltbXV0YWJsZS1wdXJlLWNvbXBvbmVudCcpIHx8IGlkLmluY2x1ZGVzKCdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCcpIHx8IGlkLmluY2x1ZGVzKCdyZWFjdC1kb20nKSB8fFxuICAgICAgICAgICAgICAgICAgICAgaWQuaW5jbHVkZXMoJ3JlYWN0LWltbXV0YWJsZS1wcm9wdHlwZXMnKSB8fCBpZC5pbmNsdWRlcygncmVhY3QtZGVib3VuY2UtaW5wdXQnKSB8fCBpZC5pbmNsdWRlcygncmVhY3QtaW5zcGVjdG9yJykpICB7XG4gICAgICAgICAgICByZXR1cm4gJ3JlYWN0J1xuICAgICAgICAgIH0gZWxzZSBpZiAoaWQuaW5jbHVkZXMoJ2F1dG9saW5rZXInKSkge1xuICAgICAgICAgICAgcmV0dXJuICdhdXRvbGlua2VyJ1xuICAgICAgICAgIH0gZWxzZSBpZiAoaWQuaW5jbHVkZXMoJ2pzLXlhbWwnKSkge1xuICAgICAgICAgICAgcmV0dXJuICdqcy15YW1sJ1xuICAgICAgICAgIH0gZWxzZSBpZiAoaWQuaW5jbHVkZXMoJ0BiYWJlbCtydW50aW1lLWNvcmVqczMnKSB8fCBpZC5pbmNsdWRlcygnQGJhYmVsK3J1bnRpbWUnKSkge1xuICAgICAgICAgICAgcmV0dXJuICdiYWJlbC1ydW50aW1lJ1xuICAgICAgICAgIH0gZWxzZSBpZiAoaWQuaW5jbHVkZXMoJ2NvcmUtanMnKSkge1xuICAgICAgICAgICAgcmV0dXJuICdjb3JlLWpzJ1xuICAgICAgICAgIH0gZWxzZSBpZiAoaWQuaW5jbHVkZXMoJ2hpZ2hsaWdodCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2hpZ2hsaWdodCdcbiAgICAgICAgICB9IGVsc2UgaWYgKGlkLmluY2x1ZGVzKCdsb2Rhc2gnKSkge1xuICAgICAgICAgICAgcmV0dXJuICdsb2Rhc2gnXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGlkKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgLy9vcHRpbWl6ZURlcHM6IHtcbiAgLy8gIGV4Y2x1ZGU6IHN3YWdQa2dcbiAgLy99LFxuICBkZWZpbmU6IHsgLi4uZ2xvYmFsX2RlZmluZSxcbiAgICAvL19nbG9iYWw6ICh7fSksIC8vaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzU5MjUxOTUvaG93LXRvLWZpeC12aXRlLWJ1aWxkLXN5bnRheC1lcnJvci11bmV4cGVjdGVkLXRva2VuLWluLXRoaXJkLXBhcnR5LWRlcGVuZGVuY1xuICAgIC8vJ3Byb2Nlc3MuZW52JzogcHJvY2Vzcy5lbnYsXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBleHRlbnNpb25zOiBbJy5qcycsICcuanN4JywgJ3RzJywgJ3RzeCddLFxuICAgIG1haW5GaWVsZHM6IFsnbW9kdWxlJ10sXG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiksXG4gICAgICAvL2ZzOiByZXF1aXJlLnJlc29sdmUoJ3JvbGx1cC1wbHVnaW4tbm9kZS1idWlsdGlucycpLFxuICAgICAgJ2ZzJzogJ21lbWZzJyxcbiAgICAgIC8vXCJzd2FnZ2VyLXVpLXJlYWN0L3JlYWN0XCI6IFwicmVhY3RcIixcbiAgICAgIC8vXCJzd2FnZ2VyLXVpLXJlYWN0L3JlYWN0LWRvbVwiOiBcInJlYWN0LWRvbVwiLFxuICAgICAgXCJyZWFjdFwiOiBcInByZWFjdC9jb21wYXRcIixcbiAgICAgIFwicmVhY3QtZG9tXCI6IFwicHJlYWN0L2NvbXBhdFwiLFxuICAgICAgXCJyZWFjdC1kb20vdGVzdC11dGlsc1wiOiBcInByZWFjdC90ZXN0LXV0aWxzXCIsXG4gICAgICBcInJlYWN0L2pzeC1ydW50aW1lXCI6IFwicHJlYWN0L2pzeC1ydW50aW1lXCIsXG4gICAgICAvL1wic3dhZ2dlci11aS1yZWFjdFwiOiBcIi9ob21lL29kYmFkbWluL2JhY2t1cC9qcy9zd2FnZ2VyLXVpL2Rpc3RcIlxuICAgIH1cbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHByZWFjdCh7XG4gICAgICBiYWJlbDoge1xuICAgICAgICBwbHVnaW5zOiBbXCJtYWNyb3NcIl0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIG5vZGVQb2x5ZmlsbHMoe1xuICAgICAgLy8gVG8gYWRkIG9ubHkgc3BlY2lmaWMgcG9seWZpbGxzLCBhZGQgdGhlbSBoZXJlLiBJZiBubyBvcHRpb24gaXMgcGFzc2VkLCBhZGRzIGFsbCBwb2x5ZmlsbHNcbiAgICAgIGluY2x1ZGU6IFsncGF0aCddLFxuICAgICAgLy8gVG8gZXhjbHVkZSBzcGVjaWZpYyBwb2x5ZmlsbHMsIGFkZCB0aGVtIHRvIHRoaXMgbGlzdC4gTm90ZTogaWYgaW5jbHVkZSBpcyBwcm92aWRlZCwgdGhpcyBoYXMgbm8gZWZmZWN0XG4gICAgICBleGNsdWRlOiBbXG4gICAgICAgICdodHRwJywgLy8gRXhjbHVkZXMgdGhlIHBvbHlmaWxsIGZvciBgaHR0cGAgYW5kIGBub2RlOmh0dHBgLlxuICAgICAgXSxcbiAgICAgIC8vIFdoZXRoZXIgdG8gcG9seWZpbGwgc3BlY2lmaWMgZ2xvYmFscy5cbiAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgQnVmZmVyOiB0cnVlLCAvLyBjYW4gYWxzbyBiZSAnYnVpbGQnLCAnZGV2Jywgb3IgZmFsc2VcbiAgICAgICAgZ2xvYmFsOiB0cnVlLFxuICAgICAgICBwcm9jZXNzOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIC8vIE92ZXJyaWRlIHRoZSBkZWZhdWx0IHBvbHlmaWxscyBmb3Igc3BlY2lmaWMgbW9kdWxlcy5cbiAgICAgIG92ZXJyaWRlczoge1xuICAgICAgICAvLyBTaW5jZSBgZnNgIGlzIG5vdCBzdXBwb3J0ZWQgaW4gYnJvd3NlcnMsIHdlIGNhbiB1c2UgdGhlIGBtZW1mc2AgcGFja2FnZSB0byBwb2x5ZmlsbCBpdC5cbiAgICAgICAgZnM6ICdtZW1mcycsXG4gICAgICB9LFxuICAgICAgLy8gV2hldGhlciB0byBwb2x5ZmlsbCBgbm9kZTpgIHByb3RvY29sIGltcG9ydHMuXG4gICAgICBwcm90b2NvbEltcG9ydHM6IHRydWUsXG4gICAgfSksICAgIC8vYnVpbHRpbnNQbHVnaW4sXG4gICAgLy9nbG9iYWxzUGx1Z2luLFxuICAgIC8vcmVhY3RSZXNvbHZlckZvclN3YWdnZXJVSSgpLFxuICAgIC8qIHJlYWN0KHtcbiAgICAgIGJhYmVsOiB7XG4gICAgICAgIHBsdWdpbnM6IFsnQGJhYmVsL3BsdWdpbi10cmFuc2Zvcm0tcmVhY3QtanN4J10sXG4gICAgICB9LFxuICAgIH0pLCAqL1xuICAgIC8vZXh0ZXJuYWxpemUoeyBleHRlcm5hbHM6IHN3YWdQa2cgfSksXG4gICAgLyogQWRkIHRoZSBmb2xsb3dpbmcgVml0ZSBwbHVnaW4gdG8gaGFuZGxlIE1JTUUgdHlwZXNcbiAgICB7XG4gICAgICBuYW1lOiAnZml4LW1pbWUtdHlwZXMnLFxuICAgICAgZW5mb3JjZTogJ3ByZScsXG4gICAgICB0cmFuc2Zvcm0oY29kZSwgaWQpIHtcbiAgICAgICAgaWYgKGlkLmVuZHNXaXRoKCcuanMnKSB8fCBpZC5lbmRzV2l0aCgnLmpzeCcpKSB7XG4gICAgICAgICAgcmV0dXJuIGNvZGUucmVwbGFjZSgvaW1wb3J0Lm1ldGEudXJsL2csICdcIlwiJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSwqL1xuICAgIHJlcGxhY2Uoe1xuICAgICAgX19EQVRFX186IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIF9fUk9VVEVfXzogYmFzZSxcbiAgICB9KSxcbiAgXSxcbiAgc2VydmVyOntcbiAgICBob3N0OiBcIjAuMC4wLjBcIixcbiAgICBwb3J0OiA4MDEwLFxuICAgIHN0cmljdFBvcnQ6IHRydWUsXG4gICAgaG1yOiBmYWxzZSxcbiAgfVxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvb2RiYWRtaW4vcHJvai90ZXN0X3N3YWdnZXIvY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9vZGJhZG1pbi9wcm9qL3Rlc3Rfc3dhZ2dlci9jb25maWcvc3BsaXR2ZW5kb3JjaHVuay5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9vZGJhZG1pbi9wcm9qL3Rlc3Rfc3dhZ2dlci9jb25maWcvc3BsaXR2ZW5kb3JjaHVuay5qc1wiOy8vaHR0cHM6Ly9zZWdtZW50ZmF1bHQuY29tL2EvMTE5MDAwMDA0MTkxOTQ2OFxuZXhwb3J0IGNsYXNzIFNwbGl0VmVuZG9yQ2h1bmtDYWNoZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FjaGUgPSBuZXcgTWFwKCk7XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5jYWNoZSA9IG5ldyBNYXAoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGljSW1wb3J0ZWRCeUVudHJ5KFxuICBpZCxcbiAgZ2V0TW9kdWxlSW5mbyxcbiAgY2FjaGUsXG4gIGltcG9ydFN0YWNrID0gW11cbikge1xuICBpZiAoY2FjaGUuaGFzKGlkKSkge1xuICAgIHJldHVybiAhIWNhY2hlLmdldChpZCk7XG4gIH1cbiAgaWYgKGltcG9ydFN0YWNrLmluY2x1ZGVzKGlkKSkge1xuICAgIGNhY2hlLnNldChpZCwgZmFsc2UpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBtb2QgPSBnZXRNb2R1bGVJbmZvKGlkKTtcbiAgaWYgKCFtb2QpIHtcbiAgICBjYWNoZS5zZXQoaWQsIGZhbHNlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKG1vZC5pc0VudHJ5KSB7XG4gICAgY2FjaGUuc2V0KGlkLCB0cnVlKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBzb21lSW1wb3J0ZXJJcyA9IG1vZC5pbXBvcnRlcnMuc29tZSgoaW1wb3J0ZXIpID0+XG4gICAgc3RhdGljSW1wb3J0ZWRCeUVudHJ5KFxuICAgICAgaW1wb3J0ZXIsXG4gICAgICBnZXRNb2R1bGVJbmZvLFxuICAgICAgY2FjaGUsXG4gICAgICBpbXBvcnRTdGFjay5jb25jYXQoaWQpXG4gICAgKVxuICApO1xuICBjYWNoZS5zZXQoaWQsIHNvbWVJbXBvcnRlcklzKTtcbiAgcmV0dXJuIHNvbWVJbXBvcnRlcklzO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLFNBQVMsb0JBQW9CO0FBRzdCLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsZUFBZTtBQUN4QixPQUFPLFlBQVk7QUFFbkIsT0FBTyxhQUFhO0FBRXBCLFNBQVMsbUJBQW1COzs7QUNEckIsU0FBUyxzQkFDZCxJQUNBLGVBQ0EsT0FDQSxjQUFjLENBQUMsR0FDZjtBQUNBLE1BQUksTUFBTSxJQUFJLEVBQUUsR0FBRztBQUNqQixXQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksRUFBRTtBQUFBLEVBQ3ZCO0FBQ0EsTUFBSSxZQUFZLFNBQVMsRUFBRSxHQUFHO0FBQzVCLFVBQU0sSUFBSSxJQUFJLEtBQUs7QUFDbkIsV0FBTztBQUFBLEVBQ1Q7QUFDQSxRQUFNLE1BQU0sY0FBYyxFQUFFO0FBQzVCLE1BQUksQ0FBQyxLQUFLO0FBQ1IsVUFBTSxJQUFJLElBQUksS0FBSztBQUNuQixXQUFPO0FBQUEsRUFDVDtBQUNBLE1BQUksSUFBSSxTQUFTO0FBQ2YsVUFBTSxJQUFJLElBQUks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
