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
    public controllerAs = 'menuDirective';
    public templateUrl: string;

    constructor(config) {
        this.templateUrl = config.documentRoot + '/core/directives/menu/templates/menu.template.html';
    }
}


export default angular.module('app.core.directives.menu', [])
    .service('MenuDirectiveServiceImplementation', MenuWidgetServiceImplementation)
    .provider('MenuDirectiveService', MenuWidgetServiceProvider)
    .directive('menuWidget', (config) => new MenuWidget(config));