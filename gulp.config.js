function options() {
    var app = './app/',
        src = './src/',
        node = './node_modules/';
    return {
        app: app,
        src: src,
        
        sass: {
            allSass: app + 'resources/styles/css/**/*.scss',
            buildFiles: app + 'resources/styles/css/*.scss'
        },
        ts: app + '**/*.ts',
        
        html: [
            app + '**/*.html',
            '!' + app + '/view/layout/index.html',
            app + 'view/**/*.html',
        ],
        
        inject: [
            // node + 'bootstrap/dist/**/*.min.css',
            app + 'styles/css/**/*.css',
            app + 'scripts/js/**/*.js',
            app + 'scripts/scripts.*'
            // src + 'resources/styles/css/**/*.css',
            // src + 'resources/styles/fonts/**/*.min.css',
            // app + 'resources/js/plugins/**/*!(min).css',
            // app + 'resources/js/plugins/**/*.min.js',
            // app + 'resources/js/plugins/**/*-script.js',
            // src + 'scripts/*.js',
        ]
    }
}

module.exports = options();