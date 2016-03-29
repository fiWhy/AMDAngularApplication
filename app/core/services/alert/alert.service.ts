import 'angular';

export interface IAlertService {
    
}

export class AlertService 
    implements IAlertService {
        static $inject: string[] = ['$rootScope', '$compile'];
        alertListeners = [];
        constructor(private $rootScope, private $compile) {
            
        }
        
        registerAlertObserver(listener): void {
            this.alertListeners.push(listener);
        }
        
        success(head, body): void {
            this.throwMessage('success', head, body);
        }
        
        error(head, body): void {
            this.throwMessage('error', head, body);
        }
        
        info(head, body): void {
            this.throwMessage('info', head, body);
        }
        
        throwMessage(type, head, body) {
            this.alertListeners.forEach((callback) => {
                callback({
                    type: type,
                    head: head,
                    body: body
                });
            })
        }
    }
    
 angular.module('app.core.services.alert', [])
    .service('AlertService', AlertService);