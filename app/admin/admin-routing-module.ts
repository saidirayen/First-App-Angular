import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminHome } from './admin-home/admin-home';
import { Candidats } from './candidats/candidats';
import { Formations } from './formations/formations';
import { Formateurs } from './formateurs/formateurs';
import { Sessions } from './sessions/sessions';
import { CandidatsForm } from './candidats/candidats-form/candidats-form';
import { FormateursForm } from './formateurs/formateurs-form/formateurs-form';
import { FormationsForm } from './formations/formations-form/formations-form';
import { SessionsForm } from './sessions/sessions-form/sessions-form';

const routes: Routes = [
  { path: '', component: AdminHome },

  { path: 'candidats', component: Candidats },
  { path: 'candidats/add', component: CandidatsForm },
  { path: 'candidats/edit/:id', component: CandidatsForm },

  { path: 'formateurs', component: Formateurs },
  { path: 'formateurs/add', component: FormateursForm },
  { path: 'formateurs/edit/:id', component: FormateursForm },
  
  { path: 'formations', component: Formations },
  { path: 'formations/add', component: FormationsForm },
  { path: 'formations/edit/:id', component: FormationsForm },

  { path: 'sessions', component: Sessions },
  { path: 'sessions/add', component: SessionsForm },
  { path: 'sessions/edit/:id', component: SessionsForm }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
