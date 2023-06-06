import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent {

  templateFormData: {
    name: '',
    alterEgo: '',
    power: '',
    enemy: '',
    planet: '',
    weakness: '',
  };

  constructor() {
    this.templateFormData = {
      name: '',
      alterEgo: '',
      power: '',
      enemy: '',
      planet: '',
      weakness: '',
    }
  };

  submitTemplateForm(forms: NgForm) {
    console.log(forms);
    forms.resetForm();
  }

};
