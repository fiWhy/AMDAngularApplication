import {IUserService} from '../services/user.service.ts';
import {IToastAlertService} from 'core/services/alert/alerts/toast.alert.service.ts';
import {ISweetAlertService} from 'core/services/alert/alerts/sweet.alert.service.ts';

interface IUserController {

}

export class UserController
    implements IUserController {
    static $inject = ['UserService', 'ToastAlertService', 'SweetAlertService'];
    loginData: {};
    constructor(private UserService: IUserService,
        private ToastService: IToastAlertService,
        private SweetAlertService: ISweetAlertService) {
    }

    login() {
        this.SweetAlertService
            .setOptions({
                type: 'warning',
                showCancelButton: true
            })
            .setCommonCallback((result) => {
                if (result) {
                    console.log('hello');
                    this.SweetAlertService
                        .setOptions({
                            closeOnConfirm: true,
                            closeOnCancel: true
                        })
                        .showAlert('Succeed!');
                }
            })
            .showAlert('Hello!');
        this.UserService.login()
    }
}