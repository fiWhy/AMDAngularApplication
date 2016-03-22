import { authorizeConfig } from './config/authorize.config';
import { AuthorizeResource } from './resources/authorize.resource';
class AuthorizeService {
    constructor(AuthorizeService) {
        this.AuthorizeService = AuthorizeService;
    }
    test() {
        console.log('test');
    }
}
AuthorizeService.$inject = ['AuthorizeResource'];
angular.module('app.core.services.authorize', [])
    .config(authorizeConfig)
    .service('AuthorizeResource', AuthorizeResource)
    .service('AuthorizeService', AuthorizeService);
