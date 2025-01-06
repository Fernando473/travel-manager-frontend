import { Component } from '@angular/core';
import { PendingExpense } from '@app/admin/interfaces/Expense';
import { ExpenseService } from '@app/admin/services/expense.service';
import { map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '@app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-pending-expenses',
  standalone: false,

  templateUrl: './pending-expenses.component.html',
  styleUrl: './pending-expenses.component.css'
})
export class PendingExpensesComponent {
  dataSource: PendingExpense[] = [];
  displayedColumns: string[] = [
    'Estado',
    'Fecha de Registro',
    'Tipo',
    'Nombre del Proyecto',
    'Motivo del Viaje',
    'Fecha de Invitación',
    'Solicitante',
    'Fecha de Viaje',
    'Acciones',
  ];
  constructor(private expenseService: ExpenseService, private dialog: MatDialog){}

  ngOnInit(): void {
      this.expenseService.getPendingExpenses().pipe(
        map((expenses) =>
          expenses.map((expense) => ({
            ...expense,
            invitationTrip: expense.travelExpenseByUserResponse.invitationTrip ? new Date(expense.travelExpenseByUserResponse.invitationTrip) : null,
          registerDate: new Date(expense.travelExpenseByUserResponse.registerDate),
          dateTrip: expense.travelExpenseByUserResponse.dateTrip ? new Date(expense.travelExpenseByUserResponse.dateTrip) : null,
          projectName: expense.travelExpenseByUserResponse.projectName,
          tripReason: expense.travelExpenseByUserResponse.tripReason,
          requester: expense.travelExpenseByUserResponse.requester,
          id:expense.travelExpenseApprovalId

          }))
      )).subscribe(transformedExpenses => {
        this.dataSource = transformedExpenses
        console.log(this.dataSource)
      })

  }

  openConfirmationDialog(action: 'approve' | 'reject', element: any): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: {
        title: action === 'approve' ? 'Aprobar Viatico' : 'Rechazar Viatico',
        message: action === 'approve'
          ? '¿Está seguro que desea aprobar este Viatico?'
          : '¿Está seguro que desea rechazar este Viatico?',
        action
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (action === 'approve') {
          // Lógica para aprobar
          this.expenseService.updateExpenseStatus(element.id, 'APPROVED').subscribe(response => {
            console.log(element.id)
            console.log('Aprobado', response);
            this.ngOnInit();
          });

        } else {
          this.expenseService.updateExpenseStatus(element.id, 'REJECTED').subscribe(response => {
            console.log('Rechazado', response);
            this.ngOnInit();
          });
        }
      }
    });
  }

}
