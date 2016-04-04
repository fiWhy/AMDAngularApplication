import {IUserService} from '../services/user.service.ts';
import {IToastAlertService} from 'core/services/alert/alerts/toast.alert.service.ts';
import {ISweetAlertService} from 'core/services/alert/alerts/sweet.alert.service.ts';

interface IUserController {

}

export class UserController
    implements IUserController {
    static $inject = ['UserService', 'ToastAlertService', 'SweetAlertService', '$state'];
    loginData: {};
    constructor(private UserService: IUserService,
        private ToastAlertService: IToastAlertService,
        private SweetAlertService: ISweetAlertService,
        private $state: ng.ui.IStateService) {
    }

    login() {
        this.UserService.login(this.loginData).$promise
            .then((response) => {
                console.log(response);
                if (response.responseData && (response.responseData.code === undefined || response.responseData.code == 200)) {
                    this.$state.go('dashboard');
                } else {
                    this.SweetAlertService.setOptions({
                        showCancelButton: true
                    }).setCommonCallback((result) => {
                        if (result) {
                            this.SweetAlertService.setOptions({
                                closeOnConfirm: true
                            }).showAlert('Success!', 'Success');
                        } else {
                            this.SweetAlertService.setOptions({
                                closeOnConfirm: true
                            }).showAlert('Cancelled!', 'Cancelled');
                        }
                    }).showAlert('Error!', 'Hello!');
                }
            });
    }

    logout() {
        this.UserService.logout();
        this.$state.go('user.login');
    }
}