import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompteBancaireComponent } from './add-compte-bancaire.component';

describe('AddCompteBancaireComponent', () => {
  let component: AddCompteBancaireComponent;
  let fixture: ComponentFixture<AddCompteBancaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompteBancaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCompteBancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
