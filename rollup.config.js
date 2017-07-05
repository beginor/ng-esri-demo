import rollup from 'rollup'
import alias from 'rollup-plugin-alias';
import css from 'rollup-plugin-css-only';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

import * as path from 'path';

export default {
    entry: 'src/main-aot.js',
    dest: 'dist/build.js', // output a single application bundle
    sourceMap: false,
    format: 'iife',
    external: [],
    plugins: [
        css({ output: 'dist/build.css' }),
        alias({
            //'jszip': path.join(__dirname, './node_modules/jszip/dist/jszip.min.js')
        }),
        nodeResolve({
            jsnext: true,
            module: true
        }),
        commonjs({
            include: ['node_modules/rxjs/**'],
        }),
        uglify()
    ]
}
