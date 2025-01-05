import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterForm } from '@app/auth/interfaces/register-form.interface';
import AuthService from '@app/auth/services/login-service.service';

@Component({
  selector: 'app-register-page',
  standalone: false,

  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  private _snackBar = inject(MatSnackBar);


  constructor(private authService: AuthService, private router: Router) {}

  public registerForm = new FormGroup(
    {
      identification: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      rePassword: new FormControl('', [Validators.required]),
      expenseRequester: new FormControl(false),
      expenseApprover: new FormControl(false),
    },
    {
      validators: [
        this.passwordMatchValidator(),
        this.roleSelectionValidator(),
      ],
    }
  );

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
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
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
      const registerData: RegisterForm = {
        identification: formValue.identification!,
        name: formValue.name!,
        email: formValue.email!,
        password: formValue.password!,
        rePassword: formValue.rePassword!,
        roles: roles,
      };
      this.authService.register(registerData).subscribe({
        next: () => {
          this.openSnackBar('Registro exitoso', 'Cerrar');

          console.log('Registro exitoso');
        },
        error: (error) => {
          this.openSnackBar(error.error.message, 'Cerrar');
        },
      });
    }
  }
}
