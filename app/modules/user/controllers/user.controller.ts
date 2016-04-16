import {IUserService} from '../services/user.service.ts';
import {IToastAlertService} from 'core/services/alert/alerts/toast.alert.service.ts';
import {ISweetAlertService} from 'core/services/alert/alerts/sweet.alert.service.ts';

interface IUserController {
    loginData: {};
    resetData: {};
}

export class UserController
    implements IUserController {
    static $inject = ['UserService', 'ToastAlertService', 'SweetAlertService', '$state'];
    loginData: {};
    resetData: {};
    constructor(private UserService: IUserService,
        private ToastAlertService: IToastAlertService,
        private SweetAlertService: ISweetAlertService,
        private $state: ng.ui.IStateService) {
    }

    login() {
        this.UserService.login(this.loginData)
            .then((response) => {
                    this.$state.go('dashboard');
            });
    }

    logout() {
        this.UserService.logout();
        this.$state.go('user.login');
    }

    reset() {
        this.UserService.reset(this.resetData)
            .then((response) => {
                if (response.status == 200) {
                    this.SweetAlertService.setOptions({
                        closeOnConfirm: true
                    }).showAlert('Success!', 'Your password has been sent to your email!');
                } else {
                    this.SweetAlertService.setOptions({
                        closeOnConfirm: true,
                        type: 'error'
                    }).showAlert('Error!', response.data.error_message);
                }
            })
    }
}