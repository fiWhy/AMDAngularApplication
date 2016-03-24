define(["require", "exports", 'angular', './alert/alert.service', './authorize/authorize.service'], function (require, exports) {
    "use strict";
    angular.module('app.core.services', [
        'app.core.services.alert',
        'app.core.services.authorize'
    ]);
});
