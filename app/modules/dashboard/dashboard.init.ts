import {dashboardConfig} from './config/bootstrap.ts';
import {DashboardService} from './services/dashboard.service.ts';
import {DashboardController} from './controllers/dashboard.controller.ts';

angular.module('app.modules.dashboard', [])
    .service('DashboardService', DashboardService)
    .controller('DashboardController', DashboardController)
    .config(dashboardConfig);