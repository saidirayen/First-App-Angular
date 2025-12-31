import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { AdminHome } from './admin-home/admin-home';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminHome
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})

export class AdminModule {}
