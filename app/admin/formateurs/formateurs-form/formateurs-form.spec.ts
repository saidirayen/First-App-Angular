import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateursForm } from './formateurs-form';

describe('FormateursForm', () => {
  let component: FormateursForm;
  let fixture: ComponentFixture<FormateursForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormateursForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormateursForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
