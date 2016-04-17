import {IAuthorizeService} from '../../../core/services/authorize/authorize.service';
import {IAuthorizeEntity} from '../../../core/services/authorize/entity/authorize.entity';
import {IUserEntity} from '../../../core/entity/user.entity';

export interface IUserService {
    login(data);
    logout(): void;
    reset(data): ng.IPromise<IUserEntity>;
}

export class UserService 
    implements IUserService{
        static $inject = ['AuthorizeService'];
        constructor(private AuthorizeService: IAuthorizeService) {
            
        }
        
        login(data): ng.IPromise<IAuthorizeEntity> {
            return this.AuthorizeService.login(data);
        }
        
        logout(): void {
            this.AuthorizeService.logout();
        }
        
        reset(data): ng.IPromise<IUserEntity> {
            return this.AuthorizeService.reset(data);
        }
}