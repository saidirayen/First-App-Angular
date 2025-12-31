import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Iformateur } from '../../../interface/iformateur';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formateurs-form',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './formateurs-form.html'
})

export class FormateursForm implements OnInit {
  formateur: Iformateur = {
    id:0,
    nom:"",
    prenom:"",
    email:"",
    telephone:"",
    cin:"",
    photo:"",
    cv:"",
    specialites:[]
  };

  isEdit = false;

  constructor(private route: ActivatedRoute,private dataSvc: DataService,private router: Router) {}

  ngOnInit(){
    const id=this.route.snapshot.paramMap.get('id');
    if(id!==null){
      const f=this.dataSvc.getFormateurById(+id);
      if(f!==undefined) {
        this.formateur={...f};
        this.isEdit=true;
      }
    }
  }

  sauvegarder(){
    if(this.isEdit){
      this.dataSvc.updateFormateur(this.formateur);
    } 
    else{
      this.formateur.id=this.dataSvc.getlastFormateurId()+1;
      this.dataSvc.addFormateur(this.formateur);
    }
    this.router.navigate(['/admin/formateurs']);
  }
}
