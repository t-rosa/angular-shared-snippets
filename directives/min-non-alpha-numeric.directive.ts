import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

@Directive({
  selector: '[minNonAlphaNumeric]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinNonAlphaNumericValidatorDirective, multi: true }],
  standalone: true
})
export class MinNonAlphaNumericValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return this.minNonAlphaNumericValidator()(control)
  }

  minNonAlphaNumericValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasNonAlphaNumeric = new RegExp(/[^a-zA-Z0-9]/).test(control.value);
      return !hasNonAlphaNumeric ? { minNonAlphaNumeric: { value: control.value } } : null;
    };
  }
}