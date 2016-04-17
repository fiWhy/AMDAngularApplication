import {authorizeConfig} from './config/authorize.config.ts';
import {AuthorizeResource} from './resources/authorize.resource.ts';
import {IFullResponseEntity} from 'core/entity/fullresponse.entity.ts';
import {IUserEntity} from 'core/entity/user.entity.ts';
import {ITokenEntity} from 'core/entity/token.entity.ts';
import {IToastAlertService} from 'core/services/alert/alerts/toast.alert.service.ts';

/**
 * MockBackend
 */
// import {mock} from './mock/authorize.mock.ts';

export interface IAuthorizeService {
    isLoggedIn(): boolean;
    getCurrentUser(): IUserEntity;
    logout(): void;
    login(data): IUserEntity;
}



class AuthorizeService
    implements AuthorizeService {
    static $inject: string[] = ['AuthorizeResource', '$cookies', 'config', 'ToastAlertService'];

    constructor(private AuthorizeResource,
        private $cookies: ng.cookies.ICookiesService,
        private config,
        private ToastAlertService: IToastAlertService) {

    }

    private authorize(userData: IUserEntity, tokenData: ITokenEntity): void {
        this.$cookies.put('access_token', tokenData.access_token);
        this.$cookies.put('tokenExpireTime', tokenData.tokenExpireTime);
        this.$cookies.put('user', userData);
    }

    checkIsTokenExpired(): boolean {
        var currentDate = new Date(),
            expireTime = parseInt(this.$cookies.get('tokenExpireTime'));
        return (currentDate.getTime()/1000) >= expireTime;
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
                this.authorize(response.userData, response.tokenData);
        }, (error) => {
           this.ToastAlertService.showSimpleAlert(error.data.error_message);
        })
        return user;
    }
    
    reset(data): ng.IPromise<IFullResponseEntity> {
        return this.AuthorizeResource.reset(data);
    }

}


angular.module('app.core.services.authorize', [])
    .config(authorizeConfig)
    .service('AuthorizeResource', AuthorizeResource)
    .service('AuthorizeService', AuthorizeService);