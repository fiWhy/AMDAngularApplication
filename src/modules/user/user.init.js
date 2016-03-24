define(["require", "exports", './config/bootstrap', './controllers/user.controller', './services/user.service', 'angular'], function (require, exports, bootstrap_1, user_controller_1, user_service_1) {
    "use strict";
    angular.module('app.modules.user', [])
        .config(bootstrap_1.userConfig)
        .service(user_service_1.UserService)
        .controller(user_controller_1.UserController);
});
