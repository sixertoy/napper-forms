import autoprefixer from 'autoprefixer';
import builtinModules from 'builtin-modules';
import cssnano from 'cssnano';
import dotenv from 'dotenv';
import postcss from 'postcss';
import babel from 'rollup-plugin-babel';
import commonJS from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import sass from 'rollup-plugin-sass';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';

import { dependencies, peerDependencies } from './package.json';

dotenv.config();
const isDevelopment = process.env.NODE_ENV === 'development';

const plugins = (umd = false) => [
  sass({
    output: './lib/styles.css',
    processor: css =>
      postcss([autoprefixer, cssnano])
        .process(css, { from: './src/scss/styles.scss' })
        .then(result => result.css),
  }),
  resolve({
    browser: true,
    extensions: ['.js', '.jsx', '.json'],
  }),
  babel({ exclude: 'node_modules/**' }),
  commonJS({ include: /node_modules/ }),
  umd ? sizeSnapshot({ printInfo: isDevelopment }) : null,
  terser({ compress: !isDevelopment, mangle: !isDevelopment }),
];

const external = [
  ...builtinModules,
  ...Object.keys(dependencies || {}),
  ...Object.keys(peerDependencies || {}),
];

export default [
  {
    external,
    input: './src/index.js',
    output: {
      file: './dist/bundle.min.js',
      format: 'umd',
      name: 'napper-forms',
    },
    plugins: plugins(true),
  },
  {
    external,
    input: {
      fields: './src/fields/index.js',
      'lib/index': './src/index.js',
    },
    output: { dir: './lib', format: 'esm' },
    plugins: plugins(),
  },
];
