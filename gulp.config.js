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
        
        fonts: [
            app + 'resources/**/*.otf',
            app + 'resources/**/*.eot',
            app + 'resources/**/*.svg',
            app + 'resources/**/*.ttf',
            app + 'resources/**/*.woff',
        ],
        
        inject: [
            // node + 'bootstrap/dist/**/*.min.css',
            app + 'resources/css/**/*.css',
            '!' + app + 'resources/css/**/*_OLD.css',
            '!' + app + 'resources/css/**/*.min.css',
            // src + 'resources/styles/css/**/*.css',
            // src + 'resources/styles/fonts/**/*.min.css',
            app + 'resources/js/plugins/**/*.js',
            // src + 'scripts/*.js',
        ]
    }
}

module.exports = options();