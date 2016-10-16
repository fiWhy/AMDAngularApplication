import {IUserEntity} from '../../../core/entity/user.entity';
import {IAuthorizeService} from '../../../core/services/authorize/authorize.service';
import {IAppServiceImplementation} from '../services/app.service';

export interface IAppController {
    isAuthorized: boolean;
}

export class AppController
    implements IAppController {
    static $inject = ['$rootScope', 'AppService', '$state', '$location', 'AuthorizeService'];
    constructor(private $rootScope: ng.IRootScopeService,
        private AppService: IAppServiceImplementation,
        private $state: ng.ui.IStateService,
        private $location: ng.ILocationService,
        private AuthorizeService: IAuthorizeService) {
        var self = this;
        console.log('App Controller');
        
        $rootScope.$on('$stateChangeStart', function (event, toState) {
            var authLocation = /user\.(login|reset)/.test(toState.name);
            if (self.isAuthorized) {
                if (authLocation)
                    $location.path('/dashboard');
            } else {
                if (!authLocation) {
                    $location.path('/login');
                }
            }
        });
    }

    get isAuthorized(): boolean {
        return this.AppService.checkForAuth()
    }

    public getUser(): string {
        return this.AuthorizeService.getCurrentUser();
    }
}