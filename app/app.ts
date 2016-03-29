/// <reference path="../typings/tsd.d.ts" />
import 'angular';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-resource';
import 'loading-bar';
import 'angular-mocks';

import './core/core.init.ts';
import './modules/modules.init.ts';
import './scripts/scripts.ts';

var app = angular.module('app', [
    'ngAnimate',
    'ngResource',
    'angular-loading-bar',
    'ui.router',
    'app.core',
    'app.modules',
]);


angular.bootstrap(document, ['app']);

export default app;