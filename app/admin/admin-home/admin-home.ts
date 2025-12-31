import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-admin-home',
  standalone: false,
  templateUrl: './admin-home.html',
  styleUrl: './admin-home.css',
})

export class AdminHome implements OnInit {
  nbFormations=0;
  nbSessions=0;
  nbCandidats=0;
  nbFormateurs=0;

  constructor(private dataSvc: DataService) {}

  ngOnInit(){
    this.nbFormations=this.dataSvc.getNbFormations();
    this.nbSessions=this.dataSvc.getNbSessions();
    this.nbCandidats=this.dataSvc.getNbCandidats();
    this.nbFormateurs=this.dataSvc.getNbFormateurs();
  }
}