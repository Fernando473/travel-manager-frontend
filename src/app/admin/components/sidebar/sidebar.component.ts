import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "@app/admin/services/user.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-sidebar',
  standalone:false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  isExpenseRequester$: Observable<boolean>;
  isExpenseApprover$: Observable<boolean>;

  constructor(private authService: UserService,

    private router: Router
  ) {
    this.isExpenseRequester$ = this.authService.hasRole('ROLE_EXPENSE_REQUESTER');
    this.isExpenseApprover$ = this.authService.hasRole('ROLE_EXPENSE_APPROVER');
  }

  ngOnInit() {
    this.authService.getUserInfo().subscribe();
  }

  logout() {
    this.router.navigate(['/auth/login']);
  }
}
