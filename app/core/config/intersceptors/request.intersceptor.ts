export class RequestInterceptor {
    static $inject = ['$cookies'];
    constructor(private $cookies: ng.cookies.ICookiesService) {
        this.request = (config) => {
            var date = new Date();
            if ($cookies.get('access_token') && parseInt($cookies.get('tokenExpireTime')) < date.getTime())
                config.headers.Authorization = 'Bearer ' + this.$cookies.get('access_token');
                
            return config;
        }
    }
    
    request(config) {
    }
}