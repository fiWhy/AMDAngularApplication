import {IMenuResource, MenuResource} from './resources/menu.resource.ts';
import {IFullResponseEntity} from 'core/entity/fullresponse.entity.ts';

export interface IMenuService {
    
}

export class MenuService
    implements IMenuService {
    static $inject = ['MenuResource'];
    constructor(private MenuResource: IMenuResource) {
        
    }
    
    takeMenu(menuTitle?: string): ng.IPromise<IFullResponseEntity> {
        return this.MenuResource.takeMenu(menuTitle);
    }
}


export default angular.module('app.core.services.menu', []);