angular.module('app.core.config', [])
    .config(config)

config.$inject = ['$locationProvider', '$mdThemingProvider'];
export function config($locationProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('light-blue')
        .accentPalette('blue');
    // $locationProvider.html5Mode({
    //     enabled: false,
    //     requireBase: false
    // });
}
