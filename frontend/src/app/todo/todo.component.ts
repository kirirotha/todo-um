import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id,'',false, new Date);

    if(this.id != -1){
      this.todoService.retrieveTodo('Levi', this.id).subscribe(
        data =>{
          this.todo = data;
        }
      )
    } 
  }

  saveTodo(){
    console.log("todo updated");
    if(this.id === -1){
      this.todoService.createTodo('Levi', this.todo).subscribe(
          data =>{
            console.log(data);
            this.router.navigate(['todos']);
          }
        )
    }else{
        this.todoService.updateTodo('Levi', this.id, this.todo).subscribe(
          data =>{
            console.log(data);
            this.router.navigate(['todos']);
          }
        )
    }
  }
}