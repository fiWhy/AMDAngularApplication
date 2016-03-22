angular.module('app.mocks')
    .run(AuthorizeMockRun);
    
    AuthorizeMockRun.$inject = ['$httpBackend'];
    function AuthorizeMockRun($httpBackend) {
        
    }