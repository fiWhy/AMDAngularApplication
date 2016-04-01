export interface IAppController {
    isAuthorized: boolean;
}

export class AppController
    implements IAppController {
        static $inject = ['AppService', '$state'];
        isAuthorized: boolean;
        constructor(private AppService, private $state) {
            this.isAuthorized = AppService.checkForAuth();
            if(!this.isAuthorized) {
                console.log('User is not authorized!');
                $state.go('login');
            }
        }
}