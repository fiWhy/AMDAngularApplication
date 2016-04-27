import {ResponseIntersceptor} from './intersceptors/response.intersceptor';
import {RequestInterceptor} from './intersceptors/request.intersceptor';
angular.module('app.core.config', [])
    .service('ResponseIntersceptor', ResponseIntersceptor)
    .service('RequestIntersceptor',  RequestInterceptor)
    .run(configMockRoutes)
    .config(config)
    .config(httpConfig)
    .config(menuConfig);

config.$inject = ['$locationProvider', '$mdThemingProvider'];
export function config($locationProvider, $mdThemingProvider) {
     //$mdThemingProvider.theme('default')
     //    .primaryPalette('red')
     //    .accentPalette('red');
     //$locationProvider.html5Mode({
     //    enabled: false,
     //    requireBase: false
     //});
}

function configMockRoutes() {
    // $httpBackend.whenGET(/.*\.html/).passThrough();
}

httpConfig.$inject = ['$httpProvider'];
function httpConfig($httpProvider: ng.IHttpProvider) {
    $httpProvider.interceptors.push('ResponseIntersceptor');
    $httpProvider.interceptors.push('RequestIntersceptor');
}

menuConfig.$inject = ['MenuDirectiveServiceProvider'];
function menuConfig(MenuDirectiveServiceProvider) {
    MenuDirectiveServiceProvider.setMenuItem('Dashboard', 'view_headline', 'dashboard');
    MenuDirectiveServiceProvider.setMenuItem('Cars', 'view_headline', 'cars.index');
}