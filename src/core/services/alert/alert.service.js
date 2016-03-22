export class AlertService {
    constructor($rootScope, $compile) {
        this.$rootScope = $rootScope;
        this.$compile = $compile;
        this.alertListeners = [];
    }
    registerAlertObserver(listener) {
        this.alertListeners.push(listener);
    }
    success(head, body) {
        this.throwMessage('success', head, body);
    }
    error(head, body) {
        this.throwMessage('error', head, body);
    }
    info(head, body) {
        this.throwMessage('info', head, body);
    }
    throwMessage(type, head, body) {
        this.alertListeners.forEach((callback) => {
            callback({
                type: type,
                head: head,
                body: body
            });
        });
    }
}
AlertService.$inject = ['$rootScope', '$compile'];
angular.module('app.core.services.alert', [])
    .service('AlertService', AlertService);
