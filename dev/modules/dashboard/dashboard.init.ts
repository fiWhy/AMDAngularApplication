import 'angular';

import {dashboardConfig} from './config/bootstrap';
import {DashboardService} from './services/dashboard.service';
import {DashboardController} from './controllers/dashboard.controller';

angular.module('app.modules.dashboard', [])
    .config(dashboardConfig)
    .service(DashboardService)
    .controller(DashboardController);