import {authorizeConfig} from './config/authorize.config.ts';
import {AuthorizeResource} from './resources/authorize.resource.ts';


interface IAuthorizeService {
    
}


class AuthorizeService 
    implements AuthorizeService {
          static $inject: string[] = ['AuthorizeResource'];
          
          constructor(private AuthorizeResource) {
              
          }
          
          test() {
              return 'Hello!';
          }
    }
    
    
    angular.module('app.core.services.authorize', [])
        .config(authorizeConfig)
        .service('AuthorizeResource', AuthorizeResource)
        .service('AuthorizeService', AuthorizeService);