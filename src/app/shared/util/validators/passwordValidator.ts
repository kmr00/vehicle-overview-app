import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class PasswordValidator {
  static validatePassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const errors: ValidationErrors = {};
      const value = control.value as string;

      if (value.length < 8) {
        errors['minlength'] = true;
      }
      if (!/[!@#$%^&*]/.test(value)) {
        errors['specialChar'] = true;
      }
      if (!/[A-Z]/.test(value)) {
        errors['uppercase'] = true;
      }
      if (!/[0-9]/.test(value)) {
        errors['numeric'] = true;
      }

      return Object.keys(errors).length ? errors : null;
    };
  }
}
