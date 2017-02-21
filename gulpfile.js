'use strict';

let gulp = require('gulp'),
    proxy = require('http-proxy-middleware'),
    connect = require('gulp-connect');

let root = './',
    js = root + 'src/**/*.js',
    css = root + 'src/**/*.css',
    html = root + 'src/**/*.html',
    port = 3000;

gulp.task('js', function () {
    gulp.src(js).pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src(html).pipe(connect.reload());
});

gulp.task('css', function () {
    gulp.src(css).pipe(connect.reload());
});

gulp.task('serve', function () {
    connect.server({
        name: 'Connect Dev Server',
        root: root,
        port: port,
        livereload: true,
        fallback: 'index.html',
        // api proxy middleware
        middleware: function (conn, opts) {
            var restProxy = proxy('/rest', {
                target: 'http://127.0.0.1:8080',
                // for vhosted sites, changes host header to match to target's host
                changeOrigin: true,
                logLevel: 'debug'
            });
            return [restProxy]
        }
    });
});

gulp.task('dev', ['serve'], function () {
    gulp.watch(js, ['js']);
    gulp.watch(html, ['html']);
    gulp.watch(css, ['css']);
});
