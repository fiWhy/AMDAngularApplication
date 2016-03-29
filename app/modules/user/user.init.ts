import {userConfig} from './config/bootstrap.ts';
import {UserController} from './controllers/user.controller.ts';
import {UserService} from './services/user.service.ts';

angular.module('app.modules.user', [])
    .config(userConfig)
    .service(UserService)
    .controller(UserController);
