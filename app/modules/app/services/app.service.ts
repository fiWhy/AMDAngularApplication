import {IAuthorizeService} from '../../core/services/authorize/authorize.service.ts';

export interface IAppService {
    ceckForAuth(): void;
}

export class AppService
    implements IAppService {
    public static $inject = ['AuthorizeService'];
    constructor(private AuthorizeService: IAuthorizeService) {
    }
    
    checkForAuth(): boolean {
        return this.AuthorizeService.isLoggedIn();
    }
    
    private redirectToLogin(): void {
        
    }
}