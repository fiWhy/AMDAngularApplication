var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./gulp.config');
var tsc = require('gulp-typescript');
var browsersync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var port = 80;
var url = 'application:' + port + '/app';
var tslint = require('gulp-tslint');
var tsProject = tsc.createProject('tsconfig.json');
var sourcemaps = require('gulp-sourcemaps');
var wiredep = require('wiredep').stream;

gulp.task('default', ['build', 'watch-html'], function() {
    var options = {
        proxy: url,
        port: port + 1,
        files: [
            config.app + '**/*.*',
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

gulp.task('watching', ['build', 'watch-html']);

gulp.task('build', ['html-compile']);

gulp.task('watch-html', function() {
    gulp.watch(config.html, ['html-compile']);
});

gulp.task('html-compile', ['index-compile'], function() {
    return gulp.src(config.html)
        .pipe($.inject(gulp.src(config.inject)))
        .pipe(wiredep({
            bowerJson: require('./bower.json')
        }))
        .pipe(gulp.dest(config.app));
});

gulp.task('sass-compile', function() {
    return gulp.src(config.sass.allSass)
        .pipe($.sass())
        .pipe(gulp.dest(config.sass.buildFiles));
});

gulp.task('index-compile', function() {
    return gulp.src(config.app + 'view/layout/index.html')
        .pipe($.inject(gulp.src(config.inject)))
        .pipe(gulp.dest(config.app));
});