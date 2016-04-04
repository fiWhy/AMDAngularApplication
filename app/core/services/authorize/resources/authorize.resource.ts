import {IFullResponseEntity} from 'core/entity/fullresponse.entity.ts';
import {IUserEntity, UserEntity} from 'core/entity/user.entity.ts';
import {IResponseEntity, ResponseEntity} from 'core/entity/response.entity.ts';
import {ITokenEntity, TokenEntity} from 'core/entity/token.entity.ts';

interface IAuthorizeAccessResource {
    isLoggedIn(): boolean;
    login(data): ng.IPromise<IFullResponseEntity>;
    reset(data): ng.IPromise<IFullResponseEntity>;
}

interface IAuthorizeResource
    extends ng.resource.IResource<IFullResponseEntity> {
    isAuthorized?: boolean;
    userInfo?: boolean;
}

export class AuthorizeResource
    implements IAuthorizeAccessResource {
    static $inject = ['$resource', '$cookies', 'config'];
    private resourceLink: ng.resource.IResourceClass<IAuthorizeResource>;
    constructor(private $resource: ng.resource.IResourceService, private $cookies: ng.cookies.ICookiesService, private config) {
        this.resourceLink = this.$resource(this.config.mainPaths.authorize, {}, {
            login: {
                method: 'POST',
                isArray: false
            },
            reset: {
                method: 'POST',
                params: {
                    action: 'reset'
                },
                isArray: false
            }
        });
    }

    login(data): ng.IPromise<IFullResponseEntity> {
        return this.resourceLink.login(data).$promise;
    }

    reset(data): ng.IPromise<IFullResponseEntity> {
        return this.resourceLink.reset(data).$promise;
    }

}