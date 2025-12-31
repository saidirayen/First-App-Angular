import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormationsRech } from './formations-rech/formations-rech';
import { FormationsList } from './formations-list/formations-list';
import { FormationDetails } from './formation-details/formation-details';
import { Inscription } from './inscription/inscription';

const routes: Routes = [
  {path:'formations-rech', component: FormationsRech },
  {path:'formations-list/:category', component: FormationsList},
  {path:'formation-details/:id', component: FormationDetails},
  {path:'inscription/:id', component: Inscription}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PublicRoutingModule {}
