import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProfessorComponent } from './consultar-professor.component';

describe('ConsultarProfessorComponent', () => {
  let component: ConsultarProfessorComponent;
  let fixture: ComponentFixture<ConsultarProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarProfessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
