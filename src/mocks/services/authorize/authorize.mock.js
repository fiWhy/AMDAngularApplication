define(["require", "exports", 'core/services/authorize/entity/authorize.entity', 'appMocks'], function (require, exports, authorize_entity_1) {
    "use strict";
    angular.module('app.mocks')
        .run(AuthorizeMockRun);
    AuthorizeMockRun.$inject = ['$httpBackend', 'config'];
    function AuthorizeMockRun($httpBackend, config) {
        var response;
        var authorizeCheckUrl = '';
        console.log('ad');
        response = new authorize_entity_1.AuthorizeEntity(true, { name: 'Denis' });
        $httpBackend.whenGET(config.mainPaths.authorize)
            .respond(function (method, url, data) {
            return response;
        });
    }
    exports.AuthorizeMockRun = AuthorizeMockRun;
});
