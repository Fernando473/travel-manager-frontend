import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Expense } from '@app/admin/interfaces/Expense';
import { ExpenseService } from '@app/admin/services/expense.service';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-create-request',
  standalone: false,

  templateUrl: './create-request.component.html',
  styleUrl: './create-request.component.css'
})
export class CreateRequestComponent {
  isSubmitting = false;
  minDate = new Date();

  constructor(
    private expenseService: ExpenseService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  public expenseForm = new FormGroup(
    {
      isNational: new FormControl(true),
      projectName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      tripReason: new FormControl('', [Validators.required, Validators.minLength(10)]),
      dateInvitationTrip: new FormControl('', Validators.required)
    }
  );


  onSubmit() {
    if (this.expenseForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      const expense: Expense = {
        isNational: this.expenseForm.value.isNational!,
        projectName: this.expenseForm.value.projectName!,
        tripReason: this.expenseForm.value.tripReason!,
        dateInvitationTrip: this.expenseForm.value.dateInvitationTrip!
      };

      this.expenseService.createExpense(expense)
        .pipe(
          tap(() => {
            this.snackBar.open('Solicitud creada exitosamente', 'Cerrar', {
              duration: 3000
            });
            this.expenseForm.reset();
          }),
          catchError(error => {
            this.snackBar.open(error.error.message || 'Error al crear la solicitud', 'Cerrar', {
              duration: 3000
            });
            return of(null);
          })
        )
        .subscribe(() => {
          this.isSubmitting = false;
        });
    }
  }

  onCancel() {
    this.router.navigate(['/admin/expenses']);
  }

  private formatDate(date: Date): string {
    if (!date) return '';
    return date.toISOString().split('T')[0];
  }
}
