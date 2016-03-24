require.config({
    paths: {
        'angular': '../node_modules/angular/angular',
        "uiRouter": "../node_modules/angular-ui-router/release/angular-ui-router",
        "ngAnimate": "../node_modules/angular-animate/angular-animate",
        "ngResource": "../node_modules/angular-resource/angular-resource",
        "ngLoadingBar": "../node_modules/angular-loading-bar/build/loading-bar",
        "ngMocks": "../node_modules/angular-mocks/angular-mocks",
        "app": "app",
        "appMocks": "mocks/mocks.init",
        "appConstants": "core/constants/constants.init",
        "appCore": "core/core.init"
    },
    map: {
        "*": {
            "mocksPath/**/*": "./mocks"
        },
        'mocks': {
            'auth': 'mocksPath/services/authorize/authorize.mock'
        }
    },
    shim: {
        /**
         * Angular native
         */
        'angular': {
            exports: 'angular'
        },
        'uiRouter': {
            deps: ['angular']
        },
        'ngResource': {
            deps: ['angular']
        },
        'ngAnimate': {
            deps: ['angular']
        },
        'ngLoadingBar': {
            deps: ['angular']
        },
        'ngMocks': {
            deps: ['angular']
        },
    },
});
define(['require', 'angular', 'uiRouter', 'ngResource', 'ngAnimate', 'ngLoadingBar', 'ngMocks', 'app'], function (require, angular, uiRouter, ngResource, ngAnimate, ngLoadingBar, app) {
    require(['app'], function (app) {
        angular.bootstrap(document, ['app']);
    });
});
