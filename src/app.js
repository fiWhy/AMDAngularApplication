import '../node_modules/angular/angular';
import '../node_modules/angular-ui-router/release/angular-ui-router';
import './core/core.init';
import './modules/modules.init';
import '../node_modules/angular-animate/angular-animate';
import '../node_modules/angular-resource/angular-resource';
import '../node_modules/angular-loading-bar/build/loading-bar.js';
import './scripts/scripts';
import '../node_modules/angular-mocks/angular-mocks';
var app = angular.module('app', [
    'ngAnimate',
    'ngResource',
    'angular-loading-bar',
    'ui.router',
    'app.core',
    'app.modules',
]);
export default app;
