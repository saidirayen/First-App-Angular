import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Iformation } from '../../interface/iformation';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formations-rech',
  standalone: false,
  templateUrl: './formations-rech.html',
  styleUrl: './formations-rech.css',
})

export class FormationsRech {
  formations:Iformation[]=[];
  tag="";

  constructor(private dataService: DataService){
    this.formations=this.dataService.getFormations();
  }

  chercher(){
    this.formations=this.dataService.getFormations().filter(
      f=>f.tags.some(t => t.includes(this.tag.toLowerCase()))
    );
  }
}
