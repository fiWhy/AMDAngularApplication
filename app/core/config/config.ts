import {routes} from './routes.ts';

angular.module('app.core.config', [])
    .config(config)
    .config(routes);

export function config($locationProvider) {
    // $locationProvider.html5Mode({
    //     enabled: false,
    //     requireBase: false
    // });
}
