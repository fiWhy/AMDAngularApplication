userConfig.$inject = ['$stateProvider', '$translateProvider', 'config', 'MenuDirectiveServiceProvider'];
export function userConfig($stateProvider, $translateProvider, config, MenuDirectiveServiceProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: config.documentRoot + '/modules/user/translate/locale-',
        suffix: '.json'
    });

    // $stateProvider
    //     .state('user', {
    //         abscract: true,
    //         template: "<ui-view></ui-view>"
    //     })
    //     .state('user.index', {
    //         url: "/user",
    //         controller: 'UserIndexController as user',
    //         templateUrl: `${config.documentRoot}modules/user/templates/index.html`
    //     })
    //     .state('user.edit', {
    //         url: "/user/:id",
    //         controller: 'UserEditController as user',
    //         templateUrl: `${config.documentRoot}modules/user/templates/edit.html`
    //     })
    //     .state('user.login', {
    //         url: "/login",
    //         controller: 'UserController as user',
    //         templateUrl: `${config.documentRoot}modules/user/templates/login.html`
    //     }).state('user.reset', {
    //         url: "/reset",
    //         controller: 'UserController as user',
    //         templateUrl: `${config.documentRoot}modules/user/templates/forgot.html`
    //     });
        

    MenuDirectiveServiceProvider.setMenuItem('Users', 'view_headline', 'user.index');
};