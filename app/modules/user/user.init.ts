import {userConfig} from './config/bootstrap.ts';
import {UserController} from './controllers/user.controller.ts';
import {UserService} from './services/user.service.ts';

angular.module('app.modules.user', [])
    .service('UserService', UserService)
    .controller('UserController', UserController)
    .config(userConfig);
