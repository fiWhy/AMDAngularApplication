define(["require", "exports"], function (require, exports) {
    "use strict";
    var AppController = (function () {
        function AppController(AppService, AuthorizeService) {
            this.AppService = AppService;
            this.AuthorizeService = AuthorizeService;
            AuthorizeService.test();
        }
        AppController.$inject = ['AppService', 'AuthorizeService'];
        return AppController;
    }());
    exports.AppController = AppController;
});
