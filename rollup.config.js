import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify'
import ignore from 'rollup-plugin-ignore';
import bowerResolve from 'rollup-plugin-bower-resolve';

export default {
  entry: 'src/main-aot.js',
  dest: 'dist/build.js', // output a single application bundle
  sourceMap: false,
  format: 'amd',
  plugins: [
      nodeResolve({jsnext: true, module: true}),
      bowerResolve({
        jsnext: true,
        module: true,
        skip: ['esri']
      }),
      commonjs({
        include: 'node_modules/rxjs/**',
      }),
      ignore(['esri/*']),
      uglify()
  ]
}
