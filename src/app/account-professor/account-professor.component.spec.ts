import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountProfessorComponent } from './account-professor.component';

describe('AccountProfessorComponent', () => {
  let component: AccountProfessorComponent;
  let fixture: ComponentFixture<AccountProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountProfessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
