import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Iformation } from '../../../interface/iformation';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formations-form',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './formations-form.html',
})

export class FormationsForm implements OnInit {
  formation: Iformation = {
    id:0,
    titre:"",
    description:"",
    chargeHoraire: 0,
    programmePdf:"",
    niveau:'Débutant',
    tags:[],
    categories:[]
  };

  categories:string[]=[];
  niveaux:string[]=[];
  tagsText="";

  isEdit=false;

  constructor(private route: ActivatedRoute,private dataSvc: DataService,private router: Router) {}

  ngOnInit(){
    this.categories=this.dataSvc.getCategories();
    this.niveaux=this.dataSvc.getNiveaux();
    const id=this.route.snapshot.paramMap.get('id');
    if(id!==null){
      const f=this.dataSvc.getFormationById(+id);
      if(f!==undefined){
        this.formation={...f};
        this.tagsText=f.tags.join(",");
        this.isEdit=true;
      }
    }
  }

  sauvegarder(){
    this.formation.tags=this.tagsText.split(",").map(t =>t.trim()).filter(t=>t!=="");
    if(this.isEdit){
      this.dataSvc.updateFormation(this.formation);
    } 
    else{
      this.formation.id=this.dataSvc.getlastFormationId()+1;
      this.dataSvc.addFormation(this.formation);
    }
    this.router.navigate(['/admin/formations']);
  }
}
