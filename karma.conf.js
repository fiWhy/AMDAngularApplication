module.exports = function(config) {
    config.set({
        basePath: '.',
        singleRun: false,
        colors: true,
        plugins: ['karma-jasmine', 'karma-chrome-launcher', 'karma-systemjs'],
        frameworks: ['systemjs', 'jasmine'],
        browsers: ['Chrome'],
        reporters: ['dots'],

        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-resource/angular-resource.js',
            // 'node_modules/angular-mocks/angular-mocks.js',
            'app/core/core.init.ts',
            'app/**/*.spec.ts'
        ],

        systemjs: {
            configFile: 'app/system.config.js',
            serveFiles: [
                'app/**/**',
                'dev/lib/**/*',
            ],
            config: {
                transpiler: null,
                paths: {
                    'angular': 'dev/lib/angular/angular.js',
                    'angular-mocks': 'dev/lib/angular-mocks/angular-mocks.js',
                    'typescript': 'dev/lib/typescript/lib/typescript.js',
                    "angular-ui-router": "dev/lib/angular-ui-router/release/angular-ui-router.js",
                    "angular-animate": "dev/lib/angular-animate/angular-animate.js",
                    "angular-resource": "dev/lib/angular-resource/angular-resource.js",
                    'systemjs': 'node_modules/systemjs/dist/system.js',
                    'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
                    'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
                }
            },
        }

    });
};