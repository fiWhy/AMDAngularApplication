import {IAuthorizeEntity, AuthorizeEntity} from 'core/entity/authorize.entity.ts';
import {IUserEntity, UserEntity} from 'core/entity/user.entity.ts';
import {IResponseEntity, ResponseEntity} from 'core/entity/response.entity.ts';
import {ITokenEntity, TokenEntity} from 'core/entity/token.entity.ts';

interface IAuthorizeAccessResource {
    isLoggedIn(): IAuthorizeEntity;
}

interface IAuthorizeResource
    extends ng.resource.IResource<IAuthorizeEntity> {
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
                isArray: false,
                transformResponse: (data, headers) => {
                    return new AuthorizeEntity(
                        new ResponseEntity(),
                        new UserEntity(data.username, data.role, data.token, data.tokenExpireTime),
                        new TokenEntity(data.token, data.tokenExpireTime, false)
                    );
                }
            }
        });
    }

    login(data): IAuthorizeEntity | boolean {
        return this.resourceLink.login(data);
    }

}