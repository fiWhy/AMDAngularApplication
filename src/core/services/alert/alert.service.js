define(["require", "exports", 'angular'], function (require, exports) {
    "use strict";
    var AlertService = (function () {
        function AlertService($rootScope, $compile) {
            this.$rootScope = $rootScope;
            this.$compile = $compile;
            this.alertListeners = [];
        }
        AlertService.prototype.registerAlertObserver = function (listener) {
            this.alertListeners.push(listener);
        };
        AlertService.prototype.success = function (head, body) {
            this.throwMessage('success', head, body);
        };
        AlertService.prototype.error = function (head, body) {
            this.throwMessage('error', head, body);
        };
        AlertService.prototype.info = function (head, body) {
            this.throwMessage('info', head, body);
        };
        AlertService.prototype.throwMessage = function (type, head, body) {
            this.alertListeners.forEach(function (callback) {
                callback({
                    type: type,
                    head: head,
                    body: body
                });
            });
        };
        AlertService.$inject = ['$rootScope', '$compile'];
        return AlertService;
    }());
    exports.AlertService = AlertService;
    angular.module('app.core.services.alert', [])
        .service('AlertService', AlertService);
});
