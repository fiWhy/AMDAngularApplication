import {IUserEntity} from '../../../core/entity/user.entity';
import {IAuthorizeService} from '../../../core/services/authorize/authorize.service';

export interface IAppController {
    isAuthorized: boolean;
}

export class AppController
    implements IAppController {
    static $inject = ['$rootScope', 'AppService', 'MenuService', '$state', '$location', 'AuthorizeService'];
    isAuthorized: boolean;
    constructor(private $rootScope: ng.IRootScopeService,
        private AppService,
        private MenuService,
        private $state: ng.ui.IStateService,
        private $location: ng.ILocationService,
        private AuthorizeService: IAuthorizeService) {
        var self = this;

        
        $rootScope.$on('$stateChangeStart', function(event, toState) {
            self.isAuthorized = AppService.checkForAuth();
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

    public getUser(): IUserEntity {
        return this.AuthorizeService.getCurrentUser();
    }
}