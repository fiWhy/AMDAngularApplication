import {InputDirective} from './input/input.directive.ts';
import {SelectDirective} from './select/select.directive.ts';

angular.module('app.core.directives.formelement', [])
    //# Input directive
    .directive('input', InputDirective)
    
    //# Select directive
    .directive('select', SelectDirective)