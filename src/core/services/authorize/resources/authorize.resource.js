define(["require", "exports"], function (require, exports) {
    "use strict";
    var AuthorizeResource = (function () {
        function AuthorizeResource($resource, config) {
            this.$resource = $resource;
            this.config = config;
            this.resourceLink = this.$resource(this.config.mainPaths.authorize);
        }
        AuthorizeResource.prototype.isLoggedIn = function () {
            return this.resourceLink.get();
        };
        AuthorizeResource.$inject = ['$resource', 'config'];
        return AuthorizeResource;
    }());
    exports.AuthorizeResource = AuthorizeResource;
});
