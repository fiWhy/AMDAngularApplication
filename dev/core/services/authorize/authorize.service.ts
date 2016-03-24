import 'angular';

import {authorizeConfig} from './config/authorize.config';
import {AuthorizeResource} from './resources/authorize.resource';

import 'mocks/services/authorize/authorize.mock';

interface IAuthorizeService {
    
}


class AuthorizeService 
    implements AuthorizeService {
          static $inject: string[] = ['AuthorizeResource'];
          
          constructor(private AuthorizeResource) {
              
          }
          
          test() {
              console.log(this.AuthorizeResource.isLoggedIn());
          }
    }
    
    
    angular.module('app.core.services.authorize', [])
        .config(authorizeConfig)
        .service('AuthorizeResource', AuthorizeResource)
        .service('AuthorizeService', AuthorizeService);