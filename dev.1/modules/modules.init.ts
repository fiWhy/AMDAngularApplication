import './app/app.init.ts';
import './dashboard/dashboard.init.ts';
import './user/user.init.ts';

angular.module('app.modules', [
    'app.modules.app',
    'app.modules.dashboard',
    'app.modules.user'
]);