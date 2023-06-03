import { Component, OnInit } from '@angular/core';
import { MyTodo } from '../interfaccia';
import { Serviceclass } from '../serviceclass';
import { ToDoService } from '../list.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class ListComponent implements OnInit {
  arrList: MyTodo[] = [];
  innerText: string = "";
  toDoElement: Serviceclass = new Serviceclass('', false);

  constructor(private toDoSVC: ToDoService) { }

  ngOnInit() {
    this.getToDo();
  }

  deleteToDo(id?: number) {
    this.toDoSVC.deleteToDo(id)
      .then((res) => {
        this.getToDo();
      });
  }

  create() {
    if (this.innerText !== '') {
      this.toDoSVC.addToList(this.toDoElement)
        .then(res => this.getToDo());
      this.innerText = '';
    }
  }

  complete(element: MyTodo) {
    if (element.completed == false) {
      element.completed = true;
      this.toDoSVC.updateToDo(element).then((res) => this.getToDo())
    };
    console.log(this.toDoElement);
  }

  getToDo() {
    this.toDoSVC.getToDo().then((res) => {
      this.arrList = res;
    });
  }

}
