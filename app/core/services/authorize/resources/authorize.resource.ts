import {IAuthorizeEntity, AuthorizeEntity} from '../entity/authorize.entity';
import {IUserEntity, UserEntity} from '../entity/user.entity';

interface IAuthorizeAccessResource {
    isLoggedIn(): IAuthorizeEntity;
}

interface IAuthorizeResource
    extends ng.resource.IResource<IAuthorizeEntity> {
    isAuthorized?: boolean;
    userInfo?: boolean;
}

export class AuthorizeResource 
    implements IAuthorizeAccessResource{
        static $inject = ['$resource', '$cookies', 'config'];
        private resourceLink: ng.resource.IResourceClass<IAuthorizeResource>;
        constructor(private $resource: ng.resource.IResourceService, private $cookies: ng.cookies.ICookiesService, private config) {
            this.resourceLink = this.$resource(this.config.mainPaths.authorize);
        }
        
        login(): IAuthorizeEntity | boolean {
            return this.resourceLink.get();
        }
        
    }