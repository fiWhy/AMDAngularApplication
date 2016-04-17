export interface IAppController {
    isAuthorized: boolean;
    returnIfAuthorized(value);
}

export class AppController
    implements IAppController {
    static $inject = ['$rootScope', 'AppService', 'MenuService', '$state', '$location'];
    isAuthorized: boolean;
    constructor(private $rootScope: ng.IRootScopeService,
        private AppService,
        private MenuService,
        private $state: ng.ui.IStateService,
        private $location: ng.ILocationService) {
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
    
    returnIfAuthorized(returnValue){
        if(this.isAuthorized)
            return returnValue;
        return false;
    }
}