import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SubmitformComponent } from './submitform/submitform.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, SubmitformComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule ,
    Ng2SmartTableModule
  ]
})
export class DashboardModule { }
