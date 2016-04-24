import {IUserEntity, UserEntity} from '../../../entity/user.entity';
import {IAuthorizeEntity, AuthorizeEntity} from '../entity/authorize.entity';

interface IAuthorizeAccessResource {
    login(data: { username: string, password: string }): ng.IPromise<IAuthorizeEntity>;
    reset(data: { username: string, email: string }): ng.IPromise<IUserEntity>;
}

interface IReset extends ng.resource.IResource<IReset> {
    username: string;
    email: string;
}

interface ILogin extends ng.resource.IResource<ILogin> {
    username: string;
    password: string;
}

interface IAuthorizeResource
    extends ng.resource.IResource<IUserEntity|IAuthorizeEntity> {
    login(ILogin): IAuthorizeEntity;
    reset(IReset): IUserEntity;
}

export class AuthorizeResource
    implements IAuthorizeAccessResource {
    static $inject = ['$resource', '$cookies', 'config'];
    private resourceLink;
    constructor(private $resource: ng.resource.IResourceService,
        private $cookies: ng.cookies.ICookiesService,
        private config) {

        var loginAction: ng.resource.IActionDescriptor = {
            method: 'POST',
            isArray: false
        };

        var resetAction: ng.resource.IActionDescriptor = {
            method: 'POST',
            params: {
                action: 'reset'
            },
            isArray: false
        }

        var res = $resource(config.mainPaths.authorize, {}, {
            login: loginAction,
            reset: resetAction
        });
        
        this.resourceLink = res;
    }

    login(data: { username: string, password: string }): ng.IPromise<IAuthorizeEntity> {
        return this.resourceLink.login(data).$promise;
    }

    reset(data: { username: string, email: string }): ng.IPromise<IUserEntity> {
        return this.resourceLink.reset(data).$primise;
    }

}