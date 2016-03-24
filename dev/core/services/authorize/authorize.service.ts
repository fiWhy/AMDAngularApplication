import 'angular';
import {authorizeConfig} from './config/authorize.config';
import {AuthorizeResource} from './resources/authorize.resource';

interface IAuthorizeService {
    
}


class AuthorizeService 
    implements AuthorizeService {
          static $inject: string[] = ['AuthorizeResource'];
          
          constructor(private AuthorizeService) {
              
          }
          
          test() {
              console.log('test');
          }
    }
    
    
    angular.module('app.core.services.authorize', [])
        .config(authorizeConfig)
        .service('AuthorizeResource', AuthorizeResource)
        .service('AuthorizeService', AuthorizeService);