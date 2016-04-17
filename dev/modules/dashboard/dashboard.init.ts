import {dashboardConfig} from './config/bootstrap';
import {DashboardService} from './services/dashboard.service';
import {DashboardController} from './controllers/dashboard.controller';

angular.module('app.modules.dashboard', [])
    .service('DashboardService', DashboardService)
    .controller('DashboardController', DashboardController)
    .config(dashboardConfig);