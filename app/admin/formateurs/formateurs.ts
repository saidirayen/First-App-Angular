import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DataService } from '../../services/data.service';
import { Iformateur } from '../../interface/iformateur';

@Component({
  selector: 'app-formateurs',
  imports: [RouterModule],
  templateUrl: './formateurs.html'
})
export class Formateurs implements OnInit {

  formateurs: Iformateur[] = [];

  constructor(private dataSvc: DataService) {}

  ngOnInit(){
    this.formateurs = this.dataSvc.getFormateurs();
    this.dataSvc.formateursChanged.subscribe((data) => {this.formateurs = data;});
  }

  delete(id: number): void {
    if(confirm('Supprimer ce formateur?')) {
      this.dataSvc.deleteFormateur(id);
    }
  }
}
