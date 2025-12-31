import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Isession } from '../../interface/isession';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sessions',
  imports: [RouterModule,CommonModule],
  templateUrl: './sessions.html'
})

export class Sessions implements OnInit {
  sessions: Isession[] = [];

  constructor(private dataSvc: DataService){}

  ngOnInit(){
    this.sessions=this.dataSvc.getSessions();
    this.dataSvc.sessionsChanged.subscribe(data => this.sessions = data);
  }

  delete(id: number){
    if(confirm('Supprimer cette session ?')){
      this.dataSvc.deleteSession(id);
    }
  }
}
