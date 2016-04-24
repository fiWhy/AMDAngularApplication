export class RequestInterceptor {
    static $inject = ['$cookies'];
    constructor(private $cookies: ng.cookies.ICookiesService) {
        this.request = (config) => {
            var date = new Date();
            var token = $cookies.getObject('token');
            if (token && token.tokenExpireTime < date.getTime())
                config.headers.Authorization = 'Bearer ' + token.access_token;
                config.headers['Content-Type'] = 'application/json';
                
            return config;
        }
    }
    
    request(config) {
    }
}