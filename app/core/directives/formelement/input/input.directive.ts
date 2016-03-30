import {Checkbox} from './inputs/checkbox.ts';

export function InputDirective() {
    
    // Handle and push effects to all types of input
    function link(scope, element, attrs) {
        var type = attrs.type;
        switch (type) {
            case 'checkbox':
                Checkbox(scope, element, attrs);
                break;
        }
    }
    
    return {
        restrict: 'E',
        // require: '^ngModel',
        link: link
    }
}

