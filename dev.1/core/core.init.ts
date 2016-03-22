import './constants/constants.init.ts';
import './services/services.init.ts';
import './directives/directives.init.ts';
import './config/config.ts';
export default angular.module('app.core', [
    'app.core.constants',
    'app.core.services',
    'app.core.directives',
    'app.core.config'
])