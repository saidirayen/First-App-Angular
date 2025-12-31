import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Isession } from '../../../interface/isession';
import { Iformation } from '../../../interface/iformation';
import { Iformateur } from '../../../interface/iformateur';
import { Icandidat } from '../../../interface/icandidat';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sessions-form',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './sessions-form.html'
})

export class SessionsForm implements OnInit {
  session: Isession = {
    id:0,
    formation:{} as Iformation,
    formateurs:[],
    candidats:[],
    dateDebut:"",
    dateFin:"",
    description:"",
    complet:false
  };

  formations:Iformation[]=[];
  formateurs:Iformateur[]=[];
  candidats:Icandidat[]=[];

  isEdit=false;

  constructor(private route: ActivatedRoute,private dataSvc: DataService,private router: Router){}

  ngOnInit(){
    this.formations=this.dataSvc.getFormations();
    this.formateurs=this.dataSvc.getFormateurs();
    this.candidats=this.dataSvc.getCandidats();
    const id=this.route.snapshot.paramMap.get('id');
    if(id!==null){
      const session=this.dataSvc.getSessionById(+id);
      if(session!==undefined){
        this.session={...session};
        this.isEdit=true;
      }
    }
  }

  sauvegarder(){
    this.session.complet=this.session.candidats.length>=15;
    if (this.isEdit){
      this.dataSvc.updateSession(this.session);
    } 
    else{
      this.session.id=this.dataSvc.getlastSessionId()+1;
      this.dataSvc.addSession(this.session);
    }
    this.router.navigate(['/admin/sessions']);
  }
}
