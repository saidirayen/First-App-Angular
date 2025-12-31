import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  protected readonly title = signal('Projet');

  constructor(public router:Router){}

  isAdminRoute(): boolean{
    return this.router.url.startsWith('/admin');
  }
}
