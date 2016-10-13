dashboardConfig.$inject = ['$stateProvider', 'config'];
export function dashboardConfig($stateProvider, config) {
    $stateProvider
        .state('dashboard', {
            url: "/dashboard",
            controller: 'DashboardController as dashboard',
            templateUrl: `${config.documentRoot}modules/dashboard/templates/index.html`
        })
}