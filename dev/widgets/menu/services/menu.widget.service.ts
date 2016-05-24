import {IMenuItemEntity} from '../entities/menu.item.entity';
import {IMenuEntity} from '../entities/menu.entity';

export interface IMenuWidgetServiceImplementation {
    setItems(items: Array<IMenuItemEntity>): void;
    getItems(): IMenuEntity;
}

export class MenuWidgetServiceImplementation
    implements IMenuWidgetServiceImplementation {
    public items: IMenuEntity;
    public setItems(items: Array<IMenuItemEntity>): void {
        this.items = items;
    }

    public getItems(): IMenuEntity {
        return this.items;
    }
}