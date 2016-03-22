function options() {
    var dev = './dev/',
        src = './src/';
    return {
        dev: dev,
        src: src,
        
        sass: {
            allSass: dev + 'styles/css/**/*.scss',
            buildFiles: dev + 'styles/css/*.scss'
        },
        ts: dev + '**/*.ts',
        html: dev + '**/*.html',
        
        inject: [
            src + 'styles/**/materialize.css',
            // src + '**/js/materialize*.js',
            // src + 'scripts/*.js',
        ]
    }
}

module.exports = options();