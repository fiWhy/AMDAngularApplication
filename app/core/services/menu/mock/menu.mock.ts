MenuMock.$inject = ['$httpBackend'];
export function MenuMock($httpBackend: ng.IHttpBackendService) {
    var url = '/api/menu';
        $httpBackend.whenGET(url)
            .respond((request, headers) => {
                console.log(headers);
            })
}