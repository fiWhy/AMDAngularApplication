import {IDashboardServiceImplementation} from '../services/dashboard.service';

export interface IDashboardController {
}

export class DashboardController
    implements IDashboardController {
    public $inject = ['DashboardService'];
    constructor(DashboardService: IDashboardServiceImplementation) {
        console.log('Dashboard Controller');
    }
}