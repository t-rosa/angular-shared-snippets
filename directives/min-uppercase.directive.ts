import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

@Directive({
  selector: '[minUppercase]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinUppercaseValidatorDirective, multi: true }],
  standalone: true
})
export class MinUppercaseValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return this.minUppercaseValidator()(control)
  }

  minUppercaseValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasUppercase = new RegExp(/[A-Z]/).test(control.value);
      return !hasUppercase ? { minUppercase: { value: control.value } } : null;
    };
  }
}