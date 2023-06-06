import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReactiveComponent } from './template-reactive.component';

describe('TemplateReactiveComponent', () => {
  let component: TemplateReactiveComponent;
  let fixture: ComponentFixture<TemplateReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateReactiveComponent]
    });
    fixture = TestBed.createComponent(TemplateReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
