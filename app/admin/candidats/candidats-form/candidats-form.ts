import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Icandidat } from '../../../interface/icandidat';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidats-form',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './candidats-form.html',
})

export class CandidatsForm implements OnInit {
  candidat: Icandidat = {
    id:0,
    nom:"",
    prenom:"",
    email:"",
    cin:"",
    photo:"",
    password:""
  };

  isEdit=false;

  constructor(private route: ActivatedRoute,private dataSvc: DataService,private router: Router) {}

  ngOnInit(){
    const id=this.route.snapshot.paramMap.get('id');
    if(id!=undefined){
      const candidat=this.dataSvc.getCandidatById(+id);
      if(candidat!=undefined){
        this.candidat={...candidat};
        this.isEdit=true;
      }
    }
  }

  sauvegarder(){
    if(this.isEdit){
      this.dataSvc.updateCandidat(this.candidat);
    } 
    else{
      this.candidat.id=this.dataSvc.getlastCandidatId()+1;
      this.dataSvc.addCandidat(this.candidat);
    }
    this.router.navigate(['/admin/candidats']);
  }
}
