import {IResponseEntity} from 'core/entity/response.entity.ts';

export interface IMenuAccessResource {
    takeMenu(menuTitle?: string): ng.IPromise<IResponseEntity>;
}

export interface IMenuResource
    extends ng.resource.IResourceClass<IResponseEntity> {
}

export class MenuResource
    implements IMenuAccessResource {
    static $inject = ['$resource', 'config'];
    private resourceLink: IMenuResource;
    
    constructor(private $resource: ng.resource.IResourceService,
        config) {
        this.resourceLink = $resource(config.mainPaths.menu, {}, {});
    }

    takeMenu(menuTitle?: string): ng.IPromise<IResponseEntity> {
        return this.resourceLink.get({
            params: {
                name: menuTitle
            }
        });
    }
}