/// <reference path="../typings/tsd.d.ts" />
import './core/core.init.ts';
import './modules/modules.init.ts';
import './scripts/scripts.ts';

var app = angular.module('app', [
    'ngMaterial',
    'ngAnimate',
    'ngResource',
    'ui.router',
    'app.core',
    'app.modules',
]);

angular.bootstrap(document, ['app']);

export default app;