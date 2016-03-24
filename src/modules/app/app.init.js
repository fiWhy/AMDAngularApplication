define(["require", "exports", './config/bootstrap', './config/routes', './services/app.service', './controllers/app.controller', 'angular'], function (require, exports, bootstrap_1, routes_1, app_service_1, app_controller_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = angular.module('app.modules.app', [])
        .config(bootstrap_1.appConfig)
        .config(routes_1.appRoutesConfig)
        .service('AppService', app_service_1.AppService)
        .controller('AppController', app_controller_1.AppController);
});
