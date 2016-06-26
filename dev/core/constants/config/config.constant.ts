export function ConfigConstant() {
    var apiUrl = '/api/';
    return {
        apiUrl: apiUrl,
        documentRoot: 'app',
        modulesRoot: 'app/modules',
        mainPaths: {
            menu: apiUrl + 'menu/:name',
            authorize: apiUrl + 'login',
            cars: apiUrl + 'cars/:id',
            posts: apiUrl + 'posts/:id',
            shop: apiUrl + 'shop/:id?include=colors,sizes,images,groups'
            // authorize: 'google.com.ua'
        },
        language: 'en',
    }
}