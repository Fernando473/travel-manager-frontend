import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { RequestLayoutComponent } from './layout/request-layout/request-layout.component';
import { ApproveLayoutComponent } from './layout/approve-layout/approve-layout.component';

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
        path: '',
        redirectTo: 'create-expense',
        pathMatch: 'full'
      }
      // Aquí puedes agregar más rutas hijas
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
