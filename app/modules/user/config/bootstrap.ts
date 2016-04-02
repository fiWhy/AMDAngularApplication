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
        });
};