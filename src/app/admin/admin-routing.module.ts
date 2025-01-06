import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { RequestLayoutComponent } from './layout/request-layout/request-layout.component';
import { ApproveLayoutComponent } from './layout/approve-layout/approve-layout.component';
import { WelcomeMessageComponent } from './components/welcome-message/welcome-message.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'create-expense',
        component: RequestLayoutComponent
      },
      {
        path: 'approve-expense',
        component: ApproveLayoutComponent
      },
      {
        path:'welcome',
        component: WelcomeMessageComponent
      },
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
