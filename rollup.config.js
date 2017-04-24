import rollup from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify'

export default {
  entry: 'src/main-aot.js',
  dest: 'dist/build.js', // output a single application bundle
  sourceMap: false,
  format: 'iife',
  plugins: [
    nodeResolve({
      jsnext: true,
      module: true,
      externals: []
    }),
    commonjs({
      include: 'node_modules/rxjs/**',
    }),
    uglify()
  ]
}
