export function SliderDirective() {

    function link(scope, element, attrs) {
        var full_width = attrs.full_width || true;
        $(element).slider({
            full_width: full_width
        });
    }

    return {
        restrict: 'AC',
        link: link
    }
}