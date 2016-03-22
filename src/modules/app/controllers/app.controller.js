export class AppController {
    constructor(AppService, AuthorizeService) {
        this.AppService = AppService;
        this.AuthorizeService = AuthorizeService;
        AuthorizeService.test();
    }
}
AppController.$inject = ['AppService', 'AuthorizeService'];
