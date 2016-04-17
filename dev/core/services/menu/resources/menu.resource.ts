import {IMenuEntity, MenuEntity} from '../entity/menu.entity';

export interface IMenuAccessResource {
    takeMenu(menuTitle?: string): ng.IPromise<IMenuEntity>;
}

export interface IMenuResource
    extends ng.resource.IResource<IMenuEntity> {
        
}

export class MenuResource
    implements IMenuAccessResource {
    static $inject = ['$resource', 'config'];
    private resourceLink: ng.resource.IResourceClass<IMenuResource>;
    
    constructor(private $resource: ng.resource.IResourceService,
        config) {
        this.resourceLink = $resource(config.mainPaths.menu, {}, {});
    }

    takeMenu(menuTitle?: string): ng.IPromise<IMenuEntity> {
        return this.resourceLink.query().$promise;
    }
}