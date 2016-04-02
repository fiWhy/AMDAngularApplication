export interface IAlertService {
    setVertical(position: string): void;
    setHorizontal(position: string): void;
    showCustomAlert(msg: string, element: HTMLBaseElement, ctrl): void;
    showSimpleAlert(msg: string, ctrl): void;
    showActionAlert(msg: string, ctrl): void;
}

export class AlertService
    implements IAlertService {
    static $inject: string[] = ['$rootScope', '$compile', '$mdToast'];
    private positions: {};
    private positionVertical: string = 'top';
    private positionHorizontal: string = 'right';
    constructor(private $rootScope, private $compile, private $mdToast) {
        this.positions = {
            'top': true,
            'bottom': false,
            'left': false,
            'right': true
        }
    }

    setVertical(position: string): IAlertService {
        var verticalPositions = ['top', 'bottom'];
        if (verticalPositions.indexOf(position) < 0)
            throw 'Sorry, but your position does not exists. You could choose from: top, bottom!';

        verticalPositions.every((pos) => {
            var value = false;
            if (pos == position) {
                value = true;
            }
            this.positions[pos] = value;
            return false;
        });


        return this;
    }

    setHorizontal(position: string): IAlertService {
        var horizontalPositions = ['left', 'right'];
        if (horizontalPositions.indexOf(position) < 0)
            throw 'Sorry, but your position does not exists. You could choose from: left, right!';

        horizontalPositions.every((pos) => {
            var value = false;
            if (pos == position) {
                value = true;
            }
            this.positions[pos] = value;
            return false;
        });

        return this;
    }

    private getToastPosition(): {} {
        var self = this;
        return Object.keys(this.positions)
            .filter(function(pos) { return self.positions[pos]; })
            .join(' ');
    }


    showCustomAlert(msg: string, ctrl, element: HTMLBaseElement, hideDelay?: number): void {
        this.$mdToast.show({
            controller: ctrl,
            templateUrl: './core/services/alert/templates/alert.template.html',
            parent: element || document.body,
            hideDelay: hideDelay || 6000,
            position: this.getToastPosition()
        });
    }

    showSimpleAlert(msg: string, hideDelay?: number): void {
        this.$mdToast.show(
            this.$mdToast.simple()
                .textContent(msg)
                .position(this.getToastPosition())
                .hideDelay(hideDelay || 3000)
        );
    }

    showActionAlert(msg: string, ctrl): void {

    }
}

angular.module('app.core.services.alert', [])
    .service('AlertService', AlertService);