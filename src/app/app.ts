import { Component, signal } from '@angular/core';
import { Home } from './home/home';
import { Todo } from './todo/todo';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Home, Todo],
  templateUrl: './app.html',
  //template ; '<h1>Premier Composant</h1>',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular');
}
