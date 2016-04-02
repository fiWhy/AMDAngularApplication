import {SweetAlertService} from './alerts/sweet.alert.service.ts';
import {ToastAlertService} from './alerts/toast.alert.service.ts';

angular.module('app.core.services.alerts', [])
    .service('SweetAlertService', SweetAlertService)
    .service('ToastAlertService', ToastAlertService);