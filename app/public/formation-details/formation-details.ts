import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Iformation } from '../../interface/iformation';
import { Isession } from '../../interface/isession';

@Component({
  selector: 'app-formation-details',
  standalone: false,
  templateUrl: './formation-details.html',
  styleUrl: './formation-details.css'
})
export class FormationDetails implements OnInit {
  formation?: Iformation;
  sessions: Isession[] = [];

  getNiveauClass(niveau: string): string {
    switch(niveau.toLowerCase()) {
      case 'débutant':
        return 'badge bg-success';
      case 'intermédiaire':
        return 'badge bg-warning';
      case 'avancé':
        return 'badge bg-danger';
      default:
        return 'badge bg-secondary';
    }
  }

  getButtonClass(complet: boolean): string{
    return complet ? 'btn btn-danger disabled px-4' : 'btn btn-success px-4';
  }

  constructor(private route: ActivatedRoute,private dataSvc: DataService,private router: Router) {}

  ngOnInit(){
    const id=this.route.snapshot.paramMap.get('id');
    if(id!=null){
      this.formation=this.dataSvc.getFormationById(+id);
      if(this.formation!=undefined){
        this.sessions=this.dataSvc.getSessionsByFormationId(this.formation.id);
        this.sessions.forEach(s =>{
          s.complet=s.candidats.length>=15;
        });
      }
    } 
    else{
      this.router.navigate(['/']);
    }
  }
}
