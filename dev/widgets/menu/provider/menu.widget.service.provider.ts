import {IMenuWidgetServiceImplementation} from '../services/menu.widget.service';
import {MenuEntity, IMenuEntity} from '../entities/menu.entity';
import {MenuItemEntity, IMenuItemEntity} from '../entities/menu.item.entity';

export class MenuWidgetServiceProvider
    implements ng.IServiceProvider{

    public items: Array<IMenuItemEntity> = [];

    public setMenuItem(title: string, icon: string, sref: string) {
        this.items.push(new MenuItemEntity(title, icon, sref));
    }

    public $get(MenuWidgetServiceImplementation: IMenuWidgetServiceImplementation): IMenuWidgetServiceImplementation {
        MenuWidgetServiceImplementation.setItems(this.items);
        return MenuWidgetServiceImplementation;
    }
}