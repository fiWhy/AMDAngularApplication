import './app/app.init';
import './dashboard/dashboard.init';
import './user/user.init';
import './carrental/carrental.init';

angular.module('app.modules', [
    'app.modules.app',
    'app.modules.dashboard',
    'app.modules.user',
    'app.modules.carrental'
]);