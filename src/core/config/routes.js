define(["require", "exports"], function (require, exports) {
    "use strict";
    routes.$inject = ['$stateProvider', '$urlRouterProvider', 'config'];
    function routes($stateProvider, $urlRouterProvider, config) {
        $urlRouterProvider.otherwise('/dashboard');
    }
    exports.routes = routes;
});
