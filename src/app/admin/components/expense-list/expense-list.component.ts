import { Component } from '@angular/core';
import { ExpenseResponse } from '@app/admin/interfaces/Expense';
import { ExpenseService } from '@app/admin/services/expense.service';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-expense-list',
  standalone: false,

  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css',
})
export class ExpenseListComponent {
  constructor(private expenseService: ExpenseService) {}

  dataSource: ExpenseResponse[] = [];
  displayedColumns: string[] = [
    'Estado',
    'Fecha de Registro',
    'Tipo',
    'Nombre del Proyecto',
    'Motivo del Viaje',
    'Fecha de Invitación',
    'Solicitante',
    'Fecha de Viaje',
    'Aprobado/Rechazado'
  ];
  ngOnInit() {
    this.expenseService.expenseListUpdated$.pipe(
      switchMap(() => this.expenseService.getExpenses()),
      map((expenses) =>
        expenses.map((expense) => ({

          ...expense,
          invitationTrip: expense.invitationTrip ? new Date(expense.invitationTrip) : null,
          registerDate: new Date(expense.registerDate),
          dateTrip: expense.dateTrip ? new Date(expense.dateTrip) : null,
        }))
      )
    ).subscribe(transformedExpenses => {
      this.dataSource = transformedExpenses;
    });

    this.loadExpenses();
  }

  private loadExpenses() {
    this.expenseService.getExpenses().pipe(
      map((expenses) =>
        expenses.map((expense) => ({
          ...expense,
          invitationTrip: expense.invitationTrip ? new Date(expense.invitationTrip) : null,
          registerDate: new Date(expense.registerDate),
          dateTrip: expense.dateTrip ? new Date(expense.dateTrip) : null,
        }))
      )
    ).subscribe(transformedExpenses => {
      this.dataSource = transformedExpenses;
    });
  }
}
