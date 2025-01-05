import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Expense, ExpenseResponse } from '../interfaces/Expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenseListUpdated = new BehaviorSubject<void>(undefined);

  private readonly apiUrl = environment.apiUrl;
  expenseListUpdated$ = this.expenseListUpdated.asObservable();

  constructor(private http: HttpClient) { }

  createExpense(expense: Expense): Observable<Expense> {
    const token = localStorage.getItem('token');
    const headers = {
      'Authorization': `Bearer ${token}`
    };

    return this.http.post<Expense>(`${this.apiUrl}/expenses/`, expense, { headers }).pipe(
      tap(() => {
        this.expenseListUpdated.next();
      })
    );
  }

  getExpenses(): Observable<ExpenseResponse[]> {
    const token = localStorage.getItem('token');
    const headers = {
      'Authorization': `Bearer ${token}`
    };
    return this.http.get<ExpenseResponse[]>(`${this.apiUrl}/expenses/`, { headers });
  }
}
