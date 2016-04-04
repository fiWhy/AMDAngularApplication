export function ConfigConstant() {
    var apiUrl = '/api/';
    return {
        apiUrl: apiUrl,
        documentRoot: 'app',
        modulesRoot: 'app/modules',
        mainPaths: {
            menu: apiUrl + 'menu/:name',
            authorize: apiUrl + 'authorize/:action'
        },
        language: 'en',
    }
}