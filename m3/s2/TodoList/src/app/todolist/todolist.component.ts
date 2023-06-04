import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Interfaccia } from '../interfaccia';
import { Service } from '../serviceclass';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  buttonText = '';
  toDoArr: Interfaccia[] = [];
  element: Service = new Service('', false)
  constructor(private router: Router, private SVC: ServiceService) { }

  ngOnInit() {
    this.getToDo();
  }

  delete(id?: number) {
    this.SVC.deleteToDo(id).then((res) => {
      this.getToDo();
    });
  }

  create() {
    if (this.buttonText != '') {
      this.SVC.addToList(this.element).then((res) => {
        this.getToDo();
      });
    }
  }

  complete(element: Interfaccia) {
    if (element.completed == false) {
      element.completed = true
      this.SVC.updateToDo(element).then((res) => {
        this.getToDo();
      });
    };
  }

  getToDo() {
    this.SVC.getToDo().then((res) => {
      this.toDoArr = res;
    });
  }

  showEdit(id?: number) {
    this.router.navigateByUrl(`edit/${id}`)
  }

}
