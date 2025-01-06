import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@app/admin/services/user.service';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  canActivate() {
    return this.userService.getUserInfo().pipe(
      map(userInfo => {
        if (userInfo.roles.includes('ROLE_EXPENSE_REQUESTER')) {
          this.router.navigate(['/admin/dashboard/create-expense']);
        } else if (userInfo.roles.includes('ROLE_EXPENSE_APPROVER')) {
          this.router.navigate(['/admin/dashboard/approve-expense']);
        } else {
          this.router.navigate(['/dashboard']);
        }
        return false;
      })
    );
  }
}
