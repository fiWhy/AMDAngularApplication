import './formelement/formelement.ts';
import {TaskCardDirective} from './taskcard/taskcard.directive.ts';
import {SliderDirective} from './slider/slider.directive.ts';
import {DropdownDirective} from './dropdown/dropdown.directive.ts';
import {TabsDirective} from './tabs/tabs.directive.ts';
import {ParallaxDirective} from './parallax/parallax.directive.ts';

angular.module('app.core.directives', [
    'app.core.directives.formelement'
])

    //# Task card
    .directive('taskCard', TaskCardDirective)
    
    //# Slider 
    .directive('slider', SliderDirective)
    
    //# Dropdown 
    .directive('dropdown', DropdownDirective)
    
    //# Tab 
    .directive('tabs', TabsDirective)
    
    //# Parallax 
    .directive('parallax', ParallaxDirective)