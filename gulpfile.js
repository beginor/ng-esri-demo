'use strict';

let gulp = require('gulp'),
    apiProxy = require('gulp-api-proxy'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    tsc = require('gulp-typescript');

let root = './',
    ts = root + 'src/**/*.ts',
    scss = root + 'src/**/*.scss',
    html = root + 'src/**/*.html',
    dist = root + 'dist',
    port = 3000;

gulp.task('tsc', function () {
    var proj = tsc.createProject('tsconfig.json');
    gulp.src(ts)
        .pipe(sourcemaps.init())
        .pipe(tsc(proj))
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
            opts.route = '/rest';
            opts.context = '127.0.0.1:8080/rest';
            var proxy = new apiProxy(opts);
            return [proxy]
        }
    });
});

gulp.task('dev', ['build', 'serve', 'sass'], function () {
    gulp.watch(ts, ['tsc']);
    gulp.watch(html, ['html']);
    gulp.watch(scss, ['sass']);
});