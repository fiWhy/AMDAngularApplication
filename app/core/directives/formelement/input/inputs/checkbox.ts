function indeterminateCheckbox(element) {
    // Set checkbox on forms.html to indeterminate
    if (element[0].id == 'indeterminate-checkbox')
        element[0].indeterminate = true;
}

export function Checkbox(scope, element, attrs) {
    indeterminateCheckbox(element);
}