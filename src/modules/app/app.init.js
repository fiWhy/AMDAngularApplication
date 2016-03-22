import { appConfig } from './config/bootstrap';
import { appRoutesConfig } from './config/routes';
import { AppService } from './services/app.service';
import { AppController } from './controllers/app.controller';
export default angular.module('app.modules.app', [])
    .config(appConfig)
    .config(appRoutesConfig)
    .service('AppService', AppService)
    .controller('AppController', AppController);
