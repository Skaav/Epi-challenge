import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-template-reactive',
  templateUrl: './template-reactive.component.html',
  styleUrls: ['./template-reactive.component.scss']
})
export class TemplateReactiveComponent {
  reactiveForm: FormGroup;
  //additionalFields: FormArray = new FormArray([]);
  powers = ['Flight', 'Super Strength', 'Invisibility', 'Telekinesis'];

  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = this.formBuilder.group({
      name: ['', Validators.required],
      // Aggiungi gli altri campi del form reattivo
      additionalFields: this.formBuilder.array([])
    });
  }

  submitReactiveForm() {
    if (this.reactiveForm.invalid) {
      this.reactiveForm.markAllAsTouched();
      return;
    }
    this.reactiveForm.reset();
    //this.additionalFields.clear();
  }

  addAdditionalField() {
    //this.additionalFields = this.reactiveForm.get('additionalFields') as FormArray;
    // this.additionalFields.push(this.formBuilder.control(''));
  }

  // get additionalFieldsControls() {
  //   return this.reactiveForm.get('additionalFields')['controls'];
  // }
}