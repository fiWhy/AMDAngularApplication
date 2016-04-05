userConfig.$inject = ['$stateProvider'];
export function userConfig($stateProvider) {
    $stateProvider
        .state('user', {
            abscract:true,
            template: "<ui-view></ui-view>"
        })
        .state('user.login', {
            url: "/login",
            controller: 'UserController as user',
            templateUrl: "./modules/user/templates/login.html"
        }).state('user.reset', {
            url: "/reset",
            controller: 'UserController as user',
            templateUrl: "./modules/user/templates/forgot.html"
        });
};