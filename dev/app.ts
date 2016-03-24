/// <reference path="../typings/tsd.d.ts" />
import 'angular';
import 'uiRouter';
import 'ngAnimate';
import 'ngResource';
import 'ngLoadingBar';

import './core/core.init';
import './modules/modules.init';
import './scripts/scripts';

// import 'ngMocks';

var app = angular.module('app', [
    'ngAnimate',
    'ngResource',
    'angular-loading-bar',
    'ui.router',
    'app.core',
    'app.modules',
]);

export default app;