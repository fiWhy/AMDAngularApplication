define(["require", "exports", 'angular', './app/app.init', './dashboard/dashboard.init', './user/user.init'], function (require, exports) {
    "use strict";
    angular.module('app.modules', [
        'app.modules.app',
        'app.modules.dashboard',
        'app.modules.user'
    ]);
});
