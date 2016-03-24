define(["require", "exports", './config/config.constant', 'angular'], function (require, exports, config_constant_1) {
    "use strict";
    angular.module('app.core.constants', [])
        .constant('config', config_constant_1.ConfigConstant());
});
