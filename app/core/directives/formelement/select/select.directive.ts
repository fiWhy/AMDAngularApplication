export function SelectDirective() {
    
    function link(scope, element, attrs) {
        $(element).not('.disabled').material_select();
    }
    
    return {
        restrict: 'E',
        link: link
    }
}