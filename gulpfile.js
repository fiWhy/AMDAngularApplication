var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./gulp.config');
var tsc = require('gulp-typescript');
var browsersync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var port = 80;
var url = 'application:' + port + '/src';
var tslint = require('gulp-tslint');
var tsProject = tsc.createProject('tsconfig.json');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['build', 'watch-ts', 'watch-sass', 'watch-html'], function() {
    var options = {
        proxy: url,
        port: port + 1,
        files: [
            config.src + '**/*.*',
        ],
        ghostMode: {
            clicks: true,
            location: true,
            forms: true,
            scrolling: true
        },
        injectChanges: true,
        logFileChanges: true,
        logLevel: 'debug',
        logPrefix: 'gulp-patterns',
        notify: true,
        reloadDelay: 500
    };

    browsersync(options);
});

gulp.task('watching', ['build', 'watch-ts', 'watch-sass', 'watch-html']);

gulp.task('build', ['sass-compile', 'html-compile', 'ts-compile']);

gulp.task('watch-ts', function() {
    gulp.watch(config.ts, ['ts-compile']);
});

gulp.task('watch-sass', function() {
    gulp.watch(config.sass.allSass, ['sass-compile']);
});

gulp.task('watch-html', function() {
    gulp.watch(config.html, ['html-compile']);
});

gulp.task('sass-compile', function() {
    return gulp.src(config.sass.buildFiles)
        .pipe($.sass())
        .pipe(gulp.dest(config.src + 'styles/css'));
});

gulp.task('html-compile', function() {
    return gulp.src(config.html)
        .pipe($.inject(gulp.src(config.inject)))
        .pipe(gulp.dest(config.src));
})

gulp.task('ts-lint', function() {
    return gulp.src(config.ts).pipe(tslint()).pipe(tslint.report('prose'));
});

gulp.task('ts-compile', function() {
    var tsResult = gulp.src(config.ts)
        .pipe(tsc(tsProject));

    return tsResult.js
        .pipe(gulp.dest(config.src));
});