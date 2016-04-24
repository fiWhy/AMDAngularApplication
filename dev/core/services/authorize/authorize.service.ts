import {authorizeConfig} from './config/authorize.config';
import {AuthorizeResource} from './resources/authorize.resource';
import {IAuthorizeEntity} from './entity/authorize.entity';
import {IUserEntity} from '../../entity/user.entity';
import {ITokenEntity} from './entity/token.entity';
import {IToastAlertService} from '../alert/alerts/toast.alert.service';
import {AuthorizeResourceFactory} from './resources/authorize.resource.factory';

/**
 * MockBackend
 */
// import {mock} from './mock/authorize.mock.ts';

export interface IAuthorizeService {
    isLoggedIn(): boolean;
    checkIsTokenExpired(): boolean;
    getCurrentUser(): IUserEntity;
    logout(): void;
    login(data): ng.IPromise<IAuthorizeEntity>;
    reset(data): ng.IPromise<IUserEntity>;
}



class AuthorizeService
    implements AuthorizeService {
    static $inject: string[] = ['AuthorizeResource', '$cookies', 'config', 'ToastAlertService', '$q'];

    constructor(private AuthorizeResource,
        private $cookies: ng.cookies.ICookiesService,
        private config,
        private ToastAlertService: IToastAlertService,
        private $q: ng.IQService) {

    }

    private authorize(userData: IUserEntity, tokenData: ITokenEntity): void {
        this.$cookies.putObject('token', tokenData);
        this.$cookies.putObject('user', userData);
    }

    checkIsTokenExpired(): boolean {
        var currentDate = new Date(),
            expireTime = parseInt(this.$cookies.getObject('token').tokenExpireTime);
        return (currentDate.getTime()/1000) >= expireTime;
    }

    isLoggedIn(): boolean {
        var tokenObject = this.$cookies.getObject('token');
        var token =  (tokenObject && tokenObject.access_token);
        return token !== undefined;
    }

    getCurrentUser(): IUserEntity {
        var user = this.$cookies.getObject('user');
        return user;
    }

    logout(): void {
        this.$cookies.remove('token');
        this.$cookies.remove('user');
    }

    login(data): ng.IPromise<IAuthorizeEntity> {
        var user = this.AuthorizeResource.login(data);
        user.then((response) => {
            if (response.userData && response.tokenData !== null) {
                this.authorize(response.userData, response.tokenData);
            } else {
                return this.$q.reject();
            }
        }, (error) => {
           this.ToastAlertService.showSimpleAlert(error.data.error_message);
        })
        return user;
    }
    
    reset(data): ng.IPromise<IUserEntity> {
        return this.AuthorizeResource.reset(data);
    }

}


angular.module('app.core.services.authorize', [])
    .config(authorizeConfig)
    .service('AuthorizeResource', AuthorizeResource)
    .service('AuthorizeService', AuthorizeService);