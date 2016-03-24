import 'angular';

import './constants/constants.init';
import './services/services.init';
import './directives/directives.init';
import './config/config';

export default angular.module('app.core', [
    'app.core.constants',
    'app.core.directives',
    'app.core.config',
    'app.core.services',
])