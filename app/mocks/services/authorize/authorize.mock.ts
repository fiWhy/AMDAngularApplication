// import 'appMocks';
import 'ngMocks';
import {IAuthorizeEntity, AuthorizeEntity} from 'core/services/authorize/entity/authorize.entity';
angular.module('app.mocks.authorize', [
    'ngMocks'
])
    .run(AuthorizeMockRun);
    
    AuthorizeMockRun.$inject = ['$httpBackend', 'config'];
    export function AuthorizeMockRun($httpBackend: ng.IHttpBackendService, config) {
        var response: IAuthorizeEntity;
        var authorizeCheckUrl = ''
        
        console.log('ad');
        
        response = new AuthorizeEntity(true, {name: 'Denis'});
        
        $httpBackend.whenGET(config.mainPaths.authorize)
            .respond((method, url, data) => {
                return [200, response, {}];
            })
        
    }