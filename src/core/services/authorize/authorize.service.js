define(["require", "exports", './config/authorize.config', './resources/authorize.resource', 'angular'], function (require, exports, authorize_config_1, authorize_resource_1) {
    "use strict";
    var AuthorizeService = (function () {
        function AuthorizeService(AuthorizeService) {
            this.AuthorizeService = AuthorizeService;
        }
        AuthorizeService.prototype.test = function () {
            console.log('test');
        };
        AuthorizeService.$inject = ['AuthorizeResource'];
        return AuthorizeService;
    }());
    angular.module('app.core.services.authorize', [])
        .config(authorize_config_1.authorizeConfig)
        .service('AuthorizeResource', authorize_resource_1.AuthorizeResource)
        .service('AuthorizeService', AuthorizeService);
});
