import { AbstractControl, ValidationErrors } from '@angular/forms';

export function minLowercaseValidator(control: AbstractControl): ValidationErrors | null {
    const hasLowercase = new RegExp(/[a-z]/).test(control.value);
    return !hasLowercase ? { minLowercase: { value: control.value } } : null;
}
