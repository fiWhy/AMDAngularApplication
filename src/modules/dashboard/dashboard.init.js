define(["require", "exports", './config/bootstrap', './services/dashboard.service', './controllers/dashboard.controller', 'angular'], function (require, exports, bootstrap_1, dashboard_service_1, dashboard_controller_1) {
    "use strict";
    angular.module('app.modules.dashboard', [])
        .config(bootstrap_1.dashboardConfig)
        .service(dashboard_service_1.DashboardService)
        .controller(dashboard_controller_1.DashboardController);
});
