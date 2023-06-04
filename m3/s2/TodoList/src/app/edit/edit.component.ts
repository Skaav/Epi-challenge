import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ServiceService } from '../service.service';
import { Service } from '../serviceclass';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  element: Service = new Service('', false);

  constructor(private service: ServiceService, private location: Location, private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.params
      .subscribe((params: any) => {
        this.service.getSingleToDo(params.id)
          .then(res => {
            this.element = res
          });
      })
  }

  update() {
    this.service.updateToDo(this.element)
      .then(res => this.goBack())
  }

  goBack() {
    this.location.back()
  }

}
