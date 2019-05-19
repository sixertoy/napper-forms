import babel from 'rollup-plugin-babel';
import commonJS from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
// import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';

import pkg from './package.json';

const INPUT_FILE = 'src/index.js';
const OUTPUR_CONFIG = {
  // exports: 'named',
  file: 'dist/bundle.min.js',
  format: 'cjs',
  // name: '@iziges/smarter-forms',
};

export default {
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  input: INPUT_FILE,
  output: { ...OUTPUR_CONFIG },
  plugins: [
    resolve(),
    commonJS({ include: 'node_modules/**' }),
    babel({ exclude: 'node_modules/**', runtimeHelpers: true }),
    // replace({ 'process.env.NODE_ENV': '"production"' }),
    uglify(),
  ],
};
