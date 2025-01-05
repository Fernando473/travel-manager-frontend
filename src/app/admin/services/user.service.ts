import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from '@app/auth/interfaces/user-info.interface';
import { environment } from '@env/environment';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl = environment.apiUrl;
  private userRoles = new BehaviorSubject<string[]>([]);
  public userRoles$ = this.userRoles.asObservable();

  constructor(private readonly http: HttpClient) { }

  getUserInfo(): Observable<UserInfo> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<UserInfo>(`${this.apiUrl}/users/me`, { headers })
      .pipe(
        tap(userInfo => this.userRoles.next(userInfo.roles)),
        map(userInfo => userInfo)
      );
  }

  hasRole(role: string): Observable<boolean> {
    return this.userRoles$.pipe(
      map(roles => roles.includes(role))
    );
  }
}
