import {appConfig} from './config/bootstrap';
import {AppService} from './services/app.service';
import {AppController} from './controllers/app.controller';

export default angular.module('app.modules.app', [])
    .config(appConfig)
    .service('AppService', AppService)
    .controller('AppController', AppController);