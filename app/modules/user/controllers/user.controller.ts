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
        private ToastService: IToastAlertService,
        private SweetAlertService: ISweetAlertService,
        private $state: ng.ui.IStateService) {
    }

    login() {
        this.UserService.login(this.loginData).$promise
            .then((response) => {
              this.$state.go('dashboard');
            });
    }
    
    logout() {
        this.UserService.logout();
        this.$state.go('user.login');
    }
}