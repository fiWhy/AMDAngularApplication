import {ResponseIntersceptor} from './intersceptors/response.intersceptor';
import {RequestInterceptor} from './intersceptors/request.intersceptor';
angular.module('app.core.config', [])
    .service('ResponseIntersceptor', ResponseIntersceptor)
    .service('RequestIntersceptor', RequestInterceptor)
    .run(configMockRoutes)
    .config(config)
    .config(httpConfig)
    .config(menuConfig)
    .config(languageConfig)
    .config(WYSIWYG);

config.$inject = ['$locationProvider'];
export function config($locationProvider) {
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

languageConfig.$inject = ['$translateProvider'];
function languageConfig($translateProvider) {
    $translateProvider.preferredLanguage('ru');
}

menuConfig.$inject = ['MenuDirectiveServiceProvider'];
function menuConfig(MenuDirectiveServiceProvider) {
    // MenuDirectiveServiceProvider.setMenuItem('Dashboard', 'view_headline', 'dashboard');
}

WYSIWYG.$inject = ['$provide'];
function WYSIWYG($provide) {
    $provide.decorator('taOptions', ['$delegate', function (taOptions) {
        taOptions.toolbar = [
            ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote'],
            ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],
            ['html', 'insertImage', 'insertLink', 'insertVideo']
        ];

        return taOptions;
    }]);
}