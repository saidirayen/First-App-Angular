import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { sessions } from '../../list-load/sessions-load';
import { DataService } from '../../services/data.service';
import { Isession } from '../../interface/isession';
import { Icandidat } from '../../interface/icandidat';

@Component({
  selector: 'app-inscription',
  standalone: false,
  templateUrl: './inscription.html'
})

export class Inscription implements OnInit {
  session?:Isession;
  candidat:Icandidat = {
    id:0,
    nom:"",
    prenom:"",
    email:"",
    cin:"",
    photo:"",
    password:"",
  };

  constructor(private route:ActivatedRoute,private router:Router,private dataSvc:DataService) {}

  ngOnInit(){
    const id=Number(this.route.snapshot.paramMap.get('id'));
    // this.session=sessions.find(s=>s.id===id);
    this.session = this.dataSvc.getSessionById(id);
  }

  onSubmit(){
    // this.session?.candidats.push({ ...this.candidat });
    // this.dataSvc.addCandidat(this.candidat);
    const newCandidat: Icandidat = {...this.candidat,id:this.dataSvc.getlastCandidatId()+1};
    this.dataSvc.addCandidat(newCandidat);
    this.session?.candidats.push(newCandidat);
    this.dataSvc.updateSession(this.session!);
    alert('Inscription réussie');
    this.router.navigate(['/public/formation-details',this.session?.formation.id]);
  }
}
