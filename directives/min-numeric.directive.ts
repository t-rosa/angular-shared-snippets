import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

@Directive({
  selector: '[minNumeric]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinNumericValidatorDirective, multi: true }],
  standalone: true
})
export class MinNumericValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return this.minNumericValidator()(control)
  }

  minNumericValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasNumeric = new RegExp(/[0-9]/).test(control.value);
      return !hasNumeric ? { minNumeric: { value: control.value } } : null;
    };
  }
}