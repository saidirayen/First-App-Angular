import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Iformation } from '../../interface/iformation';

@Component({
  selector: 'app-formations',
  imports: [RouterModule],
  templateUrl: './formations.html'
})
export class Formations implements OnInit {

  formations:Iformation[]=[];

  constructor(private dataSvc: DataService){}

  ngOnInit(){
    this.formations = this.dataSvc.getFormations();
    this.dataSvc.formationsChanged.subscribe(data => this.formations = data);
  }

  delete(id: number){
    if(confirm('Supprimer cette formation?')){
      this.dataSvc.deleteFormation(id);
    }
  }
}
