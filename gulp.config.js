function options() {
    var app = './app/',
        src = './src/',
        node = './node_modules/';
    return {
        app: app,
        src: src,

        sass: {
            allSass: [
                app + 'styles/css/materialize/sass/materialize.scss',
            ],
            buildFiles: app + 'styles/css/'
        },
        ts: app + '**/*.ts',

        html: [
            app + '**/*.html',
            '!' + app + '/view/layout/index.html',
            app + 'view/**/*.html',
        ],

        inject: [
            app + 'styles/css/**/*.css',
            app + 'scripts/js/**/*.js',
            app + 'scripts/scripts.*'
            // src + 'scripts/*.js',
        ]
    }
}

module.exports = options();
