import {appConfig} from './config/bootstrap.ts';
import {appRoutesConfig} from './config/routes.ts';
import {AppService} from './services/app.service.ts';
import {AppController} from './controllers/app.controller.ts';

export default angular.module('app.modules.app', [])
    .config(appConfig)
    .config(appRoutesConfig)
    .service('AppService', AppService)
    .controller('AppController', AppController);