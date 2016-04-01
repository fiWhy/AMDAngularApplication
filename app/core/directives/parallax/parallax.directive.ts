export function ParallaxDirective() {
    
    function link(scope, element, attrs) {
        $(element).parallax();    
    }
    
    return {
        restrict: 'EAC',
        link: link
    }
}