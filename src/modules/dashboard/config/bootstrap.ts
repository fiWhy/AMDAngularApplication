dashboardConfig.$inject = ['$stateProvider', 'config', 'MenuDirectiveServiceProvider'];
export function dashboardConfig($stateProvider, config, MenuDirectiveServiceProvider) {
    $stateProvider
    .state('dashboard', {
            url: "/dashboard",
            controller: 'DashboardController as dashboard',
            templateUrl: `${config.documentRoot}modules/dashboard/templates/index.html`
        });

        
    MenuDirectiveServiceProvider.setMenuItem('Dashboard', 'view_headline', 'dashboard');
}