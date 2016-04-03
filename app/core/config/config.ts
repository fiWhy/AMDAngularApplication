import {ResponseIntersceptor} from './intersceptors/response.intersceptor.ts';
angular.module('app.core.config', [])
    .factory('ResponseIntersceptor', () => new ResponseIntersceptor)
    .run(configMockRoutes)
    .config(config)
    .config(httpConfig);

config.$inject = ['$locationProvider', '$mdThemingProvider'];
export function config($locationProvider, $mdThemingProvider) {
    // $mdThemingProvider.theme('default')
    //     .primaryPalette('light-blue')
    //     .accentPalette('blue');
    // $locationProvider.html5Mode({
    //     enabled: false,
    //     requireBase: false
    // });
}

configMockRoutes.$inject = ['$httpBackend']
function configMockRoutes($httpBackend: ng.IHttpBackendService) {
    $httpBackend.whenGET(/.*\.html/).passThrough();
}

httpConfig.$inject = ['$httpProvider'];
function httpConfig($httpProvider: ng.IHttpProvider) {
    $httpProvider.interceptors.push('ResponseIntersceptor');
}