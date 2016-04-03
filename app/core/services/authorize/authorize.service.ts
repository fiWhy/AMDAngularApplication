import {authorizeConfig} from './config/authorize.config.ts';
import {AuthorizeResource} from './resources/authorize.resource.ts';
import {IUserEntity} from 'core/entity/user.entity.ts';
import {ITokenEntity} from 'core/entity/token.entity.ts';

/**
 * MockBackend
 */
import {mock} from './mock/authorize.mock.ts';

export interface IAuthorizeService {
    isLoggedIn(): boolean;
    getCurrentUser(): IUserEntity;
    logout(): void;
    login(data): IUserEntity;
}



class AuthorizeService
    implements AuthorizeService {
    static $inject: string[] = ['AuthorizeResource', '$cookies', 'config', '$http'];

    constructor(private AuthorizeResource,
        private $cookies: ng.cookies.ICookiesService,
        private config,
        private $http) {

    }

    private authorize(userInfo: IUserEntity, tokenInfo: ITokenEntity): void {
        this.$cookies.put('token', tokenInfo.access_token);
        this.$cookies.put('tokenExpireTime', tokenInfo.tokenExpireTime);
        this.$cookies.put('user', userInfo);
    }

    checkIsTokenExpired(): boolean {
        return false;
    }

    isLoggedIn(): boolean {
        var token = this.$cookies.get('token');
        return token !== undefined;
    }

    getCurrentUser(): IUserEntity {
        var user = this.$cookies.get('user');
        return user;
    }

    logout(): void {
        this.$cookies.remove('token');
        this.$cookies.remove('tokenExpireTime');
        this.$cookies.remove('user');
    }

    login(data): IUserEntity {
        var user = this.AuthorizeResource.login(data);
        if (!user.responseData || !user.responseData.code || user.responseData.code == 200) {
            user.$promise.then((response) => {
                this.authorize(response.userInfo, response.tokenInfo);
            })
        }
        return user;
    }

}


angular.module('app.core.services.authorize', [])
    .run(mock)
    .config(authorizeConfig)
    .service('AuthorizeResource', AuthorizeResource)
    .service('AuthorizeService', AuthorizeService);