import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {
  todos = [
    {id : 1, task : "Présenter les composants Angular", state:"done"},
    {id : 2, task : "Présenter les types de binding", state:"pending"},
    {id : 3, task : "Blocks itératifs et conditionnels", state:"pending"},
  ]
  
  task="";
  
  Ajouter = (li:string) => {
     this.todos.push({id : this.todos.length+1,task:li,state:"pending"});
  }

  Supprimer = (id:number) =>{
    this.todos = this.todos.filter(todo => todo.id != id);
  }
}
