import 'ng-infinite-scroll';
import 'angular-cookies';
import 'angular-animate';
import 'angular-resource';
import 'angular-ui-router';
import 'angular-translate';
import 'angular-translate-loader-static-files';
import 'textangular';
import 'textangular/dist/textAngular-sanitize.min.js';

import './core/core.init';
import './modules/modules.init';
import './scripts/scripts';

var app = angular.module('app', [
    'infinite-scroll',
    'ngCookies',
    'ngSanitize',
    'ngAnimate',
    'ngResource',
    'textAngular',
    'ui.router',
    'pascalprecht.translate',
    
    'app.core',
    'app.modules',
]);

angular.bootstrap(document, ['app']);

export default app;