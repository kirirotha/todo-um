import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  // todo ={
  //   id:1,
  //   description:'lalalala'
  // }
  // todos =[
  //   new Todo(1, 'Mow the Lawn', false, new Date()),
  //   new Todo(2, 'Walk the Dog', false, new Date()),
  //   new Todo(3, 'Cook Dinner', false, new Date()),
  //   new Todo(4, 'Wash the Car', false, new Date()),
    
  // ];

  todos: Todo[];

  message: string;

  constructor(
    private todoService: TodoDataService
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  deleteTodo(id){
    console.log(`delete id ${id}`);
    this.todoService.deleteTodo('Levi', id).subscribe(
      response =>{
        console.log(response);
        this.message = `Delete of Todo id:${id} successful!`
        this.refreshTodos();
      }
    )
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('Levi').subscribe(
      response =>{
        this.todos = response;
        console.log(response);
      }
    )
  }
}
