import './constants/constants.init.ts';
import './services/services.init.ts';
import './directives/directives.init.ts';
import './config/config.ts';

angular.module('app.core', [
    'ngMockE2E',
    'app.core.constants',
    'app.core.directives',
    'app.core.services',
    'app.core.config',
])