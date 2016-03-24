define(["require", "exports", './config/authorize.config', './resources/authorize.resource', 'angular', 'mocks/services/authorize/authorize.mock'], function (require, exports, authorize_config_1, authorize_resource_1) {
    "use strict";
    var AuthorizeService = (function () {
        function AuthorizeService(AuthorizeResource) {
            this.AuthorizeResource = AuthorizeResource;
        }
        AuthorizeService.prototype.test = function () {
            console.log(this.AuthorizeResource.isLoggedIn());
        };
        AuthorizeService.$inject = ['AuthorizeResource'];
        return AuthorizeService;
    }());
    angular.module('app.core.services.authorize', [])
        .config(authorize_config_1.authorizeConfig)
        .service('AuthorizeResource', authorize_resource_1.AuthorizeResource)
        .service('AuthorizeService', AuthorizeService);
});
