import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

@Directive({
  selector: '[minLowercase]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinLowercaseValidatorDirective, multi: true }],
  standalone: true
})
export class MinLowercaseValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return this.minLowercaseValidator()(control)
  }

  minLowercaseValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasLowercase = new RegExp(/[a-z]/).test(control.value);
      return !hasLowercase ? { minLowercase: { value: control.value } } : null;
    };
  }
}