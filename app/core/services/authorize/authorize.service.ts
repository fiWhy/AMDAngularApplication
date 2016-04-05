import {authorizeConfig} from './config/authorize.config.ts';
import {AuthorizeResource} from './resources/authorize.resource.ts';
import {IFullResponseEntity} from 'core/entity/fullresponse.entity.ts';
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

    private authorize(userData: IUserEntity, tokenData: ITokenEntity): void {
        this.$cookies.put('access_token', tokenData.access_token);
        this.$cookies.put('tokenExpireTime', tokenData.tokenExpireTime);
        this.$cookies.put('user', userData);
    }

    checkIsTokenExpired(): boolean {
        return false;
    }

    isLoggedIn(): boolean {
        var token = this.$cookies.get('access_token');
        return token !== undefined;
    }

    getCurrentUser(): IUserEntity {
        var user = this.$cookies.get('user');
        return user;
    }

    logout(): void {
        this.$cookies.remove('access_token');
        this.$cookies.remove('tokenExpireTime');
        this.$cookies.remove('user');
    }

    login(data): ng.IPromise<IFullResponseEntity> {
        var user = this.AuthorizeResource.login(data);
        user.then((response) => {
            console.log(response);
            if (response.status == 200) {
                this.authorize(response.data.userData, response.data.tokenData);
            }
        }, (error) => {
            console.log('error');
        })
        return user;
    }
    
    reset(data): ng.IPromise<IFullResponseEntity> {
        return this.AuthorizeResource.reset(data);
    }

}


angular.module('app.core.services.authorize', [])
    .run(mock)
    .config(authorizeConfig)
    .service('AuthorizeResource', AuthorizeResource)
    .service('AuthorizeService', AuthorizeService);