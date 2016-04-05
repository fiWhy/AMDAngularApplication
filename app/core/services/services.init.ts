import './alert/alert.service.ts';
import './authorize/authorize.service.ts';
import './menu/menu.service.ts';

angular.module('app.core.services', [
    'app.core.services.alerts',
    'app.core.services.authorize',
    'app.core.services.menu'
]);

