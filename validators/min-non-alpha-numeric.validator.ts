import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function minNonAlphaNumericValidator(control: AbstractControl): ValidationErrors | null {
    const hasNonAlphaNumeric = new RegExp(/[^a-zA-Z0-9]/).test(control.value);
    return !hasNonAlphaNumeric ? { minNonAlphaNumeric: { value: control.value } } : null;
}
