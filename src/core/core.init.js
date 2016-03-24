define(["require", "exports", 'angular', './constants/constants.init', './services/services.init', './directives/directives.init', './config/config'], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = angular.module('app.core', [
        'app.core.constants',
        'app.core.directives',
        'app.core.config',
        'app.core.services',
    ]);
});
