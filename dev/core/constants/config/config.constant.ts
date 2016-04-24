export function ConfigConstant() {
    var apiUrl = '/api/public/admin/';
    return {
        apiUrl: apiUrl,
        documentRoot: 'app',
        modulesRoot: 'app/modules',
        mainPaths: {
            menu: apiUrl + 'menu/:name',
            authorize: apiUrl + 'auth',
            cars: apiUrl + 'cars/:id',
            // authorize: 'google.com.ua'
        },
        language: 'en',
    }
}