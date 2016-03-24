define(["require", "exports", './routes', 'angular'], function (require, exports, routes_1) {
    "use strict";
    angular.module('app.core.config', [])
        .config(config)
        .config(routes_1.routes);
    function config($locationProvider) {
        // $locationProvider.html5Mode({
        //     enabled: false,
        //     requireBase: false
        // });
    }
    exports.config = config;
});
