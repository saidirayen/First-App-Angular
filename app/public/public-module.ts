import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PublicRoutingModule } from './public-routing-module';

import { FormationsRech } from './formations-rech/formations-rech';
import { FormationsList } from './formations-list/formations-list';
import { FormationDetails } from './formation-details/formation-details';
import { Inscription } from './inscription/inscription';

@NgModule({
  declarations: [
    FormationsRech,
    FormationsList,
    FormationDetails,
    Inscription,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PublicRoutingModule,
]
})
export class PublicModule {}
