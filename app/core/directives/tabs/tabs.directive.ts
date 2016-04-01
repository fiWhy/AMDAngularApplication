export function TabsDirective() {
    
    function link(scope, element, attrs) {
        console.log(element);
        $(element).show().tabs();
    }
    
    return {
        restrict: 'EAC',
        link: link
    }
}