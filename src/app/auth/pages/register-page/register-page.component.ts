import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  standalone: false,

  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

 public registerForm = new FormGroup({
    identification: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rePassword: new FormControl('', [Validators.required]),
    expenseRequester: new FormControl(false),
    expenseApprover: new FormControl(false),
  }, {
    validators: [
      this.passwordMatchValidator(),
      this.roleSelectionValidator()
    ]
  });

  private roleSelectionValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const expenseRequester = formGroup.get('expenseRequester')?.value;
      const expenseApprover = formGroup.get('expenseApprover')?.value;

      if (!expenseRequester && !expenseApprover) {
        return { noRoleSelected: true };
      }

      return null;
    };
  }

  private passwordMatchValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get('password')?.value;
      const rePassword = formGroup.get('rePassword')?.value;

      return password === rePassword ? null : { passwordMismatch: true };
    };
  }

  onRegister() {
    if (this.registerForm.valid) {
      const roles: string[] = [];
      if (this.registerForm.get('expenseRequester')?.value) {
        roles.push('EXPENSE_REQUESTER');
      }
      if (this.registerForm.get('expenseApprover')?.value) {
        roles.push('EXPENSE_APPROVER');
      }

      const formValue = this.registerForm.value;
      const registerData = {
        identification: formValue.identification,
        name: formValue.name,
        email: formValue.email,
        password: formValue.password,
        rePassword: formValue.rePassword,
        roles: roles
      };

      // Enviar registerData al servicio
      console.log(registerData);
    }
  }



}
