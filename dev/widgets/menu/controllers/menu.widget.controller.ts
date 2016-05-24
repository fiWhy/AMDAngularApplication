import {IMenuWidgetServiceImplementation} from '../services/menu.widget.service';
import {IMenuEntity} from '../entities/menu.entity';

export interface IMenuWidgetController{

}

export class MenuWidgetController
    implements IMenuWidgetController {
    public static $inject = ['MenuWidgetService'];
    public menu: IMenuEntity = [];
    constructor(MenuWidgetService: IMenuWidgetServiceImplementation) {
        this.menu = MenuWidgetService.getItems();
    }

}