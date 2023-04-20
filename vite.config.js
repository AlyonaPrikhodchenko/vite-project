//Импорты пакетов

// import {resolve} from 'path';
// import {defineConfig} from 'vite';
// import vitePugPlugin from 'vite-plugin-pug-transformer';
import pugPlugin from 'vite-plugin-pug';

// Путь к корню проекта и к папке сборки

// const root = resolve(__dirname, 'src');
// const outDir = resolve(__dirname, 'dist');

// Хз что это
const locals = {bundler: 'Vite'};

export default {
  root,
  // outDir: './dist',
  // base: './src',

  publicDir: './src/assets',

  //Настройки при сборке
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        // nested: resolve(__dirname, 'nested/index.html'),
      },
    },

    // Плагины
    plugins: [vitePugPlugin({pugLocals: locals}), pugPlugin()],
  }
}

/* Это не пробовала, тут настройки в зависимости от условия можно прописывать (сервер запускаешь или билд)
export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === 'serve') {
    return {
      // dev specific config
    }
  } else {
    // command === 'build'
    return {
      // build specific config
    }
  }
})
*/

/* export default defineConfig({
  build: {
    outDir
    rollupOptions: {
      input: {
        main: './src/index.html',
      }
    }
  },

С этой настройкой сервер автоматически запускается
  server: {
    open: true
  },

  plugins: [pugPlugin()]

});

export default defineConfig({
  base: '/',
  build: {
    root,
    outDir,
    assetsDir: 'assets',

    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
      },
*/

/* Как я поняла, здесь прописывать можно что будет на выходе, сам код из чьей-то сборки на гитхабе
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: ({name}) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
            return "assets/images/[name]-[hash][extname]";
          }

          if (/\.css$/.test(name ?? "")) {
            return "css/[name]-[hash][extname]";
          }

          if (/\.woff|2$/.test(name ?? "")) {
            return "assets/fonts/[name]-[extname]";
          }

          return "assets/[name]-[hash][extname]";
        },
      },
    }
  },

  server: {
    open: true
  },

  css: {
    devSourcemap: true,
  },

  plugins: [vitePugPlugin()]

});
*/

/*transformIndexHtml - хук для компиляции паг в html, но я хз как применить

const htmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      return html.replace(/\.pug/, `.html`)
    }
  }
}
*/


/*
export default {
  plugins: [vitePugPlugin(htmlPlugin)],
};

`./${page.replace(/\.pug/, `.html`)}`

const root = resolve(__dirname, 'src/pages');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  root,
  outDir,

  rollupOptions: {
    input: {
      main: resolve(root, 'index.html'),
      about: resolve(root, 'main.html')
    },
  }
});
*/


/* export default defineConfig({
  plugins: [pug()],
  build: {
    rollupOptions: {
      input: 'src/pages/index.pug',
      output: {
        file: 'dist/index.html',
      },
    },
  },
});
*/


/* let source = pug.renderFile('src/pages/main.pug', {doctype: 'html'});

const options = {
  doctype: source,
}
const locals = {name: "My Pug"}

export default defineConfig({
  plugins: [pugPlugin(options, locals)],
})
*/


/* 

const locals = {bundler: 'Vite'};
const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  root,

  plugins: [vitePugPlugin({pugLocals: locals})],

  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'pages', 'main.html')
      }
    }
  },
});

*/



/*
export default defineConfig({
  plugins: [
    pug(
  {
  basedir: 'pages',
  pretty: true,
  outDir: 'public'
})
  ],

  build: {
    outDir,
    // emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'pages', 'main.html')
      }
    }
  },
})
*/