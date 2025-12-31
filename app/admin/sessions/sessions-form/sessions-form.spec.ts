import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsForm } from './sessions-form';

describe('SessionsForm', () => {
  let component: SessionsForm;
  let fixture: ComponentFixture<SessionsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionsForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
