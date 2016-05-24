import {IMenuEntity} from './entities/menu.entity';
import {MenuWidgetController} from './controllers/menu.widget.controller';
import {MenuWidgetServiceProvider} from './provider/menu.widget.service.provider';
import {MenuWidgetServiceImplementation, IMenuWidgetServiceImplementation} from './services/menu.widget.service';

export interface IMenuWidget
    extends ng.IDirective {
    
}

export class MenuWidget
    implements IMenuWidget {
    public static $inject = ['config'];
    public restrict = 'E';
    public controller = MenuWidgetController;
    public controllerAs = 'menuWidget';
    public templateUrl: string;

    constructor(config) {
        this.templateUrl = config.documentRoot + '/widgets/menu/templates/menu.template.html';
    }
}


export default angular.module('app.widgets.menu', [])
    .service('MenuWidgetServiceImplementation', MenuWidgetServiceImplementation)
    .provider('MenuWidgetService', MenuWidgetServiceProvider)
    .directive('menuWidget', (config) => new MenuWidget(config));