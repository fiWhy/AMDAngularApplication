import { userConfig } from './config/bootstrap';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
angular.module('app.modules.user', [])
    .config(userConfig)
    .service(UserService)
    .controller(UserController);
