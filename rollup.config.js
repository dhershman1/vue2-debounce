import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default [{
  input: './src/index.js',
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    terser()
  ],
  watch: {
    chokidar: true,
    include: 'src/**',
    clearScreen: false
  },
  output: {
    format: 'umd',
    name: 'vueDebounce',
    file: 'dist/vue2-debounce.min.js',
    exports: 'named'
  }
}, {
  input: './src/debounce.js',
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    terser()
  ],
  output: {
    format: 'umd',
    name: 'debounce',
    file: 'dist/debounce.min.js'
  }
}, {
  input: './src/debounce.js',
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    terser()
  ],
  output: {
    format: 'es',
    name: 'debounce',
    file: 'dist/debounce.min.mjs'
  }
}, {
  input: './src/index.js',
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    terser()
  ],
  watch: {
    chokidar: true,
    include: 'src/**',
    clearScreen: false
  },
  output: {
    format: 'es',
    name: 'vueDebounce',
    file: 'dist/vue2-debounce.min.mjs',
    exports: 'named'
  }
}]
