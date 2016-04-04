import {IFullResponseEntity} from 'core/entity/fullresponse.entity.ts';

export interface IMenuAccessResource {
    takeMenu(menuTitle?: string): ng.IPromise<IFullResponseEntity>;
}

export interface IMenuResource
    extends ng.resource.IResourceClass<IFullResponseEntity> {

}

export class MenuResource
    implements IMenuAccessResource {
    static $inject = ['$resource', 'config'];
    resourceLink: ng.resource.IResourceClass<IMenuResource>;
    constructor(private $resource: ng.resource.IResourceService, config) {
        this.resourceLink = $resource(config.mainPaths.menu, {}, {});
    }

    takeMenu(menuTitle?: string): ng.IPromise<IFullResponseEntity> {
        return this.resourceLink.get({
            params: {
                name: menuTitle
            }
        });
    }
}