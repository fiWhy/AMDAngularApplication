mock.$inject = ['$httpBackend', 'config'];
export function mock($httpBackend: ng.IHttpBackendService, config) {
    var authorize = '/api/authorize';
    $httpBackend.whenPOST(authorize)
        .respond((method, url, data) => {
            var userData = JSON.parse(data);
            if (userData.username == 'admin' && userData.password == 'admin') {
                var nowDate = new Date();
                return [200, {
                    username: 'admin',
                    role: 'admin',
                    token: 12345,
                    tokenExpireTime: nowDate.getTime() + ((60*60*24)*2)
                }, {
                    authorized: true
                }];
            } else {
                return [401, {
                    error: 'Username or password is not valid!'
                }, {
                    authorized: false
                }]
            }
        })
}