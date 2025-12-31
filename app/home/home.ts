import { Component, OnInit } from '@angular/core';
import { formations } from '../list-load/formations-load';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home implements OnInit {
  categories:string[] = [];
  nbFormations=0;
  nbSessions=0;
  nbCandidats=0;

  constructor(private dataSvc: DataService) {}

  ngOnInit(): void{
    this.categories=this.dataSvc.getCategories();
    this.nbFormations=this.dataSvc.getNbFormations();
    this.nbSessions=this.dataSvc.getNbSessions();
    this.nbCandidats=this.dataSvc.getNbCandidats();
  }

  getImage(c:string):string{
    return 'assets/categories/'+c+'.jpg';
  }

}
