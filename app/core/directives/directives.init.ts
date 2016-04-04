import './formelement/formelement.ts';
import {TaskCardDirective} from './taskcard/taskcard.directive.ts';
import {SliderDirective} from './slider/slider.directive.ts';
import {DropdownDirective} from './dropdown/dropdown.directive.ts';
import {ParallaxDirective} from './parallax/parallax.directive.ts';
import {SidebarDirective} from './sidebar/sidebar.directive.ts';

angular.module('app.core.directives', [
    'app.core.directives.formelement'
])

    //# Task card
    .directive('taskCard', () => new TaskCardDirective)
    
    //# Slider 
    .directive('slider', () => new SliderDirective)
    
    //# Dropdown 
    .directive('dropdown', () => new DropdownDirective)
    
    //# Parallax 
    .directive('parallax', () => new ParallaxDirective)
    
    //# Sidebar 
    .directive('sidebar', () => new SidebarDirective)