import {IMenuResource, MenuResource, IMenuAccessResource} from './resources/menu.resource';
import {IMenuEntity} from './entity/menu.entity';

export interface IMenuService {
    
}

export class MenuService
    implements IMenuService {
    static $inject = ['MenuResource'];
    constructor(private MenuResource: IMenuAccessResource) {}
    
    takeMenu(menuTitle?: string): ng.IPromise<IMenuEntity> {
        return this.MenuResource.takeMenu(menuTitle);
    }
}


export default angular.module('app.core.services.menu', [])
    .service('MenuResource', MenuResource)
    .service('MenuService', MenuService);