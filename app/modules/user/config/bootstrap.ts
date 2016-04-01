userConfig.$inject = ['$stateProvider'];
export function userConfig($stateProvider) {
    $stateProvider
        .state('login', {
            url: "/login",
            controller: 'UserController as user',
            templateUrl: "./modules/user/templates/login.html"
        })
}