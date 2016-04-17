import './alert/alert.service';
import './authorize/authorize.service';
import './menu/menu.service';

angular.module('app.core.services', [
    'app.core.services.alerts',
    'app.core.services.authorize',
    'app.core.services.menu'
]);

