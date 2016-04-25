import './formelement/formelement';
import './menu/menu.directive';
import {TaskCardDirective} from './taskcard/taskcard.directive';
import {SliderDirective} from './slider/slider.directive';
import {DropdownDirective} from './dropdown/dropdown.directive';
import {ParallaxDirective} from './parallax/parallax.directive';
import {SidebarDirective} from './sidebar/sidebar.directive';

angular.module('app.core.directives', [
    'app.core.directives.formelement',
    'app.core.directives.menu'
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