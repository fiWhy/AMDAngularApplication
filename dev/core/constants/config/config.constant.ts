export function ConfigConstant() {
    var apiUrl = '/api/public/admin/';
    return {
        apiUrl: apiUrl,
        documentRoot: 'app',
        modulesRoot: 'app/modules',
        mainPaths: {
            menu: apiUrl + 'menu/:name',
            authorize: apiUrl + 'auth',
            // authorize: 'google.com.ua'
        },
        language: 'en',
    }
}