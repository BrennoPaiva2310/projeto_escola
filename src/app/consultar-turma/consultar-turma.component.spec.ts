import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarTurmaComponent } from './consultar-turma.component';

describe('ConsultarProfessorComponent', () => {
  let component: ConsultarTurmaComponent;
  let fixture: ComponentFixture<ConsultarTurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarTurmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
