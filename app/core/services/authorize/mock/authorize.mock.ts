mock.$inject = ['$httpBackend', 'config', '$q'];
export function mock($httpBackend: ng.IHttpBackendService, config, $q: ng.IQService) {
    var authorize = '/api/authorize';
    $httpBackend.whenPOST(authorize)
        .respond((method, url, data) => {
            var userData = JSON.parse(data),
                result;
            if (userData.username == 'admin' && userData.password == 'admin') {
                var nowDate = new Date();
                result = [200, {
                    meta: {
                        code: 200,
                    },
                    data: {
                        userData: {
                            username: 'admin',
                            role: 'admin'
                        },
                        tokenData: {
                            access_token: 12345,
                            tokenExpireTime: nowDate.getTime() + ((60 * 60 * 24) * 2)
                        }
                    }
                }];
            } else {
                result = [401, {
                    meta: {
                        code: 401,
                        error_message: 'Username or password is not valid!'
                    },
                    data: {

                    }
                }]
            }

            return result;
        })


    $httpBackend.whenPOST(authorize + '/reset')
        .respond((method, url, data) => {
            var resetData = JSON.parse(data),
                result;
            if (resetData.username == 'admin' && resetData.email == 'admin@gmail.com') {
                result = [401, {
                    meta: {
                        code: 200
                    }
                }];
            } else {
                result = [200, {
                    meta: {
                        code: 401,
                        error_message: 'Wrong credentials!'
                    }
                }];
            }
            return result;
        });
}