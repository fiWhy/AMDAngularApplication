import {IUserService} from '../services/user.service.ts';
import {IAlertService} from 'core/services/alert/alert.service.ts';

interface IUserController {

}

export class UserController 
    implements IUserController {
        static $inject = ['UserService', 'AlertService'];
        loginData: {};
        constructor(private UserService: IUserService, private AlertService: IAlertService) {
        }
        
        login() {
            this.AlertService.setVertical('top')
                .setHorizontal('left')
                .showCustomAlert('Test', 'UserController');
                
            this.UserService.login()
        }
}