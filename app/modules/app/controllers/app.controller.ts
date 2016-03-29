export interface IAppController {

}

export class AppController
    implements IAppController {
        static $inject: string[] = ['AppService', 'AuthorizeService'];
        constructor(private AppService, private AuthorizeService) {
            AuthorizeService.test();
        }
}