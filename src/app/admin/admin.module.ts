import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateRequestComponent } from './components/create-request/create-request.component';
import { ApproveRequestComponent } from './components/approve-request/approve-request.component';
import { RequestLayoutComponent } from './layout/request-layout/request-layout.component';
import { ApproveLayoutComponent } from './layout/approve-layout/approve-layout.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { MatTableModule } from '@angular/material/table';
import { WelcomeMessageComponent } from './components/welcome-message/welcome-message.component';
import { PendingExpensesComponent } from './components/pending-expenses/pending-expenses.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    SidebarComponent,
    HeaderComponent,
    CreateRequestComponent,
    ApproveRequestComponent,
    RequestLayoutComponent,
    ApproveLayoutComponent,
    ExpenseListComponent,
    WelcomeMessageComponent,
    PendingExpensesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule
  ]
})
export class AdminModule { }

