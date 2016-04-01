import './alert/alert.service.ts';
import './authorize/authorize.service.ts';

angular.module('app.core.services', [
    'app.core.services.alert',
    'app.core.services.authorize'
]);

