import { Component, OnInit } from '@angular/core';

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
  todos =[
    new Todo(1, 'Mow the Lawn', false, new Date()),
    new Todo(2, 'Walk the Dog', false, new Date()),
    new Todo(3, 'Cook Dinner', false, new Date()),
    new Todo(4, 'Wash the Car', false, new Date()),
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
