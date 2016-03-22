routes.$inject = ['$stateProvider', '$urlRouterProvider', 'config'];
export function routes($stateProvider, $urlRouterProvider, config) {
    $urlRouterProvider.otherwise('/dashboard');
}