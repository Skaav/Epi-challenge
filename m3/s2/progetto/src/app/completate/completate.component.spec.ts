import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletateComponent } from './completate.component';

describe('CompletateComponent', () => {
  let component: CompletateComponent;
  let fixture: ComponentFixture<CompletateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletateComponent]
    });
    fixture = TestBed.createComponent(CompletateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
