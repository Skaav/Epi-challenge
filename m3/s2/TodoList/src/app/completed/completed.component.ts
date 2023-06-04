import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Interfaccia } from '../interfaccia';
import { Service } from '../serviceclass';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  toDoArr: Interfaccia[] = [];
  element: Service = new Service('', false)

  constructor(private router: ActivatedRoute, private SVC: ServiceService) { }

  ngOnInit() {
    this.getToDo();
  }

  delete(id?: number) {
    this.SVC.deleteToDo(id).then((res) => {
      this.getToDo();
    });
  }

  getToDo() {
    this.SVC.getToDo().then((res) => {
      this.toDoArr = res;
    });
  }


}
