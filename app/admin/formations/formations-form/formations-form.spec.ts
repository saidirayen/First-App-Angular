import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationsForm } from './formations-form';

describe('FormationsForm', () => {
  let component: FormationsForm;
  let fixture: ComponentFixture<FormationsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationsForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
