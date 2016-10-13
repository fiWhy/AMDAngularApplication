export class RequestInterceptor {
    static $inject = ['$cookies'];
    constructor(private $cookies: ng.cookies.ICookiesService) {
        this.request = (config) => {
            var date = new Date();
            var token = $cookies.get('token');
            if (token) {
                config.headers.Authorization = 'Bearer ' + token;
                //config.headers['Content-Type'] = 'application/json';
            }
                
            return config;
        }
    }
    
    request(config) {
    }
}