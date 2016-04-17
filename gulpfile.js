var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./gulp.config');
var tsc = require('gulp-typescript');
var browsersync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var port = 80;
var url = 'application:' + port + '/';
var tsProject = tsc.createProject('tsconfig.json');
var wiredep = require('wiredep').stream;

gulp.task('default', ['watching'], function () {
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

gulp.task('watching', ['build'], function() {
    gulp.watch(config.html, ['html-compile']);
    gulp.watch(config.ts, ['ts-compile']);
    gulp.watch(config.sass.allSass, ['sass-compile']);
});

gulp.task('build', ['copy-styles-scripts', 'ts-compile', 'copy-images', 'html-compile']);

gulp.task('watch-html', function () {
    gulp.watch(config.html, ['html-compile']);
});

gulp.task('copy-styles-scripts', function () {
    return gulp.src(config.resources.other)
        .pipe(gulp.dest(config.app));
})

gulp.task('copy-images', function () {
    return gulp.src(config.resources.images)
        .pipe(gulp.dest(config.app + 'images'));
})

gulp.task('html-compile', ['index-compile'], function () {
    return gulp.src(config.html)
        .pipe(gulp.dest(config.app));
});

gulp.task('ts-compile', function () {
    var tsProject = tsc.createProject(require('./tsconfig.json'));
    var prepare = gulp.src(config.ts)
        .pipe(tsc(tsProject));

    return prepare.js.pipe(gulp.dest(config.app));
});

gulp.task('sass-compile', function () {
    return gulp.src(config.sass.allSass)
        .pipe($.sass())
        .pipe(gulp.dest(config.sass.buildFiles));
});

gulp.task('index-compile', function () {
    var bower = require('./bower.json');
    return gulp.src(config.dev + 'view/layout/index.html')
        .pipe(wiredep({
            fileTypes: {
                fileExtension: {
                    replace: {
                        js: '<script src="dev{{filePath}}"></script>',
                        css: '<link rel="stylesheet" href="dev{{filePath}}">',
                    }
                }
            },
            bowerJson: bower,
            ignorePath: '../..'
        }))
        .pipe($.inject(gulp.src(config.inject)))
        .pipe(gulp.dest('./'));
});
