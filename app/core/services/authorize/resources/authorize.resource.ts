import {IResponseEntity} from 'core/entity/response.entity';
import {IUserEntity, UserEntity} from 'core/entity/user.entity.ts';
import {IAuthorizeEntity, AuthorizeEntity} from '../entity/authorize.entity.ts';

interface IAuthorizeAccessResource {
    login(data: { username: string, password: string }): ng.IPromise<IResponseEntity<IAuthorizeEntity>>;
    reset(data: { username: string, email: string }): ng.IPromise<IResponseEntity<IUserEntity>>;
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
    extends ng.resource.IResourceClass<IResponseEntity> {
    login(ILogin): IResponseEntity<IAuthorizeEntity>;
    reset(IReset): IResponseEntity<IUserEntity>;
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

        this.resourceLink = $resource(config.mainPaths.authorize, {}, {
            login: loginAction,
            reset: resetAction
        });
    }

    login(data: { username: string, password: string }): ng.IPromise<IResponseEntity<IAuthorizeEntity>> {
        return this.resourceLink.login(data).$promise;
    }

    reset(data: { username: string, email: string }): ng.IPromise<IResponseEntity<IUserEntity>> {
        return this.resourceLink.reset(data).$promise;
    }

}