import {authorizeConfig} from './config/authorize.config';
import {AuthorizeResource} from './resources/authorize.resource';
import {IAuthorizeEntity} from './entity/authorize.entity';
import {IUserEntity} from '../../entity/user.entity';
import {ITokenEntity} from './entity/token.entity';
import {ISweetAlertService} from '../alert/alerts/sweet.alert.service';
import {ISingleResponse} from "../../entity/r.entity";

/**
 * MockBackend
 */
// import {mock} from './mock/authorize.mock.ts';

export interface IAuthorizeService {
    isLoggedIn(): boolean;
    checkIsTokenExpired(): boolean;
    getCurrentUser(): string;
    logout(): void;
    login(data): ng.IPromise<ISingleResponse<IAuthorizeEntity>>;
    reset(data): ng.IPromise<ISingleResponse<IUserEntity>>;
}



class AuthorizeService
    implements IAuthorizeService {
    static $inject: string[] = ['AuthorizeResource', 'localStorageService', 'config', 'SweetAlertService', '$q'];

    constructor(private AuthorizeResource,
        private localStorageService: ng.local.storage.ILocalStorageService,
        private config,
        private SweetAlertService: ISweetAlertService,
        private $q: ng.IQService) {

    }

    private authorize(user: string, token: string): void {
        this.localStorageService.set('token', token);
        this.localStorageService.set('user', user);
    }

    checkIsTokenExpired(): boolean {
        var currentDate = new Date(),
            expireTime = this.localStorageService.get('token');
        // return (currentDate.getTime()/1000) >= expireTime;
        if(!expireTime) return true;
        return false;
    }

    isLoggedIn(): boolean {
        var token = this.localStorageService.get('token');
        return token !== undefined;
    }

    getCurrentUser(): any {
        var user = this.localStorageService.get('user');
        return user;
    }

    logout(): void {
        this.localStorageService.remove('token');
        this.localStorageService.remove('user');
    }

    login(data): ng.IPromise<ISingleResponse<IAuthorizeEntity>> {
        var user = this.AuthorizeResource.login(data).$promise;
        user.then((response) => {
            if (response.data.user && response.data.token !== null) {
                this.authorize(response.data.user, response.data.token);
            } else {
                return this.$q.reject();
            }
        }, (error) => {
           this.SweetAlertService.setOptions({
               type: 'error',
               text: 'Wrong login or password'
           }).showAlert();
        });
        return user;
    }
    
    reset(data): ng.IPromise<ISingleResponse<IUserEntity>> {
        return this.AuthorizeResource.reset(data).$promise;
    }

}


angular.module('app.core.services.authorize', [])
    .config(authorizeConfig)
    .service('AuthorizeResource', AuthorizeResource)
    .service('AuthorizeService', AuthorizeService);