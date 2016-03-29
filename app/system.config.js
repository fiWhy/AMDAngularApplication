 System.config({
        transpiler: 'typescript', 
        defaultJSExtensions: false,
        typescriptOptions: { emitDecoratorMetadata: true }, 
         paths: {
        'systemjs': '../node_modules/systemjs/dist/system.js',
        'system-polyfills': '../node_modules/systemjs/dist/system-polyfills.js',
        'es6-module-loader': '../node_modules/es6-module-loader/dist/es6-module-loader.js',
        'angular': '../node_modules/angular/angular.js',
        'angular-mocks': '../node_modules/angular-mocks/angular-mocks.js',
        'typescript': '../node_modules/typescript/lib/typescript.js',
        "angular-ui-router": "../node_modules/angular-ui-router/release/angular-ui-router.js",
        "angular-animate": "../node_modules/angular-animate/angular-animate.js",
        "angular-resource": "../node_modules/angular-resource/angular-resource.js",
        "loading-bar": "../node_modules/angular-loading-bar/build/loading-bar.js",
    },
        packages: {
            'app': {defaultExtension: 'ts'}} 
      });
      