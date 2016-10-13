
import 'ng-infinite-scroll';
import 'angular-cookies';
import 'angular-material';
import 'angular-animate';
import 'angular-resource';
import 'angular-ui-router';
import 'angular-translate';
import 'textangular/dist/textAngular-sanitize.min.js';
import 'textangular';
import 'angular-translate-loader-static-files';

import './core/core.init';
import './modules/modules.init';
import './scripts/scripts';

var app = angular.module('app', [
    'infinite-scroll',
    'ngCookies',
    'ngMaterial',
    'ngSanitize',
    'ngAnimate',
    'ngResource',
    'ui.router',
    'pascalprecht.translate',
    'textAngular',
    
    'app.core',
    'app.modules',
]);

angular.bootstrap(document, ['app']);

export default app;