import { AbstractControl, ValidationErrors } from '@angular/forms';

export function minNumericValidator(control: AbstractControl): ValidationErrors | null {
    const hasNumeric = new RegExp(/[0-9]/).test(control.value);
    return !hasNumeric ? { minNumeric: { value: control.value } } : null;
}
