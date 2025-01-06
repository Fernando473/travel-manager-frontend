import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { LoginResponse } from '../interfaces/login-response.interface';
import { Observable, map } from 'rxjs';
import { RegisterForm } from '../interfaces/register-form.interface';

@Injectable({
  providedIn: 'root'
})
export default class AuthService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) { }

  login(email: string, password: string): Observable<LoginResponse> {
    const loginData = { email, password };
    return this.http.post<LoginResponse>(`${this.apiUrl}/auth/login`, loginData)
      .pipe(
        map(response => {
          localStorage.setItem('token', response.jwt);
          return response;
        })
      );
  }
register(registerForm: RegisterForm): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/register`, registerForm)
      .pipe(
        map(response => {
          console.log(response);
          return response;
        })
      );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('token');
  }


}
