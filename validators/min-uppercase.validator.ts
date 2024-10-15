import { AbstractControl, ValidationErrors } from '@angular/forms';

export function minUppercaseValidator(control: AbstractControl): ValidationErrors | null {
    const hasUppercase = new RegExp(/[A-Z]/).test(control.value);
    return !hasUppercase ? { minUppercase: { value: control.value } } : null;
}
