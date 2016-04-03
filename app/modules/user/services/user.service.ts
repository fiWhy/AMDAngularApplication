import {IAuthorizeService} from 'core/services/authorize/authorize.service.ts';

interface IUserService {
    login(data);
}

export class UserService 
    implements IUserService{
        static $inject = ['AuthorizeService'];
        constructor(private AuthorizeService: IAuthorizeService) {
            
        }
        
        login(data): IAuthorizeService {
            return this.AuthorizeService.login(data);
        }
        
        logout(): void {
            this.AuthorizeService.logout();
        }
}