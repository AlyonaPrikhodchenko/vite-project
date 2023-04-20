// import {resolve} from 'path';
// import {defineConfig} from 'vite';
// import vitePugPlugin from 'vite-plugin-pug-transformer';
import pugPlugin from 'vite-plugin-pug';

// const root = resolve(__dirname, 'src');
// const outDir = resolve(__dirname, 'dist');

import vitePugPlugin from 'vite-plugin-pug-transformer';

const locals = {bundler: 'Vite'};
const root = resolve(__dirname, 'src');

export default {
  root,
  // outDir: './dist',
  // base: './src',
  publicDir: './src/assets',

  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        // nested: resolve(__dirname, 'nested/index.html'),
      },
    },

    plugins: [vitePugPlugin({pugLocals: locals}), pugPlugin()],
  }
}

// export default defineConfig(({ command, mode, ssrBuild }) => {
//   if (command === 'serve') {
//     return {
//       // dev specific config
//     }
//   } else {
//     // command === 'build'
//     return {
//       // build specific config
//     }
//   }
// })

// export default defineConfig({
//   build: {
//     outDir
//   //   // rollupOptions: {
//   //   //   input: {
//   //   //     main: './src/index.html',
//   //   //   }
//   //   // }
//   // },

//   server: {
//     open: true
//   },

//   plugins: [pugPlugin()]

// });

// export default defineConfig({
//   base: '/',
//   build: {
//     root,
//     outDir,
//     assetsDir: 'assets',

//     rollupOptions: {
//       input: {
//         main: resolve(root, 'index.html'),
//       },

//       output: {
//         // chunkFileNames: "js/[name]-[hash].js",
//         // entryFileNames: "js/[name]-[hash].js",
//         assetFileNames: ({name}) => {
//           if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
//             return "assets/images/[name]-[hash][extname]";
//           }

//           if (/\.css$/.test(name ?? "")) {
//             return "css/[name]-[hash][extname]";
//           }

//           if (/\.woff|2$/.test(name ?? "")) {
//             return "assets/fonts/[name]-[extname]";
//           }

//           return "assets/[name]-[hash][extname]";
//         },
//       },
//     }
//   },

//   server: {
//     open: true
//   },

//   css: {
//     devSourcemap: true,
//   },

//   plugins: [vitePugPlugin()]

// });

// const htmlPlugin = () => {
//   return {
//     name: 'html-transform',
//     transformIndexHtml(html) {
//       return html.replace(/\.pug/, `.html`)
//     }
//   }
// }

// export default {
//   plugins: [vitePugPlugin(htmlPlugin)],
// };

// `./${page.replace(/\.pug/, `.html`)}`

// const root = resolve(__dirname, 'src/pages');
// const outDir = resolve(__dirname, 'dist');

// export default defineConfig({
//   root,
//   outDir,

//   rollupOptions: {
//     input: {
//       main: resolve(root, 'index.html'),
//       about: resolve(root, 'main.html')
//     },
//   }
// });


// export default defineConfig({
//   plugins: [pug()],
//   build: {
//     rollupOptions: {
//       input: 'src/pages/index.pug',
//       output: {
//         file: 'dist/index.html',
//       },
//     },
//   },
// });

// module.exports = {
//   chainWebpack: (config) => {
//     config.module.rule('pug')
//       .test(/\.pug$/)
//       .use('pug-plain-loader')
//       .loader('pug-plain-loader')
//       .end();
//   }
// }

// let source = pug.renderFile('src/pages/main.pug', {doctype: 'html'});

// const options = {
//   doctype: source,
// }
// const locals = {name: "My Pug"}

// export default defineConfig({
//   plugins: [pugPlugin(options, locals)],
// })

// const locals = {bundler: 'Vite'};
// const root = resolve(__dirname, 'src');
// const outDir = resolve(__dirname, 'dist');


// export default defineConfig({
//   root,

//   plugins: [vitePugPlugin({pugLocals: locals})],

//   build: {
//     outDir,
//     emptyOutDir: true,
//     rollupOptions: {
//       input: {
//         main: resolve(root, 'index.html'),
//         about: resolve(root, 'pages', 'main.html')
//       }
//     }
//   },
// });

// import {defineConfig} from 'vite'
// import pug from 'vite-plugin-pug'

// export default defineConfig({
//   plugins: [
//     pug(
  // {
//   basedir: 'pages',
//   pretty: true,
//   outDir: 'public'
// }
)
//   ],

//   build: {
//     outDir,
//     // emptyOutDir: true,
//     rollupOptions: {
//       input: {
//         main: resolve(root, 'index.html'),
//         about: resolve(root, 'pages', 'main.html')
//       }
//     }
//   },
// })