import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Icandidat } from '../../interface/icandidat';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-candidats',
  styleUrl: './candidats.css',
  imports: [RouterModule],
  templateUrl: './candidats.html',
})
export class Candidats implements OnInit {

  candidats: Icandidat[] = [];

  constructor(private dataSvc: DataService) {}

  ngOnInit(){
    this.candidats = this.dataSvc.getCandidats();
    this.dataSvc.candidatsChanged.subscribe((data) => {this.candidats = data;});
  }

  delete(id: number){
    if(confirm('Supprimer ce candidat?')) {
      this.dataSvc.deleteCandidat(id);
    }
  }
}
