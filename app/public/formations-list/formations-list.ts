import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { formations } from '../../list-load/formations-load';
import { Iformation } from '../../interface/iformation';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-formations-list',
  standalone: false,
  templateUrl: './formations-list.html',
  styleUrl: './formations-list.css'
})

export class FormationsList implements OnInit {
  categorie="";
  formations: Iformation[] = [];

  constructor(private route:ActivatedRoute,private dataSvc: DataService) {}

  ngOnInit(){
    // const cat = this.route.snapshot.paramMap.get('category');
    // if(cat!=null){
    //   this.categorie=cat;
    //   this.formations=formations.filter(f =>f.categories.includes(this.categorie)
    //   );
    // }

    const cat = this.route.snapshot.paramMap.get('category');
    if(cat!=null){
      this.categorie=cat;
      const formationsChanged = this.dataSvc.getFormations();
      this.formations = formationsChanged.filter(f => f.categories.includes(this.categorie));
    }
  }
  }