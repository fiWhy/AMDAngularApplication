module.exports = function(config) {
    config.set({
        basePath: './',
        singleRun: false,
        colors: true,
        plugins: ['karma-jasmine', 'karma-chrome-launcher', 'karma-systemjs'],
        frameworks: ['systemjs', 'jasmine'],
        browsers: ['Chrome'],
        reporters: ['dots'],

        files: [
            'app/**/*.spec.ts'
        ],

        systemjs: {
            configFile: 'app/system.config.js',
            serveFiles: [
                'app/**/*.ts',
                'node_modules/angular-mocks/angular-mocks.js',
                'node_modules/angular-ui-router/release/angular-ui-router.js',
                'node_modules/angular-animate/angular-animate.js',
                'node_modules/angular-resource/angular-resource.js',
                'node_modules/systemjs/dist/system.js',
                'node_modules/systemjs/dist/system-polyfills.js',
                'node_modules/es6-module-loader/dist/es6-module-loader.js',
            ],
            includeFiles: [
                'angular'
            ],
            meta: {
                'node_modules/angular-ui-router/release/angular-ui-router.js': {
                    format: 'global', // load this module as a global
                    deps: [
                        'angular'
                    ]
                }
            },
            config: {
                transpiler: 'typescript',
                paths: {
                    'angular': 'node_modules/angular/angular.js',
                    'angular-mocks': 'node_modules/angular-mocks/angular-mocks.js',
                    'typescript': 'node_modules/typescript/lib/typescript.js',
                    "angular-ui-router": "node_modules/angular-ui-router/release/angular-ui-router.js",
                    "angular-animate": "node_modules/angular-animate/angular-animate.js",
                    "angular-resource": "node_modules/angular-resource/angular-resource.js",
                    "loading-bar": "node_modules/angular-loading-bar/build/loading-bar.js",
                    'systemjs': '../node_modules/systemjs/dist/system.js',
                    'system-polyfills': '../node_modules/systemjs/dist/system-polyfills.js',
                    'es6-module-loader': '../node_modules/es6-module-loader/dist/es6-module-loader.js',
                }
            },
        }

    });
};