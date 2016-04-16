import {ResponseIntersceptor} from './intersceptors/response.intersceptor.ts';
import {RequestInterceptor} from './intersceptors/request.intersceptor.ts';
angular.module('app.core.config', [])
    .service('ResponseIntersceptor', ResponseIntersceptor)
    .service('RequestIntersceptor',  RequestInterceptor)
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

function configMockRoutes() {
    // $httpBackend.whenGET(/.*\.html/).passThrough();
}

httpConfig.$inject = ['$httpProvider'];
function httpConfig($httpProvider: ng.IHttpProvider) {
    $httpProvider.interceptors.push('ResponseIntersceptor');
    $httpProvider.interceptors.push('RequestIntersceptor');
}