import './app/app.init';
import './dashboard/dashboard.init';
import './user/user.init';

angular.module('app.modules', [
    'app.modules.app',
    'app.modules.dashboard',
    'app.modules.user'
]);