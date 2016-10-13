import './alert/alert.service';
import './authorize/authorize.service';

angular.module('app.core.services', [
    'app.core.services.alerts',
    'app.core.services.authorize'
]);

