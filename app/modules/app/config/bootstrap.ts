appConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'config'];
export function appConfig($stateProvider, $urlRouterProvider, config) {
    $urlRouterProvider.otherwise('/');
}