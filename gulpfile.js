'use strict';

let gulp = require('gulp'),
    proxy = require('http-proxy-middleware'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    tsc = require('gulp-typescript');

let root = './',
    ts = root + 'src/**/*.ts',
    scss = root + 'src/**/*.scss',
    html = root + 'src/**/*.html',
    dist = root + 'src',
    port = 3000;

gulp.task('tsc', function () {
    var proj = tsc.createProject('tsconfig.json');
    gulp.src(ts)
        .pipe(sourcemaps.init())
        .pipe(proj())
        .js
        .pipe(sourcemaps.write(root))
        .pipe(gulp.dest(dist))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src(html)
        .pipe(gulp.dest(dist))
        .pipe(connect.reload());
});

gulp.task('sass', function () {
    gulp.src(scss)
        .pipe(sass())
        .pipe(gulp.dest(dist))
        .pipe(connect.reload());
});

gulp.task('build', ['tsc', 'html', 'sass']);

gulp.task('serve', function () {
    //var server = gls.static(root, port);
    //server.start();
    connect.server({
        name: 'Connect Dev Server',
        root: root,
        port: port,
        livereload: true,
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

gulp.task('dev', ['build', 'serve', 'sass'], function () {
    gulp.watch(ts, ['tsc']);
    gulp.watch(html, ['html']);
    gulp.watch(scss, ['sass']);
});