import {authorizeConfig} from './config/authorize.config.ts';
import {AuthorizeResource} from './resources/authorize.resource.ts';
import {IUserEntity} from './entity/user.entity';

export interface IAuthorizeService {

}



class AuthorizeService
    implements AuthorizeService {
    static $inject: string[] = ['AuthorizeResource', '$cookies'];

    constructor(private AuthorizeResource,
        private $cookies: ng.cookies.ICookiesService) { 
            
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
        this.$cookies.remove('user');
    }

}


angular.module('app.core.services.authorize', [])
    .config(authorizeConfig)
    .service('AuthorizeResource', AuthorizeResource)
    .service('AuthorizeService', AuthorizeService);