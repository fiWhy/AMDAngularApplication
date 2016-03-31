import {routes} from './routes.ts';

angular.module('app.core.config', [])
    .config(config)
    .config(routes);

export function config($locationProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('light-blue')
        .accentPalette('blue');
    // $locationProvider.html5Mode({
    //     enabled: false,
    //     requireBase: false
    // });
}
